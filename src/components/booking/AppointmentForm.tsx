"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { APPOINTMENT_TREATMENT_OPTIONS } from "@/data/treatments";

interface AppointmentFormProps {
  defaultTreatment?: string;
  compact?: boolean;
  headingId?: string;
}

interface FieldErrors {
  fullName?: string;
  phone?: string;
  treatment?: string;
  preferredDate?: string;
  preferredTime?: string;
}

const TIME_SLOTS = [
  "Morning (10:00 AM – 2:00 PM)",
  "Evening (5:00 PM – 8:30 PM)",
  "10:00 AM – 11:30 AM",
  "11:30 AM – 1:30 PM",
  "5:00 PM – 6:30 PM",
  "6:30 PM – 8:30 PM",
] as const;

export function AppointmentForm({
  defaultTreatment = "Orthodontic Treatment",
  compact = false,
  headingId,
}: AppointmentFormProps) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState(
    APPOINTMENT_TREATMENT_OPTIONS.includes(
      defaultTreatment as (typeof APPOINTMENT_TREATMENT_OPTIONS)[number]
    )
      ? defaultTreatment
      : "Orthodontic Treatment"
  );
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState<string>(TIME_SLOTS[0]);
  const [message, setMessage] = useState("");

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FieldErrors>({});
  const [liveAnnouncement, setLiveAnnouncement] = useState("");
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState<
    string | null
  >(null);

  const todayIso = new Date().toISOString().split("T")[0];

  const validateFields = (): FieldErrors => {
    const next: FieldErrors = {};
    if (fullName.trim().length < 2) {
      next.fullName = "Please enter your full name (at least 2 characters).";
    }
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10 || digitsOnly.length > 13) {
      next.phone =
        "Please enter a valid 10-digit phone or WhatsApp number (e.g., 9140264464).";
    }
    if (!treatment) {
      next.treatment = "Please select a treatment option.";
    }
    if (!preferredDate) {
      next.preferredDate = "Please select a preferred appointment date.";
    } else {
      const selected = new Date(`${preferredDate}T00:00:00`);
      if (selected.getDay() === 0) {
        next.preferredDate =
          "Our clinic is closed on Sundays. Please choose Monday–Saturday.";
      }
    }
    if (!preferredTime) {
      next.preferredTime = "Please choose a preferred clinic time slot.";
    }
    return next;
  };

  const handleBlur = (field: keyof FieldErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const nextErrors = validateFields();
    setErrors(nextErrors);
    if (nextErrors[field]) {
      setLiveAnnouncement(nextErrors[field] || "");
    }
  };

  const clearFieldError = (field: keyof FieldErrors) => {
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateFields();
    setErrors(validationErrors);
    setTouched({
      fullName: true,
      phone: true,
      treatment: true,
      preferredDate: true,
      preferredTime: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      const firstKey = Object.keys(validationErrors)[0] as keyof FieldErrors;
      const targetId = `${uid}-${firstKey}`;
      const el = document.getElementById(targetId);
      el?.focus();
      setLiveAnnouncement(
        validationErrors[firstKey] || "Please check the highlighted form fields."
      );
      return;
    }

    const formattedText = [
      `Hello Smilo Care Orthodontic & Implant Centre,`,
      `I would like to request an appointment:`,
      ``,
      `• Full Name: ${fullName.trim()}`,
      `• Phone Number: ${phone.trim()}`,
      `• Treatment: ${treatment}`,
      `• Preferred Date: ${preferredDate}`,
      `• Preferred Time: ${preferredTime}`,
      message.trim() ? `• Additional Message: ${message.trim()}` : null,
      ``,
      `Please confirm available consultation timings.`,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const whatsappUrl = `${CLINIC_INFO.phone.whatsappHref}?text=${encodeURIComponent(
      formattedText
    )}`;

    setSubmittedWhatsappUrl(whatsappUrl);
    setLiveAnnouncement(
      "Appointment request prepared for WhatsApp. Note that the clinic team must confirm your appointment slot."
    );
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={headingId}
      className="space-y-5"
    >
      <div className="visually-hidden" aria-live="polite" role="status">
        {liveAnnouncement}
      </div>

      <div
        className={`grid gap-5 ${
          compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={`${uid}-fullName`}
            className="text-sm font-semibold text-[#102D65]"
          >
            Full Name <span className="text-[#1749B8]" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <User
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id={`${uid}-fullName`}
              name="fullName"
              type="text"
              autoComplete="name"
              enterKeyHint="next"
              required
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                clearFieldError("fullName");
              }}
              onBlur={() => handleBlur("fullName")}
              aria-invalid={Boolean(touched.fullName && errors.fullName)}
              aria-describedby={
                touched.fullName && errors.fullName
                  ? `${uid}-fullName-err`
                  : undefined
              }
              placeholder="e.g., Priya Verma"
              className={`smilo-input w-full rounded-xl pl-10 pr-4 text-slate-900 placeholder:text-slate-400 ${
                touched.fullName && errors.fullName
                  ? "user-invalid-fallback"
                  : ""
              }`}
            />
          </div>
          {touched.fullName && errors.fullName && (
            <p
              id={`${uid}-fullName-err`}
              className="flex items-start gap-1.5 text-xs font-medium text-[#c62828]"
            >
              <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={`${uid}-phone`}
            className="text-sm font-semibold text-[#102D65]"
          >
            Phone / WhatsApp Number{" "}
            <span className="text-[#1749B8]" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <Phone
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id={`${uid}-phone`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              enterKeyHint="next"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                clearFieldError("phone");
              }}
              onBlur={() => handleBlur("phone")}
              aria-invalid={Boolean(touched.phone && errors.phone)}
              aria-describedby={
                touched.phone && errors.phone ? `${uid}-phone-err` : undefined
              }
              placeholder="+91 98XXX XXXXX"
              className={`smilo-input w-full rounded-xl pl-10 pr-4 text-slate-900 placeholder:text-slate-400 ${
                touched.phone && errors.phone ? "user-invalid-fallback" : ""
              }`}
            />
          </div>
          {touched.phone && errors.phone && (
            <p
              id={`${uid}-phone-err`}
              className="flex items-start gap-1.5 text-xs font-medium text-[#c62828]"
            >
              <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Treatment Selection */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label
            htmlFor={`${uid}-treatment`}
            className="text-sm font-semibold text-[#102D65]"
          >
            Treatment Selection{" "}
            <span className="text-[#1749B8]" aria-hidden="true">*</span>
          </label>
          <select
            id={`${uid}-treatment`}
            name="treatment"
            required
            value={treatment}
            onChange={(e) => {
              setTreatment(e.target.value);
              clearFieldError("treatment");
            }}
            onBlur={() => handleBlur("treatment")}
            aria-invalid={Boolean(touched.treatment && errors.treatment)}
            className="smilo-input w-full rounded-xl px-4 text-slate-900"
          >
            {APPOINTMENT_TREATMENT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Date */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={`${uid}-preferredDate`}
            className="text-sm font-semibold text-[#102D65]"
          >
            Preferred Date (Mon–Sat){" "}
            <span className="text-[#1749B8]" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <Calendar
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id={`${uid}-preferredDate`}
              name="preferredDate"
              type="date"
              min={todayIso}
              required
              value={preferredDate}
              onChange={(e) => {
                setPreferredDate(e.target.value);
                clearFieldError("preferredDate");
              }}
              onBlur={() => handleBlur("preferredDate")}
              aria-invalid={Boolean(
                touched.preferredDate && errors.preferredDate
              )}
              aria-describedby={
                touched.preferredDate && errors.preferredDate
                  ? `${uid}-preferredDate-err`
                  : undefined
              }
              className={`smilo-input w-full rounded-xl pl-10 pr-4 text-slate-900 ${
                touched.preferredDate && errors.preferredDate
                  ? "user-invalid-fallback"
                  : ""
              }`}
            />
          </div>
          {touched.preferredDate && errors.preferredDate && (
            <p
              id={`${uid}-preferredDate-err`}
              className="flex items-start gap-1.5 text-xs font-medium text-[#c62828]"
            >
              <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.preferredDate}</span>
            </p>
          )}
        </div>

        {/* Preferred Time */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={`${uid}-preferredTime`}
            className="text-sm font-semibold text-[#102D65]"
          >
            Preferred Time{" "}
            <span className="text-[#1749B8]" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <Clock
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <select
              id={`${uid}-preferredTime`}
              name="preferredTime"
              required
              value={preferredTime}
              onChange={(e) => {
                setPreferredTime(e.target.value);
                clearFieldError("preferredTime");
              }}
              onBlur={() => handleBlur("preferredTime")}
              aria-invalid={Boolean(
                touched.preferredTime && errors.preferredTime
              )}
              className="smilo-input w-full rounded-xl pl-10 pr-4 text-slate-900"
            >
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Additional Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={`${uid}-message`}
          className="text-sm font-semibold text-[#102D65]"
        >
          Additional Message (Optional)
        </label>
        <div className="relative">
          <MessageSquare
            className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400"
            aria-hidden="true"
          />
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={compact ? 3 : 4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your dental concern, preferred timing notes, or questions for Dr. Kriti Shukla..."
            className="smilo-input w-full rounded-xl py-3 pl-10 pr-4 text-slate-900 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="rounded-xl border border-[#E7ECF5] bg-[#F5F8FF] px-4 py-3 text-xs leading-relaxed text-slate-600">
        Submitting opens WhatsApp (<span className="font-semibold text-[#102D65]">{CLINIC_INFO.phone.display}</span>) with your prefilled request.{" "}
        <strong className="font-semibold text-[#102D65]">
          Please note: your appointment is scheduled only after our clinic team confirms your slot.
        </strong>
      </div>

      <button
        type="submit"
        className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-[#1749B8] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#102D65] active:scale-[0.99]"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        <span>Request Appointment</span>
      </button>

      {submittedWhatsappUrl && (
        <div
          role="status"
          className="rounded-2xl border border-[#D6B879] bg-[#FFFDF8] p-4 text-sm text-slate-700"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-[#15803d]"
              aria-hidden="true"
            />
            <div className="space-y-1.5">
              <p className="font-semibold text-[#102D65]">
                Appointment request prepared for WhatsApp
              </p>
              <p className="text-xs leading-relaxed text-slate-600">
                If WhatsApp did not open automatically, click the link below to send your request. Your visit is confirmed once our clinic desk replies with slot confirmation.
              </p>
              <a
                href={submittedWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#1749B8] underline underline-offset-4 hover:text-[#102D65]"
              >
                Open Prefilled WhatsApp Request
              </a>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
