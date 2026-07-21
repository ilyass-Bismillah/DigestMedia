"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Code2,
  ShieldCheck,
  Sparkles,
  MoveUpRight
} from "lucide-react";

import SectionBadge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const principles = [
  {
    num: "01",
    title: "Zero Waste, Pure ROI",
    desc: "Every dirham of your ad spend is optimized and tracked meticulously. No vanity metrics, only predictable revenue growth.",
  },
  {
    num: "02",
    title: "Unbreakable Speed",
    desc: "Lightning-fast execution and custom web platforms built to capture attention and convert high-intent users instantly.",
  },
  {
    num: "03",
    title: "Radical Transparency",
    desc: "Real-time visibility, clear communication, and absolute clarity on where your money goes and what it generates.",
  },
  {
    num: "04",
    title: "Bulletproof Scaling",
    desc: "Infrastructure designed to handle massive traffic surges and aggressive ad scale without slowing down.",
  },
  {
    num: "05",
    title: "Elite Customization",
    desc: "No cookie-cutter templates. Every layout and campaign funnel is custom-tailored to fit your exact business goals.",
  },
];

function Counter({ from, to }: { from: number; to: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: 2 });
    return () => controls.stop();
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
}

export default function AboutPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <main className="min-h-screen mt-15">
      {/* 1. HERO: MASSIVE TYPE */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden space-y-8">
        <div className="absolute inset-0 bg-neutral-900/80 z-0">
          <div className="w-full h-full bg-[url('/digest.webp')] bg-cover bg-center mix-blend-overlay opacity-50" />
        </div>
        <SectionBadge text="About Us" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="z-10 text-white md:px-6"
        >
          <h1 className="md:text-7xl text-5xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Digest <span className="text-[#E72D87] font-serif italic font-light">Media</span>
          </h1>
          <p className="md:text-xl text-lg italic font-serif">
            Architecting digital ecosystems for high-performance brands.
          </p>
        </motion.div>

        <div className="2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto grid grid-cols-3 gap-8 text-center z-10">
          {[
            { n: 50, l: "Brands Scaled" },
            { n: 99, l: "Retention Rate" },
            { n: 24, l: "Support Hours" },
          ].map((s, i) => (
            <div
              key={i}
              className="border-r border-neutral-100 last:border-none md:px-10"
            >
              <h3 className="text-5xl font-bold text-[#E72D87] mb-2">
                <Counter from={0} to={s.n} />+
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      <motion.section initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 1.3, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className="2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto py-24 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            What We{" "}
            <span className="font-serif italic font-light text-[#E72D87] lowercase">
              Offer
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Paid Media & Scaling",
              desc: "Data-driven Meta, TikTok, and Google ad campaigns engineered to lower acquisition costs and scale revenue.",
              icon: <TrendingUp className="text-[#E72D87]" size={32} />,
            },
            {
              title: "High-End Web Dev",
              desc: "Custom, lightning-fast web platforms and digital experiences built for absolute conversion and elite user performance.",
              icon: <Code2 className="text-[#E72D87]" size={32} />,
            },
            {
              title: "Enterprise Ad Accounts",
              desc: "Bulletproof agency ad infrastructure designed to bypass shutdowns and power unlimited growth.",
              icon: <ShieldCheck className="text-[#E72D87]" size={32} />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/30 dark:bg-black/30 p-8 rounded-[2rem] border border-border shadow-sm hover:shadow-xl hover:border-[#E72D87]/40 transition-all duration-300 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                {item.desc}
              </p>
              <Link href="/services">
                <Button
                  variant={"link"}
                  className="text-xs font-mono font-bold uppercase tracking-widest text-[#E72D87] flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300 cursor-pointer"
                >
                  Explore Service <ArrowRight size={14} />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto w-full">
            {/* Header */}
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E72D87]/10 border border-[#E72D87]/20 backdrop-blur-md mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E72D87] animate-pulse" />
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-[#E72D87] uppercase">
                    Our Core Values
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground">
                  Built For{" "}
                  <span className="font-serif italic font-light text-[#E72D87] lowercase">
                    Impact.
                  </span>
                </h2>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-sm font-light">
                Scroll down to explore how we engineer high-performance systems
                designed to dominate your market.
              </p>
            </div>

            <div className="flex gap-6 overflow-visible">
              <motion.div style={{ x }} className="flex gap-6">
                {principles.map((item, i) => (
                  <div
                    key={i}
                    className="relative group p-10 rounded-[2.5rem] bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-white/5 backdrop-blur-xl transition-all duration-500 hover:border-[#E72D87]/40 w-87.5 md:w-112.5 shrink-0 flex flex-col justify-between h-85"
                  >
                    {/* Subtle Glow */}
                    <div className="absolute inset-0 bg-linear-to-br from-[#E72D87]/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-3.5 py-1 rounded-full bg-neutral-200/60 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 group-hover:text-[#E72D87] group-hover:bg-[#E72D87]/10 transition-colors duration-300">
                        {item.num}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-white/5 flex items-center justify-center text-foreground group-hover:bg-[#E72D87] group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>

                    <div className="relative z-10 space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* 5. THE SQUAD: HUMAN ELEMENT */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className="py-24 px-6 relative overflow-hidden">
        <div className="2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto">
          {/* Section Badge & Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E72D87]/10 border border-[#E72D87]/20 backdrop-blur-md mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E72D87] animate-pulse" />
              <span className="text-[10px] font-mono font-semibold tracking-wider text-[#E72D87] uppercase">
                The Experts Behind The Growth
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground mb-4">
              Meet The{" "}
              <span className="font-serif italic font-light text-[#E72D87] lowercase">
                Team
              </span>
            </h2>

            <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-light">
              A dedicated collective of media buyers, engineers, and strategists
              engineering your digital dominance.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex",
                role: "Founder & Lead",
                bio: "Directing high-scale digital growth strategies and infrastructure.",
              },
              {
                name: "Sarah",
                role: "Media Buying Lead",
                bio: "Managing high-budget Meta and TikTok acquisition campaigns.",
              },
              {
                name: "Mehdi",
                role: "Performance Engineer",
                bio: "Building fast, high-conversion web architectures and funnels.",
              },
              {
                name: "Rim",
                role: "Creative Strategist",
                bio: "Crafting visual storytelling and ad creative that converts.",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-[2rem] bg-neutral-100/60 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-white/5 backdrop-blur-xl transition-all duration-500 hover:border-[#E72D87]/40 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 bg-linear-to-b from-[#E72D87]/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Avatar with Gradient Border/Background */}
                <div className="relative mb-6">
                  <div className="absolute -inset-0.5 bg-linear-to-r from-[#E72D87] to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
                  <div className="relative w-24 h-24 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center font-bold text-xl text-foreground overflow-hidden border border-neutral-300 dark:border-white/10 group-hover:scale-105 transition-transform duration-500">
                    {member.name[0]}
                  </div>
                </div>

                {/* Info */}
                <div className="relative z-10 space-y-2 w-full">
                  <h4 className="font-bold text-xl text-foreground tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-[11px] font-mono font-bold text-[#E72D87] uppercase tracking-widest">
                    {member.role}
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed font-light pt-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. FINAL CTA */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className="py-24 relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E72D87]/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto relative z-10">
          {/* Main Box */}
          <div className="relative p-10 md:p-16 rounded-[3rem] bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl">
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E72D87]/10 border border-[#E72D87]/20 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#E72D87]" />
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-[#E72D87] uppercase">
                    Ready For Takeoff
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-[1.1]">
                  Let&apos;s Build Something{" "}
                  <span className="font-serif italic font-light text-[#E72D87] lowercase">
                    Extraordinary.
                  </span>
                </h2>

                <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base font-light max-w-xl leading-relaxed">
                  Ready to outpace your competition? Let Digest Media scale your
                  digital infrastructure and turn ad spend into predictable
                  revenue.
                </p>
              </div>

              {/* Right Action Box */}
              <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
                <div className="w-full p-8 rounded-3xl bg-white dark:bg-neutral-950/80 border border-neutral-200 dark:border-white/10 shadow-lg space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[#E72D87] uppercase tracking-widest font-bold">
                      Priority Access
                    </span>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light">
                      Direct access to our senior engineering and media buying
                      teams.
                    </p>
                  </div>

                  <div className="mt-10 flex items-center justify-center">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center space-x-3 group hover:scale-95 transition-all transform ease-out cursor-pointer max-w-64 mx-auto md:mx-0"
                    >
                      <Button
                        variant={"digest"}
                        className="px-10 py-7 overflow-hidden"
                      >
                        <div className="relative flex flex-col overflow-hidden">
                          <span className="inline-block transition-transform duration-500 ease-out transform group-hover:-translate-y-full">
                            Start Collaboration
                          </span>

                          <span className="absolute left-0 inline-block transition-transform duration-500 ease-out transform translate-y-full group-hover:translate-y-0">
                            Start Collaboration
                          </span>
                        </div>
                      </Button>

                      <Button
                        variant={"digest"}
                        className="px-5 py-7 overflow-hidden"
                      >
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
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
