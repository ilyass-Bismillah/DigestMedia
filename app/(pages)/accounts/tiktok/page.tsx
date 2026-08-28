import {
  ShieldCheck,
  Zap,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Clock,
  Layers,
  Sparkles,
  Send,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { AccordionBasic } from "../../../../components/Accordions";
import { Button } from "@/components/ui/button";
import { FaTiktok } from "react-icons/fa6";

const TikTokPage = () => {
  const badges = [
    "0% Ad Spend Fee",
    "No Restrictions",
    "Unlimited Ad Accounts",
  ];

  const features = [
    {
      title: "Worldwide Direct Targeting",
      desc: "Target Tier-1 GEOs (USA, UK, CA, EU, GCC) without local business registry or SIM requirements.",
      icon: TrendingUp,
    },
    {
      title: "Zero Spend Caps From Day One",
      desc: "Scale viral campaigns freely with unlimited daily budget limits and pre-approved balance pipelines.",
      icon: Zap,
    },
    {
      title: "Whitelisted Agency BC",
      desc: "Direct agency business center lines that bypass automated ad disapprovals and creative bans.",
      icon: ShieldCheck,
    },
    {
      title: "Instant 1-Hour Replacement",
      desc: "Immediate replacement accounts and balance migration provided within 1 hour for zero downtime.",
      icon: Clock,
    },
    {
      title: "Spark Ads & Creator Marketplace",
      desc: "Seamlessly authorize organic creator posts and scale Spark Ads with direct code integration.",
      icon: Sparkles,
    },
    {
      title: "Dedicated TikTok Rep Escalation",
      desc: "Direct line to Senior TikTok Strategic Managers via dedicated Telegram and Slack channels.",
      icon: Layers,
    },
  ];

  const comparisonRows = [
    {
      feature: "Targeting Availability",
      agency: "Worldwide (USA, UK, EU, MENA)",
      regular: "Restricted to IP/Local Region",
    },
    {
      feature: "Daily Spend Limit",
      agency: "Unlimited ($50k+/day)",
      regular: "Capped ($20 - $200/day)",
    },
    {
      feature: "Pixel & Data Security",
      agency: "Multi-BC Backup & Isolation",
      regular: "Single Point Failure",
    },
    {
      feature: "TikTok Support Level",
      agency: "Direct Strategic Partner Rep",
      regular: "Standard Automated Ticket Bot",
    },
    {
      feature: "Replacement Turnaround",
      agency: "Under 1 Hour SLA",
      regular: "Days to Weeks (Manual Appeals)",
    },
  ];

  const pricingTiers = [
    {
      name: "TikTok Starter",
      badge: "Fast Launch",
      price: "$299",
      period: "/ month",
      color: "border-purple-500/40 bg-purple-500/5",
      accent: "text-purple-400",
      btnColor: "bg-purple-500 hover:bg-purple-400 text-white",
      features: [
        "1 TikTok Agency Account",
        "Up to $15,000 / mo ad spend",
        "Worldwide Targeting Enabled",
        "Spark Ads Ready",
        "24h Replacement SLA",
      ],
    },
    {
      name: "Viral Scaler",
      badge: "Most Popular",
      price: "$699",
      period: "/ month",
      color: "border-fuchsia-500/50 bg-fuchsia-500/10 shadow-lg shadow-fuchsia-500/20",
      accent: "text-fuchsia-400",
      btnColor: "bg-fuchsia-500 hover:bg-fuchsia-400 text-white",
      features: [
        "3 TikTok Agency Accounts",
        "Up to $75,000 / mo ad spend",
        "Dedicated Telegram Rep",
        "1-Hour Replacement SLA",
        "0% Top-Up Surcharge",
        "1.5% Ad Spend Cashback",
      ],
    },
    {
      name: "Enterprise Whale",
      badge: "High Volume",
      price: "$1,499",
      period: "/ month",
      color: "border-pink-500/40 bg-pink-500/5",
      accent: "text-pink-400",
      btnColor: "bg-pink-600 hover:bg-pink-500 text-white",
      features: [
        "Unlimited Agency Accounts",
        "Unlimited Ad Spend (No Ceiling)",
        "Direct Slack War Room",
        "Net-30 Invoicing Credit Lines",
        "Instant Priority Replacement",
        "3.0% Cashback on Spend",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-30">
      {/* Hero Section */}
      <section className="relative">
        <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-lg max-w-sm mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5" /> Official TikTok Agency Whitelisted Lines
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Scale Viral Campaigns With Zero{" "}
              <span className="bg-linear-to-r from-pink-600 via-pink-400 to-pink-200 bg-clip-text text-transparent">
                TikTok Ad Restrictions
              </span>
            </h1>

            <p className="text-lg dark:text-slate-400 text-slate-600 max-w-xl leading-relaxed">
              Target Tier-1 GEOs (USA, UK, CA, EU) worldwide without region locks. Enjoy unlimited daily budgets, 0% top-up fees, and instant 1-hour account replacements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                variant={"digest"}
                className="font-semibold flex items-center justify-center"
              >
                <Send className="w-3.5 h-3.5" /> Chat with us
              </Button>
              <Button
                variant={"outline"}
                className="px-7 py-3.5 rounded-xl border dark:border-slate-700 dark:hover:border-slate-600 dark:bg-slate-900/60 font-semibold dark:text-slate-200 transition-all flex items-center justify-center gap-2"
              >
                See Pricing <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs dark:text-slate-400 text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Worldwide Targeting
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 0% Top-Up Fees
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 1-Hour Setup SLA
              </div>
            </div>
          </div>

          {/* Hero Media / TikTok Ad Preview */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto relative rounded-3xl overflow-hidden shadow-2xl border dark:border-slate-800/80 bg-linear-to-b from-pink-500 via-pink-600 to-pink-900 text-white font-sans flex flex-col justify-between min-h-145 p-6">
            
            {/* Header (TikTok Logo & Skip Ads) */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <FaTiktok />
                <span className="text-xl font-bold tracking-tight">TikTok</span>
              </div>
              <span className="text-xs bg-black/25 backdrop-blur-md px-3 py-1 rounded-full text-slate-200 border border-white/10">
                Skip ads
              </span>
            </div>

            {/* Center Visuals (Headline, Icon, Badges) */}
            <div className="flex flex-col items-center justify-center text-center my-auto space-y-6 z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight max-w-xs drop-shadow-md">
                Unlock Limitless Advertising
              </h2>

              {/* TikTok Animated Logo Center with Dashed Guide */}
              <div className="relative w-full flex items-center justify-center">
                <div className="absolute w-full border-t border-dashed border-white/20" />
                <div className="relative z-10 w-20 h-20 rounded-full bg-black backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                  <svg className="w-12 h-12" viewBox="0 0 24 24">
                    <path
                      fill="#25F4EE"
                      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.67 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.33V8.69a8.28 8.28 0 0 0 4.91 1.6V6.84a4.85 4.85 0 0 1-1-.15z"
                    />
                    <path
                      fill="#FE2C55"
                      d="M18.59 5.69a4.83 4.83 0 0 1-3.77-4.25V1h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 2 14.67 6.34 6.34 0 0 0 8.34 21a6.34 6.34 0 0 0 6.34-6.33V7.69a8.28 8.28 0 0 0 4.91 1.6V5.84a4.85 4.85 0 0 1-1-.15z"
                      className="opacity-90 mix-blend-screen"
                    />
                  </svg>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 w-full">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="bg-[#0b0e17]/90 text-slate-100 text-[11px] font-semibold px-3 py-1.5 rounded-md border border-slate-700/50 shadow-md"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions & User Details */}
            <div className="space-y-4 z-10 pt-4">
              <div className="flex items-end justify-between">
                <div className="space-y-1 max-w-60">
                  <h3 className="font-bold text-sm tracking-tight text-white">
                    digestmedia_agency
                  </h3>
                  <p className="text-xs text-slate-200 font-light leading-snug">
                    Unlock limitless advertising with Digest Media Agency Ad Accounts - no restrictions...
                  </p>
                </div>

                {/* Right Side Interactions (Avatar & Likes) */}
                <div className="flex flex-col items-center space-y-3 shrink-0">
                  {/* Digest Media Avatar */}
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center p-1.5 overflow-hidden">
                      <Image
                        src="/logo.webp"
                        alt="Digest Media Logo"
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#fe2c55] text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                      +
                    </span>
                  </div>

                  {/* Likes Count */}
                  <div className="flex flex-col items-center">
                    <Heart className="w-6 h-6 fill-white text-white" />
                    <span className="text-[10px] font-semibold text-slate-200">1.3M</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-[#fe2c55] hover:bg-[#e0264b] text-white text-sm font-bold py-3 rounded-lg transition-all shadow-lg flex items-center justify-center gap-1.5">
                Learn more <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Grid of Key Features */}
      <section id="features" className="py-30">
        <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-lg max-w-sm mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Built Specifically for High-Growth TikTok Performance Marketers
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-sm">
              Scale viral TikTok videos and Spark Ads globally with zero top-up tax and complete stability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const IconComponent = f.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl border dark:border-slate-800/80 dark:bg-slate-900/40 bg-slate-500/10 hover:border-pink-300 dark:hover:border-slate-700 transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison" className="py-20">
        <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-lg max-w-sm mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              TikTok Agency BC vs. Self-Serve Ad Accounts
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-sm">
              Why top performance media buyers migrate to Whitelisted Agency Business Centers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border dark:border-slate-800 border-gray-400/50 dark:bg-slate-900/40">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-500/80 dark:bg-slate-900/80 bg-pink-200/50 text-xs font-semibold dark:text-slate-300 uppercase tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5 text-pink-500 bg-pink-500/10">
                    Digest Media TikTok Agency Account
                  </th>
                  <th className="p-4 sm:p-5 dark:text-slate-400">
                    Self-Serve Personal Account
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 divide-gray-400/90">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="dark:hover:bg-slate-800/20 hover:bg-pink-50">
                    <td className="p-4 sm:p-5 font-medium">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 font-semibold bg-pink-500/10 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />{" "}
                      {row.agency}
                    </td>
                    <td className="p-4 sm:p-5 font-medium dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />{" "}
                        {row.regular}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20">
        <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-lg max-w-sm mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-3">
              Transparent Scale Pricing
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-sm">
              Choose the tier that matches your monthly TikTok video spend velocity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border ${tier.color} p-7 flex flex-col justify-between relative`}
              >
                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${tier.accent}`}
                  >
                    {tier.badge}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-4">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold">
                      {tier.price}
                    </span>
                    <span className="dark:text-slate-400 text-slate-600 text-sm">
                      {tier.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 text-sm dark:text-slate-300 text-slate-600">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 ${tier.accent} shrink-0`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all shadow-md ${tier.btnColor}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <AccordionBasic />
      </div>
    </div>
  );
};

export default TikTokPage;