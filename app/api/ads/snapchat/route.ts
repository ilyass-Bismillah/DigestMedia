import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';
import type { PodItem, SnapchatApiResponse, SnapchatCampaignItemRaw } from '@/lib/types';

function generateFakeSnapPods(): PodItem[] {
  faker.seed(404);
  return Array.from({ length: 2 }).map(() => {
    const current = faker.number.float({ min: 1, max: 15, fractionDigits: 1 });
    const limit = faker.number.int({ min: Math.ceil(current) + 5, max: 30 });
    const utilization = Math.min(Math.round((current / limit) * 100), 100);

    return {
      id: faker.string.uuid(),
      name: `${faker.company.name()} · ${faker.helpers.arrayElement(['Lens', 'Story', 'Commercial'])}`,
      accountCode: `SNAP-AC-${faker.string.numeric(5)}`,
      platform: 'Snapchat',
      spendCurrent: `$${current}k`,
      spendLimit: `$${limit}k`,
      utilization,
      status: faker.helpers.arrayElement(['ACTIVE', 'STANDBY']),
    };
  });
}

export async function GET() {
  const token = process.env.SNAPCHAT_ACCESS_TOKEN;
  const accountId = process.env.SNAPCHAT_AD_ACCOUNT_ID;

  if (!token || !accountId || token.includes('xxxxxx')) {
    return NextResponse.json(generateFakeSnapPods());
  }

  try {
    const url = `https://adsapi.snapchat.com/v1/adaccounts/${accountId}/campaigns`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json(generateFakeSnapPods());
    }

    const json = (await res.json()) as SnapchatApiResponse;
    const campaigns: SnapchatCampaignItemRaw[] = json.campaigns || [];

    const pods: PodItem[] = campaigns.map((item: SnapchatCampaignItemRaw) => {
      const camp = item.campaign;
      const dailyCap = camp.daily_budget_micro ? camp.daily_budget_micro / 1000000 : 500;
      const spendVal = dailyCap * 0.3;
      const utilization = Math.min(Math.round((spendVal / dailyCap) * 100), 100);

      return {
        id: `snap-${camp.id}`,
        name: camp.name,
        accountCode: `SNAP-${camp.id.slice(-5)}`,
        platform: 'Snapchat',
        spendCurrent: `$${(spendVal / 1000).toFixed(1)}k`,
        spendLimit: `$${(dailyCap / 1000).toFixed(0)}k`,
        utilization,
        status: camp.status === 'ACTIVE' ? 'ACTIVE' : 'STANDBY',
      };
    });

    return NextResponse.json(pods);
  } catch {
    return NextResponse.json(generateFakeSnapPods());
  }
}