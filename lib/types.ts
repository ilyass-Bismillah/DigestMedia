export type PlatformType = 'Meta' | 'Google Ads' | 'Tiktok' | 'Snapchat';

export type PodStatus = 'ACTIVE' | 'SCALING' | 'STANDBY';

export interface PodItem {
  id: string;
  name: string;
  accountCode: string;
  platform: PlatformType;
  spendCurrent: string;
  spendLimit: string;
  utilization: number;
  status: PodStatus;
}

export interface DashboardMetrics {
  dailySpend: string;
  dailySpendDelta: string;
  activePods: string;
  replacements30D: string;
  avgDuration: string;
}

// Meta Raw Types
export interface MetaInsightData {
  spend?: string;
}

export interface MetaCampaignRaw {
  id: string;
  name: string;
  status: string;
  insights?: {
    data?: MetaInsightData[];
  };
}

export interface MetaApiResponse {
  data?: MetaCampaignRaw[];
  error?: {
    message?: string;
  };
}

// Google Ads Raw Types
export interface GoogleAdsRowRaw {
  campaign: {
    id: string | number;
    name: string;
    status: string;
  };
  metrics?: {
    costMicros?: string | number;
  };
}

export interface GoogleAdsStreamResponse {
  results?: GoogleAdsRowRaw[];
  error?: {
    message?: string;
  };
}

// TikTok Raw Types
export interface TikTokCampaignRaw {
  campaign_id: string | number;
  campaign_name: string;
  budget?: string | number;
  operation_status: string;
}

export interface TikTokApiResponse {
  data?: {
    list?: TikTokCampaignRaw[];
  };
  message?: string;
}

// Snapchat Raw Types
export interface SnapchatCampaignRaw {
  id: string;
  name: string;
  status: string;
  daily_budget_micro?: number;
}

export interface SnapchatCampaignItemRaw {
  campaign: SnapchatCampaignRaw;
}

export interface SnapchatApiResponse {
  campaigns?: SnapchatCampaignItemRaw[];
  debug_message?: string;
}