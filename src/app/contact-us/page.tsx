import {
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import { CLINIC_INFO } from "@/data/clinic";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AppointmentForm } from "@/components/booking/AppointmentForm";

export const metadata = buildPageMetadata({
  title: "Contact Smilo Care | Dentist in Ashok Nagar, Kanpur",
  description:
    "Contact Smilo Care Orthodontic And Implant Centre in Ashok Nagar, Harsh Nagar, Kanpur, Uttar Pradesh 208012 for dental care and appointment enquiries.",
  path: "/contact-us",
  keywords: [
    "Dental Clinic in Ashok Nagar",
    "Dentist Near Harsh Nagar",
    "Smilo Care Kanpur Phone Number",
  ],
});

export default function ContactUsPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact-us" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-b from-[#F5F8FF] to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
          />

          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
              Contact &amp; Appointment Desk
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#102D65] sm:text-4xl lg:text-[2.75rem]">
              Visit Smilo Care Orthodontic And Implant Centre in Kanpur.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Reach out by phone, WhatsApp, or the appointment request form
              below to enquire about orthodontic consultations, dental
              implants, or general dental checkups.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 pt-4">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Left: Clinic Details + Quick Actions */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF] p-7">
              <h2 className="font-display text-xl font-bold text-[#102D65]">
                {CLINIC_INFO.brandName}
              </h2>

              <dl className="mt-6 space-y-5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1749B8]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-semibold text-[#102D65]">Address</dt>
                    <dd className="mt-1 leading-relaxed">
                      111A/63, Near Dr. Anoop Awasthi / Vikas Diagnostic,
                      Coca-Cola Chauraha, Ashok Nagar, Harsh Nagar, Kanpur,
                      Uttar Pradesh – 208012.
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1749B8]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-semibold text-[#102D65]">
                      Phone / WhatsApp
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={CLINIC_INFO.phone.telHref}
                        className="font-semibold text-[#1749B8] hover:underline"
                      >
                        {CLINIC_INFO.phone.display}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1749B8]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-semibold text-[#102D65]">
                      Opening Hours
                    </dt>
                    <dd className="mt-1 space-y-0.5">
                      <p>
                        Monday–Saturday: 10:00 AM–2:00 PM and 5:00 PM–8:30 PM.
                      </p>
                      <p>Sunday: Closed.</p>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href={CLINIC_INFO.phone.telHref}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#102D65] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1749B8]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Call Us</span>
                </a>
                <a
                  href={CLINIC_INFO.phone.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#1749B8] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#102D65]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              <a
                href={CLINIC_INFO.social.googleMapsPlace}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-4 py-3 text-sm font-semibold text-[#102D65] transition-colors hover:border-[#1749B8]/40"
              >
                <Navigation className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="rounded-3xl border border-[#E7ECF5] bg-white p-6">
              <h2 className="font-display text-base font-bold text-[#102D65]">
                Connect on Social Media
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={CLINIC_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E7ECF5] bg-[#F5F8FF] px-4 py-2.5 text-sm font-semibold text-[#102D65] hover:border-[#1749B8]/40"
                >
                  <InstagramIcon className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
                <a
                  href={CLINIC_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E7ECF5] bg-[#F5F8FF] px-4 py-2.5 text-sm font-semibold text-[#102D65] hover:border-[#1749B8]/40"
                >
                  <FacebookIcon className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
                  <span>Facebook</span>
                </a>
                <a
                  href={CLINIC_INFO.social.youtubeChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E7ECF5] bg-[#F5F8FF] px-4 py-2.5 text-sm font-semibold text-[#102D65] hover:border-[#1749B8]/40"
                >
                  <YoutubeIcon className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Appointment / Contact Form + Map */}
          <div className="space-y-8 lg:col-span-7">
            <div className="rounded-3xl border border-[#E7ECF5] bg-white p-7 shadow-sm sm:p-9">
              <h2
                id="contact-appointment-heading"
                className="font-display text-2xl font-bold text-[#102D65]"
              >
                Appointment &amp; Enquiry Form
              </h2>
              <p className="mt-1.5 mb-6 text-sm text-slate-600">
                Complete the fields below to generate a prefilled appointment
                enquiry via WhatsApp.
              </p>
              <AppointmentForm headingId="contact-appointment-heading" />
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF] shadow-sm">
              <iframe
                title="Google Maps location for Smilo Care Orthodontic And Implant Centre"
                src={CLINIC_INFO.social.googleMapsEmbed}
                width={800}
                height={420}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
