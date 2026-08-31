"use client";
import React, { useRef } from "react";
import {
  TrendingUp,
  Layers,
  Target,
  Search,
  Share2,
  Palette,
  Code2,
  Zap,
  BarChart3,
  ShoppingBag,
  ArrowUpRight,
  MoveUpRight,
  Check,
} from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceItem {
  id: number;
  num: string;
  icon: React.ComponentType<{ className?: string }>;
  titleNormal: string;
  titleItalic: string;
  description: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    num: "01",
    icon: TrendingUp,
    titleNormal: "Performance ",
    titleItalic: "Marketing",
    description:
      "Data-driven client acquisition architectures built to maximize measurable scaling windows and absolute revenue output.",
    features: ["ROAS Optimization", "Scale Architecture", "Audience Valuation"],
  },
  {
    id: 2,
    num: "02",
    icon: Layers,
    titleNormal: "Meta Ads & ",
    titleItalic: "Google Ads",
    description:
      "High-intent search capture running alongside high-frequency social media distribution networks for maximum ecosystem coverage.",
    features: ["Funnel Alignment", "Semantic Ad Groups", "Creative Pipelines"],
  },
  {
    id: 3,
    num: "03",
    icon: Target,
    titleNormal: "Lead Generation ",
    titleItalic: "Campaigns",
    description:
      "Precision-targeted validation and capture systems engineering deep pipelines of high-quality enterprise or consumer intent.",
    features: ["Form Optimization", "Intent Scoring", "Database Plumbing"],
  },
  {
    id: 4,
    num: "04",
    icon: Search,
    titleNormal: "SEO & Organic ",
    titleItalic: "Growth",
    description:
      "Dominating technical search algorithms and semantic web networks to secure zero-cost sustainable pipeline authority.",
    features: ["Technical SEO", "Entities Mapping", "Link Architecture"],
  },
  {
    id: 5,
    num: "05",
    icon: Share2,
    titleNormal: "Social Media ",
    titleItalic: "Management",
    description:
      "Deploying programmatic high-fidelity organic distribution strategies across primary cultural capital networks.",
    features: ["Community Mechanics", "Velocity Frameworks", "Brand Resonance"],
  },
  {
    id: 6,
    num: "06",
    icon: Palette,
    titleNormal: "Content Creation & ",
    titleItalic: "Branding",
    description:
      "Architecting deeply integrated high-conversion visual design frameworks and semantic copy guidelines that instantly trigger trust.",
    features: ["Brand Manuals", "Asset Factories", "Conversion Copywriting"],
  },
  {
    id: 7,
    num: "07",
    icon: Code2,
    titleNormal: "Website ",
    titleItalic: "Development",
    description:
      "Engineering hyper-optimized modern digital interfaces with ultra-fast execution runtimes and bleeding-edge deployment systems.",
    features: [
      "Next.js Architecture",
      "Component Engineering",
      "Fluid Responsiveness",
    ],
  },
  {
    id: 8,
    num: "08",
    icon: Zap,
    titleNormal: "Conversion ",
    titleItalic: "Optimization",
    description:
      "Systematic UI profiling and interactive micro-copy modifications targeted directly at resolving layout bottlenecks.",
    features: [
      "Behavior Tracking",
      "A/B Testing Frameworks",
      "Friction Stripping",
    ],
  },
  {
    id: 9,
    num: "09",
    icon: BarChart3,
    titleNormal: "Analytics & ",
    titleItalic: "Reporting",
    description:
      "Deploying pristine infrastructure layers that surface actionable cross-channel metrics with absolute fidelity.",
    features: [
      "Server-Side Tracking",
      "Custom Dashboards",
      "Attribution Modeling",
    ],
  },
  {
    id: 10,
    num: "10",
    icon: ShoppingBag,
    titleNormal: "Compound ",
    titleItalic: "Growth Strategies",
    description:
      "Full-scale compound optimization engines tailored specifically for direct-to-consumer catalogs and transactional models.",
    features: ["LTV Amplification", "Cart Mechanics", "Retention Automation"],
  },
];

export default function ServicesEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track dynamic scroll progress inside the entire track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }} 
      viewport={{ once: true, margin: "-100px" }}
      ref={containerRef}
      className="w-full py-24 relative"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="relative flex flex-col md:flex-row justify-between gap-8 items-start md:items-end mb-20 p-8 md:p-10">
          {/* Subtle Background Glow Accent */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#E72D87]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Title Stack */}
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E72D87]/10 border border-[#E72D87]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E72D87] animate-pulse" />
              <span className="text-[10px] font-semibold tracking-wider text-[#E72D87] uppercase">
                High-Performance Infrastructure
              </span>
            </div>

            <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-[0.95] text-foreground uppercase">
              Engineered For <br />
              <span className="font-serif italic font-light text-[#E72D87] lowercase">
                domination.
              </span>
            </h3>
          </div>

          {/* Right Description Stack */}
          <div className="relative z-10 max-w-xs space-y-3 md:mb-1">
            <p className="text-muted-foreground text-xs md:text-sm font-light leading-relaxed">
              We turn unstable ad spend into predictable revenue engines. Backed
              by elite conversion optimization, custom web stacks, and
              unbreakable enterprise scaling structures.
            </p>
            <div className="flex items-center gap-4 pt-1 text-[11px] text-foreground/70">
              <span className="flex items-center gap-1.5">
                <span className="text-[#E72D87]"><Check className="h-3.5 w-3.5" /></span> 100% Data-Backed
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#E72D87]"><Check className="h-3.5 w-3.5" /></span> Zero Bloat Code
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Card Stacking Track */}
        <div className="w-full relative flex flex-col gap-16 lg:gap-20">
          {servicesData.map((service, index) => {
            return (
              <Card
                key={service.id}
                service={service}
                index={index}
                totalCards={servicesData.length}
                globalProgress={scrollYProgress}
              />
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/services"
            className="flex items-center justify-center space-x-3 group hover:scale-95 transition-all transform ease-out cursor-pointer max-w-64 mx-auto md:mx-0"
          >
            <Button variant={"digest"} className="px-10 py-7 overflow-hidden">
              <div className="relative flex flex-col overflow-hidden">
                <span className="inline-block transition-transform duration-500 ease-out transform group-hover:-translate-y-full">
                  Explore Services
                </span>

                <span className="absolute left-0 inline-block transition-transform duration-500 ease-out transform translate-y-full group-hover:translate-y-0">
                  Explore Services
                </span>
              </div>
            </Button>

            <Button variant={"digest"} className="px-5 py-7 overflow-hidden">
              <div className="relative flex flex-col overflow-hidden h-5">
                <span className="inline-block transition-transform duration-500 ease-out transform group-hover:-translate-y-full group-hover:translate-x-10 overflow-hidden">
                  <MoveUpRight className="" />
                </span>

                <span className="absolute -left-5 inline-block transition-transform duration-500 ease-out transform translate-y-full group-hover:translate-y-0 group-hover:translate-x-5 overflow-hidden">
                  <MoveUpRight className="" />
                </span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/*                        SOLID OVERLAP SCROLL-DRIVEN CARD                    */
/* -------------------------------------------------------------------------- */
interface CardProps {
  service: ServiceItem;
  index: number;
  totalCards: number;
  globalProgress: MotionValue<number>;
}

function Card({ service, index, totalCards, globalProgress }: CardProps) {
  const IconComponent = service.icon;

  const startRange = index / totalCards;
  const endRange = (index + 1) / totalCards;

  // Fluid smooth physics transformation
  const rawScale = useTransform(
    globalProgress,
    [startRange, endRange],
    [1, 0.95 - (totalCards - index) * 0.01]
  );
  
  const smoothScale = useSpring(rawScale, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        scale: smoothScale,
        top: `calc(100px + ${index * 8}px)`,
        zIndex: index + 1,
      }}
      className="sticky w-full rounded-[2.5rem] bg-neutral-100/40 dark:bg-neutral-900/30 border border-neutral-200/60 dark:border-white/5 backdrop-blur-2xl p-8 md:p-12 min-h-90 flex flex-col justify-between shadow-[0_-15px_35px_-10px_rgba(0,0,0,0.04)] dark:shadow-[0_-30px_60px_-20px_rgba(0,0,0,0.6)] transition-colors duration-300 group cursor-pointer hover:border-[#E72D87]/30 origin-top"
    >
      {/* Top Meta Details Row */}
      <div className="flex justify-between items-start w-full relative">
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-neutral-400 dark:text-zinc-600">
            [ NODE_{service.num} ]
          </span>
          <div className="text-[#E72D87] dark:text-pink-400">
            <IconComponent className="w-5 h-5 stroke-[1.5]" />
          </div>
        </div>

        <div className="w-10 h-10 rounded-full border border-neutral-200 dark:border-zinc-800 bg-stone-50 dark:bg-[#131316] flex items-center justify-center text-neutral-400 dark:text-zinc-600 group-hover:text-[#E72D87] group-hover:bg-background dark:group-hover:bg-black group-hover:rotate-45 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 stroke-2" />
        </div>
      </div>

      {/* Main Structural Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 mb-6 relative">
        {/* Left Side: Title */}
        <div className="md:col-span-6">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-foreground uppercase">
            {service.titleNormal} <br className="hidden lg:inline" />
            <span className="font-serif italic font-light text-[#E72D87] lowercase">
              {service.titleItalic}
            </span>
          </h4>
        </div>

        {/* Right Side: Description and Features */}
        <div className="md:col-span-6 space-y-6">
          <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {service.features.map((feature, i) => (
              <span
                key={i}
                className="text-[10px] tracking-wider uppercase px-2.5 py-1 border border-neutral-200 dark:border-zinc-800 bg-stone-50 dark:bg-zinc-900 text-neutral-500 dark:text-zinc-400 rounded-md"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* System Footer Tag */}
      <div className="pt-6 border-t border-neutral-200 dark:border-zinc-800/80 flex justify-between items-center text-[10px] text-neutral-400 dark:text-zinc-600 mt-auto relative">
        <span className="tracking-wide">SYS_MATRIX // CORE_ACTIVE</span>
        <span>REF_V2.6_DEPLOYED</span>
      </div>
    </motion.div>
  );
}