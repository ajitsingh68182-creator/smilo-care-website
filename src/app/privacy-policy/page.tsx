import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = buildPageMetadata({
  title:
    "Privacy Policy | Smilo Care Orthodontic And Implant Centre Kanpur",
  description:
    "Read the privacy policy for Smilo Care Orthodontic And Implant Centre in Ashok Nagar, Kanpur regarding appointment enquiries and website communication.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
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
            items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
          />

          <span className="inline-flex items-center gap-2 rounded-full border border-[#D6B879]/60 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#D6B879]" aria-hidden="true" />
            Clinic Website Policy
          </span>

          <h1 className="mt-4 font-display text-3xl font-extrabold text-[#102D65] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            At {CLINIC_INFO.brandName}, led by {CLINIC_INFO.doctor.name} (
            {CLINIC_INFO.doctor.qualifications}), we respect your privacy and are
            committed to handling your appointment request details with care.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20 pt-2">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 rounded-2xl border border-[#E7ECF5] bg-[#F5F8FF]/60 p-6">
            <h2 className="font-display text-xl font-bold text-[#102D65]">
              1. Information You Provide During Appointment Requests
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              When you fill out the appointment request form on our website
              (such as your name, phone number, preferred treatment, preferred
              visit time, or optional note), our website composes a structured
              WhatsApp message that you directly send to our official clinic
              phone number ({CLINIC_INFO.phone.display}). We do not store
              medical history files or payment card details on this website.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-[#E7ECF5] bg-white p-6">
            <h2 className="font-display text-xl font-bold text-[#102D65]">
              2. How Your Contact Details Are Used
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Contact details shared via phone call or WhatsApp are used solely
              to coordinate dental consultation scheduling, answer treatment
              queries, and confirm clinic timings at our Ashok Nagar, Harsh
              Nagar, Kanpur address. We do not sell, rent, or distribute
              patient phone numbers to third-party marketers.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-[#E7ECF5] bg-white p-6">
            <h2 className="font-display text-xl font-bold text-[#102D65]">
              3. Third-Party Links &amp; Embedded Services
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              This website includes links or embeds connecting to Google Maps,
              YouTube, Instagram, Facebook, and WhatsApp so visitors can view
              clinic directions, watch educational videos, and contact our team
              conveniently. Interacting with those external platforms is governed
              by their respective privacy policies.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-[#E7ECF5] bg-white p-6">
            <h2 className="font-display text-xl font-bold text-[#102D65]">
              4. Clinic Contact for Privacy Queries
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              For questions about your appointment communication or this privacy
              policy, please call us at{" "}
              <a
                href={CLINIC_INFO.phone.telHref}
                className="font-semibold text-[#1749B8] hover:underline"
              >
                {CLINIC_INFO.phone.display}
              </a>{" "}
              or visit our clinic at {CLINIC_INFO.address.full}. You can also
              reach us through our{" "}
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
