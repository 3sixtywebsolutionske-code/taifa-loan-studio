import { useState } from "react";
import { ScreenHeader } from "../ScreenHeader";
import type { Screen } from "@/lib/rosky-types";

type Row = {
  product: string;
  badge: string;
  amount: string;
  status: "Active" | "Repaid";
  progress?: number;
  date: string;
};

const all: Row[] = [
  { product: "Auto Logbook — KES 300,000", badge: "Auto Logbook Loan", amount: "300000", status: "Active", progress: 35, date: "Mar 1, 2026" },
  { product: "IPF — KES 48,000", badge: "Insurance Premium Financing", amount: "48000", status: "Repaid", date: "Jan 10, 2026" },
  { product: "Third-Party Logbook — KES 150,000", badge: "Third-Party Logbook Loan", amount: "150000", status: "Repaid", date: "Aug 5, 2025" },
];

const tabs = ["All", "Active", "Repaid"] as const;

export const HistoryScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const filtered = tab === "All" ? all : all.filter((r) => r.status === tab);
  return (
    <div className="animate-fade-in pb-28">
      <ScreenHeader title="Loan History" onBack={() => onNavigate("home")} />
      <div className="px-4 pt-4">
        <div className="flex gap-2 bg-white p-1 rounded-xl border border-soft">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-lg text-[12px] font-semibold transition active:scale-95 ${
                tab === t ? "text-white" : "text-navy"
              }`}
              style={tab === t ? { background: "var(--gradient-h)" } : {}}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="space-y-3 mt-3">
          {filtered.map((r) => (
            <div key={r.product} className="bg-white rounded-2xl p-4 shadow-card border border-soft">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block text-[9px] font-bold text-white px-2 py-0.5 rounded-full mb-1" style={{ background: "var(--gradient-h)" }}>
                    {r.badge}
                  </span>
                  <div className="font-display font-bold text-[13.5px] text-navy">{r.product}</div>
                  <div className="text-[10.5px] text-mute mt-0.5">{r.date}</div>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${r.status === "Active" ? "bg-green-soft text-rosky-green" : "bg-[#F4F6F9] text-navy"}`}>
                  {r.status === "Repaid" ? "Repaid ✓" : "Active"}
                </span>
              </div>
              {r.progress !== undefined && (
                <div className="h-2 bg-[#E6F9E7] rounded-full overflow-hidden mt-3">
                  <div className="h-full rounded-full" style={{ width: `${r.progress}%`, background: "var(--gradient-h)" }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
