"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MessageSquareQuote,
  Quote,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { PATIENT_REVIEWS } from "@/data/reviews";
import { Reveal } from "@/components/motion/MotionProvider";

const featuredReviews = PATIENT_REVIEWS.filter((r) => r.featured);
const remainingReviews = PATIENT_REVIEWS.filter((r) => !r.featured);

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");
  const lastSettledRef = useRef(0);

  const getSlides = useCallback((): HTMLElement[] => {
    const track = trackRef.current;
    if (!track) return [];
    return Array.from(track.children) as HTMLElement[];
  }, []);

  const getNearestSlideIndex = useCallback((): number => {
    const track = trackRef.current;
    if (!track) return 0;
    const slides = getSlides();
    if (!slides.length) return 0;

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(slideCenter - trackCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = index;
      }
    });
    return closestIdx;
  }, [getSlides]);

  const scrollToSlide = (targetIndex: number) => {
    const track = trackRef.current;
    const slides = getSlides();
    if (!track || !slides.length) return;

    const wrappedIndex =
      ((targetIndex % slides.length) + slides.length) % slides.length;
    const targetSlide = slides[wrappedIndex];
    const delta =
      targetSlide.offsetLeft -
      track.offsetLeft -
      (track.clientWidth - targetSlide.offsetWidth) / 2;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    track.scrollTo({
      left: Math.max(0, delta),
      behavior: prefersReduced ? "instant" : "smooth",
    });

    setActiveSlide(wrappedIndex);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let settleTimer: ReturnType<typeof setTimeout> | null = null;
    let rafId = 0;

    const handleSettled = () => {
      const idx = getNearestSlideIndex();
      setActiveSlide(idx);
      if (idx !== lastSettledRef.current) {
        lastSettledRef.current = idx;
        setStatusMessage(
          `Slide ${idx + 1} of ${remainingReviews.length}: ${
            remainingReviews[idx]?.patientName ?? ""
          }`
        );
      }
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          setActiveSlide(getNearestSlideIndex());
        });
      }

      if (!("onscrollend" in window)) {
        if (settleTimer) clearTimeout(settleTimer);
        settleTimer = setTimeout(handleSettled, 140);
      }
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    track.addEventListener("scrollend", handleSettled);
    return () => {
      track.removeEventListener("scroll", handleScroll);
      track.removeEventListener("scrollend", handleSettled);
      if (rafId) cancelAnimationFrame(rafId);
      if (settleTimer) clearTimeout(settleTimer);
    };
  }, [getNearestSlideIndex]);

  return (
    <section
      id="patient-reviews"
      className="bg-[#F5F8FF] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D6B879]/70 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
            <MessageSquareQuote className="h-3.5 w-3.5 text-[#D6B879]" aria-hidden="true" />
            <span>Real Smiles. Real Experiences.</span>
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-[#102D65] sm:text-4xl">
            What Our Patients Say About Smilo Care.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Real experiences shared by patients who visited Smilo Care.
          </p>
        </Reveal>

        {/* Three Featured Authentic Patient Reviews */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredReviews.map((review) => (
            <article
              key={review.id}
              className="flex h-full flex-col justify-between rounded-3xl border border-[#E7ECF5] bg-white p-7 shadow-[0_12px_34px_-16px_rgba(16,45,101,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B879]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F8FF] text-[#1749B8] ring-1 ring-[#E7ECF5]">
                    <Quote className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-[#D6B879]/50 bg-[#FFFDF8] px-3 py-1 text-[11px] font-semibold text-[#102D65]">
                    {review.treatmentContext}
                  </span>
                </div>

                <blockquote className="mt-5 text-sm leading-relaxed text-slate-700 sm:text-[0.95rem]">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 border-t border-[#E7ECF5] pt-4">
                <p className="font-display text-base font-bold text-[#102D65]">
                  {review.patientName}
                </p>
                <p className="text-xs font-medium text-slate-500">
                  Shared Patient Review
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Remaining 6 Reviews in Accessible Scroll-Snap Carousel */}
        <section
          aria-roledescription="carousel"
          aria-label="More patient experiences at Smilo Care"
          className="mt-10 rounded-3xl border border-[#E7ECF5] bg-white p-6 shadow-xs sm:p-8"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold text-[#102D65]">
                More Patient Experiences ({remainingReviews.length})
              </h3>
              <p className="text-xs text-slate-600">
                Swipe or use the navigation controls to browse additional patient stories.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToSlide(activeSlide - 1)}
                aria-label="Previous patient review"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E7ECF5] bg-[#F5F8FF] text-[#102D65] transition-colors hover:bg-[#1749B8] hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSlide(activeSlide + 1)}
                aria-label="Next patient review"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E7ECF5] bg-[#F5F8FF] text-[#102D65] transition-colors hover:bg-[#1749B8] hover:text-white"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            tabIndex={0}
            role="group"
            aria-label="Patient review slides"
            className="carousel-track gap-5 pb-2"
          >
            {remainingReviews.map((review, index) => (
              <div
                key={review.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${remainingReviews.length}`}
                className="flex min-w-full shrink-0 snap-center flex-col justify-between rounded-2xl border border-[#E7ECF5] bg-[#F5F8FF]/65 p-6 md:min-w-[calc(50%-0.625rem)] lg:min-w-[calc(33.333%-0.833rem)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <Quote
                      className="h-5 w-5 text-[#1749B8]"
                      aria-hidden="true"
                    />
                    <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#1749B8] ring-1 ring-[#E7ECF5]">
                      {review.treatmentContext}
                    </span>
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-5 border-t border-[#E7ECF5] pt-3">
                  <p className="font-display text-sm font-bold text-[#102D65]">
                    {review.patientName}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Shared Patient Review
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="visually-hidden" role="status" aria-live="polite">
            {statusMessage}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <nav
              aria-label="Choose a patient review slide"
              className="flex items-center gap-2"
            >
              {remainingReviews.map((review, index) => (
                <button
                  key={review.id}
                  type="button"
                  aria-label={`Go to review by ${review.patientName}`}
                  aria-current={activeSlide === index ? "true" : undefined}
                  onClick={() => scrollToSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index
                      ? "w-7 bg-[#1749B8]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </nav>

            <a
              href={CLINIC_INFO.social.googleMapsPlace}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1749B8] transition-colors hover:text-[#102D65]"
            >
              <span>View Clinic on Google Maps</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
