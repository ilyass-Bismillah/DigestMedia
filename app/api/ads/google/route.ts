import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';
import type { GoogleAdsRowRaw, GoogleAdsStreamResponse, PodItem } from '@/lib/types';

function generateFakeGooglePods(): PodItem[] {
  faker.seed(202);
  return Array.from({ length: 3 }).map(() => {
    const current = faker.number.float({ min: 15, max: 65, fractionDigits: 1 });
    const limit = faker.number.int({ min: Math.ceil(current) + 10, max: 90 });
    const utilization = Math.min(Math.round((current / limit) * 100), 100);

    return {
      id: faker.string.uuid(),
      name: `${faker.company.name()} · ${faker.helpers.arrayElement(['Brand', 'PMax', 'Search'])}`,
      accountCode: `GADS-AC-${faker.string.numeric(5)}`,
      platform: 'Google Ads',
      spendCurrent: `$${current}k`,
      spendLimit: `$${limit}k`,
      utilization,
      status: faker.helpers.arrayElement(['ACTIVE', 'SCALING', 'STANDBY']),
    };
  });
}

interface GoogleTokenResponse {
  access_token: string;
}

async function getGoogleAccessToken(): Promise<string> {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_ADS_CLIENT_ID || '',
    client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET || '',
    refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN || '',
    grant_type: 'refresh_token',
  });

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const data = (await res.json()) as GoogleTokenResponse;
  return data.access_token;
}

export async function GET() {
  const customerId = process.env.GOOGLE_ADS_CUSTOMER_ID;
  const devToken = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;

  if (!customerId || !devToken || devToken.includes('xxxxxx')) {
    return NextResponse.json(generateFakeGooglePods());
  }

  try {
    const accessToken = await getGoogleAccessToken();
    const query = `
      SELECT campaign.id, campaign.name, campaign.status, metrics.cost_micros 
      FROM campaign 
      WHERE segments.date DURING LAST_30_DAYS 
      LIMIT 10
    `;

    const res = await fetch(
      `https://googleads.googleapis.com/v16/customers/${customerId}/googleAds:searchStream`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'developer-token': devToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      return NextResponse.json(generateFakeGooglePods());
    }

    const data = (await res.json()) as GoogleAdsStreamResponse[];
    const results: GoogleAdsRowRaw[] = data[0]?.results || [];

    const pods: PodItem[] = results.map((row: GoogleAdsRowRaw) => {
      const costMicros = parseFloat(String(row.metrics?.costMicros || '0'));
      const spendVal = costMicros / 1000000;
      const limitVal = spendVal > 0 ? spendVal * 1.25 : 2000;
      const utilization = Math.min(Math.round((spendVal / limitVal) * 100), 100);

      return {
        id: `google-${String(row.campaign.id)}`,
        name: row.campaign.name,
        accountCode: `GADS-${String(row.campaign.id).slice(-5)}`,
        platform: 'Google Ads',
        spendCurrent: `$${(spendVal / 1000).toFixed(1)}k`,
        spendLimit: `$${(limitVal / 1000).toFixed(0)}k`,
        utilization,
        status: row.campaign.status === 'ENABLED' ? (utilization > 75 ? 'SCALING' : 'ACTIVE') : 'STANDBY',
      };
    });

    return NextResponse.json(pods);
  } catch {
    return NextResponse.json(generateFakeGooglePods());
  }
}