export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Clinic & Visits" | "Implants & Restorative" | "Orthodontics & Braces";
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "location",
    question: "Where is Smilo Care Orthodontic And Implant Centre located?",
    answer:
      "Smilo Care Orthodontic And Implant Centre is located at 111A/63, near Dr. Anoop Awasthi, Ashok Nagar, Harsh Nagar, Kanpur, Uttar Pradesh 208012.",
    category: "Clinic & Visits",
  },
  {
    id: "find-clinic",
    question: "How can I find a dental clinic in Kanpur?",
    answer:
      "You can visit Smilo Care Orthodontic And Implant Centre in Ashok Nagar, Harsh Nagar, Kanpur, to enquire about available dental care and treatment options.",
    category: "Clinic & Visits",
  },
  {
    id: "dental-implant",
    question: "What is dental implant treatment?",
    answer:
      "Dental implant treatment is a tooth replacement procedure in which an implant is placed in the jawbone to support a replacement tooth. Suitability depends on individual oral health.",
    category: "Implants & Restorative",
  },
  {
    id: "orthodontic-treatment",
    question: "What is orthodontic treatment?",
    answer:
      "Orthodontic treatment focuses on correcting the position of teeth and certain bite problems using braces or other suitable orthodontic appliances.",
    category: "Orthodontics & Braces",
  },
  {
    id: "book-consultation",
    question: "How can I book a dental consultation at Smilo Care?",
    answer:
      "You can contact Smilo Care Orthodontic And Implant Centre through its available contact channels or visit the clinic in Ashok Nagar, Kanpur, for appointment enquiries.",
    category: "Clinic & Visits",
  },
  {
    id: "adult-braces",
    question: "Are braces suitable for adults?",
    answer:
      "Yes, orthodontic treatment can be suitable for adults as well as younger patients. A dental professional can assess your teeth and recommend suitable options.",
    category: "Orthodontics & Braces",
  },
  {
    id: "clinic-hours",
    question: "What are the clinic opening hours at Smilo Care?",
    answer:
      "Smilo Care Orthodontic And Implant Centre is open Monday through Saturday from 10:00 AM to 2:00 PM and 5:00 PM to 8:30 PM. The clinic remains closed on Sundays.",
    category: "Clinic & Visits",
  },
  {
    id: "confirmation-process",
    question: "How is my appointment request confirmed?",
    answer:
      "When you submit an appointment request through our website or WhatsApp (+91 91402 64464), our clinic team reviews your preferred date and time and confirms the exact slot directly with you.",
    category: "Clinic & Visits",
  },
];
