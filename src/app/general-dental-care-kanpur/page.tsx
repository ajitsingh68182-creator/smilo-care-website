import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationTriggerButton } from "@/components/booking/ConsultationTriggerButton";
import { SmartVideoPlayer } from "@/components/media/SmartVideoPlayer";

export const metadata = buildPageMetadata({
  title: "Dental Care in Kanpur | Smilo Care Dental Clinic",
  description:
    "Learn about dental care and oral hygiene at Smilo Care Orthodontic And Implant Centre, Ashok Nagar, Kanpur.",
  path: "/general-dental-care-kanpur",
  keywords: ["Dental Care in Kanpur", "Oral Hygiene Tips Kanpur"],
  ogImage: "/images/root-canal.jpg",
});

const HYGIENE_TIPS = [
  "Brush twice daily using fluoride toothpaste.",
  "Floss or clean between teeth regularly.",
  "Limit sugary food and drinks.",
  "Schedule regular dental checkups.",
  "Seek professional advice if you experience dental pain or discomfort.",
];

export default function GeneralDentalCarePage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments" },
    { name: "General Dental Care", path: "/general-dental-care-kanpur" },
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
              { label: "General Dental Care" },
            ]}
          />

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                Preventive &amp; Everyday Oral Health
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#102D65] sm:text-4xl lg:text-[2.8rem]">
                Complete Dental Care for a Healthier Smile.
              </h1>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Maintaining good oral health is important for your overall
                  well-being. Regular dental checkups and proper oral hygiene
                  habits can help identify potential dental concerns early.
                </p>
                <p>
                  At Smilo Care, we believe that informed patients can make
                  better decisions about their dental health.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <ConsultationTriggerButton
                  label="Schedule a Dental Checkup"
                  treatment="Other"
                />
                <Link
                  href="/treatments"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-6 py-3 text-sm font-semibold text-[#102D65] hover:bg-[#F5F8FF]"
                >
                  <span>View All 11 Treatments</span>
                  <ArrowRight className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SmartVideoPlayer
                src="/videos/dental-animation.mp4"
                poster="/images/crowns-bridges.jpg"
                title="Comprehensive Dental Care 3D Overview"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF] p-8 lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-[#102D65]">
              Practical Daily Oral Hygiene Habits
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Simple daily steps recommended for protecting enamel, gums, and
              dental restorations:
            </p>
            <ul className="mt-6 space-y-3.5">
              {HYGIENE_TIPS.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 rounded-2xl border border-[#E7ECF5] bg-white p-4 text-sm font-medium text-[#102D65]"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1749B8]"
                    aria-hidden="true"
                  />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-[#E7ECF5] bg-white p-8 shadow-sm lg:col-span-5">
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F8FF] text-[#1749B8]">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold text-[#102D65]">
                Need Preventive or Restorative Advice?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                From tooth scaling and root canal treatment to wisdom tooth
                evaluation and pediatric visits, explore helpful guides in our
                dental blog or schedule a consultation in Kanpur.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <Link
                href="/blog/7-tips-to-maintain-healthy-teeth"
                className="flex items-center justify-between rounded-xl border border-[#E7ECF5] bg-[#F5F8FF] px-4 py-3 text-sm font-semibold text-[#102D65] hover:border-[#1749B8]/40"
              >
                <span>7 Tips to Maintain Healthy Teeth</span>
                <ArrowRight className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
              </Link>
              <Link
                href="/blog/how-often-should-you-visit-a-dentist"
                className="flex items-center justify-between rounded-xl border border-[#E7ECF5] bg-[#F5F8FF] px-4 py-3 text-sm font-semibold text-[#102D65] hover:border-[#1749B8]/40"
              >
                <span>How Often Should You Visit a Dentist?</span>
                <ArrowRight className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
