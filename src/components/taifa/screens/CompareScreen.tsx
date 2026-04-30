import { ScreenHeader } from "../ScreenHeader";
import { Zap, ShieldCheck, Smartphone, Heart } from "lucide-react";
import type { Screen } from "@/lib/taifa-types";

const rows = [
  { app: "Taifa Loan", max: "KES 25K", rate: "5% flat", featured: true },
  { app: "Tala", max: "KES 50K", rate: "15%" },
  { app: "Branch", max: "KES 70K", rate: "2–28%" },
  { app: "M-Shwari", max: "KES 1M", rate: "7.5%/mo" },
  { app: "KCB M-Pesa", max: "KES 1M", rate: "8.64%" },
  { app: "Fuliza", max: "KES 70K", rate: "1%/day" },
  { app: "Zenka", max: "KES 30K", rate: "Varies" },
  { app: "Hustler Fund", max: "KES 50K", rate: "8.5%/yr" },
];

const advantages = [
  { Icon: Zap, label: "Instant M-Pesa disbursement" },
  { Icon: ShieldCheck, label: "CRB-gated responsible lending" },
  { Icon: Smartphone, label: "Native M-Pesa integration" },
  { Icon: Heart, label: "Taifa Mobile trusted ecosystem" },
];

export const CompareScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="animate-fade-in pb-24">
    <ScreenHeader title="Competitor Analysis" onBack={() => onNavigate("home")} />
    <div className="px-4 pt-3">
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="grid grid-cols-[1.6fr_1fr_1fr] bg-dark-brand text-white text-[10.5px] font-bold uppercase tracking-wider px-3 py-2.5">
          <span>App</span>
          <span>Max</span>
          <span className="text-right">Rate</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.app}
            className={`grid grid-cols-[1.6fr_1fr_1fr] items-center px-3 py-2.5 text-[11.5px] border-t border-border ${
              r.featured ? "bg-secondary" : ""
            }`}
          >
            <span className={`font-semibold ${r.featured ? "text-primary font-display font-extrabold" : "text-foreground"}`}>
              {r.app} {r.featured && "✦"}
            </span>
            <span className="text-foreground">{r.max}</span>
            <span className="text-right text-foreground">{r.rate}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl p-4 gradient-dark text-white shadow-card">
        <div className="font-display font-extrabold text-[14px] mb-3">Why Taifa Loan Wins</div>
        <div className="space-y-2.5">
          {advantages.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-glow">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[12.5px]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => onNavigate("apply")}
        className="mt-5 w-full bg-primary text-primary-foreground font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.98] transition"
      >
        Apply Now
      </button>
    </div>
  </div>
);
