export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image?: string; 
}

export const posts: Post[] = [
  // ==========================================
  // PAGE 1 (Posts 1 -> 9)
  // ==========================================
  {
    slug: "marketing-mix-modeling-guide",
    title: "Marketing Mix Modeling: Master Multi-Channel Revenue Growth",
    excerpt: "Learn how top performance agencies leverage MMM to bypass tracking limits and scale ad spend efficiently.",
    content: "<h2>Multi-Touch Attribution Challenges</h2><p>Modern performance marketing faces critical data degradation...</p>",
    category: "Strategy",
    date: "August 20, 2026",
    image: "/blog/marketing.jpg",
  },
  {
    slug: "types-of-retargeting-guide",
    title: "Types of Retargeting: The Performance Marketer's Playbook",
    excerpt: "Explore dynamic, sequential, and cross-platform retargeting structures to squeeze high ROAS from cold traffic funnels.",
    content: "<h2>Beyond Standard Pixel Retargeting</h2><p>High-volume media buying requires nuanced segmentation...</p>",
    category: "Paid Ads",
    date: "August 18, 2026",
    image: "/blog/retargeting-types.jpg",
  },
  {
    slug: "targeted-advertising-framework",
    title: "Targeted Advertising: How to Maximize Budget Efficiency",
    excerpt: "Build bulletproof audience segments across Meta and Google using first-party data and high-intent behavioral cues.",
    content: "<h2>The Shift to Broad & First-Party Data</h2><p>In 2026, algorithmic delivery systems thrive on creative-led targeting...</p>",
    category: "Optimization",
    date: "August 15, 2026",
    image: "/blog/targeting-framework.jpg",
  },
  {
    slug: "retargeting-vs-remarketing",
    title: "Retargeting vs Remarketing: Key Operational Differences",
    excerpt: "Structure your pixel events and email flows into a synchronized conversion machine without ad fatigue.",
    content: "<h2>Clarifying the Terminology</h2><p>Understanding the boundary between paid retargeting and owned remarketing...</p>",
    category: "Strategy",
    date: "August 12, 2026",
    image: "/blog/remarketing-vs-retargeting.jpg",
  },
  {
    slug: "google-ads-cost-benchmarks",
    title: "Google Ads Costs: Real CPM & CPC Benchmarks for 2026",
    excerpt: "Industry breakdowns of Search, Shopping, and YouTube auction dynamics to prevent budget leakage.",
    content: "<h2>Auction Trends & Cost Inflation</h2><p>Rising platform competition has elevated standard CPC benchmarks...</p>",
    category: "Google Ads",
    date: "August 09, 2026",
    image: "/blog/google-benchmarks.jpg",
  },
  {
    slug: "facebook-ad-formats-guide",
    title: "Complete Meta Ad Formats Blueprint for High-Growth DTC",
    excerpt: "Analyze every single Meta creative placement and format to select the exact creative type that drives stable conversions.",
    content: "<h2>Matching Ad Formats to Intent States</h2><p>Scaling past $50k/day requires diversifying ad creative formats...</p>",
    category: "Meta Ads",
    date: "August 05, 2026",
    image: "/blog/meta-formats.jpg",
  },
  {
    slug: "b2b-account-based-marketing-trends",
    title: "B2B Performance Trends: Benchmarks, ROAS & Pipeline Velocity",
    excerpt: "How enterprise brands utilize Bing and LinkedIn data layers to dominate high-ticket customer acquisition.",
    content: "<h2>The Convergence of Performance & ABM</h2><p>Modern B2B marketers combine paid search with firmographic data...</p>",
    category: "B2B Scale",
    date: "July 28, 2026",
    image: "/blog/b2b-abm.jpg"
  },
  {
    slug: "social-media-ad-pricing-guide",
    title: "The True Cost of Social Advertising: Comprehensive Analysis",
    excerpt: "Detailed review of CPM, CPC, and blended CPA trends across TikTok, Meta, and Native discovery networks.",
    content: "<h2>Cross-Network Cost Analysis</h2><p>Media buyers must continuously arbitrage attention across platforms...</p>",
    category: "Paid Social",
    date: "July 22, 2026",
    image: "/blog/social-pricing.jpg",
  },
  {
    slug: "bing-ads-scaling-playbook",
    title: "Microsoft & Bing Ads in 2026: The Untapped Goldmine",
    excerpt: "Capitalize on lower CPCs, Copilot AI ad units, and higher buying power across the Microsoft Advertising network.",
    content: "<h2>Why Smart Media Buyers Expand to Bing</h2><p>Microsoft Advertising network delivers an affluent desktop audience...</p>",
    category: "Search",
    date: "July 16, 2026",
    image: "/blog/bing-playbook.jpg",
  },

  // ==========================================
  // PAGE 2 (Posts 10 -> 18)
  // ==========================================
  {
    slug: "native-advertising-arbitrage",
    title: "Taboola & Outbrain Scaling: Building 7-Figure Editorial Funnels",
    excerpt: "The exact compliance and copy structure needed to scale native discovery advertorials without ad fatigue.",
    content: "<h2>The Power of Native Content Funnels</h2><p>Native discovery advertising captures engaged readers on top editorial feeds...</p>",
    category: "Native",
    date: "July 10, 2026",
    image: "/blog/native-arbitrage.jpg",
  },
  {
    slug: "bypassing-meta-ad-account-bans",
    title: "How to Avoid Meta Ad Account Bans: Agency Whitelisting Guide",
    excerpt: "Why personal Business Managers get disabled and how enterprise agency lines ensure zero downtime.",
    content: "<h2>Understanding Algorithmic Flagging</h2><p>Automated risk models flag sudden spending spikes and credit card issues...</p>",
    category: "Meta Ads",
    date: "July 04, 2026",
    image: "/blog/meta-bans.jpg",
  },
  {
    slug: "tiktok-spark-ads-scaling-strategy",
    title: "TikTok Spark Ads: Unlocking Higher CTRs with Creator Auth",
    excerpt: "Step-by-step guide to leveraging organic TikTok video authorization codes for performance ad scaling.",
    content: "<h2>Why Spark Ads Beat Standard In-Feed Ads</h2><p>Spark ads leverage existing organic social proof and creator engagement...</p>",
    category: "TikTok Ads",
    date: "June 29, 2026",
    image: "/blog/tiktok-spark.jpg",
  },
  {
    slug: "performance-max-asset-optimization",
    title: "Performance Max in 2026: Structure, Signals & Negative Keywords",
    excerpt: "How to structure PMax campaigns to prevent budget cannibalization on brand terms and maximize new customer acquisition.",
    content: "<h2>Controlling the Black Box</h2><p>PMax requires clean first-party audience signals and brand exclusions to thrive...</p>",
    category: "Google Ads",
    date: "June 24, 2026",
    image: "/blog/google-pmax.jpg",
  },
  {
    slug: "creative-fatigue-framework",
    title: "Combating Ad Creative Fatigue at $10k+/Day Ad Spend",
    excerpt: "Build a high-output creative testing matrix to identify winning visual hooks and maintain stable CPA.",
    content: "<h2>The Mechanics of Creative Decay</h2><p>When frequency rises, algorithms penalize CPMs. Constant hook iteration is vital...</p>",
    category: "Optimization",
    date: "June 18, 2026",
    image: "/blog/creative-fatigue.jpg",
  },
  {
    slug: "server-side-tracking-capi-setup",
    title: "Meta Conversions API (CAPI): Zero Data Loss Implementation",
    excerpt: "How server-side tagging restores event match quality and empowers Meta’s delivery algorithm with 100% data integrity.",
    content: "<h2>Client-Side Pixel Vulnerabilities</h2><p>Browser ad-blockers strip up to 30% of standard pixel conversion events...</p>",
    category: "Tracking",
    date: "June 12, 2026",
    image: "/blog/meta-capi.jpg"
  },
  {
    slug: "high-ticket-b2b-lead-generation",
    title: "Scaling High-Ticket B2B Lead Gen with Native Discovery",
    excerpt: "Using long-form advertorials to educate enterprise buyers before booking sales demos.",
    content: "<h2>The Educational Pre-Sell Mechanism</h2><p>Cold B2B leads convert significantly higher after reading structured industry reports...</p>",
    category: "Native",
    date: "June 07, 2026",
    image: "/blog/b2b-native.jpg",
  },
  {
    slug: "google-suspicious-payment-prevention",
    title: "Fixing Google Ads Suspicious Payment Activity Errors",
    excerpt: "The ultimate roadmap to resolving Google billing policy suspensions and setting up verified invoicing profiles.",
    content: "<h2>Why Google Suspends New Billing Profiles</h2><p>Mismatched cardholder names and aggressive bidding trigger immediate review...</p>",
    category: "Google Ads",
    date: "May 31, 2026",
    image: "/blog/google-suspicious.jpg",
  },
  {
    slug: "ugc-ad-scripts-high-conversions",
    title: "The 3-Part UGC Scripting Formula for Viral TikTok Media Buying",
    excerpt: "How to write direct-response video scripts that hook viewers in the first 2 seconds and drive impulse buys.",
    content: "<h2>Hook, Problem-Agitate, Solution</h2><p>Direct response video demands immediate pattern interruption...</p>",
    category: "TikTok Ads",
    date: "May 25, 2026",
    image: "/blog/tiktok-scripts.jpg",
  },
];

// Helper functions
export function getAllPosts(): Post[] {
  return posts;
}

export function getPostsByPage(page: number, perPage: number = 9): { posts: Post[]; totalPages: number } {
  const totalPages = Math.ceil(posts.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return {
    posts: posts.slice(start, end),
    totalPages,
  };
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}