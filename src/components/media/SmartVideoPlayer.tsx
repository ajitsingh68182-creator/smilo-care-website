"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

interface SmartVideoPlayerProps {
  src: string;
  poster: string;
  title: string;
  className?: string;
  aspectClassName?: string;
}

export function SmartVideoPlayer({
  src,
  poster,
  title,
  className = "",
  aspectClassName = "aspect-video",
}: SmartVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      video.pause();
    }

    const onReduceChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        video.pause();
      }
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    mq.addEventListener("change", onReduceChange);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      mq.removeEventListener("change", onReduceChange);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-[#E7ECF5] bg-[#102D65] ${aspectClassName} ${className}`}
    >
      <video
        ref={videoRef}
        width={1280}
        height={720}
        poster={poster}
        preload="metadata"
        muted
        loop
        playsInline
        aria-label={title}
        {...({ loading: "lazy" } as Record<string, string>)}
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102D65]/60 via-transparent to-transparent" />

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
        <span className="rounded-lg bg-[#102D65]/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {title}
        </span>
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/90 text-[#102D65] shadow-md transition-transform hover:scale-105 hover:bg-white"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Play className="ml-0.5 h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
