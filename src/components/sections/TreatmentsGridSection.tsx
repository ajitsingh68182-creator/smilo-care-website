import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_HOME_TREATMENTS } from "@/data/treatments";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/MotionProvider";

export function TreatmentsGridSection() {
  return (
    <section className="bg-[#F5F8FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
            Comprehensive Oral Care
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-[#102D65] sm:text-4xl">
            Personalized Dental Treatments in Kanpur
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Explore core orthodontic, implant, restorative, pediatric, and
            cosmetic care procedures tailored around individual clinical needs.
          </p>
        </Reveal>

        <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_HOME_TREATMENTS.map((treatment) => (
            <StaggerItem key={treatment.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E7ECF5] bg-white shadow-[0_10px_30px_-14px_rgba(16,45,101,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1749B8]/35 hover:shadow-xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F8FF]">
                  <img
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/92 px-3 py-1 text-[11px] font-semibold text-[#102D65] backdrop-blur-xs">
                    {treatment.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#102D65] transition-colors group-hover:text-[#1749B8]">
                      {treatment.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {treatment.shortDescription}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#E7ECF5] pt-4">
                    <Link
                      href={treatment.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1749B8] transition-colors hover:text-[#102D65]"
                    >
                      <span>Learn More about {treatment.name}</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="mt-12 text-center">
          <Link
            href="/treatments"
            className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-[#1749B8] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#1749B8]/20 transition-all hover:-translate-y-0.5 hover:bg-[#102D65]"
          >
            <span>Explore All Treatments</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
