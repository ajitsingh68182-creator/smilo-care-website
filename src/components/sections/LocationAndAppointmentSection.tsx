"use client";

import { Clock, MapPin, Navigation, Phone, MessageCircle } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { AppointmentForm } from "@/components/booking/AppointmentForm";
import { useAppointmentModal } from "@/components/booking/AppointmentModalContext";
import { Reveal } from "@/components/motion/MotionProvider";

export function LocationAndAppointmentSection() {
  const { openAppointmentModal } = useAppointmentModal();

  return (
    <section
      id="appointment"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Location Preview + Map */}
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="flex flex-col justify-between rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF] p-7 sm:p-9 lg:col-span-5">
            <div className="space-y-6">
              <div>
                <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                  Visit Our Clinic
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold text-[#102D65] sm:text-3xl">
                  Conveniently Located in Ashok Nagar, Kanpur
                </h2>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1749B8]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#102D65]">
                      {CLINIC_INFO.brandName}
                    </p>
                    <p className="mt-0.5 leading-relaxed">
                      {CLINIC_INFO.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1749B8]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#102D65]">
                      Opening Hours
                    </p>
                    <p className="mt-0.5">
                      {CLINIC_INFO.hours.weekdays}:{" "}
                      {CLINIC_INFO.hours.morning} &amp;{" "}
                      {CLINIC_INFO.hours.evening}
                    </p>
                    <p className="text-slate-600">{CLINIC_INFO.hours.sunday}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1749B8]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#102D65]">
                      Phone &amp; WhatsApp
                    </p>
                    <a
                      href={CLINIC_INFO.phone.telHref}
                      className="mt-0.5 inline-block font-semibold text-[#1749B8] hover:underline"
                    >
                      {CLINIC_INFO.phone.display}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CLINIC_INFO.social.googleMapsPlace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-[#102D65] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1749B8]"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                <span>Get Directions</span>
              </a>
              <a
                href={CLINIC_INFO.phone.telHref}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-5 py-3 text-sm font-semibold text-[#102D65] transition-colors hover:bg-[#F5F8FF]"
              >
                <Phone className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
                <span>Call Clinic</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="h-full min-h-[360px] overflow-hidden rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF] shadow-sm">
              <iframe
                title="Google Maps location for Smilo Care Orthodontic And Implant Centre in Ashok Nagar, Kanpur"
                src={CLINIC_INFO.social.googleMapsEmbed}
                width={800}
                height={520}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[360px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>

        {/* Appointment CTA Banner + Request Form */}
        <Reveal className="mt-16 overflow-hidden rounded-[2rem] border border-[#E7ECF5] bg-gradient-to-br from-[#F5F8FF] via-white to-[#F5F8FF] shadow-[0_20px_50px_-24px_rgba(16,45,101,0.18)]">
          <div className="grid lg:grid-cols-12">
            <div className="flex flex-col justify-between bg-[#102D65] p-8 text-white sm:p-10 lg:col-span-5">
              <div>
                <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#D6B879]">
                  Appointment Enquiry
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white">
                  Your Journey to a Healthier Smile Starts Here.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
                  Share your preferred treatment, date, and timing. Our clinic
                  desk responds promptly to confirm your appointment slot.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => openAppointmentModal()}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#D6B879] px-5 py-3 text-sm font-bold text-[#102D65] transition-colors hover:bg-white"
                  >
                    Book Appointment
                  </button>
                  <a
                    href={CLINIC_INFO.phone.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
                <p className="text-xs text-slate-300">
                  Monday – Saturday &bull; 10:00 AM – 2:00 PM &amp; 5:00 PM –
                  8:30 PM
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:col-span-7">
              <h3
                id="home-appointment-form-title"
                className="mb-5 font-display text-xl font-bold text-[#102D65]"
              >
                Request Your Consultation Slot
              </h3>
              <AppointmentForm headingId="home-appointment-form-title" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
