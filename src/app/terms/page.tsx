import Link from "next/link";
import { FileText } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = buildPageMetadata({
  title:
    "Terms of Use & Medical Disclaimer | Smilo Care Orthodontic & Implant Centre",
  description:
    "Review the website terms of use, appointment request terms, and dental educational disclaimer for Smilo Care Orthodontic And Implant Centre, Kanpur.",
  path: "/terms",
});

export default function TermsPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Terms & Medical Disclaimer", path: "/terms" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-b from-[#F5F8FF] to-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Terms & Medical Disclaimer" },
            ]}
          />

          <span className="inline-flex items-center gap-2 rounded-full border border-[#D6B879]/60 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
            <FileText className="h-3.5 w-3.5 text-[#D6B879]" aria-hidden="true" />
            Clinic Information &amp; Terms
          </span>

          <h1 className="mt-4 font-display text-3xl font-extrabold text-[#102D65] sm:text-4xl">
            Terms of Use &amp; Medical Disclaimer
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Welcome to the official website of {CLINIC_INFO.brandName}. By
            browsing or using this website, you agree to the general terms
            outlined below.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20 pt-2">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 rounded-2xl border border-[#E7ECF5] bg-[#F5F8FF]/60 p-6">
            <h2 className="font-display text-xl font-bold text-[#102D65]">
              1. Educational Content Disclaimer
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              All treatment descriptions, FAQs, illustrations, and blog articles
              on this website are provided strictly for general dental education
              and patient awareness. They do not constitute a diagnosis, clinical
              prescription, or guarantee of treatment suitability. Every dental
              procedure requires an in-person clinical assessment by{" "}
              {CLINIC_INFO.doctor.name} ({CLINIC_INFO.doctor.qualifications}).
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-[#E7ECF5] bg-white p-6">
            <h2 className="font-display text-xl font-bold text-[#102D65]">
              2. Appointment Requests &amp; Confirmation
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Submitting an appointment request through this website initiates a
              WhatsApp request to our clinic desk ({CLINIC_INFO.phone.display}).
              Appointment slots are confirmed by our clinic team based on
              doctor availability during clinic hours (
              {CLINIC_INFO.hours.summary}). If you are experiencing urgent dental
              pain or swelling, please call us directly by telephone.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-[#E7ECF5] bg-white p-6">
            <h2 className="font-display text-xl font-bold text-[#102D65]">
              3. Clinic Brand Assets &amp; Content
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Original clinic photographs, the Smilo Care logo, doctor
              portraits, and written educational material belong to{" "}
              {CLINIC_INFO.brandName} and may not be reproduced commercially
              without permission.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-[#E7ECF5] bg-white p-6">
            <h2 className="font-display text-xl font-bold text-[#102D65]">
              4. Contact Us
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              For clinic queries, visit us at {CLINIC_INFO.address.full}, call{" "}
              <a
                href={CLINIC_INFO.phone.telHref}
                className="font-semibold text-[#1749B8] hover:underline"
              >
                {CLINIC_INFO.phone.display}
              </a>
              , or see our{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-[#1749B8] hover:underline"
              >
                Contact Us page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
