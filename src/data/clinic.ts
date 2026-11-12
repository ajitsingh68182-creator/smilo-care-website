export const CLINIC_INFO = {
  brandName: "Smilo Care Orthodontic And Implant Centre",
  shortName: "Smilo Care",
  tagline: "Because Your Smile Is Our Priority.",
  doctor: {
    name: "Dr. Kriti Shukla",
    qualifications: "BDS, MDS",
    role: "Lead Dentist",
    portraitSrc: "/images/dr-kriti-shukla.png",
    portraitAlt:
      "Portrait of Dr. Kriti Shukla, BDS, MDS, Lead Dentist at Smilo Care Orthodontic And Implant Centre",
  },
  address: {
    line1: "111A/63, Near Dr. Anoop Awasthi / Vikas Diagnostic",
    line2: "Coca-Cola Chauraha, Ashok Nagar, Harsh Nagar",
    city: "Kanpur",
    state: "Uttar Pradesh",
    postalCode: "208012",
    country: "India",
    full: "111A/63, Near Dr. Anoop Awasthi / Vikas Diagnostic, Coca-Cola Chauraha, Ashok Nagar, Harsh Nagar, Kanpur, Uttar Pradesh – 208012",
    short: "111A/63, Ashok Nagar, Harsh Nagar, Kanpur – 208012",
  },
  phone: {
    display: "+91 91402 64464",
    raw: "919140264464",
    telHref: "tel:+919140264464",
    whatsappHref: "https://wa.me/919140264464",
  },
  hours: {
    weekdays: "Monday – Saturday",
    morning: "10:00 AM – 2:00 PM",
    evening: "5:00 PM – 8:30 PM",
    sunday: "Sunday: Closed",
    summary: "Mon–Sat: 10:00 AM – 2:00 PM & 5:00 PM – 8:30 PM | Sun: Closed",
  },
  social: {
    instagram: "https://www.instagram.com/smilocare.dentist/",
    instagramHandle: "@smilocare.dentist",
    youtubeVideo: "https://youtu.be/qBd8OzvuYZI",
    youtubeVideoId: "qBd8OzvuYZI",
    youtubeChannel: "https://www.youtube.com/@SMILOCARE.DENTIST",
    facebook: "https://www.facebook.com/share/16PrNf4fWU/",
    googleMapsPlace:
      "https://www.google.com/maps/place/Smilo+Care+Orthodontic+And+Implant+Centre/",
    googleMapsEmbed:
      "https://maps.google.com/maps?q=Smilo+Care+Orthodontic+And+Implant+Centre,+111A/63,+Ashok+Nagar,+Harsh+Nagar,+Kanpur,+Uttar+Pradesh+208012&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  assets: {
    logo: "/images/logo.png",
    clinicInterior: "/images/clinic-interior.jpg",
    heroDental: "/images/hero-dental.jpg",
    galleryBanner: "/images/clinic-gallery-banner.jpg",
    abstractBg: "/images/healthcare-abstract-bg.jpg",
  },
} as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://smilocarekanpur.com";
