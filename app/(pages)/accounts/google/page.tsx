import {
  ShieldCheck,
  Zap,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Clock,
  Layers,
  Sparkles,
  Send,
} from "lucide-react";
import { AccordionBasic } from "../../../../components/Accordions";
import { Button } from "@/components/ui/button";
import Link from "next/link"

const GooglePage = () => {
  const sitelinks = [
    "Google Agency Ad Accounts",
    "Meta Agency Ad Accounts",
    "TikTok Agency Ad Accounts",
  ];

  const features = [
    {
      title: "Unlimited Daily Spend",
      desc: "Scale Search, YouTube, and Performance Max campaigns with zero spend caps from day one.",
      icon: Zap,
    },
    {
      title: "Bypass Suspicious Payment Bans",
      desc: "Direct Google Premier Partner whitelisted invoicing lines to prevent policy suspensions.",
      icon: ShieldCheck,
    },
    {
      title: "Instant Account Replacement",
      desc: "Immediate replacement accounts provided within 1 hour if any unexpected suspension occurs.",
      icon: Clock,
    },
    {
      title: "Global Search & YouTube Targeting",
      desc: "Run high-intent keywords in Tier-1 countries with ultra-low CPCs and zero keyword restrictions.",
      icon: TrendingUp,
    },
    {
      title: "Google Ad Spend Cashback",
      desc: "Earn up to 3% cashback on total monthly ad spend with flexible Net-30 invoicing credit terms.",
      icon: Sparkles,
    },
    {
      title: "Dedicated Google Rep Support",
      desc: "Direct escalation channels to Senior Google Account Strategists via Slack or Telegram.",
      icon: Layers,
    },
  ];

  const comparisonRows = [
    {
      feature: "Daily Spending Limit",
      agency: "Unlimited ($50k+/day)",
      regular: "Capped ($100 - $500/day)",
    },
    {
      feature: "Suspicious Payment Risk",
      agency: "0% (Pre-funded / Invoiced Lines)",
      regular: "Extremely High on New CCs",
    },
    {
      feature: "Google Support Access",
      agency: "Premier Partner Dedicated Rep",
      regular: "Slow Automated Email Queue",
    },
    {
      feature: "Blackhat / Greyhat Keyword Resilience",
      agency: "High Trust Score (Whitelisted)",
      regular: "Instant Disapproval / Suspension",
    },
    {
      feature: "Account Replacement Speed",
      agency: "Under 1 Hour SLA",
      regular: "Days to Weeks (Appeal Hell)",
    },
  ];

  return (
    <div className="min-h-screen py-15">
      {/* Hero Section */}
      <section className="relative">
        <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5" /> Official Google Partner Whitelisted Lines
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Dominate Search & YouTube With Zero{" "}
              <span className="bg-linear-to-r from-pink-600 via-pink-400 to-pink-200 bg-clip-text text-transparent">
                Google Ad Spend Limits
              </span>
            </h1>

            <p className="text-lg dark:text-slate-400 text-slate-600 max-w-xl leading-relaxed">
              Stop suffering from Suspicious Payment Activity suspensions. Scale Performance Max, Search, and YouTube campaigns with unlimited daily budgets and premier rep priority.
            </p>

            <div className="flex gap-4 pt-2">
              <Link href="https://t.me/@AdDigest_X1" target="_blank" rel="noreferrer">
                <Button
                  variant={"digest"}
                  className="font-semibold flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" /> Chat with us
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Google Verified Lines
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Daily Spend Caps
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 1-Hour Instant Delivery
              </div>
            </div>
          </div>

          {/* Hero Media / Dashboard Preview */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto bg-[#07090e] border border-slate-800/80 rounded-3xl p-6 shadow-2xl text-white font-sans space-y-6">
            {/* Google G Logo */}
            <div className="flex justify-center">
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            {/* Top Search Bar Skeleton */}
            <div className="w-full h-11 bg-slate-800/60 rounded-full border border-slate-700/30" />

            {/* Ad Main Content */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <span className="font-bold text-white">Ad</span>
                <span>•</span>
                <span className="text-slate-400">
                  https://www.digestmedia.agency
                </span>
                <svg className="w-3 h-3 fill-slate-400" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-[#6ba4f8] hover:underline cursor-pointer">
                Unlock Unlimited Advertising | Digest Media
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                Forget about advertising limitations, restrictions and
                unsustainable campaigns. We work with all major social media
                platforms to provide enterprise-tier solutions for businesses of
                all sizes.
              </p>
            </div>

            {/* Sitelinks */}
            <div className="space-y-4 pt-1">
              {sitelinks.map((link) => (
                <div
                  key={link}
                  className="pt-3 border-t border-slate-800/80 first:border-t"
                >
                  <span className="text-base text-slate-100 font-normal hover:text-[#6ba4f8] transition-colors cursor-pointer block">
                    {link}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Result Skeletons */}
            <div className="space-y-2 pt-2">
              <div className="h-3.5 w-3/4 bg-slate-800/60 rounded-full" />
              <div className="h-2.5 w-full bg-slate-800/40 rounded-full" />
              <div className="h-2.5 w-1/2 bg-slate-800/40 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Key Features */}
      <section id="features" className="py-30">
        <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Built Specifically for High-ROI Search & YouTube Marketers
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-sm">
              Everything you need to scale Google Ads across Search, Shopping, Performance Max, and YouTube with maximum stability.
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
                  <h3 className="text-lg font-semibold  mb-2">
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
        <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Google Agency MCC vs. Regular Google Ads Accounts
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-sm">
              See why high-volume media buyers migrate to Premier Partner Agency Lines.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border dark:border-slate-800 border-gray-400/50 dark:bg-slate-900/40">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-500/80 dark:bg-slate-900/80 bg-pink-200/50 text-xs font-semibold dark:text-slate-300 uppercase tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5 text-pink-500 bg-pink-500/10">
                    Digest Media Google Agency MCC
                  </th>
                  <th className="p-4 sm:p-5 dark:text-slate-400">
                    Standard Google Ads Account
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y dark:divide-slate-800/80 divide-gray-400/90">
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

      <div>
        <AccordionBasic />
      </div>
    </div>
  );
};

export default GooglePage;