"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarCheck2,
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import { CLINIC_INFO } from "@/data/clinic";
import { useAppointmentModal } from "@/components/booking/AppointmentModalContext";

const TREATMENT_LINKS = [
  { label: "All Treatments Overview", href: "/treatments" },
  { label: "Dental Implants in Kanpur", href: "/dental-implants-kanpur" },
  { label: "Orthodontic Treatment", href: "/orthodontic-treatment-kanpur" },
  { label: "Braces Treatment", href: "/braces-treatment-kanpur" },
  { label: "General Dental Care", href: "/general-dental-care-kanpur" },
];

export function Navbar() {
  const pathname = usePathname();
  const { openAppointmentModal } = useAppointmentModal();

  const [scrolled, setScrolled] = useState(false);
  const [openDropdownPath, setOpenDropdownPath] = useState<string | null>(null);
  const treatmentsOpen = openDropdownPath === pathname;
  const setTreatmentsOpen = (
    value: boolean | ((prev: boolean) => boolean)
  ) => {
    setOpenDropdownPath((prev) => {
      const current = prev === pathname;
      const next = typeof value === "function" ? value(current) : value;
      return next ? pathname : null;
    });
  };
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerRef = useRef<HTMLDialogElement>(null);
  const dropdownContainerRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (drawerRef.current?.open) {
      drawerRef.current.close();
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target as Node)
      ) {
        setOpenDropdownPath(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdownPath(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    const dialog = drawerRef.current;
    if (!dialog) return;
    const onClose = () => setMobileOpen(false);
    dialog.addEventListener("close", onClose);

    if (!("closedBy" in HTMLDialogElement.prototype)) {
      const onClick = (e: MouseEvent) => {
        if (e.target === dialog) {
          dialog.close();
        }
      };
      dialog.addEventListener("click", onClick);
      return () => {
        dialog.removeEventListener("close", onClose);
        dialog.removeEventListener("click", onClick);
      };
    }

    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const openDrawer = () => {
    const dialog = drawerRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
      setMobileOpen(true);
    }
  };

  const closeDrawer = () => {
    const dialog = drawerRef.current;
    if (dialog?.open) {
      dialog.close();
    }
    setMobileOpen(false);
  };

  const isTreatmentActive =
    pathname === "/treatments" ||
    pathname === "/dental-implants-kanpur" ||
    pathname === "/orthodontic-treatment-kanpur" ||
    pathname === "/braces-treatment-kanpur" ||
    pathname === "/general-dental-care-kanpur";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <a
        href="#main-content"
        className="visually-hidden fixed left-4 top-4 z-[100] rounded-xl bg-[#102D65] px-4 py-2.5 text-sm font-semibold text-white shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[#E7ECF5] bg-white/95 shadow-[0_6px_28px_-12px_rgba(16,45,101,0.12)] backdrop-blur-md"
            : "border-b border-[#E7ECF5]/80 bg-white/90 backdrop-blur-sm"
        }`}
      >
        {/* Subtle top clinical info strip on large viewports */}
        <div className="hidden border-b border-[#E7ECF5]/80 bg-[#F5F8FF] lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs text-slate-600">
            <p className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D6B879]" aria-hidden="true" />
              <span>{CLINIC_INFO.address.short}</span>
              <span className="text-slate-300" aria-hidden="true">|</span>
              <span>{CLINIC_INFO.hours.summary}</span>
            </p>
            <div className="flex items-center gap-3">
              <span className="font-medium text-[#102D65]">
                {CLINIC_INFO.tagline}
              </span>
              <span className="text-slate-300" aria-hidden="true">|</span>
              <div className="flex items-center gap-2">
                <a
                  href={CLINIC_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Smilo Care on Instagram"
                  className="rounded p-1 text-slate-600 transition-colors hover:text-[#1749B8]"
                >
                  <InstagramIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href={CLINIC_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Smilo Care on Facebook"
                  className="rounded p-1 text-slate-600 transition-colors hover:text-[#1749B8]"
                >
                  <FacebookIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href={CLINIC_INFO.social.youtubeChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Smilo Care on YouTube"
                  className="rounded p-1 text-slate-600 transition-colors hover:text-[#1749B8]"
                >
                  <YoutubeIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Left: Original Clinic Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 rounded-xl py-1 pr-2 transition-opacity hover:opacity-90"
          >
            <img
              src={CLINIC_INFO.assets.logo}
              alt="Smilo Care Orthodontic And Implant Centre Logo"
              width={48}
              height={48}
              fetchPriority="high"
              className="h-11 w-11 rounded-full object-contain shadow-xs ring-1 ring-[#E7ECF5] sm:h-12 sm:w-12"
            />
            <div className="leading-tight">
              <span className="block font-display text-base font-bold tracking-tight text-[#102D65] sm:text-lg">
                Smilo Care
              </span>
              <span className="block text-[11px] font-medium tracking-wide text-[#1749B8]">
                Orthodontic &amp; Implant Centre
              </span>
            </div>
          </Link>

          {/* Center: Desktop Primary Navigation */}
          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              <li>
                <Link
                  href="/"
                  aria-current={isActive("/") ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive("/")
                      ? "text-[#1749B8] after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-[#1749B8]"
                      : "text-slate-700 hover:bg-[#F5F8FF] hover:text-[#102D65]"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about-us"
                  aria-current={isActive("/about-us") ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive("/about-us")
                      ? "text-[#1749B8] after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-[#1749B8]"
                      : "text-slate-700 hover:bg-[#F5F8FF] hover:text-[#102D65]"
                  }`}
                >
                  About Us
                </Link>
              </li>

              {/* Treatments Dropdown */}
              <li
                ref={dropdownContainerRef}
                className="relative"
                onMouseEnter={() => setTreatmentsOpen(true)}
                onMouseLeave={() => setTreatmentsOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={treatmentsOpen}
                  aria-controls="desktop-treatments-menu"
                  onClick={() => setTreatmentsOpen((prev) => !prev)}
                  className={`relative inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isTreatmentActive
                      ? "text-[#1749B8] after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-[#1749B8]"
                      : "text-slate-700 hover:bg-[#F5F8FF] hover:text-[#102D65]"
                  }`}
                >
                  <span>Treatments</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      treatmentsOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {treatmentsOpen && (
                  <div
                    id="desktop-treatments-menu"
                    className="absolute left-0 top-full z-50 w-72 pt-2"
                  >
                    <ul className="rounded-2xl border border-[#E7ECF5] bg-white p-2 shadow-xl shadow-[#102D65]/10">
                      {TREATMENT_LINKS.map((item) => {
                        const active = isActive(item.href);
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              aria-current={active ? "page" : undefined}
                              className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                                active
                                  ? "bg-[#F5F8FF] text-[#1749B8]"
                                  : "text-slate-700 hover:bg-[#F5F8FF] hover:text-[#102D65]"
                              }`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/#our-clinic"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-[#F5F8FF] hover:text-[#102D65]"
                >
                  Our Clinic
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  aria-current={isActive("/gallery") ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive("/gallery")
                      ? "text-[#1749B8] after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-[#1749B8]"
                      : "text-slate-700 hover:bg-[#F5F8FF] hover:text-[#102D65]"
                  }`}
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  aria-current={isActive("/blog") ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive("/blog")
                      ? "text-[#1749B8] after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-[#1749B8]"
                      : "text-slate-700 hover:bg-[#F5F8FF] hover:text-[#102D65]"
                  }`}
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  aria-current={isActive("/contact-us") ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive("/contact-us")
                      ? "text-[#1749B8] after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-[#1749B8]"
                      : "text-slate-700 hover:bg-[#F5F8FF] hover:text-[#102D65]"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: Call Us + Book Appointment + Mobile Menu Button */}
          <div className="flex items-center gap-2.5">
            <a
              href={CLINIC_INFO.phone.telHref}
              className="hidden items-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-3.5 py-2.5 text-sm font-semibold text-[#102D65] transition-colors hover:border-[#1749B8]/40 hover:bg-[#F5F8FF] md:inline-flex"
            >
              <Phone className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
              <span>Call Us</span>
            </a>

            <button
              type="button"
              onClick={() => openAppointmentModal()}
              className="hidden items-center gap-2 rounded-xl bg-[#1749B8] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#102D65] active:scale-[0.98] sm:inline-flex"
            >
              <CalendarCheck2 className="h-4 w-4" aria-hidden="true" />
              <span>Book Appointment</span>
            </button>

            <button
              type="button"
              onClick={openDrawer}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E7ECF5] bg-white text-[#102D65] transition-colors hover:bg-[#F5F8FF] xl:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Native Modal Navigation Drawer for Mobile & Tablet */}
      <dialog
        ref={drawerRef}
        id="mobile-nav-drawer"
        aria-label="Mobile Navigation Menu"
        {...({ closedby: "any" } as Record<string, string>)}
        className="smilo-drawer ml-auto mr-0 my-0 h-dvh max-h-dvh w-[min(88vw,24rem)] border-l border-[#E7ECF5] bg-white p-0 text-slate-800 shadow-2xl"
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#E7ECF5] px-5 py-4">
              <div className="flex items-center gap-2.5">
                <img
                  src={CLINIC_INFO.assets.logo}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-contain ring-1 ring-[#E7ECF5]"
                />
                <span className="font-display text-base font-bold text-[#102D65]">
                  Smilo Care
                </span>
              </div>
              <button
                type="button"
                onClick={closeDrawer}
                autoFocus
                aria-label="Close navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E7ECF5] text-slate-700 hover:bg-[#F5F8FF]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile Primary" className="px-4 py-5">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/"
                    onClick={closeDrawer}
                    aria-current={isActive("/") ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive("/")
                        ? "border-l-4 border-[#1749B8] bg-[#F5F8FF] text-[#1749B8]"
                        : "text-slate-800 hover:bg-[#F5F8FF]"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    onClick={closeDrawer}
                    aria-current={isActive("/about-us") ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive("/about-us")
                        ? "border-l-4 border-[#1749B8] bg-[#F5F8FF] text-[#1749B8]"
                        : "text-slate-800 hover:bg-[#F5F8FF]"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    aria-expanded={mobileTreatmentsOpen}
                    onClick={() => setMobileTreatmentsOpen((prev) => !prev)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium ${
                      isTreatmentActive
                        ? "border-l-4 border-[#1749B8] bg-[#F5F8FF] text-[#1749B8]"
                        : "text-slate-800 hover:bg-[#F5F8FF]"
                    }`}
                  >
                    <span>Treatments</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileTreatmentsOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {mobileTreatmentsOpen && (
                    <ul className="mt-1 space-y-1 pl-4">
                      {TREATMENT_LINKS.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeDrawer}
                            aria-current={
                              isActive(item.href) ? "page" : undefined
                            }
                            className={`block rounded-lg px-3.5 py-2.5 text-sm font-medium ${
                              isActive(item.href)
                                ? "bg-[#F5F8FF] text-[#1749B8]"
                                : "text-slate-600 hover:bg-[#F5F8FF]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    href="/#our-clinic"
                    onClick={closeDrawer}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-800 hover:bg-[#F5F8FF]"
                  >
                    Our Clinic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    onClick={closeDrawer}
                    aria-current={isActive("/gallery") ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive("/gallery")
                        ? "border-l-4 border-[#1749B8] bg-[#F5F8FF] text-[#1749B8]"
                        : "text-slate-800 hover:bg-[#F5F8FF]"
                    }`}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    onClick={closeDrawer}
                    aria-current={isActive("/blog") ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive("/blog")
                        ? "border-l-4 border-[#1749B8] bg-[#F5F8FF] text-[#1749B8]"
                        : "text-slate-800 hover:bg-[#F5F8FF]"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    onClick={closeDrawer}
                    aria-current={isActive("/faq") ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive("/faq")
                        ? "border-l-4 border-[#1749B8] bg-[#F5F8FF] text-[#1749B8]"
                        : "text-slate-800 hover:bg-[#F5F8FF]"
                    }`}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    onClick={closeDrawer}
                    aria-current={isActive("/contact-us") ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive("/contact-us")
                        ? "border-l-4 border-[#1749B8] bg-[#F5F8FF] text-[#1749B8]"
                        : "text-slate-800 hover:bg-[#F5F8FF]"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="space-y-3 border-t border-[#E7ECF5] bg-[#F5F8FF] p-5">
            <button
              type="button"
              onClick={() => {
                closeDrawer();
                openAppointmentModal();
              }}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#1749B8] px-4 py-3 text-sm font-semibold text-white"
            >
              <CalendarCheck2 className="h-4 w-4" aria-hidden="true" />
              <span>Book Appointment</span>
            </button>

            <a
              href={CLINIC_INFO.phone.telHref}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-4 py-3 text-sm font-semibold text-[#102D65]"
            >
              <Phone className="h-4 w-4 text-[#1749B8]" aria-hidden="true" />
              <span>Call {CLINIC_INFO.phone.display}</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-1">
              <a
                href={CLINIC_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-lg p-2 text-slate-600 hover:text-[#1749B8]"
              >
                <InstagramIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={CLINIC_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-lg p-2 text-slate-600 hover:text-[#1749B8]"
              >
                <FacebookIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={CLINIC_INFO.social.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="rounded-lg p-2 text-slate-600 hover:text-[#1749B8]"
              >
                <YoutubeIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
