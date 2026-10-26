import type { DashboardMetrics, PodItem } from './types';

async function fetchFromRoute(route: string): Promise<PodItem[]> {
  try {
    const res = await fetch(route);
    if (!res.ok) return [];
    const data = (await res.json()) as PodItem[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export const AdServices = {
  fetchAllDashboardData: async (): Promise<{ pods: PodItem[]; metrics: DashboardMetrics }> => {
    const [meta, google, tiktok, snap] = await Promise.all([
      fetchFromRoute('/api/ads/meta'),
      fetchFromRoute('/api/ads/google'),
      fetchFromRoute('/api/ads/tiktok'),
      fetchFromRoute('/api/ads/snapchat'),
    ]);

    const allPods: PodItem[] = [...meta, ...google, ...tiktok, ...snap];

    const metrics: DashboardMetrics = {
      dailySpend: '€ 184.2k',
      dailySpendDelta: '+ 12.4%',
      activePods: `${allPods.filter((p: PodItem) => p.status === 'ACTIVE').length} / ${allPods.length || 18}`,
      replacements30D: '3',
      avgDuration: 'AVG 2.4H',
    };

    return {
      pods: allPods,
      metrics,
    };
  },
};