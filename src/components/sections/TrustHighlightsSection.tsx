import { ClipboardList, HeartHandshake, MapPin, Stethoscope } from "lucide-react";
import { StaggerGrid, StaggerItem } from "@/components/motion/MotionProvider";

const TRUST_ITEMS = [
  {
    icon: HeartHandshake,
    title: "Patient-Focused Care",
    description: "Every visit starts with attentive listening and calm reassurance.",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Dental Services",
    description:
      "Orthodontics, implants, root canal care, pediatric visits, and more under one roof.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Treatment Planning",
    description:
      "Clear options explained openly around your individual oral health condition.",
  },
  {
    icon: MapPin,
    title: "Convenient Kanpur Location",
    description:
      "Accessible in Ashok Nagar, Harsh Nagar near Coca-Cola Chauraha.",
  },
];

export function TrustHighlightsSection() {
  return (
    <section
      aria-label="Clinic care commitments"
      className="border-y border-[#E7ECF5] bg-[#F5F8FF] py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="flex h-full items-start gap-3.5 rounded-2xl border border-[#E7ECF5] bg-white p-5 shadow-xs transition-shadow hover:shadow-md">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F8FF] text-[#1749B8] ring-1 ring-[#E7ECF5]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-display text-sm font-bold text-[#102D65]">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
