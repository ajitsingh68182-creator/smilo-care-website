import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationTriggerButton } from "@/components/booking/ConsultationTriggerButton";
import { SmartVideoPlayer } from "@/components/media/SmartVideoPlayer";

export const metadata = buildPageMetadata({
  title: "Dental Implants in Kanpur | Smilo Care Implant Centre",
  description:
    "Explore dental implant treatment options at Smilo Care Orthodontic And Implant Centre in Kanpur. Schedule a consultation to discuss tooth replacement solutions.",
  path: "/dental-implants-kanpur",
  keywords: ["Dental Implants in Kanpur", "Tooth Replacement Kanpur"],
  ogImage: "/images/dental-implant.jpg",
});

const WHY_IMPLANTS = [
  "Designed to replace missing teeth.",
  "Can help restore chewing function.",
  "Designed to look like natural teeth.",
  "Can support a more complete smile.",
  "Treatment plans are based on individual dental conditions.",
];

const WHO_NEEDS_IMPLANTS = [
  "People with one or more missing teeth.",
  "People exploring tooth replacement options.",
  "People having difficulty with existing tooth replacement solutions.",
  "People seeking long-term replacement options.",
];

export default function DentalImplantsPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments" },
    { name: "Dental Implants in Kanpur", path: "/dental-implants-kanpur" },
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
            items={[
              { label: "Home", href: "/" },
              { label: "Treatments", href: "/treatments" },
              { label: "Dental Implants" },
            ]}
          />

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                Implant Dentistry in Ashok Nagar, Kanpur
              </span>

              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#102D65] sm:text-4xl lg:text-[2.8rem]">
                Dental Implant Treatment in Kanpur.
              </h1>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Missing a tooth can affect your smile, confidence and everyday
                  activities. Dental implants are one of the treatment options
                  available for replacing missing teeth.
                </p>
                <p>
                  At Smilo Care Orthodontic And Implant Centre, Kanpur, we help
                  patients understand dental implant treatment and explore
                  suitable options based on their oral health and individual
                  requirements.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <ConsultationTriggerButton
                  label="Book a Dental Implant Consultation"
                  treatment="Dental Implants"
                />
                <Link
                  href="/faq"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-6 py-3 text-sm font-semibold text-[#102D65] hover:bg-[#F5F8FF]"
                >
                  <span>Implant FAQs</span>
                  <ArrowRight className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-[#E7ECF5] bg-white p-3 shadow-xl shadow-[#102D65]/10">
                <img
                  src="/images/dental-implant.jpg"
                  alt="3D anatomical illustration of a dental implant supporting a natural-looking crown"
                  width={2048}
                  height={2048}
                  fetchPriority="high"
                  className="aspect-square max-h-[28rem] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Consider & Who May Need */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF] p-8">
            <h2 className="font-display text-2xl font-bold text-[#102D65]">
              Why Consider Dental Implants?
            </h2>
            <ul className="mt-6 space-y-3.5">
              {WHY_IMPLANTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-[#E7ECF5] bg-white p-4 text-sm font-medium text-[#102D65]"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1749B8]"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[#E7ECF5] bg-white p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-[#102D65]">
              Who May Need Dental Implants?
            </h2>
            <ul className="mt-6 space-y-3.5">
              {WHO_NEEDS_IMPLANTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-[#E7ECF5] bg-[#F5F8FF]/70 p-4 text-sm font-medium text-slate-700"
                >
                  <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1749B8]"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Consultation & Educational Animation */}
      <section className="border-t border-[#E7ECF5] bg-[#F5F8FF] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1749B8]">
              Individual Assessment
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#102D65] sm:text-3xl">
              Your Dental Implant Consultation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Every patient has different dental needs. A dental professional
              will assess your oral health, bone condition and treatment
              requirements before recommending an appropriate treatment plan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ConsultationTriggerButton
                label="Book a Dental Implant Consultation"
                treatment="Dental Implants"
              />
              <Link
                href="/blog/everything-you-need-to-know-about-dental-implants"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-5 py-3 text-sm font-semibold text-[#102D65] hover:bg-slate-50"
              >
                <span>Read Our Implant Guide</span>
                <ArrowRight className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <SmartVideoPlayer
              src="/videos/implant-animation.mp4"
              poster="/images/dental-implant.jpg"
              title="3D Dental Implant Overview"
            />
          </div>
        </div>
      </section>
    </>
  );
}
