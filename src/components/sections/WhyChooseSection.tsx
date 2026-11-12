import {
  CalendarCheck,
  Heart,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/MotionProvider";

const REASONS = [
  {
    icon: Heart,
    title: "Personalized Attention",
    description:
      "Every consultation takes time to understand your concerns, medical background, and comfort preferences before recommending care.",
  },
  {
    icon: Layers,
    title: "Comprehensive Dental Services",
    description:
      "From routine preventive checkups and root canal care to orthodontic braces and dental implants in one Kanpur clinic.",
  },
  {
    icon: ShieldCheck,
    title: "Patient Comfort",
    description:
      "Calm chairside communication and step-by-step explanations designed to ease dental anxiety for adults and children alike.",
  },
  {
    icon: Sparkles,
    title: "Modern Clinical Environment",
    description:
      "Clean, well-maintained operatory spaces organized around strict hygiene protocols and diagnostic clarity.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description:
      "Easily reachable near Coca-Cola Chauraha at Ashok Nagar, Harsh Nagar, Kanpur with clear landmark directions.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Assistance",
    description:
      "Simple phone and WhatsApp appointment requests across morning and evening hours Monday through Saturday.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-[#D6B879]/60 bg-[#F5F8FF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
            Why Choose Smilo Care
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-[#102D65] sm:text-4xl">
            Care That Makes You Smile.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Thoughtful clinical standards paired with warm, approachable care for
            individuals and families across Kanpur.
          </p>
        </Reveal>

        <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <StaggerItem key={reason.title}>
                <div className="flex h-full flex-col rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF]/60 p-7 transition-all duration-300 hover:border-[#D6B879] hover:bg-white hover:shadow-lg">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1749B8] shadow-xs ring-1 ring-[#E7ECF5]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-[#102D65]">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {reason.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
