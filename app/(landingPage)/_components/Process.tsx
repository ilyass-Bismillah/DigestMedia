"use client";
import React from "react";
import { ClipboardList, Palette, Settings, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Plan & Initiate",
    description:
      "Deep dive into strategy, requirements gathering, and setting up clean milestones.",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "Design & Create",
    description:
      "Crafting beautiful, high-converting modern interfaces tailored to your target audience.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Execute & Monitor",
    description:
      "Flawless development and integration with continuous testing and performance checks.",
    icon: Settings,
  },
  {
    id: 4,
    title: "Project Done",
    description:
      "Final optimization, successful deployment, and handoff of a premium digital asset.",
    icon: CheckCircle2,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  },
};

export default function OurProcessSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className=" py-24 px-6 font-sans relative overflow-hidden">
      <div className="2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-lg mx-auto mb-20"
        >
          <h2 className="inline-flex items-center rounded-full bg-rose-100 dark:bg-rose-950 px-3 py-1 text-sm font-medium text-[#E72D87] mb-6 border border-[#E72D87]">
            Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-normal tracking-tight mb-4 text-foreground">
            Our{" "}
            <span className="font-serif italic font-light text-[#E72D87]">
              Process
            </span>
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Ensure you secure the ideal solution that aligns seamlessly with
            your unique goals and aspirations.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.7, ease: "easeInOut" }}
            className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-linear-to-r from-pink-500/10 via-pink-500/40 to-pink-500/10 z-0 origin-left"
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
          >
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === processSteps.length - 1;

              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isLast ? "bg-pink-600/30" : "bg-pink-500/20"
                      }`}
                    />

                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className={`w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isLast
                          ? "bg-linear-to-br from-pink-400 to-pink-600 border-pink-500 text-white shadow-lg shadow-pink-500/20"
                          : "bg-background border-border text-pink-500 dark:text-pink-400 group-hover:border-[#E72D87] group-hover:text-[#E72D87]"
                      }`}
                    >
                      <IconComponent
                        className={`w-8 h-8 ${isLast ? "stroke-2" : "stroke-[1.5]"}`}
                      />
                    </motion.div>

                    <span className="absolute -top-1 -right-1 bg-pink-900 text-pink-100 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border border-pink-500/30 select-none">
                      {step.id}
                    </span>
                  </div>

                  <div className="px-2">
                    <h3 className="text-xl font-medium mb-3 transition-colors duration-300 text-foreground group-hover:text-[#E72D87]">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}