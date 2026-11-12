"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import {
  CLINIC_VIDEOS,
  GALLERY_ITEMS,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";
import { SmartVideoPlayer } from "@/components/media/SmartVideoPlayer";

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Our Clinic",
  "Treatment Room",
  "Dental Equipment",
  "Doctor",
  "Social Media Highlights",
];

export function ClinicGallery({ showVideos = true }: { showVideos?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDialogElement>(null);

  const filteredItems: GalleryItem[] =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (idx: number) => {
    setActiveIndex(idx);
    const dialog = lightboxRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  };

  const closeLightbox = () => {
    const dialog = lightboxRef.current;
    if (dialog?.open) {
      dialog.close();
    }
    setActiveIndex(null);
  };

  const goPrevious = () => {
    if (activeIndex === null) return;
    setActiveIndex(
      (activeIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const goNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % filteredItems.length);
  };

  useEffect(() => {
    const dialog = lightboxRef.current;
    if (!dialog) return;

    const handleClose = () => setActiveIndex(null);
    dialog.addEventListener("close", handleClose);

    if (!("closedBy" in HTMLDialogElement.prototype)) {
      let pressedOutside = false;
      const isOutside = (e: PointerEvent) => {
        const r = dialog.getBoundingClientRect();
        return (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        );
      };
      const onDown = (e: PointerEvent) => {
        pressedOutside = isOutside(e);
      };
      const onUp = (e: PointerEvent) => {
        if (pressedOutside && isOutside(e)) dialog.close();
        pressedOutside = false;
      };
      dialog.addEventListener("pointerdown", onDown);
      dialog.addEventListener("pointerup", onUp);
      return () => {
        dialog.removeEventListener("close", handleClose);
        dialog.removeEventListener("pointerdown", onDown);
        dialog.removeEventListener("pointerup", onUp);
      };
    }

    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  const currentItem =
    activeIndex !== null ? filteredItems[activeIndex] ?? null : null;

  return (
    <div className="space-y-10">
      {/* Category Filter Buttons */}
      <div
        role="group"
        aria-label="Filter gallery by category"
        className="flex flex-wrap items-center justify-center gap-2.5"
      >
        {CATEGORIES.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isSelected}
              onClick={() => {
                setActiveCategory(category);
                setActiveIndex(null);
              }}
              className={`min-h-[42px] rounded-full px-4 py-2 text-sm font-medium transition-all ${
                isSelected
                  ? "bg-[#1749B8] text-white shadow-sm"
                  : "border border-[#E7ECF5] bg-white text-slate-700 hover:border-[#1749B8]/40 hover:bg-[#F5F8FF]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Responsive Image Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, idx) => (
          <figure
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-[#E7ECF5] bg-white shadow-[0_10px_30px_-14px_rgba(16,45,101,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1749B8]/30 hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => openLightbox(idx)}
              aria-label={`Inspect ${item.title} in full view`}
              className="relative block w-full overflow-hidden bg-[#F5F8FF] text-left"
            >
              <div className="aspect-[16/11] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                    item.id === "doctor-portrait-kriti"
                      ? "bg-gradient-to-br from-[#F5F8FF] to-[#E7ECF5] object-contain pt-3"
                      : "object-cover"
                  }`}
                />
              </div>
              <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#102D65] opacity-90 shadow-sm backdrop-blur-xs transition-transform group-hover:scale-110">
                <Expand className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="absolute bottom-3 left-3 rounded-full border border-white/40 bg-[#102D65]/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                {item.sourceType}
              </span>
            </button>

            <figcaption className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1749B8]">
                {item.category}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold text-[#102D65]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {item.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Clinic Walkthrough & Patient Education Videos */}
      {showVideos && (
        <div className="pt-6">
          <div className="mb-6 flex flex-col gap-2 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1749B8]">
              Motion &amp; Clinical Visuals
            </span>
            <h3 className="font-display text-2xl font-bold text-[#102D65]">
              Clinic Tour &amp; Treatment Animations
            </h3>
            <p className="mx-auto max-w-2xl text-sm text-slate-600">
              Press play on any clip below to preview our clinic visual tour or explore patient-friendly 3D treatment education clips.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {CLINIC_VIDEOS.map((vid) => (
              <div
                key={vid.id}
                className="rounded-3xl border border-[#E7ECF5] bg-white p-4 shadow-sm"
              >
                <SmartVideoPlayer
                  src={vid.src}
                  poster={vid.poster}
                  title={vid.title}
                />
                <div className="mt-3 px-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1749B8]">
                    {vid.category}
                  </span>
                  <h4 className="mt-0.5 font-display text-base font-bold text-[#102D65]">
                    {vid.title}
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    {vid.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Native Accessible Lightbox <dialog> */}
      <dialog
        ref={lightboxRef}
        aria-labelledby="lightbox-title"
        {...({ closedby: "any" } as Record<string, string>)}
        className="smilo-dialog m-auto w-[min(95vw,60rem)] max-h-[92dvh] overflow-auto rounded-3xl border border-[#E7ECF5] bg-white p-0 shadow-2xl"
      >
        {currentItem && (
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-[#E7ECF5] px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1749B8]">
                  {currentItem.sourceType} • {currentItem.category}
                </p>
                <h2
                  id="lightbox-title"
                  className="font-display text-lg font-bold text-[#102D65]"
                >
                  {currentItem.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                autoFocus
                aria-label="Close image preview"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E7ECF5] bg-white text-slate-700 hover:bg-[#F5F8FF]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative flex items-center justify-center bg-[#F5F8FF] p-4 sm:p-6">
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                width={currentItem.width}
                height={currentItem.height}
                className="max-h-[62dvh] w-auto rounded-2xl object-contain shadow-sm"
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrevious}
                    aria-label="Previous gallery item"
                    className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E7ECF5] bg-white/95 text-[#102D65] shadow-md hover:bg-white sm:left-5"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next gallery item"
                    className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E7ECF5] bg-white/95 text-[#102D65] shadow-md hover:bg-white sm:right-5"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            <div className="flex flex-col justify-between gap-2 border-t border-[#E7ECF5] px-5 py-4 sm:flex-row sm:items-center sm:px-6">
              <p className="text-sm text-slate-600">{currentItem.caption}</p>
              <span className="shrink-0 text-xs font-semibold text-slate-500">
                {(activeIndex ?? 0) + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
