"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "Insightful, forward-thinking, and execution-focused — Digest Media truly understands growth.",
    author: "Olivia Chen",
    role: "Co-Founder",
    avatar:
      "/testimonial/avatar4.avif",
  },
  {
    id: 2,
    quote:
      "A strategic partner with vision — Digest Media helped us move faster and smarter.",
    author: "Michael Turner",
    role: "Product Lead",
    avatar:
      "/testimonial/avatar3.avif",
  },
  {
    id: 3,
    quote:
      "Professional from start to finish — their strategic thinking and execution set us apart.",
    author: "Sophia Bennett",
    role: "Founder",
    avatar:
      "/testimonial/avatar2.avif",
  },
  {
    id: 4,
    quote:
      "They completely transformed our social presence and paid media ROI within months.",
    author: "Alex Rivera",
    role: "Marketing Director",
    avatar:
      "/testimonial/avatar1.avif",
  },
];

export default function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      // selectedScrollSnap gives the correct internal tracking active index even with loop enabled
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();

    // Replaced "select" with "settle" and "pointerUp" for snappier real-time transition updates
    api.on("select", onSelect);
    api.on("settle", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("settle", onSelect);
    };
  }, [api]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 relative flex flex-col justify-center overflow-hidden"
    >
      {/* Grid Overlay Matrix */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(231, 45, 135, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(231, 45, 135, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
        }}
      />

      <div className="w-full relative z-10">
        {/* Header Metadata block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto mb-20"
        >
          <h2 className="inline-flex items-center rounded-full bg-rose-100 dark:bg-rose-950 px-3 py-1 text-sm font-medium text-[#E72D87] mb-6 border border-[#E72D87]/30">
            Success Stories
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
            What They{" "}
            <span className="font-serif italic font-light text-[#E72D87] lowercase">
              Say.
            </span>
          </h3>
        </motion.div>

        {/* Carousel Framework */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full relative 2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto"
        >
          <CarouselContent className="md:-ml-6 flex items-stretch py-10">
            {testimonials.map((t, index) => {
              const isActive = index === current;
              return (
                <CarouselItem
                  key={t.id}
                  className="md:pl-6 md:basis-1/2 lg:basis-1/3 flex"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.03 : 0.95,
                      opacity: isActive ? 1 : 0.4,
                      borderColor: isActive
                        ? "rgba(231, 45, 135, 0.3)"
                        : "rgba(255, 255, 255, 0.05)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="w-full bg-stone-50 dark:bg-zinc-900/40 border backdrop-blur-md rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between relative group shadow-xl overflow-hidden select-none"
                  >
                    {/* Top Mesh Card Active Overlay */}
                    <div
                      className={`absolute inset-0 bg-linear-to-b from-[#E72D87]/3 to-transparent rounded-[2.5rem] pointer-events-none transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                    />

                    <div className="space-y-8 relative z-10 flex-1 flex flex-col">
                      <div
                        className={`relative w-14 h-14 rounded-full overflow-hidden border transition-colors duration-500 ${isActive ? "border-[#E72D87]" : "border-neutral-200 dark:border-zinc-800"}`}
                      >
                        <Image
                          src={t.avatar}
                          alt={t.author}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                          priority={index < 3}
                        />
                      </div>

                      <p
                        className={`text-base lg:text-lg leading-relaxed font-light transition-colors duration-500 flex-1 ${isActive ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        “{t.quote}”
                      </p>
                    </div>

                    <div className="pt-6 mt-8 border-t border-neutral-200/60 dark:border-zinc-800/60 relative z-10">
                      <h4 className="font-semibold text-sm lg:text-base text-foreground">
                        — {t.author}
                      </h4>
                      <p className="text-muted-foreground text-xs font-light mt-0.5 uppercase tracking-wider font-mono">
                        {t.role}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Action Trigger Components */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 border border-neutral-200 dark:border-zinc-800 bg-background hover:bg-stone-100 dark:hover:bg-zinc-900 hover:text-[#E72D87] text-foreground transition-all rounded-full cursor-pointer flex items-center justify-center select-none" />
            <CarouselNext className="static translate-y-0 h-12 w-12 border border-neutral-200 dark:border-zinc-800 bg-background hover:bg-stone-100 dark:hover:bg-zinc-900 hover:text-[#E72D87] text-foreground transition-all rounded-full cursor-pointer flex items-center justify-center select-none" />
          </div>
        </Carousel>
      </div>
    </motion.section>
  );
}
