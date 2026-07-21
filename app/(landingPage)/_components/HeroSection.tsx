"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, BarChart3, TrendingUp, MoveUpRight } from "lucide-react";
import { FaMeta, FaSnapchat, FaTiktok, FaGoogle } from "react-icons/fa6";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionBadge from "@/components/Badge"

const platforms = [
  { name: "Meta", icon: FaMeta, iconColor: "text-[#0064E0]" },
  { name: "Google", icon: FaGoogle, iconColor: "text-[#4285F4]" },
  { name: "TikTok", icon: FaTiktok, iconColor: "text-foreground" },
  {
    name: "Snapchat",
    icon: FaSnapchat,
    iconColor: "text-yellow-500 drop-shadow-[0_0_8px_rgba(255,252,0,0.2)]",
  },
];

export default function AgencyPlatformHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* LEFT: COPY */}
        <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 2 }}
         className="space-y-8">
          <SectionBadge text="Digest Media Strategy" />

          <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} className="text-5xl font-black text-neutral-950 dark:text-neutral-100">
            Grow 10X Faster with<br/>
            <span className="text-[#E72D87] font-serif italic font-light">Innate Branding</span>
          </motion.h1>

          <p className="text-neutral-600 dark:text-neutral-100 text-lg max-w-lg">
            Growing a business can be tough. Our mission is to make it easier,
            more predictable, less stressful, and even enjoyable for you.
          </p>

          <div className="pt-4 md:pt-0">
            <Link
              href="/contact"
              className="flex items-center space-x-3 group hover:scale-105 transition-all transform ease-out cursor-pointer max-w-72  md:mx-0"
            >
              <Button variant={"digest"} className="px-7 py-7 overflow-hidden">
                <div className="relative flex flex-col overflow-hidden">
                  <span className="inline-block transition-transform duration-500 ease-out transform group-hover:-translate-y-full">
                    Get Started
                  </span>

                  <span className="absolute left-0 inline-block transition-transform duration-500 ease-out transform translate-y-full group-hover:translate-y-0">
                    Get Started
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
        </motion.div>

        {/* RIGHT: PLATFORM DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.70 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="relative dark:bg-white/5 backdrop-blur-2xl border dark:border-white/10 p-8 rounded-[2rem] border-[#E72D87]/30 bg-pink-200/10"
        >
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-bold text-lg">Platform Hub</h3>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          {/* Platform Badges */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 dark:bg-black/40 bg-black/5 p-4 rounded-2xl border dark:border-white/5 border-pink-200"
              >
                <p.icon className={`w-6 h-6 ${p.iconColor || ""}`} />
                <span className="text-sm font-semibold">{p.name}</span>
              </div>
            ))}
          </div>

          {/* Metric Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Verified Accounts", val: "100%", icon: ShieldCheck },
              { label: "Stability", val: "99.9%", icon: Zap },
              { label: "Active Spend", val: "$6M+", icon: BarChart3 },
              { label: "Activation", val: "Instant", icon: TrendingUp },
            ].map((m, i) => (
              <div
                key={i}
                className="dark:bg-white/5 bg-stone-50/30 p-4 rounded-2xl border dark:border-white/5 border-pink-200"
              >
                <m.icon className="w-4 h-4 mb-2 text-[#E72D87]" />
                <p className="text-xs text-neutral-400">{m.label}</p>
                <p className="text-lg font-bold">{m.val}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
