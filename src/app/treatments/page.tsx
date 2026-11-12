import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TREATMENTS } from "@/data/treatments";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationTriggerButton } from "@/components/booking/ConsultationTriggerButton";

export const metadata = buildPageMetadata({
  title: "All Dental Treatments in Kanpur | Smilo Care Orthodontic & Implant Centre",
  description:
    "Explore all 11 dental treatments at Smilo Care in Ashok Nagar, Kanpur: orthodontics, dental implants, prosthesis, crowns and bridges, RCT, extractions, PRP, Hydrafacial, and pediatric care.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-b from-[#F5F8FF] to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Treatments" }]}
          />

          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
              11 Specialized &amp; General Dental Services
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#102D65] sm:text-4xl lg:text-[2.75rem]">
              Complete Dental Treatments at Smilo Care, Kanpur
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Every treatment plan is discussed individually with Dr. Kriti
              Shukla (BDS, MDS) around your oral health findings, comfort, and
              long-term goals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 pt-6">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {TREATMENTS.map((treatment, idx) => (
            <article
              key={treatment.id}
              id={treatment.slug}
              className="scroll-mt-28 overflow-hidden rounded-3xl border border-[#E7ECF5] bg-white shadow-xs transition-shadow hover:shadow-lg lg:grid lg:grid-cols-12"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#F5F8FF] lg:col-span-4 lg:aspect-auto">
                <img
                  src={treatment.image}
                  alt={treatment.imageAlt}
                  width={800}
                  height={600}
                  loading={idx < 2 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-8">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-[#F5F8FF] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                      {String(idx + 1).padStart(2, "0")} &bull; {treatment.category}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-bold text-[#102D65]">
                    {treatment.name}
                  </h2>

                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {treatment.detailedOverview}
                  </p>

                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
                    {treatment.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 rounded-xl border border-[#E7ECF5] bg-[#F5F8FF]/60 p-3 text-xs font-medium text-[#102D65]"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#1749B8]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3.5 border-t border-[#E7ECF5] pt-5">
                  <ConsultationTriggerButton
                    label={`Request ${treatment.name}`}
                    treatment={treatment.bookingOptionValue}
                  />
                  {treatment.href !== `/treatments#${treatment.slug}` && (
                    <Link
                      href={treatment.href}
                      className="inline-flex min-h-[48px] items-center gap-1.5 rounded-xl border border-[#E7ECF5] bg-white px-5 py-3 text-sm font-semibold text-[#102D65] hover:bg-[#F5F8FF]"
                    >
                      <span>Dedicated Guide</span>
                      <ArrowRight className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
