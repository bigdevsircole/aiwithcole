"use client";

import React from "react";

const CURRENCIES = [
  { code: "USD", price: "$3.64" },
  { code: "NGN", price: "₦5,000" },
  { code: "GBP", price: "£2.71" },
  { code: "EUR", price: "€3.17" },
  { code: "GHS", price: "GH₵37.9" },
  { code: "KES", price: "KSh470" },
  { code: "CAD", price: "C$4.99" },
  { code: "ZAR", price: "R65" },
];

export function PricingRibbon() {
  // Repeating list twice for infinite seamless CSS marquee loop
  const items = [...CURRENCIES, ...CURRENCIES, ...CURRENCIES];

  return (
    <div
      className="w-full overflow-hidden border-y border-[#26262A] bg-[#0B0B0D]/80 py-2.5 backdrop-blur-sm select-none"
      data-cursor-text="RATES"
    >
      <div className="animate-ticker flex items-center gap-8 text-[11px] font-mono tracking-wider">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 whitespace-nowrap px-2 text-[#8E8E96] transition-colors hover:text-white"
          >
            <span className="font-semibold text-[#8E8E96]">{item.code}</span>
            <span className="font-bold text-[#EDEDEC]">{item.price}</span>
            <span className="text-[#26262A] ml-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
