"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Platforms from "@/components/Platforms";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mark Voronov",
    role: "Co-Founder & Chief Executive Officer (CEO)",
    bio: "Pioneered high-volume media buying infrastructure, managing multi-million monthly spend across global Meta & Google ecosystems.",
    image: "/2.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  {
    name: "Joosep Seitam",
    role: "Co-Founder & Chief Marketing Officer (CMO)",
    bio: "Specializes in performance econometrics, conversion rate engineering, and scaling whitelisted multi-account agency architectures.",
    image: "/2.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  {
    name: "Lukas Lainsalu",
    role: "Head of Client Growth",
    bio: "Leads advertiser onboarding and bespoke account allocations, matching high-growth DTC brands with dedicated agency lines.",
    image: "/2.webp",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Marten Mätlik",
    role: "Chief Operations Officer",
    bio: "Architects zero-downtime compliance systems, 24/7 account health monitoring, and tier-1 partner replacement protocols.",
    image: "/2.webp",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Maria Magisay",
    role: "Head of Partner Success",
    bio: "Directs client communication and account whitelisting workflows, ensuring sub-2-hour SLA responses for critical requests.",
    image: "/2.webp",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Martin Kärdi",
    role: "Senior Media Buying Lead",
    bio: "Master of algorithmic budget pacing, creative testing frameworks, and high-velocity horizontal scaling on Meta & TikTok.",
    image: "/2.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  {
    name: "David Ryabchikov",
    role: "Lead Infrastructure Engineer",
    bio: "Focuses on Server-Side CAPI integrations, direct API data connectors, and automated billing limit management.",
    image: "/2.webp",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Zack Ahmed",
    role: "E-commerce Strategy Director",
    bio: "Directs advertorial copywriting frameworks and native discovery funnels across Taboola, Outbrain, and Microsoft Advertising.",
    image: "/2.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  {
    name: "Ehar Kala",
    role: "Senior Account Manager",
    bio: "Ensures frictionless daily operations, ad credit liquidity management, and instant asset replacement for VIP partners.",
    image: "",
    linkedin: "https://linkedin.com",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Team = () => {
  return (
    <div className="min-h-screen py-15 overflow-x-hidden">
      <div className="relative z-10 2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto space-y-24">
        {/* 1. Hero Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-pink-600/10 border border-pink-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold dark:text-pink-300 text-pink-600 shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 dark:text-pink-400 text-pink-600" />
            Direct Media Infrastructure Specialists
          </motion.div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15]">
            Meet the Team Behind Your Advertising Success
          </h1>

          <p className="dark:text-slate-400 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            We are a dedicated team of performance engineers, media buyers, and
            compliance specialists committed to eliminating ad account
            limitations and unlocking uncapped scale.
          </p>

          <div className="pt-2">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-xs text-white font-bold transition-all shadow-lg shadow-pink-950/50"
              >
                Work With Us <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* 2. Team Grid Section */}
        <section className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between border-b dark:border-pink-950/40 pb-6 gap-4"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
                Leadership & Specialists
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
                Meet the Digest Media Team
              </h2>
            </div>
            <p className="text-xs dark:text-slate-400 text-slate-600 max-w-sm font-light">
              The operational backbone ensuring your ad accounts maintain 99.9%
              uptime and zero spending friction.
            </p>
          </motion.div>

          {/* Staggered Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-3xl border dark:border-pink-950/40 border-pink-400/40 dark:bg-slate-800/20 bg-slate-300/20 backdrop-blur-md flex flex-col justify-between space-y-6 hover:border-pink-800/60 transition-colors group shadow-lg"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden dark:bg-slate-900 bg-pink-400 border dark:border-pink-900/40 border-pink-400/40 shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="w-full h-full flex items-center justify-center font-bold text-lg dark:text-pink-300 text-pink-800 dark:bg-pink-950/40 bg-pink-400/40">
                        {member.name[0]}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold dark:group-hover:text-pink-300 group-hover:text-pink-500 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium text-pink-400/90">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t dark:border-pink-950/30 border-pink-400/30">
                  {member.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.92 }}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg dark:bg-pink-950/40 bg-pink-400/40 border dark:border-pink-900/30 border-pink-400/30 flex items-center justify-center dark:text-slate-400 text-slate-800 hover:text-pink-800 hover:border-pink-500 transition-colors"
                    >
                      <FaLinkedinIn className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                  {member.twitter && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.92 }}
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg dark:bg-pink-950/40 bg-pink-400/40 border dark:border-pink-900/30 border-pink-400/30 flex items-center justify-center dark:text-slate-400 text-slate-800 hover:text-pink-800 hover:border-pink-500 transition-colors"
                    >
                      <FaXTwitter className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 3. Platforms Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <Platforms />
        </motion.div>

        {/* 4. Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border dark:border-pink-950/40  dark:bg-slate-950/50 bg-slate-400/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md shadow-lg"
        >
          <div className="space-y-1 max-w-md">
            <h3 className="text-xl font-bold">
              Subscribe to our newsletter
            </h3>
            <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed font-light">
              Get behind-the-scenes insights, account infrastructure updates,
              and media buying strategies directly to your inbox.
            </p>
          </div>

          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2.5 rounded-xl dark:bg-slate-900/80 bg-white/10 border dark:border-slate-800 border-slate-300 text-xs focus:outline-none focus:border-pink-500 w-full sm:w-64 transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="cursor-pointer px-7 py-4 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0"
            >
              Get Access <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </form>
        </motion.section>
      </div>
    </div>
  );
};

export default Team;
