import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/SocialIcons";
import { CLINIC_INFO } from "@/data/clinic";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/MotionProvider";

const INSTAGRAM_HIGHLIGHTS = [
  {
    id: "ig-clinic",
    title: "Calm Clinical Care Space",
    label: "Clinic Interior",
    src: "/images/clinic-interior.jpg",
    alt: "Smilo Care dental clinic interior in Kanpur",
  },
  {
    id: "ig-doctor",
    title: "Dr. Kriti Shukla (BDS, MDS)",
    label: "Lead Dentist",
    src: "/images/dr-kriti-shukla.png",
    alt: "Dr. Kriti Shukla at Smilo Care Orthodontic And Implant Centre",
    isPortrait: true,
  },
  {
    id: "ig-ortho",
    title: "Precision Orthodontic Alignment",
    label: "Orthodontics",
    src: "/images/orthodontics.jpg",
    alt: "Orthodontic treatment braces visualization",
  },
  {
    id: "ig-implants",
    title: "Natural Tooth Replacement",
    label: "Dental Implants",
    src: "/images/dental-implant.jpg",
    alt: "Dental implant treatment educational model",
  },
];

export function InstagramShowcaseSection() {
  return (
    <section className="bg-[#F5F8FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D6B879]/60 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
              <InstagramIcon className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{CLINIC_INFO.social.instagramHandle}</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-[#102D65] sm:text-4xl">
              A Glimpse Into Smilo Care.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Explore curated clinic moments, dental awareness visuals, and
              patient education highlights shared with our Kanpur community.
            </p>
          </div>

          <a
            href={CLINIC_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-[#102D65] to-[#1749B8] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <InstagramIcon className="h-4 w-4" aria-hidden="true" />
            <span>Follow Us on Instagram</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>

        <StaggerGrid className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INSTAGRAM_HIGHLIGHTS.map((item) => (
            <StaggerItem key={item.id}>
              <a
                href={CLINIC_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl border border-[#E7ECF5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1749B8]/40 hover:shadow-xl"
              >
                <div className="aspect-square w-full overflow-hidden bg-gradient-to-b from-[#F5F8FF] to-white">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                      item.isPortrait
                        ? "object-contain pt-4"
                        : "object-cover"
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between gap-2 border-t border-[#E7ECF5] bg-white px-4 py-3.5">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#1749B8]">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-[#102D65]">
                      {item.title}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-[#1749B8]"
                    aria-hidden="true"
                  />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
