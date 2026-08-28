"use client";

import { FaMeta, FaTiktok, FaGoogle, FaFacebook } from "react-icons/fa6";
import type { IconType } from "react-icons";
import Image from "next/image";
import { motion } from "framer-motion";

interface PlatformItem {
  name: string;
  icon?: IconType;
  image?: string;
  iconBg?: string;
  isMain?: boolean;
}

const platforms: PlatformItem[] = [
  {
    name: "Meta",
    icon: FaMeta,
    iconBg: "text-blue-500",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    iconBg: "text-pink-400",
  },
  {
    name: "Bing",
    image: "/bing1.svg",
    iconBg: "text-cyan-400",
  },
  { name: "Digest Media", image: "/2.webp", isMain: true },
  {
    name: "Google",
    icon: FaGoogle,
    iconBg: "text-emerald-400",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    iconBg: "text-blue-400",
  },
  {
    name: "Taboola",
    image: "/Taboola-2.svg",
    iconBg: "text-blue-400",
  },
];

const Platforms = () => {
  return (
    <div className="relative pt-12 border-t border-slate-200 dark:border-pink-950/30">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.7, ease: "easeInOut" }}
        className="hidden md:block absolute top-25 left-[22%] right-[22%] h-0.5 bg-linear-to-r from-pink-500/10 via-pink-800/50 to-pink-500/10 z-0 origin-left"
      />
      <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
        {platforms.map((platform, idx) => {
          const Icon = platform.icon;

          return (
            <div
              key={idx}
              className={`flex items-center justify-center rounded-2xl border transition-all duration-300 ${
                platform.isMain
                  ? "w-25 h-25 sm:w-28 sm:h-28 dark:bg-[#1c0514] bg-white border-pink-500/60 shadow-xl shadow-pink-950/50 p-3 scale-105"
                  : "w-20 h-20 sm:w-20 sm:h-20 dark:bg-[#170613] bg-white border-pink-900/30 p-4 backdrop-opacity-100 hover:opacity-90 hover:border-pink-500/50 hover:scale-105"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center">
                {Icon ? (
                  <Icon
                    className={`w-10 h-10 sm:w-8 sm:h-8 rounded-lg border-0 bg-transparent ${platform.iconBg || ""}`}
                  />
                ) : platform.image ? (
                  <Image
                    src={platform.image}
                    alt={platform.name}
                    width={150}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Platforms;