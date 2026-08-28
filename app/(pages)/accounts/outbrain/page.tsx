import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Clock,
  Layers,
  Sparkles,
  Send,
  Newspaper,
} from "lucide-react";
import { AccordionBasic } from "../../../../components/Accordions";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const OutbrainPage = () => {

  const features = [
    {
      title: "Top-Tier Premium News Media",
      desc: "Distribute advertorials directly across elite global publishers including CNN, The Washington Post, and Sky News.",
      icon: Newspaper,
    },
    {
      title: "Whitelisted Smartfeed Approval",
      desc: "Direct compliance escalation channels to fast-track editorial reviews for performance advertorials.",
      icon: ShieldCheck,
    },
    {
      title: "Unlimited Spend & Zero Daily Caps",
      desc: "Scale viral campaigns seamlessly from $500/day to $50k+/day without artificial budget throttle barriers.",
      icon: Zap,
    },
    {
      title: "Instant 1-Hour Account Replacement",
      desc: "Guaranteed replacement lines with complete balance transfer in under 1 hour if compliance triggers occur.",
      icon: Clock,
    },
    {
      title: "Spend Rebates & Invoiced Credit",
      desc: "Earn up to 3% monthly cashback on native ad spend alongside extended Net-30 direct invoicing options.",
      icon: Sparkles,
    },
    {
      title: "Senior Native DSP Support",
      desc: "Dedicated Telegram and Slack communication channels with senior Outbrain strategists and media planners.",
      icon: Layers,
    },
  ];

  const comparisonRows = [
    {
      feature: "Publisher Placement Quality",
      agency: "Top-Tier Editorial Whitelist",
      regular: "Standard Remnant Inventory",
    },
    {
      feature: "Daily Spending Ceiling",
      agency: "Unlimited ($50k+/day)",
      regular: "Capped ($100 - $250/day)",
    },
    {
      feature: "Editorial Review SLA",
      agency: "Fast-Track Approval (< 2h)",
      regular: "24-48 Hours Queue",
    },
    {
      feature: "Performance Copy Resilience",
      agency: "Whitelisted Compliance Lines",
      regular: "Frequent Disapprovals & Holds",
    },
    {
      feature: "Account Strategist Support",
      agency: "Dedicated Senior DSP Rep",
      regular: "Automated Ticket System",
    },
  ];

  const pricingTiers = [
    {
      name: "Outbrain Starter",
      badge: "Fast Launch",
      price: "$299",
      period: "/ month",
      color: "border-purple-500/40 bg-purple-500/5",
      accent: "text-purple-400",
      btnColor: "bg-purple-500 hover:bg-purple-400 text-white",
      features: [
        "1 Outbrain Agency Account",
        "Up to $15,000 / mo ad spend",
        "Global Tier-1 Publisher Access",
        "Fast-Track Review Priority",
        "24h Replacement SLA",
      ],
    },
    {
      name: "Native Growth",
      badge: "Most Popular",
      price: "$699",
      period: "/ month",
      color: "border-fuchsia-500/50 bg-fuchsia-500/10 shadow-lg shadow-fuchsia-500/20",
      accent: "text-fuchsia-400",
      btnColor: "bg-fuchsia-500 hover:bg-fuchsia-400 text-white",
      features: [
        "3 Outbrain Agency Accounts",
        "Up to $75,000 / mo ad spend",
        "Zemanta DSP Integration Ready",
        "Dedicated Telegram Rep",
        "1-Hour Replacement SLA",
        "1.5% Ad Spend Cashback",
      ],
    },
    {
      name: "Enterprise Native",
      badge: "High Volume",
      price: "$1,499",
      period: "/ month",
      color: "border-pink-500/40 bg-pink-500/5",
      accent: "text-pink-400",
      btnColor: "bg-pink-600 hover:bg-pink-500 text-white",
      features: [
        "Unlimited Agency Accounts",
        "Unlimited Ad Spend (No Ceiling)",
        "Direct Slack Strategy Room",
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
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5" /> Official Outbrain Partner
              Agency Infrastructure
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Scale Native Content With Zero{" "}
              <span className="bg-linear-to-r from-pink-600 via-pink-400 to-pink-200 bg-clip-text text-transparent">
                Outbrain Spend Limits
              </span>
            </h1>

            <p className="text-lg dark:text-slate-400 text-slate-600 max-w-xl leading-relaxed">
              Connect with over 1 billion engaged users across leading global
              news platforms. Bypass editorial approval delays, eliminate
              unexpected bans, and scale winning native angles with unlimited
              agency lines.
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
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Premium
                Smartfeed Placements
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fast-Track
                Approvals
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 1-Hour SLA
                Guarantee
              </div>
            </div>
          </div>

          {/* Hero Media / Outbrain Native Card Preview */}
          <div className="lg:col-span-6">
            <Image
              src="/hero-outbrain.avif"
              alt="Bing Ad Preview"
              width={700}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Grid of Key Features */}
      <section id="features" className="py-30">
        <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-lg max-w-sm mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Built for High-Volume Native Advertorials & Arbitrage
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-sm">
              Deliver high-intent audience acquisition across premium editorial
              feeds with guaranteed uptime.
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
              Outbrain Agency Lines vs. Standard Self-Serve Accounts
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-sm">
              Why top performance media buyers migrate to Whitelisted Outbrain
              Agency infrastructure.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border dark:border-slate-800 border-gray-400/50 dark:bg-slate-900/40">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-500/80 dark:bg-slate-900/80 bg-pink-200/50 text-xs font-semibold dark:text-slate-300 uppercase tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5 text-pink-500 bg-pink-500/10">
                    Digest Media Outbrain Agency Account
                  </th>
                  <th className="p-4 sm:p-5 dark:text-slate-400 text-slate-600">
                    Standard Self-Serve Account
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y dark:divide-slate-800/80 divide-slate-400/90">
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
              Select the tier aligned with your current Outbrain discovery
              monthly spend volume.
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

export default OutbrainPage;
