import { useEffect, useState } from "react";
import { ScreenHeader } from "../ScreenHeader";
import { Loader2, Check, Circle, X } from "lucide-react";
import type { Screen } from "@/lib/taifa-types";

export const CrbCheckScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [step, setStep] = useState(2);
  useEffect(() => {
    const t = setTimeout(() => setStep(3), 1800);
    return () => clearTimeout(t);
  }, []);

  const steps = [
    { label: "National ID verified", done: step >= 1 },
    { label: "M-Pesa account matched", done: step >= 2 },
    { label: "Fetching CRB report…", done: step >= 3, pending: step < 3 },
    { label: "Scoring & approval decision", done: step >= 4, pending: step < 4 },
  ];

  return (
    <div className="animate-fade-in pb-10">
      <ScreenHeader title="CRB Eligibility Check" onBack={() => onNavigate("apply")} />

      <div className="px-5 pt-8 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
          <Loader2 className="w-9 h-9 text-primary animate-spin-slow" />
        </div>
        <h2 className="font-display font-extrabold text-lg mt-4">Verifying CRB Status</h2>
        <p className="text-[12px] text-muted-foreground mt-1 max-w-[260px]">
          Hold tight — we're checking your credit profile securely.
        </p>
      </div>

      <div className="px-5 mt-6">
        <div className="bg-white rounded-2xl p-4 shadow-card space-y-3">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${s.done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                {s.done ? <Check className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5" />}
              </div>
              <span className={`text-[13px] ${s.done ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center text-[11px] text-muted-foreground">
          Checking <span className="font-semibold text-foreground">TransUnion</span> & <span className="font-semibold text-foreground">Metropol</span> CRB
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate("denied")}
            className="py-3 rounded-2xl border-2 border-danger text-danger font-bold text-[13px] flex items-center justify-center gap-1.5 active:scale-95 transition"
          >
            <X className="w-4 h-4" /> Simulate Denied
          </button>
          <button
            onClick={() => onNavigate("approved")}
            className="py-3 rounded-2xl bg-primary text-primary-foreground font-bold text-[13px] flex items-center justify-center gap-1.5 active:scale-95 transition shadow-tile"
          >
            <Check className="w-4 h-4" /> Simulate Approved
          </button>
        </div>
      </div>
    </div>
  );
};
