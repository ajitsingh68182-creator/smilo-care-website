"use client";

import { MessageCircle } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";

export function FloatingWhatsApp() {
  const prefilledHref = `${CLINIC_INFO.phone.whatsappHref}?text=${encodeURIComponent(
    "Hello Smilo Care Orthodontic & Implant Centre, I would like to enquire about a dental appointment."
  )}`;

  return (
    <a
      href={prefilledHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Smilo Care on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full border border-[#D6B879]/50 bg-[#102D65] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-[#102D65]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1749B8]"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="hidden pr-1 sm:inline">WhatsApp Us</span>
    </a>
  );
}
