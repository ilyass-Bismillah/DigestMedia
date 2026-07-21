import React from "react";

interface SectionBadgeProps {
  text: string;
}

export default function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E72D87]/10 border border-[#E72D87]/20 backdrop-blur-md">
      <span className="w-1.5 h-1.5 rounded-full bg-[#E72D87] animate-pulse" />
      <span className="text-[10px] font-mono font-semibold tracking-wider text-[#E72D87] uppercase">
        {text}
      </span>
    </div>
  );
}