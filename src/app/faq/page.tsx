import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { ConsultationTriggerButton } from "@/components/booking/ConsultationTriggerButton";

export const metadata = buildPageMetadata({
  title: "Dental FAQ | Smilo Care Orthodontic & Implant Centre Kanpur",
  description:
    "Answers to frequently asked questions about dental implants, orthodontic braces, clinic location in Ashok Nagar Kanpur, timings, and booking consultations at Smilo Care.",
  path: "/faq",
});

export default function FaqPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, faqSchema]),
        }}
      />

      <section className="bg-gradient-to-b from-[#F5F8FF] to-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
          />

          <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
            Patient Information
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-[#102D65] sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Clear answers about visiting Smilo Care Orthodontic And Implant
            Centre in Ashok Nagar, Harsh Nagar, Kanpur, along with common
            questions about braces and dental implants.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20 pt-4">
        <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={FAQ_ITEMS} />

          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#E7ECF5] bg-[#102D65] p-8 text-white sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">
                Still Have Questions for Dr. Kriti Shukla?
              </h2>
              <p className="mt-1.5 text-sm text-slate-200">
                Send an appointment enquiry or reach our clinic desk on +91
                91402 64464.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ConsultationTriggerButton
                label="Request Appointment"
                variant="gold"
              />
              <Link
                href="/contact-us"
                className="inline-flex min-h-[48px] items-center gap-1.5 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20"
              >
                <span>Contact Page</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
