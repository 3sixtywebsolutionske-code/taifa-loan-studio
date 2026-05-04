import { ScreenHeader } from "../ScreenHeader";
import type { Screen } from "@/lib/rosky-types";
import { ShieldCheck } from "lucide-react";

const rows = [
  { k: "NTSA Logbook Status", v: "Clean ✓", green: true },
  { k: "Active CRB Defaults", v: "None" },
  { k: "Loans Repaid on Time", v: "4 ✓", green: true },
  { k: "Bureau", v: "TransUnion & Metropol" },
];

export const CrbStatusScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="animate-fade-in pb-28">
    <ScreenHeader title="CRB & Credit Status" onBack={() => onNavigate("home")} />
    <div className="px-4 pt-4">
      <div className="bg-green-soft rounded-2xl p-4 border border-[#C6EBC8] flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-rosky-green flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-display font-bold text-[13.5px] text-navy">CRB Clear — Verified</div>
          <div className="text-[11px] text-navy/80 leading-snug mt-0.5">
            Last checked: 30 April 2026 · TransUnion & Metropol CRB · No adverse listings found
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 mt-4 shadow-card border border-soft">
        <div className="text-[10.5px] font-bold tracking-wider text-mute uppercase">Credit Score</div>
        <div className="flex items-end gap-3 mt-1">
          <div className="font-display font-extrabold text-[40px] text-navy leading-none">734</div>
          <div className="pb-1">
            <span className="bg-rosky-green text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Good</span>
            <div className="text-[10.5px] text-mute mt-0.5">Top 28% of borrowers in Kenya</div>
          </div>
        </div>
        <div className="relative mt-4 h-3 rounded-full gradient-score">
          <div className="absolute -top-1 w-5 h-5 rounded-full bg-navy border-2 border-white shadow" style={{ left: "calc(74% - 10px)" }} />
        </div>
        <div className="flex justify-between text-[10px] text-mute mt-1.5">
          <span>300 Poor</span><span>850 Excellent</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl mt-4 shadow-card border border-soft divide-y divide-[#D6E0EC]">
        {rows.map((r) => (
          <div key={r.k} className="flex justify-between items-center px-4 py-3 text-[12px]">
            <span className="text-mute">{r.k}</span>
            <span className={`font-semibold ${r.green ? "text-rosky-green" : "text-navy"}`}>{r.v}</span>
          </div>
        ))}
      </div>

      <div className="bg-green-soft rounded-2xl p-4 mt-4 border border-[#C6EBC8] text-[11.5px] text-navy leading-snug">
        💡 <b>Note on Logbook Loans:</b> Rosky Credit's logbook loan products prioritise vehicle value over CRB score. You may qualify even with a non-perfect credit history.
      </div>
    </div>
  </div>
);
