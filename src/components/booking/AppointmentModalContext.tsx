"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { X, CalendarCheck2 } from "lucide-react";
import { AppointmentForm } from "./AppointmentForm";

interface AppointmentModalContextValue {
  openAppointmentModal: (defaultTreatment?: string) => void;
  closeAppointmentModal: () => void;
}

const AppointmentModalContext =
  createContext<AppointmentModalContextValue | null>(null);

export function useAppointmentModal() {
  const ctx = useContext(AppointmentModalContext);
  if (!ctx) {
    throw new Error(
      "useAppointmentModal must be used inside AppointmentModalProvider"
    );
  }
  return ctx;
}

export function AppointmentModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<string>(
    "Orthodontic Treatment"
  );
  const [instanceKey, setInstanceKey] = useState(0);

  const openAppointmentModal = useCallback((defaultTreatment?: string) => {
    if (defaultTreatment) {
      setSelectedTreatment(defaultTreatment);
    }
    setInstanceKey((k) => k + 1);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  const closeAppointmentModal = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog && dialog.open) {
      dialog.close();
    }
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if ("closedBy" in HTMLDialogElement.prototype) return;

    let pressedOutside = false;
    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };

    const onDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    const onUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) {
        dialog.close();
      }
      pressedOutside = false;
    };

    dialog.addEventListener("pointerdown", onDown);
    dialog.addEventListener("pointerup", onUp);
    return () => {
      dialog.removeEventListener("pointerdown", onDown);
      dialog.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <AppointmentModalContext.Provider
      value={{ openAppointmentModal, closeAppointmentModal }}
    >
      {children}
      <dialog
        ref={dialogRef}
        id="appointment-request-dialog"
        aria-labelledby="appointment-dialog-title"
        {...({ closedby: "any" } as Record<string, string>)}
        className="smilo-dialog m-auto w-[min(94vw,42rem)] max-h-[90dvh] rounded-3xl border border-[#E7ECF5] bg-white p-0 text-slate-800 shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#E7ECF5] bg-white px-6 py-5 sm:px-8">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F8FF] text-[#1749B8] ring-1 ring-[#E7ECF5]">
              <CalendarCheck2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="appointment-dialog-title"
                className="font-display text-xl font-bold text-[#102D65]"
              >
                Request an Appointment
              </h2>
              <p className="mt-0.5 text-sm text-slate-600">
                Smilo Care Orthodontic &amp; Implant Centre, Kanpur
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeAppointmentModal}
            aria-label="Close appointment dialog"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E7ECF5] bg-white text-slate-700 transition-colors hover:bg-[#F5F8FF] hover:text-[#102D65]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <AppointmentForm
            key={`${selectedTreatment}-${instanceKey}`}
            defaultTreatment={selectedTreatment}
            compact
          />
        </div>
      </dialog>
    </AppointmentModalContext.Provider>
  );
}
