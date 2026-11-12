import type { Metadata } from "next";
import { CLINIC_INFO, SITE_URL } from "@/data/clinic";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = "/images/clinic-interior.jpg",
}: PageMetaInput): Metadata {
  const canonicalUrl = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const defaultKeywords = [
    "Dental Clinic in Kanpur",
    "Dentist in Kanpur",
    "Best Dentist in Kanpur",
    "Dental Implants in Kanpur",
    "Orthodontist in Kanpur",
    "Braces Treatment in Kanpur",
    "Root Canal Treatment in Kanpur",
    "Dental Clinic in Ashok Nagar",
    "Dentist Near Harsh Nagar",
    "Smilo Care Orthodontic And Implant Centre",
    "Dr. Kriti Shukla",
  ];

  return {
    title,
    description,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: CLINIC_INFO.brandName,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${SITE_URL}${ogImage}`,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${ogImage}`],
    },
  };
}

export function getDentistJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC_INFO.brandName,
    description:
      "Patient-focused dental clinic in Ashok Nagar, Harsh Nagar, Kanpur offering orthodontic care, dental implants, crowns and bridges, root canal treatment, pediatric dentistry, and comprehensive oral care.",
    url: SITE_URL,
    telephone: "+91-91402-64464",
    image: `${SITE_URL}/images/clinic-interior.jpg`,
    logo: `${SITE_URL}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "111A/63, Near Dr. Anoop Awasthi / Vikas Diagnostic, Coca-Cola Chauraha, Ashok Nagar, Harsh Nagar",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "208012",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "17:00",
        closes: "20:30",
      },
    ],
    sameAs: [
      CLINIC_INFO.social.instagram,
      CLINIC_INFO.social.youtubeChannel,
      CLINIC_INFO.social.facebook,
      CLINIC_INFO.social.googleMapsPlace,
    ],
    medicalSpecialty: ["Orthodontic", "Implantology", "GeneralDentistry"],
    founder: {
      "@type": "Physician",
      name: CLINIC_INFO.doctor.name,
      jobTitle: CLINIC_INFO.doctor.role,
      description: `${CLINIC_INFO.doctor.name} (${CLINIC_INFO.doctor.qualifications})`,
    },
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
