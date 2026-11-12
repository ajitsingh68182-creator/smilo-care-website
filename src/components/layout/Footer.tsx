import Link from "next/link";
import {
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import { CLINIC_INFO } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="border-t border-[#E7ECF5] bg-[#102D65] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Clinic Intro */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-xl focus-visible:outline-white"
            >
              <img
                src={CLINIC_INFO.assets.logo}
                alt="Smilo Care Orthodontic And Implant Centre Logo"
                width={52}
                height={52}
                loading="lazy"
                className="h-13 w-13 rounded-full bg-white object-contain p-0.5 shadow-sm"
              />
              <div>
                <span className="block font-display text-lg font-bold text-white">
                  Smilo Care
                </span>
                <span className="block text-xs font-medium text-[#D6B879]">
                  Orthodontic &amp; Implant Centre
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              Patient-focused orthodontic, dental implant, and comprehensive oral healthcare in Ashok Nagar, Harsh Nagar, Kanpur led by{" "}
              <span className="font-semibold text-white">
                {CLINIC_INFO.doctor.name} ({CLINIC_INFO.doctor.qualifications})
              </span>
              .
            </p>
            <p className="text-xs font-medium italic text-[#D6B879]">
              &ldquo;{CLINIC_INFO.tagline}&rdquo;
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={CLINIC_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Smilo Care on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:border-[#D6B879] hover:bg-white/10"
              >
                <InstagramIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CLINIC_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Smilo Care on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:border-[#D6B879] hover:bg-white/10"
              >
                <FacebookIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CLINIC_INFO.social.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to Smilo Care on YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:border-[#D6B879] hover:bg-white/10"
              >
                <YoutubeIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#D6B879]">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className="transition-colors hover:text-white"
                >
                  Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="transition-colors hover:text-white"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Treatments */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#D6B879]">
              Our Treatments
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/orthodontic-treatment-kanpur"
                  className="transition-colors hover:text-white"
                >
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link
                  href="/dental-implants-kanpur"
                  className="transition-colors hover:text-white"
                >
                  Implants
                </Link>
              </li>
              <li>
                <Link
                  href="/braces-treatment-kanpur"
                  className="transition-colors hover:text-white"
                >
                  Braces
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments#root-canal"
                  className="transition-colors hover:text-white"
                >
                  Root Canal
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments#pediatric-dental-care"
                  className="transition-colors hover:text-white"
                >
                  Pediatric Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/general-dental-care-kanpur"
                  className="transition-colors hover:text-white"
                >
                  General Dental Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#D6B879]">
              Contact Clinic
            </h2>
            <ul className="mt-4 space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#20A9E8]"
                  aria-hidden="true"
                />
                <a
                  href={CLINIC_INFO.phone.telHref}
                  className="font-semibold text-white transition-colors hover:text-[#20A9E8]"
                >
                  {CLINIC_INFO.phone.display}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#20A9E8]"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">
                  {CLINIC_INFO.address.full}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#20A9E8]"
                  aria-hidden="true"
                />
                <div className="space-y-0.5">
                  <p className="font-medium text-white">
                    {CLINIC_INFO.hours.weekdays}
                  </p>
                  <p>{CLINIC_INFO.hours.morning}</p>
                  <p>{CLINIC_INFO.hours.evening}</p>
                  <p className="text-[#D6B879]">{CLINIC_INFO.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-slate-300 sm:flex-row">
          <p>
            © 2026 Smilo Care Orthodontic &amp; Implant Centre. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
