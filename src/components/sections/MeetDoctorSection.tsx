"use client";

import Link from "next/link";
import { CalendarCheck2, ArrowRight, Award, Heart } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { useAppointmentModal } from "@/components/booking/AppointmentModalContext";
import { Reveal } from "@/components/motion/MotionProvider";

export function MeetDoctorSection() {
  const { openAppointmentModal } = useAppointmentModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#102D65] via-[#12377A] to-[#1749B8] py-16 text-white sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(214,184,121,0.18)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Original Doctor Portrait inside Champagne Gold Ring */}
        <Reveal className="flex justify-center lg:col-span-5">
          <div className="relative flex aspect-square w-full max-w-[23rem] items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-[#D6B879]/40"
            />
            <div className="relative h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] overflow-hidden rounded-full border-[5px] border-[#D6B879] bg-gradient-to-b from-white via-[#F5F8FF] to-[#E7ECF5] shadow-2xl">
              <img
                src={CLINIC_INFO.doctor.portraitSrc}
                alt={CLINIC_INFO.doctor.portraitAlt}
                width={1254}
                height={1254}
                loading="lazy"
                className="h-full w-full object-cover object-top pt-3"
              />
            </div>
          </div>
        </Reveal>

        {/* Doctor Profile */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D6B879]/50 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#D6B879]">
            <span>Meet Your Dentist</span>
          </span>

          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Meet Your Dentist.
          </h2>

          <div className="mt-5 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xs sm:p-8">
            <h3 className="font-display text-2xl font-bold text-white">
              {CLINIC_INFO.doctor.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-[#D6B879]">
              {CLINIC_INFO.doctor.qualifications} &bull;{" "}
              {CLINIC_INFO.brandName.replace("And", "&")}
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-100">
              Dedicated to providing personalized dental care with a focus on
              comfort, confidence and healthy smiles.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#102D65]/50 p-4">
                <Award
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D6B879]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Qualified Clinical Care
                  </p>
                  <p className="mt-0.5 text-xs text-slate-200">
                    {CLINIC_INFO.doctor.qualifications} dental clinician focused
                    on individualized oral health planning.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#102D65]/50 p-4">
                <Heart
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D6B879]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Clear Communication
                  </p>
                  <p className="mt-0.5 text-xs text-slate-200">
                    Every procedure and option is discussed clearly before
                    treatment begins.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => openAppointmentModal()}
              className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-[#D6B879] px-7 py-3.5 text-sm font-bold text-[#102D65] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              <CalendarCheck2 className="h-4 w-4" aria-hidden="true" />
              <span>Book a Consultation</span>
            </button>

            <Link
              href="/about-us"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              <span>About Our Clinic</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
