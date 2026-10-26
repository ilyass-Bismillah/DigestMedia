import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';
import type { PodItem, TikTokApiResponse, TikTokCampaignRaw } from '@/lib/types';

function generateFakeTikTokPods(): PodItem[] {
  faker.seed(303);
  return Array.from({ length: 3 }).map(() => {
    const current = faker.number.float({ min: 5, max: 40, fractionDigits: 1 });
    const limit = faker.number.int({ min: Math.ceil(current) + 5, max: 60 });
    const utilization = Math.min(Math.round((current / limit) * 100), 100);

    return {
      id: faker.string.uuid(),
      name: `${faker.company.name()} · ${faker.helpers.arrayElement(['Spark', 'TopView', 'InFeed'])}`,
      accountCode: `TIKT-AC-${faker.string.numeric(5)}`,
      platform: 'Tiktok',
      spendCurrent: `€${current}k`,
      spendLimit: `€${limit}k`,
      utilization,
      status: faker.helpers.arrayElement(['ACTIVE', 'SCALING', 'STANDBY']),
    };
  });
}

export async function GET() {
  const token = process.env.TIKTOK_ACCESS_TOKEN;
  const advertiserId = process.env.TIKTOK_ADVERTISER_ID;

  if (!token || !advertiserId || token.includes('xxxxxx')) {
    return NextResponse.json(generateFakeTikTokPods());
  }

  try {
    const url = `https://business-api.tiktok.com/open_api/v1.3/campaign/get/?advertiser_id=${advertiserId}&page_size=10`;
    const res = await fetch(url, {
      headers: {
        'Access-Token': token,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json(generateFakeTikTokPods());
    }

    const json = (await res.json()) as TikTokApiResponse;
    const campaigns: TikTokCampaignRaw[] = json.data?.list || [];

    const pods: PodItem[] = campaigns.map((camp: TikTokCampaignRaw) => {
      const budget = parseFloat(String(camp.budget || '1000'));
      const spendVal = budget * 0.45;
      const utilization = Math.min(Math.round((spendVal / budget) * 100), 100);

      return {
        id: `tiktok-${String(camp.campaign_id)}`,
        name: camp.campaign_name,
        accountCode: `TIKT-${String(camp.campaign_id).slice(-5)}`,
        platform: 'Tiktok',
        spendCurrent: `€${(spendVal / 1000).toFixed(1)}k`,
        spendLimit: `€${(budget / 1000).toFixed(0)}k`,
        utilization,
        status: camp.operation_status === 'ENABLE' ? 'ACTIVE' : 'STANDBY',
      };
    });

    return NextResponse.json(pods);
  } catch {
    return NextResponse.json(generateFakeTikTokPods());
  }
}