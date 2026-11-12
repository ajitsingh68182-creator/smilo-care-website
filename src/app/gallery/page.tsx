import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ClinicGallery } from "@/components/gallery/ClinicGallery";
import { ConsultationTriggerButton } from "@/components/booking/ConsultationTriggerButton";

export const metadata = buildPageMetadata({
  title: "Clinic Gallery | Smilo Care Orthodontic & Implant Centre Kanpur",
  description:
    "View our clinic interior photograph, Lead Dentist Dr. Kriti Shukla portrait, treatment education visuals, and clinic walkthrough videos at Smilo Care Kanpur.",
  path: "/gallery",
});

export default function GalleryPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
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
            items={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
          />

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                Visual Showcase
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold text-[#102D65] sm:text-4xl">
                Smilo Care Clinic &amp; Treatment Gallery
              </h1>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Explore our supplied clinic interior photograph, original doctor
                portrait, treatment visual guides, and animated patient
                education clips.
              </p>
            </div>
            <ConsultationTriggerButton label="Schedule a Visit" />
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ClinicGallery showVideos />
        </div>
      </section>
    </>
  );
}
