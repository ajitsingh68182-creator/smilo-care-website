import Link from "next/link";
import { ArrowLeft, Calendar, Compass, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { ConsultationTriggerButton } from "@/components/booking/ConsultationTriggerButton";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8FF] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D6B879]/60 bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-[#1749B8] uppercase shadow-xs">
          <Compass className="h-3.5 w-3.5 text-[#D6B879]" aria-hidden="true" />
          Page Not Found (404)
        </span>

        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-[#102D65] sm:text-5xl">
          We Could Not Locate That Page
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          The page you requested may have been moved or does not exist. You can
          return to the homepage, explore our dental treatments in Ashok Nagar,
          Kanpur, or get in touch with our clinic directly.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#1749B8] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#102D65]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Homepage
          </Link>

          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 rounded-full border border-[#E7ECF5] bg-white px-6 py-3.5 text-sm font-semibold text-[#102D65] shadow-xs transition hover:border-[#1749B8]/40 hover:text-[#1749B8]"
          >
            Explore All Treatments
          </Link>

          <ConsultationTriggerButton
            label="Book Appointment"
            variant="gold"
            className="rounded-full px-6 py-3.5 text-sm font-semibold"
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-4 rounded-2xl border border-[#E7ECF5] bg-white p-6 text-left shadow-xs sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F8FF] text-[#1749B8]">
              <Phone className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                Call Clinic
              </p>
              <a
                href={CLINIC_INFO.phone.telHref}
                className="mt-0.5 block text-sm font-semibold text-[#102D65] hover:text-[#1749B8]"
              >
                {CLINIC_INFO.phone.display}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F8FF] text-[#1749B8]">
              <Calendar className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                Need Directions or Help?
              </p>
              <Link
                href="/contact-us"
                className="mt-0.5 block text-sm font-semibold text-[#1749B8] hover:underline"
              >
                Visit Contact Page &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
