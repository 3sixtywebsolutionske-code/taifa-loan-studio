import { useState } from "react";
import { ScreenHeader } from "../ScreenHeader";
import type { Screen } from "@/lib/rosky-types";

const methods = ["📲 M-Pesa STK Push", "🏦 Bank Transfer", "Paybill"];

export const PayScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [method, setMethod] = useState(methods[0]);
  const [amount, setAmount] = useState("35000");

  return (
    <div className="animate-fade-in pb-28">
      <ScreenHeader title="Repay Loan" onBack={() => onNavigate("home")} />
      <div className="px-4 pt-4">
        <div className="rounded-2xl p-4 border border-soft" style={{ background: "var(--gradient-tint)" }}>
          <div className="flex items-center justify-between">
            <span className="text-[10.5px] font-bold tracking-wider text-mute uppercase">Outstanding Balance</span>
            <span className="bg-green-soft text-rosky-green text-[10px] font-bold px-2 py-0.5 rounded-full">Due 15 Jun</span>
          </div>
          <div className="font-display font-extrabold text-[26px] text-navy mt-1">KES 195,000</div>
          <div className="text-[11px] text-mute">of KES 300,000 total loan</div>
          <div className="h-2 bg-white rounded-full overflow-hidden mt-3">
            <div className="h-full rounded-full" style={{ width: "35%", background: "var(--gradient-h)" }} />
          </div>
          <div className="flex justify-between text-[10.5px] text-mute mt-2">
            <span>35% repaid</span><span>Next due: 01 Jun 2026</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 mt-4 shadow-card border border-soft">
          <div className="text-[12px] font-semibold text-navy mb-2">Payment Amount (KES)</div>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
            className="w-full bg-[#F4F6F9] rounded-xl px-3 py-3 text-[15px] font-display font-bold text-navy outline-none border border-soft"
          />

          <div className="text-[12px] font-semibold text-navy mt-4 mb-2">Payment Method</div>
          <div className="flex flex-wrap gap-2">
            {methods.map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`px-3 py-2 rounded-xl text-[11.5px] font-semibold border transition active:scale-95 ${
                  method === m ? "text-white border-transparent" : "bg-white text-navy border-soft"
                }`}
                style={method === m ? { background: "var(--gradient-h)" } : {}}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="bg-[#F4F6F9] rounded-xl p-3 mt-4 text-[11.5px] text-navy leading-snug border border-soft">
            <div className="font-bold mb-1">Paybill Details</div>
            <div>Business No: <b>400100</b></div>
            <div>Account No: Your Rosky Loan Reference</div>
            <div>Helpline: +254 20 200 6587</div>
          </div>
        </div>

        <button
          onClick={() => alert("M-Pesa STK Push sent to 0712••• — confirm on your phone")}
          className="mt-5 w-full text-white font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.97] transition"
          style={{ background: "var(--gradient-full)" }}
        >
          Repay Now
        </button>
        <button
          onClick={() => onNavigate("home")}
          className="mt-2 w-full font-bold text-[13.5px] py-3 rounded-2xl border-[1.5px] border-navy text-navy active:scale-[0.97] transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
