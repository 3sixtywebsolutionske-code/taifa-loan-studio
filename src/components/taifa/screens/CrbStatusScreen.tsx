import { ScreenHeader } from "../ScreenHeader";
import { ShieldCheck, Check } from "lucide-react";
import type { Screen } from "@/lib/taifa-types";

const factors = [
  { k: "Loans repaid on time", v: "5", ok: true },
  { k: "Active defaults", v: "None", ok: true },
  { k: "M-Pesa activity", v: "High", ok: true },
  { k: "CRB Bureau", v: "TransUnion & Metropol", ok: true },
];

export const CrbStatusScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const score = 720;
  const pct = ((score - 300) / (850 - 300)) * 100; // ~76%, target 72%
  const thumbPct = 72;
  return (
    <div className="animate-fade-in pb-10">
      <ScreenHeader title="My CRB Status" onBack={() => onNavigate("home")} />
      <div className="px-4 pt-4 space-y-4">
        <div className="bg-white rounded-2xl p-4 shadow-card flex items-center gap-3 animate-scale-in">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="font-display font-bold text-[14px]">You are CRB Clear 🛡️</div>
            <div className="text-[11px] text-muted-foreground">Last checked: Today, 09:14 AM</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Your credit score</div>
          <div className="flex items-end gap-2 mt-1">
            <div className="font-display font-extrabold text-4xl text-primary">{score}</div>
            <div className="text-[11px] text-muted-foreground pb-2">/ 850</div>
          </div>
          <div className="text-[12px] font-semibold text-primary">Good — Top 30% of borrowers</div>

          <div className="relative mt-4 h-3 rounded-full gradient-score">
            <div
              className="absolute -top-1 w-5 h-5 rounded-full bg-white border-[3px] border-foreground shadow"
              style={{ left: `calc(${thumbPct}% - 10px)` }}
            />
          </div>
          <div className="flex justify-between text-[10.5px] text-muted-foreground mt-1.5">
            <span>300 Poor</span>
            <span>850 Excellent</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card divide-y divide-border">
          <div className="px-4 py-3 font-display font-bold text-[13px]">Credit factors</div>
          {factors.map((f) => (
            <div key={f.k} className="flex items-center justify-between px-4 py-3 text-[12.5px]">
              <span className="text-muted-foreground">{f.k}</span>
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                {f.v}
                {f.ok && <Check className="w-3.5 h-3.5 text-primary" />}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
