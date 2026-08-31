"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck, Check, Zap } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "paid-advertising",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "paid-advertising",
          message: "",
        });
      } else {
        console.error(result.error);
        alert("Error sending message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="text-foreground min-h-screen relative pt-15 lg:pt-28 pb-20">
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(231, 45, 135, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(231, 45, 135, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 90%)",
        }}
      />

      <div className="w-full 2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto relative z-10 space-y-16">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <span className="inline-flex items-center rounded-full bg-rose-100 dark:bg-rose-950 px-3 py-1 text-sm font-medium text-[#E72D87] mb-6 border border-[#E72D87]">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-6xl font-normal tracking-tight">
            Get In{" "}
            <span className="font-serif italic font-light text-[#E72D87]">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm font-light leading-relaxed max-w-md mx-auto">
            Connect with our engineering sync framework. Map your system
            mechanics, optimize budgets, and secure corporate asset
            configurations.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-card/40 border border-border/60 p-8 rounded-[2rem] backdrop-blur-md shadow-md space-y-6">
              <h2 className="text-xl font-medium tracking-tight">
                System Node Info
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900/50 flex items-center justify-center border border-border/40 transition-colors group-hover:border-[#E72D87]/40">
                    <Mail className="w-4 h-4 text-[#E72D87]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Digital Route
                    </p>
                    <Link
                      href="mailto:contact@digest-media.ma"
                      className="text-sm hover:text-[#E72D87] transition-colors"
                    >
                      contact@digest-media.ma
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900/50 flex items-center justify-center border border-border/40 transition-colors group-hover:border-[#E72D87]/40">
                    <Phone className="w-4 h-4 text-[#E72D87]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Direct Line
                    </p>
                    <Link
                      href="tel:+212 5 25 13 47 71"
                      className="text-sm hover:text-[#E72D87] transition-colors"
                    >
                      +212 5 25 13 47 71
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900/50 flex items-center justify-center border border-border/40 transition-colors group-hover:border-[#E72D87]/40">
                    <MapPin className="w-4 h-4 text-[#E72D87]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Physical Node
                    </p>
                    <p className="text-sm text-foreground/90">
                      Agadir bay Technopole 2, Bloc C 4éme étage, Bureau CB402
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-border/40" />

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-xs text-muted-foreground font-light">
                  <ShieldCheck className="w-4 h-4 text-[#E72D87] shrink-0 mt-0.5" />
                  <span>
                    NDA protected architecture logic. All proprietary structures
                    secure.
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-muted-foreground font-light">
                  <Zap className="w-4 h-4 text-[#E72D87] shrink-0 mt-0.5" />
                  <span>
                    Synchronized feedback channels dispatch within 12-24
                    deployment hours.
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-border/40 p-6 rounded-[2rem] space-y-4 shadow-md bg-white/40 dark:bg-black/20">
              <h3 className="text-xs uppercase text-muted-foreground tracking-wider">
                Execution Framework
              </h3>
              <div className="space-y-3">
                <details className="group border-b border-border/40 pb-2 cursor-pointer select-none">
                  <summary className="text-xs font-medium hover:text-[#E72D87] transition-colors list-none flex justify-between items-center">
                    What is the onboarding timeline?
                    <span className="text-[10px] text-[#E72D87] group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed font-light">
                    We evaluate asset requirements within 24 hours. Framework
                    setup and ad tracking deployment initiate instantly upon
                    structure confirmation.
                  </p>
                </details>
                <details className="group border-b border-border/40 pb-2 cursor-pointer select-none">
                  <summary className="text-xs font-medium hover:text-[#E72D87] transition-colors list-none flex justify-between items-center">
                    Do you provide active ad-account recovery?
                    <span className="text-[10px] text-[#E72D87] group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed font-light">
                    Yes, via our Enterprise Agency Accounts Solution, we supply
                    alternative verified profiles across major nodes (Meta,
                    TikTok, Google, Taboola).
                  </p>
                </details>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 bg-card/40 border border-border/60 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md shadow-md relative"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.70 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-4"
              >
                <div className="w-16 h-16 bg-green-300/10 text-green-300 rounded-full flex items-center justify-center mx-auto border border-[#E72D87]/30 shadow-[0_0_20px_rgba(231,45,135,0.1)]">
                  <Check className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  Message Received Successfully!
                </h3>

                <p className="text-muted-foreground text-sm max-w-sm mx-auto font-light leading-relaxed">
                  Thank you for reaching out. One of our specialists will review
                  your request and get back to you shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase text-[#E72D87] tracking-wider pt-4 hover:underline cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase text-muted-foreground tracking-wider block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Alex Mercer"
                      className="w-full h-12 px-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/50 border border-border/60 focus:border-[#E72D87]/50 focus:outline-none transition-colors text-xs font-light"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase text-muted-foreground tracking-wider block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@enterprise.com"
                      className="w-full h-12 px-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/50 border border-border/60 focus:border-[#E72D87]/50 focus:outline-none transition-colors text-xs font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase text-muted-foreground tracking-wider block">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Stealth Corp (Optional)"
                      className="w-full h-12 px-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/50 border border-border/60 focus:border-[#E72D87]/50 focus:outline-none transition-colors text-xs font-light"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase text-muted-foreground tracking-wider block">
                      How can we help you?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full h-12 px-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/50 border border-border/60 focus:border-[#E72D87]/50 focus:outline-none transition-colors text-xs font-light text-muted-foreground appearance-none cursor-pointer"
                    >
                      <option
                        value="paid-advertising"
                        className="bg-white dark:bg-neutral-900 text-foreground dark:text-neutral-200"
                      >
                        Paid Advertising & Campaigns
                      </option>
                      <option
                        value="design-development"
                        className="bg-white dark:bg-neutral-900 text-foreground dark:text-neutral-200"
                      >
                        Web Design & Custom Development
                      </option>
                      <option
                        value="agency-accounts"
                        className="bg-white dark:bg-neutral-900 text-foreground dark:text-neutral-200"
                      >
                        Premium Agency Ad Accounts
                      </option>
                      <option
                        value="other"
                        className="bg-white dark:bg-neutral-900 text-foreground dark:text-neutral-200"
                      >
                        Other / Custom Strategy
                      </option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-muted-foreground tracking-wider block">
                    Project Details & Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project, goals, or any specific requirements you have..."
                    className="w-full p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/50 border border-border/60 focus:border-[#E72D87]/50 focus:outline-none transition-colors text-xs font-light resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#E72D87] hover:bg-[#E72D87]/90 rounded-xl font-semibold text-white transition-all duration-300 relative flex items-center justify-center overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(231,45,135,0.25)] group"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <div className="relative flex flex-col items-center overflow-hidden h-5 w-full">
                      <span className="inline-flex items-center space-x-2 transition-transform duration-500 ease-out transform group-hover:-translate-y-full">
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </span>
                      <span className="absolute inline-flex items-center space-x-2 transition-transform duration-500 ease-out transform translate-y-full group-hover:translate-y-0 text-white/90">
                        <span>Let&apos;s Get Started</span>
                        <Send className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div className="mt-20">
        <iframe
          className="2xl:max-w-7xl lg:max-w-6xl max-w-sm mx-auto w-full h-96 rounded-2xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.178253133852!2d-9.5867419!3d30.4026841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9b72d38ba8f%3A0xf31def6797e7645b!2sDigest%20media!5e0!3m2!1sen!2sma!4v1784473472551!5m2!1sen!2sma"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </main>
  );
}
