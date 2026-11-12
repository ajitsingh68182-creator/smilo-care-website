import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationTriggerButton } from "@/components/booking/ConsultationTriggerButton";
import { SmartVideoPlayer } from "@/components/media/SmartVideoPlayer";

export const metadata = buildPageMetadata({
  title: "Orthodontist in Kanpur | Smilo Care Orthodontic Centre",
  description:
    "Looking for orthodontic treatment in Kanpur? Visit Smilo Care Orthodontic And Implant Centre to discuss teeth alignment and braces treatment options.",
  path: "/orthodontic-treatment-kanpur",
  keywords: ["Orthodontist in Kanpur", "Teeth Alignment Kanpur"],
  ogImage: "/images/orthodontics.jpg",
});

const ORTHODONTIC_CONCERNS = [
  "Crooked or misaligned teeth.",
  "Crowded teeth.",
  "Gaps between teeth.",
  "Overbite and underbite.",
  "Certain bite alignment problems.",
];

const ORTHODONTIC_BENEFITS = [
  "Improved teeth alignment.",
  "Better bite function.",
  "Easier cleaning between properly aligned teeth.",
  "Improved smile appearance.",
];

export default function OrthodonticTreatmentPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments" },
    {
      name: "Orthodontic Treatment in Kanpur",
      path: "/orthodontic-treatment-kanpur",
    },
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
              { label: "Orthodontic Treatment" },
            ]}
          />

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                Orthodontic Care in Kanpur
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#102D65] sm:text-4xl lg:text-[2.8rem]">
                Orthodontic Treatment in Kanpur.
              </h1>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  A well-aligned smile can make a difference in your confidence
                  and oral health. Orthodontic treatment focuses on correcting
                  teeth alignment and certain bite problems.
                </p>
                <p>
                  At Smilo Care Orthodontic And Implant Centre, Kanpur, we focus
                  on helping patients understand their orthodontic concerns and
                  explore suitable treatment options.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <ConsultationTriggerButton
                  label="Book Your Orthodontic Consultation"
                  treatment="Orthodontic Treatment"
                />
                <Link
                  href="/braces-treatment-kanpur"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-6 py-3 text-sm font-semibold text-[#102D65] hover:bg-[#F5F8FF]"
                >
                  <span>Explore Braces Options</span>
                  <ArrowRight className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-[#E7ECF5] bg-white p-3 shadow-xl shadow-[#102D65]/10">
                <img
                  src="/images/orthodontics.jpg"
                  alt="Medical illustration of orthodontic alignment brackets on teeth"
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

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF] p-8">
            <h2 className="font-display text-2xl font-bold text-[#102D65]">
              Common Orthodontic Concerns
            </h2>
            <ul className="mt-6 space-y-3.5">
              {ORTHODONTIC_CONCERNS.map((item) => (
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

          <div className="rounded-3xl border border-[#E7ECF5] bg-white p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-[#102D65]">
              Benefits of Orthodontic Care
            </h2>
            <ul className="mt-6 space-y-3.5">
              {ORTHODONTIC_BENEFITS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#E7ECF5] bg-[#F5F8FF]/70 p-4 text-sm font-medium text-slate-700"
                >
                  <Sparkles
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#D6B879]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E7ECF5] bg-[#F5F8FF] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-display text-2xl font-bold text-[#102D65] sm:text-3xl">
              How Teeth Move Gradually Into Alignment
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Orthodontic care is suitable for teenagers and adults alike. Watch
              our 3D illustration showing gentle alignment movement, and schedule
              a visit in Ashok Nagar to discuss options tailored to your bite.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ConsultationTriggerButton
                label="Book Your Orthodontic Consultation"
                treatment="Orthodontic Treatment"
              />
              <Link
                href="/blog/what-is-orthodontic-treatment"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-5 py-3 text-sm font-semibold text-[#102D65] hover:bg-slate-50"
              >
                <span>Read Orthodontics Guide</span>
                <ArrowRight className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <SmartVideoPlayer
              src="/videos/braces-animation.mp4"
              poster="/images/orthodontics.jpg"
              title="Orthodontic Alignment Animation"
            />
          </div>
        </div>
      </section>
    </>
  );
}
