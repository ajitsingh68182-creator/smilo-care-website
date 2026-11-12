import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { Reveal } from "@/components/motion/MotionProvider";

export function AboutPreviewSection() {
  return (
    <section
      id="our-clinic"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Supplied Real Clinic Photograph */}
        <Reveal className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF] p-2.5 shadow-[0_18px_45px_-18px_rgba(16,45,101,0.18)]">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={CLINIC_INFO.assets.clinicInterior}
                alt="Smilo Care Orthodontic And Implant Centre modern dental operatory in Kanpur"
                width={2752}
                height={1536}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white px-4 py-3 text-xs text-slate-600">
              <span className="font-semibold text-[#102D65]">
                Smilo Care Orthodontic &amp; Implant Centre
              </span>
              <span className="rounded-full bg-[#F5F8FF] px-3 py-1 font-medium text-[#1749B8]">
                Ashok Nagar, Kanpur
              </span>
            </div>
          </div>
        </Reveal>

        {/* Copy & Clinic Summary */}
        <Reveal delay={0.1} className="lg:col-span-6">
          <span className="inline-block rounded-full border border-[#D6B879]/60 bg-[#F5F8FF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
            Our Clinic Philosophy
          </span>

          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#102D65] sm:text-4xl">
            Where Every Smile Matters.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            At Smilo Care Orthodontic And Implant Centre, we focus on delivering
            attentive, transparent dental care in a calm and welcoming clinical
            setting. Whether you visit for preventive oral hygiene, braces
            alignment, root canal comfort, or dental implants, every option is
            explained clearly so you feel confident about your care.
          </p>

          <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#E7ECF5] bg-[#F5F8FF] p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Clinic Address</span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                111A/63, Near Dr. Anoop Awasthi / Vikas Diagnostic, Coca-Cola
                Chauraha, Ashok Nagar, Harsh Nagar, Kanpur – 208012
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7ECF5] bg-[#F5F8FF] p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>Clinic Hours</span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                <strong>Mon – Sat:</strong> 10:00 AM – 2:00 PM &amp; 5:00 PM –
                8:30 PM
                <br />
                <span className="text-slate-600">Sunday: Closed</span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/about-us"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-[#102D65] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1749B8]"
            >
              <span>Discover Our Clinic</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href={CLINIC_INFO.phone.telHref}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-5 py-3 text-sm font-semibold text-[#102D65] transition-colors hover:border-[#1749B8]/40 hover:bg-[#F5F8FF]"
            >
              <Phone className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
              <span>{CLINIC_INFO.phone.display}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
