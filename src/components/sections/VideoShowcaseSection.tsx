"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Play, Video, X } from "lucide-react";
import { YoutubeIcon } from "@/components/icons/SocialIcons";
import { CLINIC_INFO } from "@/data/clinic";
import { SmartVideoPlayer } from "@/components/media/SmartVideoPlayer";
import { Reveal } from "@/components/motion/MotionProvider";

export function VideoShowcaseSection() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    `https://i.ytimg.com/vi/${CLINIC_INFO.social.youtubeVideoId}/hqdefault.jpg`
  );

  const openModal = () => {
    setModalOpen(true);
    if (modalRef.current && !modalRef.current.open) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current?.open) {
      modalRef.current.close();
    }
    setModalOpen(false);
  };

  useEffect(() => {
    const dialog = modalRef.current;
    if (!dialog) return;

    const onClose = () => setModalOpen(false);
    dialog.addEventListener("close", onClose);

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
        dialog.removeEventListener("close", onClose);
        dialog.removeEventListener("pointerdown", onDown);
        dialog.removeEventListener("pointerup", onUp);
      };
    }

    return () => dialog.removeEventListener("close", onClose);
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D6B879]/60 bg-[#F5F8FF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
              <Video className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Clinic Video &amp; Virtual Tour</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-[#102D65] sm:text-4xl">
              Discover Smilo Care.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Watch our featured clinic video or preview our calm, welcoming
              treatment environment before your visit in Kanpur.
            </p>
          </div>

          <a
            href={CLINIC_INFO.social.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] shrink-0 items-center gap-2 rounded-xl border border-[#E7ECF5] bg-[#F5F8FF] px-5 py-2.5 text-sm font-semibold text-[#102D65] transition-colors hover:border-[#1749B8]/40 hover:bg-white"
          >
            <YoutubeIcon className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
            <span>Visit Official YouTube Channel</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Official YouTube Video Trigger Card */}
          <Reveal className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-3xl border border-[#E7ECF5] bg-[#102D65] shadow-xl shadow-[#102D65]/15">
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={thumbSrc}
                  alt="Discover Smilo Care Orthodontic And Implant Centre video thumbnail"
                  width={1280}
                  height={720}
                  loading="lazy"
                  onError={() =>
                    setThumbSrc(CLINIC_INFO.assets.galleryBanner)
                  }
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102D65]/85 via-[#102D65]/30 to-transparent" />

                <button
                  type="button"
                  onClick={openModal}
                  aria-label="Play Discover Smilo Care YouTube video"
                  className="absolute left-1/2 top-1/2 inline-flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#D6B879] bg-white/95 text-[#1749B8] shadow-2xl transition-transform duration-300 group-hover:scale-110"
                >
                  <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
                </button>

                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 text-white">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#D6B879]">
                      Official YouTube Video
                    </p>
                    <p className="font-display text-lg font-bold">
                      Smilo Care Orthodontic &amp; Implant Centre
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={openModal}
                    className="rounded-xl bg-[#1749B8] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#20A9E8]"
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Clinic Animation Video */}
          <Reveal delay={0.1} className="flex flex-col justify-between gap-5 lg:col-span-5">
            <SmartVideoPlayer
              src="/videos/hero-clinic.mp4"
              poster={CLINIC_INFO.assets.clinicInterior}
              title="Smilo Care Interior Walkthrough"
            />
            <div className="rounded-2xl border border-[#E7ECF5] bg-[#F5F8FF] p-5">
              <h3 className="font-display text-base font-bold text-[#102D65]">
                Explore More Dental Videos
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Visit{" "}
                <a
                  href={CLINIC_INFO.social.youtubeChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#1749B8] underline underline-offset-4 hover:text-[#102D65]"
                >
                  @SMILOCARE.DENTIST
                </a>{" "}
                or open our{" "}
                <a
                  href={CLINIC_INFO.social.youtubeVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#1749B8] underline underline-offset-4 hover:text-[#102D65]"
                >
                  featured YouTube video
                </a>{" "}
                directly on YouTube.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Responsive Modal Dialog for YouTube Embed (No Sound Autoplay) */}
      <dialog
        ref={modalRef}
        aria-labelledby="youtube-modal-title"
        {...({ closedby: "any" } as Record<string, string>)}
        className="smilo-dialog m-auto w-[min(95vw,56rem)] rounded-3xl border border-[#E7ECF5] bg-white p-0 shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-[#E7ECF5] px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#1749B8]">
              Smilo Care Official Video
            </p>
            <h2
              id="youtube-modal-title"
              className="font-display text-lg font-bold text-[#102D65]"
            >
              Discover Smilo Care Orthodontic &amp; Implant Centre
            </h2>
          </div>
          <button
            type="button"
            onClick={closeModal}
            autoFocus
            aria-label="Close video player"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E7ECF5] text-slate-700 hover:bg-[#F5F8FF]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="bg-black">
          {modalOpen && (
            <div className="aspect-video w-full">
              <iframe
                width="1280"
                height="720"
                src={`https://www.youtube-nocookie.com/embed/${CLINIC_INFO.social.youtubeVideoId}?rel=0&autoplay=0`}
                title="Discover Smilo Care Orthodontic And Implant Centre"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F5F8FF] px-6 py-4 text-sm">
          <span className="text-slate-600">
            Ashok Nagar, Harsh Nagar, Kanpur
          </span>
          <a
            href={CLINIC_INFO.social.youtubeVideo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[#1749B8] hover:text-[#102D65]"
          >
            <span>Open on YouTube</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </dialog>
    </section>
  );
}
