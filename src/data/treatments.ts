export interface TreatmentItem {
  id: string;
  slug: string;
  name: string;
  category:
    | "Orthodontics & Alignment"
    | "Implants & Prosthetics"
    | "Restorative & Endodontics"
    | "Oral Surgery & Urgent Care"
    | "Facial Aesthetics & Pediatric";
  shortDescription: string;
  detailedOverview: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  href: string;
  featuredOnHome: boolean;
  bookingOptionValue: string;
  video?: string;
}

export const TREATMENTS: TreatmentItem[] = [
  {
    id: "orthodontic-treatment",
    slug: "orthodontic-treatment",
    name: "Orthodontic Treatment",
    category: "Orthodontics & Alignment",
    shortDescription:
      "Guided teeth alignment and bite correction designed around your facial harmony and long-term oral health.",
    detailedOverview:
      "Orthodontic care focuses on addressing crowded teeth, spacing, crooked alignment, overbites, and underbites through individualized diagnostic planning.",
    highlights: [
      "Detailed bite and alignment assessment",
      "Metal, ceramic, and suitable orthodontic options",
      "Suitable for teens and adult patients",
    ],
    image: "/images/orthodontics.jpg",
    imageAlt: "Orthodontic braces illustration showing precision bracket alignment",
    href: "/orthodontic-treatment-kanpur",
    featuredOnHome: true,
    bookingOptionValue: "Orthodontic Treatment",
    video: "/videos/braces-animation.mp4",
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Implants & Prosthetics",
    shortDescription:
      "Natural-looking tooth replacement options engineered to restore chewing comfort, bite stability, and confidence.",
    detailedOverview:
      "Dental implants provide a dedicated foundation within the jawbone to support crown or bridge restorations when replacing one or multiple missing teeth.",
    highlights: [
      "Comprehensive bone and oral health evaluation",
      "Single-tooth and multi-tooth replacement planning",
      "Designed to blend naturally with existing teeth",
    ],
    image: "/images/dental-implant.jpg",
    imageAlt: "3D anatomical illustration of a dental implant integrated in jawbone",
    href: "/dental-implants-kanpur",
    featuredOnHome: true,
    bookingOptionValue: "Dental Implants",
    video: "/videos/implant-animation.mp4",
  },
  {
    id: "crowns-bridges",
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    category: "Implants & Prosthetics",
    shortDescription:
      "Custom-fitted protective caps and fixed dental bridges to strengthen damaged teeth and close missing tooth gaps.",
    detailedOverview:
      "Crowns restore strength and contour to weakened or root-canal-treated teeth, while fixed bridges span gaps left by missing teeth with balanced bite support.",
    highlights: [
      "Shade-matched ceramic and restorative materials",
      "Protects structurally compromised teeth",
      "Supports comfortable chewing and clear speech",
    ],
    image: "/images/crowns-bridges.jpg",
    imageAlt: "Dental crown and three-unit fixed bridge restorative illustration",
    href: "/treatments#crowns-bridges",
    featuredOnHome: true,
    bookingOptionValue: "Other",
  },
  {
    id: "root-canal",
    slug: "root-canal",
    name: "Root Canal Treatment",
    category: "Restorative & Endodontics",
    shortDescription:
      "Gentle, careful endodontic care focused on relieving toothache and preserving your natural tooth structure.",
    detailedOverview:
      "Root canal treatment (RCT) removes infected or inflamed pulp tissue from inside the tooth, cleans and seals the root canals, and prepares the tooth for long-term protection.",
    highlights: [
      "Focused on comfort and calm chairside communication",
      "Preserves natural teeth instead of premature extraction",
      "Paired with protective crown planning when indicated",
    ],
    image: "/images/root-canal.jpg",
    imageAlt: "Dental anatomy illustration highlighting tooth pulp and root canals",
    href: "/treatments#root-canal",
    featuredOnHome: true,
    bookingOptionValue: "Root Canal",
  },
  {
    id: "tooth-extraction",
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    category: "Oral Surgery & Urgent Care",
    shortDescription:
      "Calm, careful removal of severely damaged, decayed, or non-restorable teeth with clear post-care guidance.",
    detailedOverview:
      "When a tooth cannot be saved safely, gentle extraction helps eliminate pain and prevent infection from affecting neighboring teeth or supporting bone.",
    highlights: [
      "Thorough clinical evaluation before any removal",
      "Gentle local anesthesia and attentive monitoring",
      "Clear healing instructions and replacement guidance",
    ],
    image: "/images/tooth-extraction.jpg",
    imageAlt: "Clinical illustration of controlled dental tooth extraction anatomy",
    href: "/treatments#tooth-extraction",
    featuredOnHome: true,
    bookingOptionValue: "Tooth Extraction",
  },
  {
    id: "emergency-dental-care",
    slug: "emergency-dental-care",
    name: "Emergency Dental Care",
    category: "Oral Surgery & Urgent Care",
    shortDescription:
      "Prompt clinical evaluation for sudden toothache, swelling, chipped teeth, or urgent dental discomfort.",
    detailedOverview:
      "Dental discomfort rarely waits for a convenient time. Contact Smilo Care during clinic hours for prompt assessment and practical stabilization steps.",
    highlights: [
      "Priority triage for acute pain or swelling",
      "Assessment for broken restorations or trauma",
      "Direct phone & WhatsApp coordination at +91 91402 64464",
    ],
    image: "/images/clinic-interior.jpg",
    imageAlt: "Clean modern dental operatory room at Smilo Care Kanpur",
    href: "/treatments#emergency-dental-care",
    featuredOnHome: true,
    bookingOptionValue: "Other",
  },
  {
    id: "prp-treatment",
    slug: "prp-treatment",
    name: "PRP Treatment",
    category: "Facial Aesthetics & Pediatric",
    shortDescription:
      "Platelet-Rich Plasma procedures discussed during personalized consultations for tissue recovery and aesthetic support.",
    detailedOverview:
      "PRP utilizes concentrated platelets prepared from a small sample under sterile clinical protocols, evaluated individually for oral healing or cosmetic suitability.",
    highlights: [
      "Sterile clinical preparation protocols",
      "Individual suitability screening prior to care",
      "Personalized consultation with clear expectations",
    ],
    image: "/images/prp-treatment.jpg",
    imageAlt: "Medical tubes containing platelet-rich plasma in sterile clinical rack",
    href: "/treatments#prp-treatment",
    featuredOnHome: true,
    bookingOptionValue: "Other",
  },
  {
    id: "hydrafacial",
    slug: "hydrafacial",
    name: "Hydrafacial",
    category: "Facial Aesthetics & Pediatric",
    shortDescription:
      "Hydrafacial and cosmetic facial care procedures tailored to refresh skin hydration and complement your smile.",
    detailedOverview:
      "Our clinic also offers Hydrafacial and cosmetic skin wellness consultations designed around gentle cleansing, exfoliation, and hydration.",
    highlights: [
      "Non-invasive skin cleansing and hydration workflow",
      "Personalized skin sensitivity review beforehand",
      "Clean, tranquil clinical setting",
    ],
    image: "/images/hydrafacial.jpg",
    imageAlt: "Practitioner performing a gentle Hydrafacial cosmetic procedure",
    href: "/treatments#hydrafacial",
    featuredOnHome: true,
    bookingOptionValue: "Hydrafacial",
  },
  {
    id: "pediatric-dental-care",
    slug: "pediatric-dental-care",
    name: "Pediatric Dental Care",
    category: "Facial Aesthetics & Pediatric",
    shortDescription:
      "Warm, reassuring checkups and preventive dental care tailored to help children build lifelong healthy habits.",
    detailedOverview:
      "Early positive dental visits build confidence for life. We focus on gentle communication, cavity prevention, and monitoring growing teeth and jaw development.",
    highlights: [
      "Child-friendly, unhurried clinical pace",
      "Preventive checkups and habit guidance",
      "Early monitoring of erupting teeth alignment",
    ],
    image: "/images/pediatric-dentistry.jpg",
    imageAlt: "Friendly 3D pediatric tooth and toothbrush illustration for children's care",
    href: "/treatments#pediatric-dental-care",
    featuredOnHome: true,
    bookingOptionValue: "Pediatric Dental Care",
  },
  {
    id: "wisdom-tooth-removal",
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    category: "Oral Surgery & Urgent Care",
    shortDescription:
      "Careful management and extraction of impacted or painful third molars with attentive follow-up care.",
    detailedOverview:
      "Impacted or partially erupted wisdom teeth can trigger recurring pain, swelling, or pressure on adjacent molars. We assess angulation and plan smooth removal when required.",
    highlights: [
      "Assessment of wisdom tooth position and gum health",
      "Step-by-step explanation before treatment",
      "Structured recovery guidance and follow-up visits",
    ],
    image: "/images/tooth-extraction.jpg",
    imageAlt: "Illustration of molar tooth anatomy and extraction guidance",
    href: "/treatments#wisdom-tooth-removal",
    featuredOnHome: false,
    bookingOptionValue: "Wisdom Tooth Removal",
  },
  {
    id: "dental-prosthesis",
    slug: "dental-prosthesis",
    name: "Dental Prosthesis",
    category: "Implants & Prosthetics",
    shortDescription:
      "Custom removable and implant-supported dental prosthetics designed for reliable comfort, fit, and function.",
    detailedOverview:
      "Dental prosthetics help restore full or partial arches of missing teeth, supporting facial contours, nutrition, and confident speaking.",
    highlights: [
      "Individualized bite registration and fit checks",
      "Options ranging from partial appliances to implant-retained prostheses",
      "Ongoing adjustment support for lasting comfort",
    ],
    image: "/images/crowns-bridges.jpg",
    imageAlt: "Custom dental prosthetic restoration illustration",
    href: "/treatments#dental-prosthesis",
    featuredOnHome: false,
    bookingOptionValue: "Other",
  },
];

export const FEATURED_HOME_TREATMENTS = TREATMENTS.filter(
  (t) => t.featuredOnHome
);

export const APPOINTMENT_TREATMENT_OPTIONS = [
  "Orthodontic Treatment",
  "Dental Implants",
  "Braces",
  "Root Canal",
  "Tooth Extraction",
  "Wisdom Tooth Removal",
  "Pediatric Dental Care",
  "Hydrafacial",
  "Other",
] as const;
