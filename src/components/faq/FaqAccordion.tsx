"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const containerRef = useRef<HTMLElement>(null);
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleAll = () => {
    const nextState = !allExpanded;
    const container = containerRef.current;
    if (container) {
      container.querySelectorAll("details").forEach((el) => {
        el.open = nextState;
      });
    }
    setAllExpanded(nextState);
  };

  const syncToggleAllButton = () => {
    const container = containerRef.current;
    if (!container) return;
    const allDetails = Array.from(container.querySelectorAll("details"));
    setAllExpanded(
      allDetails.length > 0 && allDetails.every((el) => el.open)
    );
  };

  return (
    <section
      ref={containerRef}
      aria-labelledby="faq-accordion-heading"
      className="faq-accordion space-y-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2
          id="faq-accordion-heading"
          className="font-display text-xl font-bold text-[#102D65]"
        >
          Common Patient Questions
        </h2>
        <button
          type="button"
          onClick={toggleAll}
          aria-expanded={allExpanded}
          className="inline-flex min-h-[40px] items-center rounded-xl border border-[#E7ECF5] bg-white px-4 py-2 text-xs font-semibold text-[#102D65] transition-colors hover:bg-[#F5F8FF]"
        >
          {allExpanded ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <details
            key={item.id}
            open={idx === 0}
            onToggle={syncToggleAllButton}
            className="group rounded-2xl border border-[#E7ECF5] bg-white px-6 py-4 shadow-xs transition-colors open:border-[#1749B8]/35 open:bg-[#F5F8FF]/45"
          >
            <summary className="flex items-center justify-between gap-4 py-1 text-left font-display text-base font-bold text-[#102D65] sm:text-lg">
              <span className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F5F8FF] text-xs font-bold text-[#1749B8] ring-1 ring-[#E7ECF5]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>{item.question}</span>
              </span>
              <ChevronDown
                className="faq-chevron h-5 w-5 shrink-0 text-[#1749B8]"
                aria-hidden="true"
              />
            </summary>

            <div className="pt-3 pl-10 pr-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
