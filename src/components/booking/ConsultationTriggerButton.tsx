"use client";

import { CalendarCheck2 } from "lucide-react";
import { useAppointmentModal } from "@/components/booking/AppointmentModalContext";

interface ConsultationTriggerButtonProps {
  label: string;
  treatment?: string;
  variant?: "primary" | "gold" | "outline";
  className?: string;
}

export function ConsultationTriggerButton({
  label,
  treatment = "Orthodontic Treatment",
  variant = "primary",
  className = "",
}: ConsultationTriggerButtonProps) {
  const { openAppointmentModal } = useAppointmentModal();

  const variantClasses = {
    primary:
      "bg-[#1749B8] text-white shadow-md shadow-[#1749B8]/20 hover:bg-[#102D65]",
    gold: "bg-[#D6B879] text-[#102D65] font-bold shadow-md hover:bg-white",
    outline:
      "border border-[#E7ECF5] bg-white text-[#102D65] hover:border-[#1749B8]/40 hover:bg-[#F5F8FF]",
  }[variant];

  return (
    <button
      type="button"
      onClick={() => openAppointmentModal(treatment)}
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${variantClasses} ${className}`}
    >
      <CalendarCheck2 className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
