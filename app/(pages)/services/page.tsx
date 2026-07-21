"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

import Image from "next/image";

import { FaMeta, FaSnapchat, FaTiktok, FaGoogle } from "react-icons/fa6";

import {
  MdOutlinePalette,
  MdOutlineDashboardCustomize,
  MdOutlineVideoLibrary,
  MdOutlineCode,
} from "react-icons/md";

import { HiArrowUpRight } from "react-icons/hi2";

import { MoveUpRight } from "lucide-react";

import { AccordionBasic } from "./../../../components/Accordions";
import SectionBadge from "@/components/Badge";
import { Button } from "@/components/ui/button";

interface ServiceItem {
  title: string;

  desc: string;

  accent: string;

  icon?: React.ComponentType<{ className?: string }>;

  imageSrc?: string;

  iconColor?: string;
}

interface TabData {
  title: string;

  items: ServiceItem[];
}

const servicesData: Record<string, TabData> = {
  "paid-advertising": {
    title: "Paid Advertising",

    items: [
      {
        icon: FaMeta,

        title: "Meta",

        desc: "From Facebook to Instagram, the realm of social networks is vast. With a wide range of targeting choices and campaign possibilities, you can reach your desired audience with pinpoint accuracy. So, why wait any longer ? Start now!",

        iconColor: "text-[#0064E0]",

        accent: "from-blue-600/10 to-transparent",
      },

      {
        icon: FaSnapchat,

        title: "Snapchat",

        desc: "Snapchat advertising is different from other social media advertising because of its unique features and target audience. For businesses to succeed on this platform, they need to create content that is not only visually appealing.",

        iconColor: "text-yellow-500 drop-shadow-[0_0_8px_rgba(255,252,0,0.2)]",

        accent: "from-yellow-500/10 to-transparent",
      },

      {
        icon: FaTiktok,

        title: "Tiktok",

        desc: "TikTok advertising is an effective way for brands to build their brand natively through competitive CPM, and audience-specific targeting. As a TikTok marketing agency, we will help you get the best of TikTok as a platform.",

        iconColor: "text-foreground",

        accent: "from-slate-800/20 to-transparent",
      },

      {
        icon: FaGoogle,

        title: "Google",

        desc: "Ascend to the summit of Google's search results without draining your budget! Achieving prominence in Google Ads relies on three vital elements: the excellence of your ads, the allure of your webpage, and your strategic bid management.",

        iconColor: "text-[#4285F4]",

        accent: "from-emerald-600/10 to-transparent",
      },
    ],
  },

  "design-development": {
    title: "Design & Development",

    items: [
      {
        icon: MdOutlinePalette,

        title: "Graphic Design",

        desc: "Our team has meticulously crafted thousands of high-performance visuals, and this package is a standard inclusion in all our contracts.",

        iconColor: "text-[#E72D87]",

        accent: "from-pink-600/10 to-transparent",
      },

      {
        icon: MdOutlineDashboardCustomize,

        title: "Landing Pages",

        desc: "Creating landing pages may be easy, but crafting ones that actually convert is a true art mastered to perfection by our team.",

        iconColor: "text-[#E72D87]",

        accent: "from-purple-600/10 to-transparent",
      },

      {
        icon: MdOutlineVideoLibrary,

        title: "Video Creations",

        desc: "Videos are a powerful tool for driving conversions, and our team can produce effective videos tailored to your brand.",

        iconColor: "text-[#E72D87]",

        accent: "from-red-600/10 to-transparent",
      },

      {
        icon: MdOutlineCode,

        title: "Website Design & Development",

        desc: "Our expert team can give your website a makeover, enhancing its beauty, usability, and speed to supercharge your conversion rates.",

        iconColor: "text-[#E72D87]",

        accent: "from-[#E72D87]/10 to-transparent",
      },
    ],
  },

  "agency-accounts": {
    title: "Agency Accounts Solution",

    items: [
      {
        icon: FaMeta,

        title: "Meta Accounts",

        desc: "Enhance your Facebook advertising efforts through our Enterprise-Level Ad Account service, tailored for businesses like yours facing disabled Facebook accounts.",

        iconColor: "text-[#0064E0]",

        accent: "from-blue-600/10 to-transparent",
      },

      {
        icon: FaTiktok,

        title: "Tiktok Accounts",

        desc: "Supercharge your TikTok advertising with our Enterprise-Level Ad Account service, crafted for businesses like yours handling disabled TikTok accounts.",

        iconColor: "text-foreground",

        accent: "from-slate-800/20 to-transparent",
      },

      {
        icon: FaSnapchat,

        title: "Snapchat Accounts",

        desc: "Amplify your Snapchat advertising efforts with our Enterprise-Level Ad Account service, designed for businesses like yours dealing with disabled Snapchat accounts.",

        iconColor: "text-yellow-500",

        accent: "from-yellow-500/10 to-transparent",
      },

      {
        icon: FaGoogle,

        title: "Google Accounts",

        desc: "Elevate your Google advertising strategy with our Enterprise-Level Ad Account service, tailored for businesses like yours coping with disabled Google accounts.",

        iconColor: "text-[#4285F4]",

        accent: "from-emerald-600/10 to-transparent",
      },

      {
        imageSrc: "/Taboola-2.svg",

        title: "Taboola Accounts",

        desc: "Boost your Taboola advertising strategy with our Enterprise-Level Ad Account service, customized for businesses like yours dealing with disabled Taboola accounts.",

        accent: "from-blue-700/10 to-transparent",
      },

      {
        imageSrc: "/Outbrain.webp",

        title: "Outbrain Accounts",

        desc: "Enhance your Outbrain advertising strategy with our Enterprise-Level Ad Account service, designed for businesses like yours addressing disabled Outbrain accounts.",

        accent: "from-orange-600/10 to-transparent",
      },

      {
        imageSrc: "/bing1.svg",

        title: "Bing Accounts",

        desc: "Maximize your premium traffic potential with our Enterprise-Level Ad Account service, specifically designed for businesses like yours handling disabled Bing accounts.",

        accent: "from-blue-600/10 to-transparent",
      },
    ],
  },
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof servicesData>("paid-advertising");

  return (
    <main className="text-foreground min-h-screen relative overflow-hidden font-sans pt-28 pb-20">
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `

            linear-gradient(to right, rgba(231, 45, 135, 0.25) 1px, transparent 1px),

            linear-gradient(to bottom, rgba(231, 45, 135, 0.25) 1px, transparent 1px)

          `,

          backgroundSize: "40px 40px",

          maskImage:
            "radial-gradient(circle at center, black 50%, transparent 95%)",

          WebkitMaskImage:
            "radial-gradient(circle at center, black 50%, transparent 95%)",
        }}
      />

      <div className="absolute top-10 right-1/4 w-72 h-72 md:w-112.5 md:h-112.5 bg-[#E72D87]/5 blur-[100px] md:blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 md:w-125 md:h-125 bg-pink-900/10 blur-[110px] md:blur-[160px] pointer-events-none rounded-full" />
      <div className="w-full 2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto relative z-10 space-y-12 md:space-y-16">
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-4 md:space-y-6"
        >
          <SectionBadge text="Our Services" />

          <h2 className="text-3xl md:text-6xl font-normal tracking-tight leading-[1.2] md:leading-[1.15]">
            What We{" "}
            <span className="font-serif italic font-light text-[#E72D87]">
              Deliver
            </span>
          </h2>

          <p className="text-muted-foreground text-xs md:text-base font-light leading-relaxed max-w-xl mx-auto px-2">
            We design modern brands, build high-performance websites, and manage
            performance advertising campaigns to scale your digital presence.
          </p>
        </motion.section>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className="w-full flex justify-start md:justify-center overflow-x-auto scrollbar-thumb-pink-500 pb-2 -mx-5 px-4 md:mx-0 md:px-0">
          <div className="flex space-x-2 p-1.5 bg-neutral-100 dark:bg-neutral-900/40 border border-border/60 rounded-full backdrop-blur-md whitespace-nowrap shrink-0">
            {(
              Object.keys(servicesData) as Array<keyof typeof servicesData>
            ).map((tabKey) => {
              const tab = servicesData[tabKey];

              const isActive = activeTab === tabKey;

              return (
                <Button
                  variant={"digest"}
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`relative px-7 py-5 text-xs md:text-sm font-medium cursor-pointer shadow-none ${
                    isActive
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground bg-transparent hover:bg-accent"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="servicesActiveTab"
                      className="absolute inset-0 bg-[#E72D87] rounded-full shadow-[0_4px_15px_rgba(231,45,135,0.3)]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{tab.title}</span>
                </Button>
              );
            })}
          </div>
        </motion.div>

        <div className="min-h-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            >
              {servicesData[activeTab].items.map((item, idx) => {
                const IconComponent = item.icon;

                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-card/40 dark:bg-neutral-950/20 border border-border/60 hover:border-[#E72D87]/40 p-6 md:p-8 rounded-[2rem] backdrop-blur-md transition-colors duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-b ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none`}
                    />

                    <div className="space-y-6 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-900/50 flex items-center justify-center border border-border/40 overflow-hidden p-2.5 transition-transform duration-300 group-hover:scale-105">
                          {item.imageSrc ? (
                            <Image
                              src={item.imageSrc}
                              alt={`${item.title} icon`}
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          ) : IconComponent ? (
                            <IconComponent
                              className={`w-6 h-6 ${item.iconColor || ""}`}
                            />
                          ) : null}
                        </div>

                        <span className="text-[10px] text-muted-foreground/30 font-mono">
                          / 0{idx + 1}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-medium tracking-tight text-foreground">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground text-xs leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 relative z-10">
                      <Link href="/contact" passHref legacyBehavior>
                        <motion.a
                          whileHover={{ gap: "6px" }}
                          className="inline-flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider text-[#E72D87] cursor-pointer"
                        >
                          <span>Get Started</span>

                          <HiArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.a>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className="space-y-12 py-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight">
              How We{" "}
              <span className="font-serif italic font-light text-[#E72D87]">
                Deliver
              </span>
            </h2>

            <p className="text-muted-foreground text-xs md:text-sm font-light leading-relaxed max-w-md mx-auto">
              Got questions about our production cycles, pricing structures, or
              account rentals? Here is how we build and scale your systems.
            </p>
          </div>

          <div>
            <AccordionBasic />
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, scale: 0.70 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] p-8 text-center md:flex md:items-center md:justify-between md:text-left md:p-12 gap-6 relative overflow-hidden shadow-xl backdrop-blur-md bg-white/30 dark:bg-black/50"
        >
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl md:text-2xl font-normal tracking-tight">
              Ready to construct high-yield asset architectures?
            </h3>

            <p className="text-muted-foreground text-xs font-light leading-relaxed">
              Book a live synchronization meeting. We will map your system
              mechanics and design bespoke, clean frameworks matching your
              precise expansion deadlines.
            </p>
          </div>

          <div className="flex items-center justify-center pt-5 lg:pt-0">
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-3 group hover:scale-95 transition-all transform ease-out cursor-pointer max-w-64 mx-auto md:mx-0"
            >
              <Button variant={"digest"} className="px-10 py-7 overflow-hidden">
                <div className="relative flex flex-col overflow-hidden">
                  <span className="inline-block transition-transform duration-500 ease-out transform group-hover:-translate-y-full">
                    Book an Audit
                  </span>

                  <span className="absolute left-0 inline-block transition-transform duration-500 ease-out transform translate-y-full group-hover:translate-y-0">
                    Book an Audit
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
        </motion.section>
      </div>
    </main>
  );
}
