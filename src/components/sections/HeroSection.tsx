"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { useAppointmentModal } from "@/components/booking/AppointmentModalContext";

const HERO_HIGHLIGHTS = [
  "Personalized Dental Care",
  "Comprehensive Treatment Options",
  "Patient-Focused Approach",
];

export function HeroSection() {
  const { openAppointmentModal } = useAppointmentModal();
  const prefersReduced = useReducedMotion();
  const accentRingRef = useRef<HTMLDivElement>(null);
  const floatCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (accentRingRef.current) {
          gsap.to(accentRingRef.current, {
            rotation: 360,
            duration: 54,
            repeat: -1,
            ease: "none",
          });
        }
        if (floatCardRef.current) {
          gsap.to(floatCardRef.current, {
            y: -6,
            duration: 2.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FF] via-white to-white pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      {/* Subtle architectural gradient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(32,169,232,0.12)_0%,rgba(23,73,184,0.05)_48%,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(214,184,121,0.12)_0%,transparent_65%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Left Column: Brand Value Proposition */}
        <div className="lg:col-span-7">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#D6B879]/60 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#102D65] shadow-xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#D6B879]" aria-hidden="true" />
            <span>YOUR TRUSTED DENTAL CARE PARTNER</span>
          </motion.div>

          <motion.h1
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReduced ? 0 : 0.55,
              delay: prefersReduced ? 0 : 0.08,
            }}
            className="mt-5 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-[#102D65] sm:text-4xl lg:text-[3.15rem]"
          >
            Your Smile Deserves the Best Dental Care in Kanpur
          </motion.h1>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReduced ? 0 : 0.55,
              delay: prefersReduced ? 0 : 0.16,
            }}
            className="mt-5 max-w-2xl space-y-3.5 text-base leading-relaxed text-slate-600 sm:text-[1.0625rem]"
          >
            <p>
              Welcome to{" "}
              <strong className="font-semibold text-[#102D65]">
                Smilo Care Orthodontic And Implant Centre
              </strong>
              , your destination for professional dental care in Kanpur, Uttar
              Pradesh.
            </p>
            <p>
              We believe that every smile deserves attention, care and
              confidence. Our clinic focuses on providing personalized dental
              care and treatment solutions designed around individual dental
              needs.
            </p>
            <p>
              Whether you are looking for orthodontic treatment, teeth
              alignment, dental implants or general dental care, Smilo Care is
              committed to helping you make informed decisions about your oral
              health.
            </p>
          </motion.div>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReduced ? 0 : 0.55,
              delay: prefersReduced ? 0 : 0.24,
            }}
            className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={() => openAppointmentModal()}
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-[#1749B8] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1749B8]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#102D65]"
            >
              <CalendarCheck2 className="h-4 w-4" aria-hidden="true" />
              <span>Book Your Appointment</span>
            </button>

            <Link
              href="/treatments"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-7 py-3.5 text-sm font-semibold text-[#102D65] shadow-xs transition-all duration-200 hover:border-[#1749B8]/40 hover:bg-[#F5F8FF]"
            >
              <span>Explore Treatments</span>
              <ArrowRight className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Trust Highlights */}
          <motion.ul
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReduced ? 0 : 0.55,
              delay: prefersReduced ? 0 : 0.32,
            }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#E7ECF5] pt-6"
          >
            {HERO_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-[#102D65]"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-[#1749B8]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right Column: Original Dr. Kriti Shukla Portrait in Champagne Gold Frame */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-[27rem] flex-col items-center lg:col-span-5"
        >
          <div className="relative flex aspect-square w-full items-center justify-center">
            {/* Subtle Royal Blue Studio Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-full bg-[radial-gradient(circle_at_35%_25%,#20A9E8_0%,#1749B8_45%,#102D65_100%)] opacity-95 shadow-2xl shadow-[#1749B8]/25"
            />

            {/* Rotating Champagne Gold Precision Halo */}
            <div
              ref={accentRingRef}
              aria-hidden="true"
              className="pointer-events-none absolute inset-1 rounded-full border-2 border-dashed border-[#D6B879]/85"
            />

            {/* Solid Champagne Gold Circular Frame */}
            <div className="relative z-10 h-[calc(100%-2.25rem)] w-[calc(100%-2.25rem)] overflow-hidden rounded-full border-[5px] border-[#D6B879] bg-gradient-to-b from-white via-[#F5F8FF] to-[#E7ECF5] shadow-inner">
              <img
                src={CLINIC_INFO.doctor.portraitSrc}
                alt={CLINIC_INFO.doctor.portraitAlt}
                width={1254}
                height={1254}
                fetchPriority="high"
                className="h-full w-full object-cover object-top pt-3"
              />
            </div>

            {/* Floating Doctor Card */}
            <div
              ref={floatCardRef}
              className="absolute -bottom-3 left-1/2 z-20 w-[86%] max-w-[20rem] -translate-x-1/2 rounded-2xl border border-[#D6B879]/70 bg-white/95 px-5 py-3.5 shadow-xl shadow-[#102D65]/15 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-display text-base font-bold text-[#102D65]">
                    {CLINIC_INFO.doctor.name}
                  </p>
                  <p className="text-xs font-semibold text-[#1749B8]">
                    {CLINIC_INFO.doctor.qualifications} • {CLINIC_INFO.doctor.role}
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F8FF] text-[#1749B8] ring-1 ring-[#E7ECF5]">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
