"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import SpotlightCard from "../../../components/SpotlightCard"; 

const Partners = [
  { name: "Google", src: "/OurPartners/google.svg" },
  { name: "Meta", src: "/OurPartners/meta.webp" },
  { name: "TikTok", src: "/OurPartners/tiktok.webp" },
  { name: "Bing", src: "/OurPartners/bing.svg" },
  { name: "Yahoo", src: "/OurPartners/yahoo.webp" },
  { name: "Snapchat", src: "/OurPartners/snap.svg" },
  { name: "Taboola", src: "/OurPartners/taboola.svg" },
  { name: "Driver", src: "/OurPartners/display.svg" },
  { name: "Outbrain", src: "/OurPartners/outbrain.svg" },
  { name: "Zemanta", src: "/OurPartners/zemanta.svg" },
];

//  Framer Motion Variants for Staggered Fade-in up Animation
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06, // Stagger effect layers
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 110, damping: 14 } 
  },
};

export default function OurPartners() {

  return (
    <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className="w-full py-24 relative overflow-hidden">
      
      {/* Title Section */}
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className="w-full text-center mb-16 relative flex flex-col items-center justify-center">
        <span className="inline-flex items-center rounded-full bg-rose-100/60 dark:bg-rose-950/30 px-3 py-1 text-xs font-semibold tracking-widest text-[#E72D87] mb-4 border border-[#E72D87]/20 uppercase">
          Network
        </span>
        <h2 className="relative font-black tracking-tight text-4xl md:text-5xl text-foreground">
          Our{" "}
          <span className="font-serif italic font-light text-[#E72D87]">
            Partners
          </span>
        </h2>
      </motion.div>

      {/* Grid Architecture Container */}
      <div className="2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }} // Triggers when section enters view
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5"
        >
          {Partners.map((partner) => (
            <motion.div key={partner.name} variants={cardVariants}>
              <SpotlightCard
                //  Overriding default p-8 with p-5! to give layout spacing for the images
                className="w-full h-24 md:h-28 p-5! flex items-center justify-center dark:bg-pink-100/20 bg-pink-100/30  backdrop-blur-2xl rounded-2xl border border-border cursor-pointer transition-all duration-300 group overflow-hidden shadow-sm"
              >
                {/* Safe layout layer that centers the image regardless of Spotlight's inner flex layout */}
                <div className="w-full h-full flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={130}
                    height={45}
                    className="object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </motion.section>
  );
}