import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { AppointmentModalProvider } from "@/components/booking/AppointmentModalContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { SITE_URL } from "@/data/clinic";
import { getDentistJsonLd } from "@/lib/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Smilo Care | Dental Clinic & Implant Centre in Kanpur",
    template: "%s",
  },
  description:
    "Looking for a dental clinic in Kanpur? Visit Smilo Care Orthodontic And Implant Centre in Ashok Nagar for orthodontic care, dental implants and personalized dental treatment.",
  verification: gscVerification ? { google: gscVerification } : undefined,
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dentistSchema = getDentistJsonLd();

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className="flex min-h-dvh flex-col bg-white font-sans text-slate-800 antialiased selection:bg-[#1749B8] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />

        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaMeasurementId}');`}
            </Script>
          </>
        )}

        <MotionProvider>
          <AppointmentModalProvider>
            <Navbar />
            <main id="main-content" tabIndex={-1} className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
          </AppointmentModalProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
