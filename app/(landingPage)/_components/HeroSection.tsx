"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  Mail,
  Send,
  Star,
} from "lucide-react";
import { FaMeta, FaSnapchat, FaTiktok, FaGoogle } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/Badge";

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

const metrics = [
  { label: "Verified Accounts", val: "100%", icon: ShieldCheck },
  { label: "Stability", val: "99.9%", icon: Zap },
  { label: "Active Spend", val: "$6M+", icon: BarChart3 },
  { label: "Activation", val: "Instant", icon: TrendingUp },
];

const clientAvatars = [
  {
    name: "Max S.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
  },
  {
    name: "Oliver B.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
  },
  {
    name: "Carl W.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
  },
];

const partnerLogos = [
  "Bustem",
  "Incogniton",
  "MoreLogin",
  "Engain",
  "Slash",
  "SocialPlug",
  "Floxy",
  "Foreplay",
  "Chargeback",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AgencyPlatformHero() {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-15 lg:pt-28 pb-12 overflow-hidden">
      <div className="2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 w-full px-4 md:px-6 my-auto">
        {/* LEFT: COPY & ACTIONS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* BADGES & SOCIAL PROOF */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3"
          >
            <SectionBadge text="Digest Media Strategy" />
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E72D87]/20 bg-white/40 dark:bg-[#1A0C13]/60 px-2.5 py-1 backdrop-blur-md">
              <div className="flex -space-x-1.5">
                {clientAvatars.map((client, idx) => (
                  <Image
                    key={idx}
                    src={client.img}
                    alt={client.name}
                    width={50}
                    height={50}
                    className="w-4 h-4 rounded-full border border-[#E72D87]/40 object-cover"
                  />
                ))}
              </div>
              <span className="text-[10px] font-medium text-neutral-800 dark:text-[#FCEFF5]/80">
                140+ Active Advertisers
              </span>
            </div>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-neutral-100 leading-[1.1]"
          >
            Grow 10X Faster with
            <br />
            <span className="text-[#E72D87] font-serif italic font-light">
              Innate Branding
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={itemVariants}
            className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-lg leading-relaxed"
          >
            Growing a business can be tough. Our mission is to make it easier,
            more predictable, less stressful, and even enjoyable for you.
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link href="/contact">
              <Button
                variant="outline"
                className="h-12 cursor-pointer px-5 rounded-xl border border-[#E72D87]/30 bg-white/30 dark:bg-[#16060F]/40 text-neutral-900 dark:text-[#FCEFF5] hover:bg-pink-100/50 dark:hover:bg-white/5 text-xs font-semibold gap-2 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#E72D87]" />
                Contact Us
              </Button>
            </Link>
            <Link href="https://t.me/" target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                className="h-12 cursor-pointer px-5 rounded-xl border border-[#E72D87]/30 bg-white/30 dark:bg-[#16060F]/40 text-neutral-900 dark:text-[#FCEFF5] hover:bg-pink-100/50 dark:hover:bg-white/5 text-xs font-semibold gap-2 transition-all"
              >
                <Send className="w-3.5 h-3.5 text-[#E72D87]" />
                Chat with us
              </Button>
            </Link>
          </motion.div>

          {/* RATING & SOCIAL PROOF */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2.5 pt-1"
          >
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
              <strong className="text-neutral-900 dark:text-white font-bold">
                4.8
              </strong>{" "}
              rating across Trustpilot & G2
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT: PLATFORM HUB DASHBOARD */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative dark:bg-[#14070F]/80 bg-white/60 backdrop-blur-2xl border dark:border-[#E72D87]/20 border-[#E72D87]/25 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6"
          >
            {/* HUB HEADER */}
            <div className="flex justify-between items-center pb-4 border-b border-black/5 dark:border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E72D87] animate-pulse" />
                <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                  Platform Hub
                </h3>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
            </div>

            {/* PLATFORM BADGES */}
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center gap-3 dark:bg-white/3 bg-pink-50/50 p-3.5 rounded-2xl border dark:border-white/5 border-[#E72D87]/15 hover:border-[#E72D87]/40 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-white dark:bg-black/40 border border-[#E72D87]/15 shrink-0 shadow-xs">
                    <p.icon className={`w-4 h-4 ${p.iconColor || ""}`} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 block group-hover:text-[#E72D87] transition-colors">
                      {p.name}
                    </span>
                    <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-medium">
                      Whitelisted
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* METRICS GRID */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className="dark:bg-[#1A0A14]/70 bg-white/80 p-3.5 rounded-2xl border dark:border-white/5 border-[#E72D87]/15 shadow-xs"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <m.icon className="w-4 h-4 text-[#E72D87]" />
                    <span className="text-[9px] text-[#E72D87] bg-[#E72D87]/10 px-1.5 py-0.5 rounded-md font-semibold uppercase">
                      Live
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                    {m.label}
                  </p>
                  <p className="text-lg font-bold text-neutral-950 dark:text-neutral-100 tracking-tight">
                    {m.val}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="flex items-center justify-center pt-5 space-x-5">
            <Image src="/users-love-us.svg" alt="googleRating" width={60} height={60} className="w-25" />
            <Image src="/google-rating.svg" alt="googleRating" width={60} height={60} className="w-40" />
          </div>
        </div>
      </div>

      {/* BOTTOM PARTNER LOGO BANNER */}
      <div className="w-full 2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto px-4 md:px-6 pt-8 z-10">
        <div className="border-t border-[#E72D87]/15 pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-semibold text-neutral-500 dark:text-[#FCEFF5]/40 uppercase tracking-widest shrink-0">
            Trusted by performance agencies using
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-7 gap-y-2 opacity-60 grayscale hover:grayscale-0 transition-all">
            {partnerLogos.map((brand) => (
              <span
                key={brand}
                className="text-xs font-semibold text-neutral-700 dark:text-neutral-300"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
