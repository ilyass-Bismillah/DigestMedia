"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

const teamMembers = [
  { name: "Alex", role: "Founder & Lead", bio: "Architecting scalable digital ecosystems." },
  { name: "Sarah", role: "Creative Director", bio: "Visual storytelling that converts." },
  { name: "Alex", role: "Ads Strategist", bio: "Data-driven growth & performance." },
  { name: "Sarah", role: "Web Designer", bio: "Crafting intuitive user interfaces." },
  { name: "Mehdi", role: "Fullstack Dev", bio: "Zero-latency code execution." },
  { name: "Rim", role: "Brand Strategist", bio: "Identity engineering for scale." },
  { name: "Omar", role: "Growth Hacker", bio: "Scaling performance funnels." },
  { name: "Yassine", role: "UI/UX Engineer", bio: "Seamless digital interactions." },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Animation */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter dark:text-white text-neutral-900 mb-6">
            Meet the <span className="text-[#E72D87] font-serif italic">Team</span>
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -8 }} 
              className="relative group cursor-pointer h-full"
            >
              {/* Neon Glow Animation */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#E72D87] to-purple-600 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
              
              <div className="relative h-full flex flex-col justify-between bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 p-8 rounded-[2rem] backdrop-blur-md transition-colors duration-500 overflow-hidden">
                
                {/* Background Watermark Number */}
                <span className="absolute right-6 top-6 text-5xl font-black text-neutral-200/40 dark:text-neutral-800/40 select-none pointer-events-none group-hover:text-[#E72D87]/10 transition-colors duration-500">
                  0{i + 1}
                </span>

                <div>
                  {/* Avatar Animation */}
                  <motion.div 
                    whileHover={{ scale: 1.12, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-14 h-14 rounded-2xl bg-linear-to-tr from-[#E72D87] to-purple-500 mb-6 shadow-lg shadow-[#E72D87]/20" 
                  />
                  
                  <h3 className="text-xl font-bold dark:text-white text-neutral-900 mb-1">{member.name}</h3>
                  <p className="text-[#E72D87] text-xs font-mono font-bold uppercase tracking-widest mb-4">{member.role}</p>
                </div>

                <div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed font-light mb-6">{member.bio}</p>

                  {/* Social Icons Animation */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex gap-4 pt-4 border-t border-neutral-200 dark:border-white/5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.a whileHover={{ scale: 1.2, y: -2 }} className="text-[#E72D87] cursor-pointer text-lg">
                      <FaLinkedin />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2, y: -2 }} className="text-[#E72D87] cursor-pointer text-lg">
                      <FaTwitter />
                    </motion.a>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}