import { useState } from "react";
import { ScreenHeader } from "../ScreenHeader";
import { Check } from "lucide-react";
import type { Screen } from "@/lib/taifa-types";

type Loan = {
  amount: number;
  type: string;
  status: "active" | "repaid";
  date: string;
  progress?: number;
};

const loans: Loan[] = [
  { amount: 10000, type: "Personal", status: "active", date: "Apr 2026", progress: 40 },
  { amount: 5000, type: "Business", status: "repaid", date: "Jan 2026" },
  { amount: 3000, type: "Emergency", status: "repaid", date: "Nov 2025" },
];

export const HistoryScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [tab, setTab] = useState<"all" | "active" | "repaid">("all");
  const filtered = loans.filter((l) => tab === "all" || l.status === tab);
  return (
    <div className="animate-fade-in pb-24">
      <ScreenHeader title="Loan History" onBack={() => onNavigate("home")} />
      <div className="px-4 pt-3">
        <div className="bg-white rounded-2xl p-1 flex shadow-card">
          {(["all", "active", "repaid"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-xl text-[12px] font-semibold capitalize transition ${
                tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-3 space-y-3">
          {filtered.map((l, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-card">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-display font-extrabold text-lg">KES {l.amount.toLocaleString()}</div>
                  <div className="text-[11px] text-muted-foreground">{l.type} · {l.date}</div>
                </div>
                {l.status === "active" ? (
                  <span className="bg-secondary text-primary text-[10px] font-bold px-2.5 py-1 rounded-full">ACTIVE</span>
                ) : (
                  <span className="inline-flex items-center gap-1 bg-secondary/70 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full">
                    <Check className="w-3 h-3" /> REPAID
                  </span>
                )}
              </div>
              {l.status === "active" && (
                <div className="mt-3">
                  <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                    <span>{l.progress}% repaid</span>
                    <span>KES {(l.amount * (l.progress! / 100)).toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full gradient-primary rounded-full transition-all" style={{ width: `${l.progress}%` }} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
