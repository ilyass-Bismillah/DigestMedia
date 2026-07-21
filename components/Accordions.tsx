"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemData {
  value: string;
  trigger: string;
  content: string;
}

const items: AccordionItemData[] = [
  {
    value: "item-1",
    trigger: "Why do I need digital marketing for my business?",
    content:
      "Digital marketing is the promotion of your brand and the service you need to battle against competitors that do not only exist locally, but now exist nationally and internationally against your business.",
  },
  {
    value: "item-2",
    trigger: "What network do you perform Pay-Per-Click Advertising services on?",
    content:
      "We perform pay-per-click advertising services for the following search ad networks: Google Search and Display Network, YouTube Ad Network, Bing Ads Network, Facebook Advertising, Instagram Advertising, Twitter Advertising, and LinkedIn Advertising.",
  },
  {
    value: "item-3",
    trigger: "What type of activities do you perform on my social media accounts?",
    content:
      "All of our social media marketing activities include content creation, post creation, user engagement, and activities that are designed to increase your company’s exposure on social media networks. We also aim to increase your follower and like counts to add to the number of potential clients that we are able to tap into each and every single time we post.",
  },
  {
    value: "item-4",
    trigger: "What is the general cost for developing a business website?",
    content:
      "Each and every business website is completely different. Websites will fall anywhere in the range of $300 to $5000 depending on the complexity of the project. Sites that require customization will be on the higher end of the spectrum versus websites that only require basic information and minimal functionality.",
  },
  {
    value: "item-5",
    trigger: "Why are your website so expensive? I can find a freelancer to build one for cheaper.",
    content:
      "We believe our websites are the best business websites on the planet. The difference between our websites and the “other guys” is that we are business people that use digital marketing to grow your business. Most digital agencies fall under the category of “creative agency” or “design agency”.",
  },
  {
    value: "item-6",
    trigger: "Why should I hire Digest Media to perform digital marketing services for my business?",
    content:
      "Digest Media is focused on performance marketing and advertising strategy. Our goal is drive incredible ROI for your business and have you continue to invest in marketing services because our solutions work. We provide comprehensive digital marketing and advertising plans and we will be your right-hand marketing team. We are a Certified Google and Facebook Partner that knows how to get results for your business. We have experience across many different industries and have served over 100+ clients since 2022. Our commitment to you is that we will do everything in our power to supplement your business with a robust and effective marketing team that is hungry to drive success to your business. We are competitive and we LOVE to win.",
  },
  {
    value: "item-7",
    trigger: "How do I get my business started with Digest Media?",
    content:
      "In order to get started you have a few different options: 1. Click the Get In Touch button at the top of the screen and send us a message through our form online. 2. Email us at contact@digest-media.ma. 3. Call us at +212 525 134 771. Contacting Digest Media will be worth your time. At minimum, you will get to speak with our expert marketers and gain insight into your company’s marketing options and how you can benefit from digital marketing and advertising services.",
  },
  {
    value: "item-8",
    trigger: "Do you provide Whitelist agency ad accounts?",
    content:
      "Absolutely! We are your comprehensive solution for affiliate and media buyers. Digest Media stands as one of the affiliate industry’s largest providers of agency ad accounts and DSP accounts. Thanks to our partnerships with various platforms and global resellers, we can facilitate the opening and rental of accounts while providing the necessary infrastructure and expertise to assist you in scaling your operations.",
  },
];

export function AccordionBasic() {
  const [activeId, setActiveId] = useState<string | null>("item-1");

  const toggleItem = (val: string) => {
    setActiveId(activeId === val ? null : val);
  };

  return (
    <div className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto space-y-4">
      {items.map((item) => {
        const isOpen = activeId === item.value;

        return (
          <motion.div
            key={item.value}
            layout
            initial={false}
            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
              isOpen
                ? "bg-neutral-50/80 dark:bg-[#E72D87]/5 border-[#E72D87]/30"
                : "bg-neutral-50/40 dark:bg-neutral-900/20 border-border/40 hover:border-[#E72D87]/20"
            }`}
          >
            <button
              onClick={() => toggleItem(item.value)}
              className="w-full flex items-center justify-between text-left p-5 md:p-6 group cursor-pointer"
            >
              <span className={`text-sm md:text-base font-medium tracking-tight transition-colors duration-200 ${
                isOpen ? "text-[#E72D87]" : "text-foreground group-hover:text-[#E72D87]/80"
              }`}>
                {item.trigger}
              </span>
              
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`shrink-0 ml-4 w-7 h-7 rounded-lg border flex items-center justify-center transition-colors ${
                  isOpen 
                    ? "bg-[#E72D87]/10 border-[#E72D87]/30 text-[#E72D87]" 
                    : "bg-neutral-100 dark:bg-neutral-900 border-border/40 text-muted-foreground"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    transition: { height: { duration: 0.25, ease: "easeOut" }, opacity: { duration: 0.2 } }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: { height: { duration: 0.25, ease: "easeIn" }, opacity: { duration: 0.15 } }
                  }}
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-xs md:text-sm text-muted-foreground font-light leading-relaxed border-t border-border/20">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}