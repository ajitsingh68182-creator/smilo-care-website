export type GalleryCategory =
  | "All"
  | "Our Clinic"
  | "Treatment Room"
  | "Dental Equipment"
  | "Doctor"
  | "Social Media Highlights";

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: Exclude<GalleryCategory, "All">;
  sourceType:
    | "Supplied Clinic Photograph"
    | "Original Doctor Portrait"
    | "Treatment Education Visual"
    | "Clinic Presentation Visual";
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "clinic-interior-main",
    title: "Smilo Care Treatment Suite",
    caption:
      "Supplied interior photograph showcasing our bright, calm dental operatory environment.",
    category: "Our Clinic",
    sourceType: "Supplied Clinic Photograph",
    src: "/images/clinic-interior.jpg",
    width: 2752,
    height: 1536,
    alt: "Smilo Care Orthodontic And Implant Centre dental clinic interior",
  },
  {
    id: "doctor-portrait-kriti",
    title: "Dr. Kriti Shukla (BDS, MDS)",
    caption:
      "Lead Dentist at Smilo Care Orthodontic And Implant Centre, dedicated to patient-focused dental care.",
    category: "Doctor",
    sourceType: "Original Doctor Portrait",
    src: "/images/dr-kriti-shukla.png",
    width: 1254,
    height: 1254,
    alt: "Original portrait of Dr. Kriti Shukla, BDS, MDS",
  },
  {
    id: "treatment-room-perspective",
    title: "Modern Operatory & Consultation Zone",
    caption:
      "Clinic presentation artwork depicting glass-enclosed consultation privacy and clean dental bay design.",
    category: "Treatment Room",
    sourceType: "Clinic Presentation Visual",
    src: "/images/clinic-gallery-banner.jpg",
    width: 2752,
    height: 1536,
    alt: "Modern dental treatment room and consultation space visual",
  },
  {
    id: "dental-chair-bay",
    title: "Ergonomic Dental Chair & Equipment Bay",
    caption:
      "Presentation visual illustrating organized dental instrumentation and sunlit treatment layout.",
    category: "Dental Equipment",
    sourceType: "Clinic Presentation Visual",
    src: "/images/hero-dental.jpg",
    width: 2752,
    height: 1536,
    alt: "Ergonomic dental chair and modern equipment setup",
  },
  {
    id: "implant-education-visual",
    title: "Dental Implant Anatomical Model",
    caption:
      "Patient education illustration demonstrating how a titanium dental implant supports a natural crown.",
    category: "Dental Equipment",
    sourceType: "Treatment Education Visual",
    src: "/images/dental-implant.jpg",
    width: 2048,
    height: 2048,
    alt: "3D educational illustration of dental implant anatomy",
  },
  {
    id: "orthodontic-education-visual",
    title: "Orthodontic Brackets & Alignment",
    caption:
      "Educational visualization used during orthodontic consultations to explain gentle tooth movement.",
    category: "Social Media Highlights",
    sourceType: "Treatment Education Visual",
    src: "/images/orthodontics.jpg",
    width: 2048,
    height: 2048,
    alt: "Medical illustration of orthodontic braces alignment",
  },
  {
    id: "crowns-bridges-visual",
    title: "Restorative Crowns & Bridges",
    caption:
      "Visual reference showing custom tooth-colored crown and three-unit fixed bridge restorations.",
    category: "Social Media Highlights",
    sourceType: "Treatment Education Visual",
    src: "/images/crowns-bridges.jpg",
    width: 2048,
    height: 2048,
    alt: "Dental crowns and bridges educational illustration",
  },
  {
    id: "pediatric-dental-visual",
    title: "Gentle Pediatric Oral Care",
    caption:
      "Warm, approachable illustration created to help children feel comfortable learning about brushing and checkups.",
    category: "Social Media Highlights",
    sourceType: "Treatment Education Visual",
    src: "/images/pediatric-dentistry.jpg",
    width: 2048,
    height: 2048,
    alt: "3D pediatric dental care illustration",
  },
  {
    id: "hydrafacial-care-visual",
    title: "Hydrafacial & Skin Wellness Care",
    caption:
      "Illustration showcasing non-invasive facial hydration and cosmetic care procedures offered at the centre.",
    category: "Treatment Room",
    sourceType: "Treatment Education Visual",
    src: "/images/hydrafacial.jpg",
    width: 2048,
    height: 2048,
    alt: "Cosmetic Hydrafacial treatment procedure visual",
  },
];

export interface ClinicVideoItem {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  category: string;
}

export const CLINIC_VIDEOS: ClinicVideoItem[] = [
  {
    id: "video-clinic-tour",
    title: "Clinic Interior Tour",
    description: "A calm visual walkthrough of modern dental clinic spaces and treatment bays.",
    src: "/videos/clinic-tour.mp4",
    poster: "/images/clinic-interior.jpg",
    category: "Our Clinic",
  },
  {
    id: "video-implant-animation",
    title: "Dental Implant Procedure Guide",
    description: "Step-by-step 3D overview showing how a dental implant replaces a missing tooth.",
    src: "/videos/implant-animation.mp4",
    poster: "/images/dental-implant.jpg",
    category: "Patient Education",
  },
  {
    id: "video-braces-animation",
    title: "How Braces Move Teeth",
    description: "Visual educational clip demonstrating gradual orthodontic teeth alignment.",
    src: "/videos/braces-animation.mp4",
    poster: "/images/orthodontics.jpg",
    category: "Patient Education",
  },
  {
    id: "video-dental-3d",
    title: "Comprehensive Dental Care Visual",
    description: "3D overview of restorative and preventive oral healthcare concepts.",
    src: "/videos/dental-animation.mp4",
    poster: "/images/crowns-bridges.jpg",
    category: "Patient Education",
  },
];
