import {
  ShieldCheck,
  Zap,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ThumbsUp,
  Heart,
  Clock,
  Layers,
  Sparkles,
  Send,
} from "lucide-react";
import Image from "next/image";
import { AccordionBasic } from "../../../../components/Accordions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FacebookPage = () => {
  const badges = [
    "No Restrictions",
    "Unlimited Ad Accounts",
    "24/7 Customer Support",
  ];
  const features = [
    {
      title: "Unlimited Ad Spend",
      desc: "Scale your campaigns with zero daily spending limits from day one.",
      icon: Zap,
    },
    {
      title: "Bypass Bans & Restrictions",
      desc: "Direct agency whitelisted lines directly with Meta support.",
      icon: ShieldCheck,
    },
    {
      title: "Instant Replacement Guarantee",
      desc: "Immediate replacement accounts within 1 hour if any issues arise.",
      icon: Clock,
    },
    {
      title: "Worldwide Direct Targeting",
      desc: "Target Tier-1, Tier-2, and worldwide audiences with optimized CPMs.",
      icon: TrendingUp,
    },
    {
      title: "Cashback & Credit Lines",
      desc: "Get up to 3% spend cashback and extended Net-30 credit terms.",
      icon: Sparkles,
    },
    {
      title: "Dedicated 24/7 Account Rep",
      desc: "Direct Slack / Telegram communication with senior ad specialists.",
      icon: Layers,
    },
  ];

  const comparisonRows = [
    {
      feature: "Daily Spend Limit",
      agency: "Unlimited ($50k+/day)",
      regular: "Capped ($50 - $250/day)",
    },
    {
      feature: "Ban & Restriction Rate",
      agency: "< 1.2% (Whitelisted)",
      regular: "Extremely High",
    },
    {
      feature: "Meta Support Access",
      agency: "Direct Rep Tier 1",
      regular: "Standard Bot Queue",
    },
    {
      feature: "Replacement Turnaround",
      agency: "Under 1 Hour",
      regular: "Days to Weeks",
    },
    {
      feature: "Pixel & Data Security",
      agency: "Multi-Backup Isolation",
      regular: "Single Point Failure",
    },
  ];

  const pricingTiers = [
    {
      name: "Starter Scaler",
      badge: "Fast Launch",
      price: "$299",
      period: "/ month",
      color: "border-purple-500/40 bg-purple-500/5",
      accent: "text-purple-400",
      btnColor: "bg-purple-500 hover:bg-purple-400 text-white",
      features: [
        "1 Meta Agency Account",
        "Up to $10,000 / mo spend",
        "Standard 24/7 Support",
        "24h Replacement SLA",
      ],
    },
    {
      name: "Growth Agency",
      badge: "Most Popular",
      price: "$699",
      period: "/ month",
      color:
        "border-fuchsia-500/50 bg-fuchsia-500/10 shadow-lg shadow-fuchsia-500/20",
      accent: "text-fuchsia-400",
      btnColor: "bg-fuchsia-500 hover:bg-fuchsia-400 text-white",
      features: [
        "3 Meta Agency Accounts",
        "Up to $50,000 / mo spend",
        "Dedicated Telegram Rep",
        "1-Hour Replacement SLA",
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
        "Unlimited Ad Spend",
        "Direct Slack Room",
        "Instant Priority Replacement",
        "3.0% Cashback + Net-30",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-15">
      {/* Hero Section */}
      <section className="relative">
        <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5" /> Direct Meta Whitelisted
              Accounts
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Scale Aggressively With Zero{" "}
              <span className="bg-linear-to-r from-pink-600 via-pink-400 to-pink-200 bg-clip-text text-transparent">
                Ad Account Limits
              </span>
            </h2>

            <p className="text-lg dark:text-slate-400 text-slate-600 max-w-xl leading-relaxed">
              Stop worrying about random Facebook ad bans. Unlock unlimited
              daily spend, dedicated Meta rep priority, and instant replacement
              guarantees.
            </p>

            <div className="flex gap-4 pt-2">
              <Link href="https://t.me/" target="_blank" rel="noreferrer">
                <Button
                  variant={"digest"}
                  className="font-semibold flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" /> Chat with us
                </Button>
              </Link>
              <Link href="#pricing">
                <Button
                  variant={"outline"}
                  className="px-7 py-3.5 rounded-xl border dark:border-slate-700 dark:hover:border-slate-600 dark:bg-slate-900/60 font-semibold dark:text-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  See Pricing <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs dark:text-slate-400 text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100%
                Whitelisted
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Spend
                Caps
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 1-Hour
                Setup
              </div>
            </div>
          </div>

          {/* Hero Media / Dashboard Preview */}

          <div className="lg:col-span-5 w-full bg-[#07090e] border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl text-white font-sans">
            {/* 1. Header (Facebook Logo & Post Info) */}
            <div className="p-5 pb-4 space-y-4">
              {/* Facebook Logo */}
              <h2 className="text-xl font-bold tracking-tighter">facebook</h2>

              {/* Profile Row */}
              <div className="flex items-center gap-3">
                {/* Digest Media Avatar */}
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-pink-950 to-slate-900 border border-pink-800/40 flex items-center justify-center p-2.5 overflow-hidden shrink-0 shadow-inner">
                  <Image
                    src="/logo.webp"
                    alt="Digest Media Logo"
                    width={50}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* User Placeholder & Sponsored */}
                <div className="flex-1 space-y-1.5">
                  <div className="h-3.5 w-44 bg-slate-800/80 rounded-full" />
                  <p className="text-xs text-slate-400 font-medium">
                    Sponsored
                  </p>
                </div>
              </div>

              {/* Post Text Skeletons */}
              <div className="space-y-2 pt-1">
                <div className="h-2 w-full bg-slate-800/70 rounded-full" />
                <div className="h-2 w-2/5 bg-slate-800/70 rounded-full" />
              </div>
            </div>

            {/* 2. Main Ad Creative Banner */}
            <div className="relative bg-linear-to-b from-pink-500 via-pink-600 to-pink-800 px-6 py-10 flex flex-col items-center justify-between min-h-75 overflow-hidden">
              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center leading-tight tracking-tight drop-shadow-sm max-w-xs">
                Unlock Limitless Advertising
              </h3>

              {/* Center Facebook Icon with Dashed Guideline */}
              <div className="relative w-full flex items-center justify-center my-6">
                {/* Dashed Line in Background */}
                <div className="absolute w-full border-t-2 border-dashed border-white/20 z-0" />

                {/* Facebook Circle Badge */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-blue-500 border-4 border-white/10 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-9 h-9 fill-white translate-y-1 translate-x-0.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z" />
                  </svg>
                </div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 relative z-10 w-full">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="bg-[#0b0e17]/90 text-slate-100 text-[11px] font-semibold px-3 py-1.5 rounded-md border border-slate-700/50 shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Footer (CTA & Social Stats) */}
            <div className="p-4 bg-[#07090e] space-y-4">
              {/* URL Skeleton & CTA Button */}
              <div className="flex items-center justify-between gap-4 pb-2 border-b border-slate-800/40">
                <div className="h-2.5 w-48 bg-slate-800/70 rounded-full" />
                <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
                  Shop now
                </button>
              </div>

              {/* Reactions & Engagement Stats */}
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium px-1">
                {/* Reactions */}
                <div className="flex items-center gap-1.5">
                  <div className="flex space-x-1">
                    <ThumbsUp className="w-4 h-4 rounded-full bg-blue-500 fill-white text-blue-500" />
                    <Heart className="w-4 h-4 rounded-full bg-red-500 fill-white text-red-500" />
                  </div>
                  <span>100</span>
                </div>

                {/* Comments & Shares */}
                <div className="flex items-center gap-2">
                  <span>2 Comments</span>
                  <span>•</span>
                  <span>5 Shares</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Key Features */}
      <section id="features" className="py-30">
        <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Built Specifically for High-Growth Performance Marketers
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-sm">
              Everything you need to spend 6 to 7 figures monthly with
              uninterrupted uptime.
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
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
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
      <section id="comparison" className="py-15 lg:py-20">
        <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Agency Accounts vs. Regular Ad Accounts
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-sm">
              See why top media buyers leave standard Business Managers behind.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border dark:border-slate-800 border-gray-400/50 dark:bg-slate-900/40">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-500/80 dark:bg-slate-900/80 bg-pink-200/50 text-xs font-semibold dark:text-slate-300 uppercase tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5 text-pink-500 bg-pink-500/10">
                    Digest Media Agency Account
                  </th>
                  <th className="p-4 sm:p-5 dark:text-gray-400">
                    Regular BM Account
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y dark:divide-gray-800/80 divide-gray-400/90">
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    className="dark:hover:bg-gray-800/20 hover:bg-pink-50"
                  >
                    <td className="p-4 sm:p-5 font-medium">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-semibold bg-pink-500/10 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />{" "}
                      {row.agency}
                    </td>
                    <td className="p-4 sm:p-5 font-medium">
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
        <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-3">
              Transparent Scale Pricing
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-sm">
              Choose the tier that matches your current monthly spend velocity.
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
                  <h3 className="text-xl font-bold mt-1 mb-4">{tier.name}</h3>
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

export default FacebookPage;
