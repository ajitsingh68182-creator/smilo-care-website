import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationTriggerButton } from "@/components/booking/ConsultationTriggerButton";

export const metadata = buildPageMetadata({
  title: "Braces Treatment in Kanpur | Teeth Alignment – Smilo Care",
  description:
    "Explore teeth braces treatment in Kanpur at Smilo Care. Discuss your teeth alignment concerns and suitable orthodontic options with a dental professional.",
  path: "/braces-treatment-kanpur",
  keywords: ["Braces Treatment in Kanpur", "Metal Braces", "Ceramic Braces"],
  ogImage: "/images/orthodontics.jpg",
});

const BRACES_TYPES = [
  {
    name: "Metal Braces",
    description:
      "Durable stainless-steel brackets and archwires widely used for effective teeth alignment and complex bite adjustments.",
    highlights: [
      "Strong, reliable bracket construction",
      "Suitable across mild to complex alignment cases",
      "Predictable orthodontic control during adjustments",
    ],
  },
  {
    name: "Ceramic Braces",
    description:
      "Tooth-colored or translucent brackets designed to blend more discreetly with natural teeth while guiding alignment.",
    highlights: [
      "Subtle, less noticeable tooth-shaded profile",
      "Popular choice for working adults and college students",
      "Requires mindful brushing around clear ties",
    ],
  },
  {
    name: "Other Orthodontic Appliances",
    description:
      "Additional orthodontic appliances or retainers where clinically suitable, selected after evaluating jaw growth, spacing, and bite needs.",
    highlights: [
      "Selected individually after clinical diagnosis",
      "Includes post-braces retainers to maintain results",
      "Planned around comfort and oral hygiene needs",
    ],
  },
];

export default function BracesTreatmentPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Orthodontic Treatment", path: "/orthodontic-treatment-kanpur" },
    { name: "Braces Treatment in Kanpur", path: "/braces-treatment-kanpur" },
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
              {
                label: "Orthodontics",
                href: "/orthodontic-treatment-kanpur",
              },
              { label: "Braces Treatment" },
            ]}
          />

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                Teeth Alignment Solutions
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#102D65] sm:text-4xl lg:text-[2.8rem]">
                Teeth Braces Treatment in Kanpur.
              </h1>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Braces are commonly used in orthodontics to gradually move
                  teeth into better alignment. They can help address crowded
                  teeth, gaps and certain bite-related concerns.
                </p>
                <p>
                  At Smilo Care Orthodontic And Implant Centre, we encourage
                  patients to understand their available braces options before
                  beginning treatment.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <ConsultationTriggerButton
                  label="Explore Braces Treatment"
                  treatment="Braces"
                />
                <Link
                  href="/blog/metal-braces-vs-ceramic-braces-whats-the-difference"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-6 py-3 text-sm font-semibold text-[#102D65] hover:bg-[#F5F8FF]"
                >
                  <span>Compare Metal vs Ceramic</span>
                  <ArrowRight className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-[#E7ECF5] bg-white p-3 shadow-xl shadow-[#102D65]/10">
                <img
                  src="/images/orthodontics.jpg"
                  alt="Orthodontic braces alignment illustration"
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

      {/* Types of Braces */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-[#102D65]">
              Types of Braces &amp; Orthodontic Appliances
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Different braces systems serve different alignment needs and
              aesthetic preferences.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {BRACES_TYPES.map((type) => (
              <div
                key={type.name}
                className="flex flex-col justify-between rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF]/60 p-7 transition-all hover:border-[#1749B8]/35 hover:bg-white hover:shadow-lg"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-[#102D65]">
                    {type.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {type.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {type.highlights.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#1749B8]"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Clinical Assessment Note */}
          <div className="mt-10 rounded-3xl border border-[#D6B879]/60 bg-[#FFFDF8] p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F8FF] text-[#1749B8]">
                  <ShieldAlert className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#102D65]">
                    Individual Assessment Determines Suitable Braces Options
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    Suitable braces treatment depends on your individual dental
                    condition, bite alignment, gum health, and professional
                    clinical assessment by Dr. Kriti Shukla (BDS, MDS).
                  </p>
                </div>
              </div>
              <ConsultationTriggerButton
                label="Book Braces Assessment"
                treatment="Braces"
                className="shrink-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
