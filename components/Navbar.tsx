"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Terminal } from "lucide-react";
import { motion, Variants } from "framer-motion";

const NavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.20, delayChildren: 0.10 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

export default function DigestLinearNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/20 dark:bg-[#060204]/30 backdrop-blur-xl border-b border-[#E72D87]/10 dark:border-[#E72D87]/15 transition-all duration-300">
      <div className="w-full 2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto flex items-center justify-between h-16">
        {/* BRAND LOGO */}
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}>

        <Link
          href="/"
          className="flex items-center gap-2 py-1.5 px-3 border border-[#E72D87]/10 dark:border-[#E72D87]/20 bg-white/40 dark:bg-[#1A0C13]/30 rounded-xl hover:border-[#E72D87]/40 transition-colors duration-200"
        >
          <Image
            src="/logo.webp"
            alt="Digest Media Logo"
            width={110}
            height={24}
            className="h-5 w-auto object-contain"
            priority
          />
        </Link>
        </motion.div>

        {/* FLOATING CAPSULE NAVIGATION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="hidden space-x-2 md:flex items-center bg-white/40 dark:bg-[#16060F]/40 border border-[#E72D87]/10 dark:border-[#E72D87]/10 rounded-full px-2 py-1 backdrop-blur-md shadow-[0_4px_24px_rgba(231,45,135,0.03)]"
        >
          {NavLinks.map(({ href, label }) => (
            <motion.div key={href} variants={itemVariants}>
              <Link
                href={href}
                className={cn(
                  "text-[11px] px-4 py-2 rounded-full block transition-all duration-200 relative",
                  pathname === href
                    ? "bg-[#E72D87] text-white font-bold shadow-[0_4px_14px_rgba(231,45,135,0.4)]"
                    : "text-[#16060F]/70 dark:text-[#FCEFF5]/70 dark:hover:bg-pink-100/10 hover:bg-pink-100 hover:text-[#E72D87] dark:hover:text-[#E72D87]",
                )}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* TACTICAL CONTROLS */}
        <div className="flex items-center gap-x-3">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 8 }}
            className="flex items-center gap-x-3"
          >
            <ModeToggle />

            {/* CONTACT BUTTON COMPONENT */}
            <Link href="/contact" className="hidden md:block">
              <Button variant={"digest"} className="px-5 py-5 hover:scale-90">
                Contact Us
              </Button>
            </Link>
          </motion.div>

          {/* MOBILE TOGGLE BLOCK */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden flex items-center justify-center p-2 text-[#16060F]/70 dark:text-[#FCEFF5]/70 border border-[#E72D87]/20 rounded-xl bg-white/30 dark:bg-[#1A0C13]/40">
              <Menu className="w-4 h-4" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full max-w-75 bg-[#FFFBFD]/95 dark:bg-[#060204]/95 backdrop-blur-xl border-l border-[#E72D87]/20 p-6 flex flex-col justify-between"
            >
              <div>
                <SheetHeader className="text-left border-b border-[#E72D87]/20 pb-4 mb-6">
                  <Image
                    src="/logo.webp"
                    alt="Digest Media"
                    width={110}
                    height={24}
                    className="h-5 w-auto object-contain"
                  />
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#E72D87] uppercase mt-1">
                    <Terminal className="w-3 h-3" />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      SYS_CORE_LINKED
                    </motion.span>
                  </div>
                </SheetHeader>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isOpen ? "show" : "hidden"}
                  className="flex flex-col gap-y-2"
                >
                  {NavLinks.map(({ href, label }) => (
                    <motion.div key={href} variants={itemVariants}>
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-xs font-mono tracking-widest block p-3 rounded-xl border transition-all duration-200",
                          pathname === href
                            ? "bg-[#E72D87] text-white font-bold"
                            : "bg-transparent border-transparent text-[#16060F]/70 dark:text-[#FCEFF5]/70 hover:text-[#E72D87]",
                        )}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="flex flex-col gap-4 border-t border-[#E72D87]/15 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  <Button
                    variant={"digest"}
                    className="px-5 w-full py-5 hover:scale-90"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
