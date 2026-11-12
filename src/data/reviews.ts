export interface PatientReview {
  id: string;
  patientName: string;
  quote: string;
  treatmentContext: string;
  featured: boolean;
}

/**
 * Authentic patient experiences supplied directly by the clinic owner.
 * Note: Individual star icons and aggregate rating badges are withheld unless
 * directly verified against the clinic's live Google Business Profile data.
 */
export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "review-shreya",
    patientName: "Shreya Singh Rathour",
    quote:
      "She is an extremely experienced and friendly dentist. Her services are highly professional and convenient. I visited her for my dental issues and I'm thoroughly satisfied. The clinic is clean, well-maintained, and equipped with modern technology. I highly recommend her.",
    treatmentContext: "Patient Experience",
    featured: true,
  },
  {
    id: "review-khan-mazhar",
    patientName: "Khan Mazhar",
    quote:
      "I visited the clinic for cleaning of my teeth. Doctor explained the process properly and treatment was smooth and pain free. I recommend everyone to pay her a visit.",
    treatmentContext: "Teeth Cleaning",
    featured: true,
  },
  {
    id: "review-prerna",
    patientName: "Prerna Srivastava123",
    quote:
      "Today I have started root canal treatment, the condition of my teeth was very bad but Dr. Kriti handled it very lovingly, she is very responsible. I am very grateful to her.",
    treatmentContext: "Root Canal Treatment",
    featured: true,
  },
  {
    id: "review-ashish",
    patientName: "Ashish Biswas",
    quote:
      "One of the best dental care and implant centers in Kanpur. I have personally experienced the services and am highly impressed. Best wishes.",
    treatmentContext: "Dental Care & Implants",
    featured: false,
  },
  {
    id: "review-tejas",
    patientName: "Tejas Shukla",
    quote:
      "I had a treatment of wisdom tooth which was cured by Doctor in just 2 sittings. My prolonged pain is finally over now. Indeed a very reliable one to get your problems cured.",
    treatmentContext: "Wisdom Tooth Treatment",
    featured: false,
  },
  {
    id: "review-umar",
    patientName: "Dr. Umar Khan",
    quote:
      "Best Dental Clinic for every dental treatment known so far and doctor is very kind too. A must visit for your dental problems. And she is a gold medalist too.",
    treatmentContext: "Patient Experience",
    featured: false,
  },
  {
    id: "review-sandhya",
    patientName: "Sandhya Verma",
    quote:
      "Visited her clinic for my root canal treatment and I must say she is one of the best Doctor in Kanpur.",
    treatmentContext: "Root Canal Treatment",
    featured: false,
  },
  {
    id: "review-sonal",
    patientName: "Sonal Singh Parmar",
    quote:
      "I had a problem in my wisdom tooth but thanks to Smilo Care and Dr. Kriti Shukla. She is so calm and polite to me and did my problem fixed.",
    treatmentContext: "Wisdom Tooth Treatment",
    featured: false,
  },
  {
    id: "review-aman",
    patientName: "Aman",
    quote:
      "Great Experience. Visited the clinic with tooth pain and doctor handled it with care and attention. Completed Root Canal Treatment.",
    treatmentContext: "Root Canal Treatment",
    featured: false,
  },
];
