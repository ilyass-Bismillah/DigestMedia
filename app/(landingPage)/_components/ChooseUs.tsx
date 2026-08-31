"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MoveUpRight, ArrowRight } from "lucide-react";
import {
  Avatar,
  AvatarGroup,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button"

const features = [
  {
    id: 1,
    num: "01",
    title: (
      <>
        Algorithmic Scaling &{" "}
        <span className="font-serif italic font-normal text-[#E72D87]">
          Paid Media.
        </span>
      </>
    ),
    description:
      "We engineer high-performance ad ecosystems across Meta, TikTok, and Google to capture peak buyer intent and crush customer acquisition costs.",
    src: "/dashboard.jpg",
  },
  {
    id: 2,
    num: "02",
    title: (
      <>
        Elite Web Engineering &{" "}
        <span className="font-serif italic font-normal text-[#E72D87]">
          High-End UX.
        </span>
      </>
    ),
    description:
      "We design custom web platforms and conversion-focused architectures built for absolute speed, seamless UX, and massive conversion lift.",
    src: "/design.jpg",
  },
  {
    id: 3,
    num: "03",
    title: (
      <>
        Enterprise Account{" "}
        <span className="font-serif italic font-normal text-[#E72D87]">
          Infrastructure.
        </span>
      </>
    ),
    description:
      "Bypass scaling bottlenecks with our enterprise-level agency ad accounts built to survive shutdowns and power aggressive, unlimited growth.",
    src: "/digital.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.20, 
      delayChildren: 0.10
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 80 }, 
  show: {
    opacity: 1,
    x: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15
    },
  },
};
export default function ChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className="w-full py-24 px-6 lg:px-16 relative overflow-hidden font-sans">
      <div className="2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* Left Panel: Static/Sticky Info Engine */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 1.5 }} viewport={{ once: true, margin: "-100px" }}>
            <span className="inline-flex items-center rounded-full bg-rose-100/60 dark:bg-rose-950/20 px-3 py-1.5 text-xs font-semibold tracking-widest text-[#E72D87] mb-6 border border-[#E72D87]/10 uppercase">
                Digest Media Engine
            </span>
            <h2 className="text-5xl font-black tracking-tight leading-[1.05] uppercase">
              Precision <br />
              Drives Our <br />
              <span className="font-serif italic font-light text-[#E72D87] lowercase">growth.</span>
            </h2>
          </motion.div>

          <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed max-w-md">
            At Digest Media, we don&apos;t just run campaigns—we build bulletproof digital architectures. We combine elite paid media management, high-end web engineering, and enterprise ad infrastructure to scale ambitious brands globally.
          </p>

          {/* Action Trigger Components */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link href="/team" className="group">
              <Button variant={"digest"} className="px-5 py-7 hover:scale-105">
                <AvatarGroup className="grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Avatar className="w-6 h-6 border-background">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6 border-background">
                    <AvatarImage src="https://github.com/maxleiter.png" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                </AvatarGroup>
                <span className="text-sm">Meet The Team</span>
              </Button>
            </Link>

            <Link href="/services" className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-[#E72D87] transition-colors duration-300">
              <span>Explore Services</span>
              <MoveUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Right Panel: Interactive Show Track */}
        <motion.div variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
           className="lg:col-span-7 space-y-4 w-full">
          {features.map((item, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                variants={itemVariants}
                viewport={{ once: true, margin: "-100px" }}
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative py-10 border-b border-neutral-200/60 dark:border-zinc-800/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group cursor-pointer transition-all duration-300"
              >
                
                {/* Huge Background Typography Mask */}
                <span className="absolute right-0 bottom-4 text-[7rem] md:text-[11rem] font-black leading-none text-neutral-100/50 dark:text-zinc-900/40 select-none pointer-events-none transition-colors duration-500 group-hover:text-[#E72D87]/5 z-0">
                  {item.num}
                </span>

                {/* Left Block inside Row: Info Meta Stack */}
                <div className="space-y-4 max-w-xl relative z-10 flex-1">
                  <span className="text-xs text-[#E72D87] opacity-60 block">
                    DIGEST INFRASTRUCTURE {item.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Expandable Smooth Description Track */}
                  <p className="text-muted-foreground text-xs md:text-sm font-light leading-relaxed max-w-md transition-all duration-300 group-hover:text-foreground/90">
                    {item.description}
                  </p>
                </div>

                {/* Right Block inside Row: Fluid Hover Frame Asset */}
                <div className="relative w-full md:w-48 h-32 md:h-28 rounded-2xl overflow-hidden shrink-0 bg-neutral-100 dark:bg-zinc-900 border border-border/30 shadow-xs z-10">
                  
                  {/* Interactive Inner Image Shift */}
                  <motion.div
                    className="w-full h-full relative"
                    animate={{ 
                      scale: isHovered ? 1.08 : 1.0,
                      y: isHovered ? -4 : 0 
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  >
                    <Image
                      src={item.src}
                      alt="Digest media structural node preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Overlaid Micro Interactive Arrow indicator */}
                  <div className="absolute inset-0 bg-black/30 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: isHovered ? 1 : 0.7 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                      className="w-10 h-10 rounded-full bg-[#E72D87] text-white flex items-center justify-center shadow-lg"
                    >
                      <ArrowRight className="w-5 h-5 stroke-2" />
                    </motion.div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
}