"use client";

import * as React from "react";
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, ArrowRight, Send } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { FaTiktok, FaGoogle, FaFacebook } from "react-icons/fa6";
import { BsBing } from "react-icons/bs";

function MiniBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#E72D87]/40 bg-[#E72D87]/10 px-1.5 py-0.5 text-[9px] font-semibold text-[#E72D87]">
      {children}
    </span>
  );
}

const agencyAccounts = [
  {
    title: "Facebook Agency Ad Accounts",
    description: "Get a Meta Agency Ad Account",
    icon: FaFacebook,
    iconBg: "bg-blue-600/20 text-blue-500 border border-blue-500/30",
    href: "/accounts/facebook",
  },
  {
    title: "Bing Agency Ad Accounts",
    description: "Get a Bing Agency Ad Account",
    icon: BsBing,
    iconBg: "bg-cyan-600/20 text-cyan-400 border border-cyan-500/30",
    href: "/accounts/bing",
  },
  {
    title: "Google Agency Ad Accounts",
    description: "Get a Google Agency Ad Account",
    icon: FaGoogle,
    iconBg: "bg-emerald-600/20 text-emerald-400 border border-emerald-500/30",
    href: "/accounts/google",
  },
  {
    title: "Taboola Agency Accounts",
    description: "Get a Taboola Agency Account",
    imageSrc: "/Taboola-2.svg",
    iconBg: "bg-blue-500/20 text-blue-400 border border-blue-400/30",
    href: "/accounts/taboola",
  },
  {
    title: "TikTok Agency Ad Accounts",
    description: "Get a TikTok Agency Ad Account",
    icon: FaTiktok,
    iconBg: "bg-pink-600/20 text-pink-400 border border-pink-500/30",
    href: "/accounts/tiktok",
  },
  {
    title: "Outbrain Agency Accounts",
    description: "Get an Outbrain Agency Account",
    imageSrc: "/Outbrain.webp",
    iconBg: "bg-orange-600/20 text-orange-400 border border-orange-500/30",
    href: "/accounts/outbrain",
  },
];

function ContactBanner() {
  return (
    <div className="mt-4 flex items-center justify-between rounded-xl border border-[#E72D87]/20 bg-linear-to-r from-[#E72D87]/10 to-transparent p-3.5">
      <div>
        <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
          Contact Digest Media
        </h4>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
          Message us on telegram or Whatsapp for real-time support from industry
          specialists.
        </p>
      </div>
      <Button
        size="sm"
        variant="digest"
        className="h-8 rounded-lg gap-1.5 text-xs shrink-0 ml-4"
      >
        <Send className="h-3 w-3" />
        Telegram
        <ArrowRight className="h-3 w-3" />
      </Button>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
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
    <nav className="z-50 w-full bg-white/20 dark:bg-[#060204]/30 backdrop-blur-xl border-b border-[#E72D87]/10 dark:border-[#E72D87]/15 transition-all duration-300">
      <div className="relative w-full 2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto flex items-center justify-between h-20">
        {/* BRAND LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 py-2 px-5 border border-[#E72D87]/10 dark:border-[#E72D87]/20 bg-white/40 dark:bg-[#1A0C13]/30 rounded-xl hover:border-[#E72D87]/40 transition-colors duration-200"
          >
            <Image
              src="/logo.webp"
              alt="Digest Media Logo"
              width={120}
              height={24}
              className="h-5 w-auto object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* DESKTOP NAVIGATION MENU */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center"
        >
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              {/* 1. Home */}
              <NavigationMenuItem>
                <Link
                  href="/"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-pink-100/10 text-xs font-medium text-[#16060F]/80 dark:text-[#FCEFF5]/80 hover:text-[#E72D87] dark:hover:text-[#E72D87] inline-flex items-center gap-1.5",
                    pathname === "/" &&
                      "text-[#E72D87] dark:text-pink-500 font-semibold",
                  )}
                >
                  <span>Home</span>
                </Link>
              </NavigationMenuItem>

              {/* 2. About Us */}
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-pink-100/10 text-xs font-medium text-[#16060F]/80 dark:text-[#FCEFF5]/80 hover:text-[#E72D87] dark:hover:text-[#E72D87] inline-flex items-center gap-1.5",
                    pathname === "/about" &&
                      "text-[#E72D87] dark:text-pink-500 font-semibold",
                  )}
                >
                  <span>About</span>
                </Link>
              </NavigationMenuItem>

              {/* 3. Agency Accounts Mega Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-pink-100/10 data-[state=open]:bg-pink-100/15 text-xs font-medium text-[#16060F]/80 dark:text-[#FCEFF5]/80 hover:text-[#E72D87] dark:hover:text-[#E72D87]">
                  Agency Accounts
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-full p-0 border-0 shadow-none">
                  <div className="w-full 2xl:max-w-7xl lg:max-w-5xl mx-auto px-4 md:px-6 py-6">
                    <div className="mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#E72D87]">
                        Agency Ad Accounts
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {agencyAccounts.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group flex items-center gap-3.5 rounded-xl border border-[#E72D87]/10 dark:border-white/5 bg-pink-50/30 dark:bg-white/2 p-3 transition-all duration-200 hover:border-[#E72D87]/40 hover:bg-pink-100/40 dark:hover:bg-white/6"
                          >
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconBg}`}
                            >
                              {item.imageSrc ? (
                                <Image
                                  src={item.imageSrc}
                                  alt={`${item.title} icon`}
                                  width={24}
                                  height={24}
                                  className="object-contain"
                                />
                              ) : IconComponent ? (
                                <IconComponent className={`w-6 h-6`} />
                              ) : null}
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-[#E72D87] transition-colors">
                                {item.title}
                              </p>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <ContactBanner />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 4. Services */}
              <NavigationMenuItem>
                <Link
                  href="/services"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-pink-100/10 text-xs font-medium text-[#16060F]/80 dark:text-[#FCEFF5]/80 hover:text-[#E72D87] dark:hover:text-[#E72D87] inline-flex items-center gap-1.5",
                    pathname === "/services" &&
                      "text-[#E72D87] dark:text-pink-500 font-semibold",
                  )}
                >
                  <span>Services</span>
                </Link>
              </NavigationMenuItem>

              {/* 3. Blog */}
              <NavigationMenuItem>
                <Link
                  href="/blog"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-pink-100/10 text-xs font-medium text-[#16060F]/80 dark:text-[#FCEFF5]/80 hover:text-[#E72D87] dark:hover:text-[#E72D87]",
                    pathname === "/blog" &&
                      "text-[#E72D87] dark:text-pink-500 font-semibold",
                  )}
                >
                  Blog
                </Link>
              </NavigationMenuItem>

              {/* 4. OurTeam */}
              <NavigationMenuItem>
                <Link
                  href="/team"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-pink-100/10 text-xs font-medium text-[#16060F]/80 dark:text-[#FCEFF5]/80 hover:text-[#E72D87] dark:hover:text-[#E72D87] inline-flex items-center gap-1.5",
                    pathname === "/team" &&
                      "text-[#E72D87] dark:text-pink-500 font-semibold",
                  )}
                >
                  <span>Team</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>

        {/* RIGHT CONTROLS & CTA */}
        <div className="flex items-center gap-x-3">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 8 }}
            className="flex items-center gap-x-3"
          >
            <ModeToggle />

            <Link href="/contact" className="hidden md:block">
              <Button
                variant={"digest"}
                className="px-4 py-2 text-xs h-9 gap-1.5 hover:scale-95 transition-transform duration-200"
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </motion.div>

          {/* MOBILE SHEET MENU */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden flex items-center justify-center p-2 text-[#16060F]/70 dark:text-[#FCEFF5]/70 border border-[#E72D87]/20 rounded-xl bg-white/30 dark:bg-[#1A0C13]/40">
              <Menu className="w-4 h-4" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full max-w-xs bg-[#FFFBFD]/95 dark:bg-[#060204]/95 backdrop-blur-xl border-l border-[#E72D87]/20 p-6 flex flex-col justify-between overflow-y-auto"
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
                </SheetHeader>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isOpen ? "show" : "hidden"}
                  className="flex flex-col gap-y-2"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E72D87] px-2 mb-1">
                    Agency Accounts
                  </span>
                  {agencyAccounts.map((item) => (
                    <motion.div key={item.title} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xs p-2 rounded-lg border border-transparent hover:border-[#E72D87]/20 text-[#16060F]/80 dark:text-[#FCEFF5]/80 hover:text-[#E72D87] transition-all flex items-center gap-2.5"
                      >
                        {item.icon ? (
                          <item.icon
                            className={`h-4 w-4 ${item.iconBg} border-0 bg-transparent`}
                          />
                        ) : (
                          <Image
                            src={item.imageSrc}
                            alt="ImageSrc"
                            width={20}
                            height={20}
                          />
                        )}
                        <span className="truncate">{item.title}</span>
                      </Link>
                    </motion.div>
                  ))}

                  <div className="my-2 border-t border-[#E72D87]/15" />

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E72D87] px-2 mb-1">
                    Navigation
                  </span>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="text-xs p-2 rounded-lg text-[#16060F]/80 dark:text-[#FCEFF5]/80 hover:text-[#E72D87] block"
                    >
                      <span>Home</span>
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/about"
                      onClick={() => setIsOpen(false)}
                      className="text-xs p-2 rounded-lg text-[#16060F]/80 dark:text-[#FCEFF5]/80 hover:text-[#E72D87] block"
                    >
                      <span>About Us</span>
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/services"
                      onClick={() => setIsOpen(false)}
                      className="text-xs p-2 rounded-lg text-[#16060F]/80 dark:text-[#FCEFF5]/80 hover:text-[#E72D87] block"
                    >
                      <span>Services</span>
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/blog"
                      onClick={() => setIsOpen(false)}
                      className="text-xs p-2 rounded-lg text-[#16060F]/80 dark:text-[#FCEFF5]/80 hover:text-[#E72D87] block"
                    >
                      <span>Blog</span>
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/team"
                      onClick={() => setIsOpen(false)}
                      className="text-xs p-2 rounded-lg text-[#16060F]/80 dark:text-[#FCEFF5]/80 hover:text-[#E72D87] flex items-center justify-between"
                    >
                      <span>Team</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              <div className="border-t border-[#E72D87]/15 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  <Button
                    variant={"digest"}
                    className="w-full py-4 text-xs gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-3.5 h-3.5" />
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
