import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';
import type { MetaApiResponse, MetaCampaignRaw, PodItem } from '@/lib/types';

function generateFakeMetaPods(): PodItem[] {
  faker.seed(101);
  return Array.from({ length: 4 }).map(() => {
    const current = faker.number.float({ min: 10, max: 70, fractionDigits: 1 });
    const limit = faker.number.int({ min: Math.ceil(current) + 10, max: 100 });
    const utilization = Math.min(Math.round((current / limit) * 100), 100);

    return {
      id: faker.string.uuid(),
      name: `${faker.company.name()} · ${faker.helpers.arrayElement(['Core', 'Retarget', 'Prospecting'])}`,
      accountCode: `META-AC-${faker.string.numeric(5)}`,
      platform: 'Meta',
      spendCurrent: `$${current}k`,
      spendLimit: `$${limit}k`,
      utilization,
      status: faker.helpers.arrayElement(['ACTIVE', 'SCALING', 'STANDBY']),
    };
  });
}

export async function GET() {
  const token = process.env.META_ACCESS_TOKEN;
  const accountId = process.env.META_AD_ACCOUNT_ID;

  // Ila l-keys ma kayninsh awla fihom mock value, rje3 faker data
  if (!token || !accountId || token.includes('xxxxxx')) {
    return NextResponse.json(generateFakeMetaPods());
  }

  try {
    const url = `https://graph.facebook.com/v19.0/${accountId}/campaigns?fields=id,name,status,insights{spend}&limit=10&access_token=${token}`;
    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) {
      return NextResponse.json(generateFakeMetaPods());
    }

    const json = (await res.json()) as MetaApiResponse;
    const campaigns: MetaCampaignRaw[] = json.data || [];

    const pods: PodItem[] = campaigns.map((camp: MetaCampaignRaw) => {
      const spendVal = parseFloat(camp.insights?.data?.[0]?.spend || '0');
      const limitVal = spendVal > 0 ? spendVal * 1.3 : 1000;
      const utilization = Math.min(Math.round((spendVal / limitVal) * 100), 100);

      return {
        id: `meta-${camp.id}`,
        name: camp.name,
        accountCode: `META-${camp.id.slice(-5)}`,
        platform: 'Meta',
        spendCurrent: `$${(spendVal / 1000).toFixed(1)}k`,
        spendLimit: `$${(limitVal / 1000).toFixed(0)}k`,
        utilization,
        status: camp.status === 'ACTIVE' ? (utilization > 70 ? 'SCALING' : 'ACTIVE') : 'STANDBY',
      };
    });

    return NextResponse.json(pods);
  } catch {
    return NextResponse.json(generateFakeMetaPods());
  }
}