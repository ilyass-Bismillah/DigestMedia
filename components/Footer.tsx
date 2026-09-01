"use client";
import React from "react";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const footerLinks = {
  agency: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Meet The Team", href: "/team" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Creative Branding", href: "/services" },
    { label: "SEO & Growth", href: "/services" },
    { label: "Paid Media", href: "/services" },
    { label: "Social Media", href: "/services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialIcons = [
  { Icon: FaInstagram, href: "#" },
  { Icon: FaFacebook, href: "#" },
  { Icon: FaLinkedin, href: "#" },
  { Icon: FaGithub, href: "#" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 20 }
  },
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-border pt-20 pb-10 relative overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 pb-16 border-b border-border">
          
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-fit"
            >
              <Image
                src="/logo.webp"
                alt="Logo"
                width={180}
                height={40}
                className="drop-shadow-lg cursor-pointer h-8 w-auto"
              />
            </motion.div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm font-light">
              Transforming creativity into results through data-driven design,
              cutting-edge frameworks, and intelligent digital strategies.
            </p>
            
            <motion.div 
              variants={containerVariants}
              className="flex items-center space-x-4"
            >
              {socialIcons.map(({ Icon, href }, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={href}
                    className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-[#E72D87] hover:border-[#E72D87] bg-transparent transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.agency.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} passHref legacyBehavior>
                    <motion.a
                      whileHover={{ x: 4, color: "#E72D87" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="text-sm text-muted-foreground transition-colors duration-150 font-light inline-block cursor-pointer"
                    >
                      {link.label}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} passHref legacyBehavior>
                    <motion.a
                      whileHover={{ x: 4, color: "#E72D87" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="text-sm text-muted-foreground transition-colors duration-150 font-light inline-block cursor-pointer"
                    >
                      {link.label}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">
              Ready to grow?
            </h4>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Let&apos;s collaborate to build something impactful together.
            </p>
            <Link href="/contact" passHref legacyBehavior>
              <motion.a
                whileHover={{ gap: "12px" }}
                className="inline-flex items-center space-x-2 group text-sm font-medium text-[#E72D87] cursor-pointer"
              >
                <span>Start a Project</span>
                <MoveUpRight className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-muted-foreground font-light"
        >
          <p>© {new Date().getFullYear()} Digest Media. All rights reserved.</p>

          <div className="flex space-x-6">
            {footerLinks.legal.map((link, idx) => (
              <Link key={idx} href={link.href} passHref legacyBehavior>
                <motion.a 
                  whileHover={{ color: "#E72D87" }}
                  className="hover:text-[#E72D87] transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </motion.a>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}