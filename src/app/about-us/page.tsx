import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationTriggerButton } from "@/components/booking/ConsultationTriggerButton";
import { SmartVideoPlayer } from "@/components/media/SmartVideoPlayer";

export const metadata = buildPageMetadata({
  title: "About Smilo Care | Dental Clinic in Kanpur",
  description:
    "Get to know Smilo Care Orthodontic And Implant Centre, located in Ashok Nagar, Kanpur, providing personalized orthodontic and dental implant care.",
  path: "/about-us",
});

const COMMITMENTS = [
  "Patient-focused dental care.",
  "Personalized treatment planning.",
  "Clear communication about treatment options.",
  "Focus on oral hygiene and dental health.",
  "A welcoming clinical environment.",
];

export default function AboutUsPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-b from-[#F5F8FF] to-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
          />

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                About Our Clinic
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#102D65] sm:text-4xl lg:text-[2.75rem]">
                About Smilo Care Orthodontic And Implant Centre.
              </h1>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  At Smilo Care Orthodontic And Implant Centre, we understand
                  that a healthy smile plays an important role in everyday
                  confidence and well-being.
                </p>
                <p>
                  Our goal is to provide patient-focused dental care in a
                  comfortable and welcoming environment. We focus on
                  understanding each patient&apos;s dental concerns and
                  discussing suitable treatment options based on their
                  individual needs.
                </p>
                <p>
                  From orthodontic consultations to dental implant solutions, we
                  aim to make your dental care experience informative,
                  comfortable and convenient.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <ConsultationTriggerButton label="Book a Consultation" />
                <Link
                  href="/treatments"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-6 py-3 text-sm font-semibold text-[#102D65] transition-colors hover:bg-[#F5F8FF]"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-[#E7ECF5] bg-white p-3 shadow-xl shadow-[#102D65]/10">
                <img
                  src={CLINIC_INFO.assets.clinicInterior}
                  alt="Smilo Care Orthodontic And Implant Centre clinic interior in Ashok Nagar, Kanpur"
                  width={2752}
                  height={1536}
                  fetchPriority="high"
                  className="aspect-[16/10] w-full rounded-2xl object-cover"
                />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 pb-1 text-xs text-slate-600">
                  <span className="font-semibold text-[#102D65]">
                    Supplied Clinic Interior Photograph
                  </span>
                  <span>Ashok Nagar, Harsh Nagar, Kanpur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment & Doctor Profile */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF] p-8 lg:col-span-6">
            <h2 className="font-display text-2xl font-bold text-[#102D65]">
              Our Commitment
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Every appointment at Smilo Care is built around five foundational
              principles:
            </p>
            <ul className="mt-6 space-y-4">
              {COMMITMENTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#E7ECF5] bg-white p-4 text-sm font-medium text-[#102D65]"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1749B8]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-[#E7ECF5] bg-gradient-to-br from-[#102D65] to-[#1749B8] p-8 text-white lg:col-span-6">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              <div className="h-36 w-36 shrink-0 overflow-hidden rounded-full border-4 border-[#D6B879] bg-gradient-to-b from-white to-[#E7ECF5]">
                <img
                  src={CLINIC_INFO.doctor.portraitSrc}
                  alt={CLINIC_INFO.doctor.portraitAlt}
                  width={1254}
                  height={1254}
                  loading="lazy"
                  className="h-full w-full object-cover object-top pt-2"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D6B879]">
                  Lead Dentist
                </span>
                <h2 className="mt-1 font-display text-2xl font-bold text-white">
                  {CLINIC_INFO.doctor.name}
                </h2>
                <p className="text-sm font-semibold text-[#D6B879]">
                  {CLINIC_INFO.doctor.qualifications}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-100">
                  Dedicated to providing personalized dental care with a focus
                  on comfort, confidence and healthy smiles across orthodontic,
                  implant, and general dental needs.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D6B879]" aria-hidden="true" />
                <span>{CLINIC_INFO.address.full}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#D6B879]" aria-hidden="true" />
                <span>{CLINIC_INFO.hours.summary}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#D6B879]" aria-hidden="true" />
                <a
                  href={CLINIC_INFO.phone.telHref}
                  className="font-semibold text-white underline underline-offset-4"
                >
                  {CLINIC_INFO.phone.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Video Showcase */}
      <section className="border-t border-[#E7ECF5] bg-[#F5F8FF] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-bold text-[#102D65] sm:text-3xl">
              Explore Our Care Philosophy
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Located near Dr. Anoop Awasthi and Vikas Diagnostic at Coca-Cola
              Chauraha in Ashok Nagar, Harsh Nagar, our clinic welcomes patients
              from across Kanpur.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/gallery"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#102D65] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1749B8]"
              >
                <span>View Clinic Gallery</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-5 py-2.5 text-sm font-semibold text-[#102D65] hover:bg-slate-50"
              >
                <span>Directions &amp; Contact</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SmartVideoPlayer
              src="/videos/section-transition.mp4"
              poster={CLINIC_INFO.assets.galleryBanner}
              title="Smilo Care Healthcare Brand Visual"
            />
          </div>
        </div>
      </section>
    </>
  );
}
