import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import { ClinicGallery } from "@/components/gallery/ClinicGallery";
import { Reveal } from "@/components/motion/MotionProvider";

export function ClinicGalleryPreviewSection() {
  return (
    <section
      id="clinic-gallery"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D6B879]/60 bg-[#F5F8FF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
              <Images className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Clinic Gallery</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-[#102D65] sm:text-4xl">
              Inside Smilo Care Orthodontic &amp; Implant Centre
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Browse our supplied clinic interior photograph, doctor portrait,
              and educational treatment visuals. Click any frame to inspect it
              in our interactive lightbox.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex min-h-[46px] shrink-0 items-center gap-2 rounded-xl border border-[#E7ECF5] bg-[#F5F8FF] px-5 py-2.5 text-sm font-semibold text-[#102D65] transition-colors hover:border-[#1749B8]/40 hover:bg-white"
          >
            <span>Open Full Gallery &amp; Videos</span>
            <ArrowRight className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
          </Link>
        </Reveal>

        <ClinicGallery showVideos={false} />
      </div>
    </section>
  );
}
