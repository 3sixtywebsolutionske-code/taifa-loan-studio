import { ScreenHeader } from "../ScreenHeader";
import type { Screen } from "@/lib/rosky-types";
import { Check, Circle } from "lucide-react";

const steps = [
  { label: "National ID & KRA PIN verified", done: true },
  { label: "Vehicle logbook confirmed at NTSA", done: true },
  { label: "Checking CRB credit report…", done: false },
  { label: "Insurance verification & vehicle valuation", done: false },
  { label: "Final approval decision", done: false },
];

export const CrbCheckScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="animate-fade-in pb-10">
    <ScreenHeader title="Checking Eligibility" onBack={() => onNavigate("apply")} />
    <div className="px-4 pt-6 flex flex-col items-center">
      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-green-soft mb-4">
        <div className="w-14 h-14 rounded-full border-4 border-[#C6EBC8] animate-spin-slow" style={{ borderTopColor: "#42CF49" }} />
      </div>
      <h2 className="font-display font-bold text-[16px] text-navy">Verifying Your Application</h2>
      <p className="text-[11.5px] text-mute text-center mt-1 max-w-[280px]">
        Checking CRB status, vehicle records at NTSA, and income verification.
      </p>

      <div className="w-full bg-white rounded-2xl p-4 mt-5 shadow-card border border-soft">
        {steps.map((s) => (
          <div key={s.label} className="flex items-center gap-3 py-2">
            {s.done ? (
              <div className="w-5 h-5 rounded-full bg-rosky-green flex items-center justify-center">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
            ) : (
              <Circle className="w-5 h-5 text-[#D6E0EC]" />
            )}
            <span className={`text-[12px] ${s.done ? "text-navy font-semibold" : "text-mute"}`}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 w-full mt-5">
        <button
          onClick={() => onNavigate("denied")}
          className="py-3 rounded-2xl border-[1.5px] border-navy text-navy font-bold text-[12.5px] active:scale-95 transition"
        >
          ❌ Denied
        </button>
        <button
          onClick={() => onNavigate("approved")}
          className="py-3 rounded-2xl bg-rosky-green text-white font-bold text-[12.5px] active:scale-95 transition"
        >
          ✅ Approved
        </button>
      </div>
    </div>
  </div>
);
