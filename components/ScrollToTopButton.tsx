"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp, Send } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll();

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
      {/* 1. Telegram Floating Button (Always Visible or matches theme) */}
      <motion.a
        href="https://t.me/your_telegram_username"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on Telegram"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#0088cc] to-[#29b6f6] text-white shadow-xl shadow-sky-950/40 border border-sky-400/30 group focus:outline-none cursor-pointer"
      >
        <Send className="w-5 h-5 -translate-x-0.5 translate-y-0.5 group-hover:rotate-12 transition-transform duration-200" />
        <span className="absolute inset-0 rounded-full bg-sky-400/20 animate-ping pointer-events-none" />
      </motion.a>

      {/* 2. Scroll-to-Top Button with Pink/Dark Theme */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="relative w-12 h-12 rounded-full flex items-center justify-center dark:bg-pink-900/10 bg-pink-600/20 backdrop-blur-md border border-pink-900/40 dark:text-pink-300 text-pink-900 dark:hover:text-white hover:text-black shadow-xl shadow-pink-950/50 group transition-colors focus:outline-none cursor-pointer"
            >
              <svg
                className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  className="dark:stroke-pink-950/40 stroke-pink-800/20"
                  strokeWidth="6"
                  fill="none"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="44"
                  className="dark:stroke-pink-400 stroke-pink-500 dark:group-hover:stroke-pink-500 group-hover:stroke-pink-600 transition-colors"
                  strokeWidth="6"
                  strokeDasharray="0 1"
                  style={{ pathLength }}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}