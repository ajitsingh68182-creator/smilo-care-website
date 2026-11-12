import { buildPageMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustHighlightsSection } from "@/components/sections/TrustHighlightsSection";
import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { TreatmentsGridSection } from "@/components/sections/TreatmentsGridSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { MeetDoctorSection } from "@/components/sections/MeetDoctorSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ClinicGalleryPreviewSection } from "@/components/sections/ClinicGalleryPreviewSection";
import { VideoShowcaseSection } from "@/components/sections/VideoShowcaseSection";
import { InstagramShowcaseSection } from "@/components/sections/InstagramShowcaseSection";
import { LocationAndAppointmentSection } from "@/components/sections/LocationAndAppointmentSection";

export const metadata = buildPageMetadata({
  title: "Smilo Care | Dental Clinic & Implant Centre in Kanpur",
  description:
    "Looking for a dental clinic in Kanpur? Visit Smilo Care Orthodontic And Implant Centre in Ashok Nagar for orthodontic care, dental implants and personalized dental treatment.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustHighlightsSection />
      <AboutPreviewSection />
      <TreatmentsGridSection />
      <WhyChooseSection />
      <MeetDoctorSection />
      <TestimonialsSection />
      <ClinicGalleryPreviewSection />
      <VideoShowcaseSection />
      <InstagramShowcaseSection />
      <LocationAndAppointmentSection />
    </>
  );
}
