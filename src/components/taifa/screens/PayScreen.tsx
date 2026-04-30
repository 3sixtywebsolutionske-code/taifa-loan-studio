import { useState } from "react";
import { ScreenHeader } from "../ScreenHeader";
import type { Screen } from "@/lib/taifa-types";

export const PayScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [amount, setAmount] = useState("6000");
  const [method, setMethod] = useState<"stk" | "paybill">("stk");

  return (
    <div className="animate-fade-in pb-10">
      <ScreenHeader title="Pay Your Loan" onBack={() => onNavigate("home")} />
      <div className="px-4 pt-4">
        <div className="bg-secondary rounded-2xl p-4 border border-primary/20">
          <div className="text-[11px] uppercase tracking-wider text-foreground/60">Outstanding balance</div>
          <div className="font-display font-extrabold text-2xl mt-0.5">KES 6,000</div>
          <div className="text-[11px] text-foreground/70 mt-0.5">of KES 10,250 total · Due 14 May</div>
          <div className="h-1.5 bg-white/60 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: "41%" }} />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-[12px] font-semibold mb-1.5 block">Payment amount</label>
          <div className="flex items-center bg-white border border-border rounded-2xl px-4 py-3 shadow-card">
            <span className="text-[12px] font-semibold text-muted-foreground mr-2">KES</span>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
              className="flex-1 bg-transparent outline-none font-display font-bold text-lg"
              inputMode="numeric"
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="text-[12px] font-semibold mb-2">Payment method</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: "stk", label: "M-Pesa STK Push" },
              { id: "paybill", label: "Paybill" },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id as any)}
                className={`py-3 rounded-2xl text-[12px] font-semibold border transition active:scale-95 ${
                  method === m.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-white text-foreground border-border"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {method === "paybill" && (
          <div className="mt-3 bg-white border border-border rounded-2xl p-3 text-[12px] animate-fade-in">
            <div className="font-semibold mb-1">Paybill instructions</div>
            <div className="text-muted-foreground">Business no: <span className="font-bold text-foreground">888200</span></div>
            <div className="text-muted-foreground">Account: <span className="font-bold text-foreground">0712 345 678</span> (your phone)</div>
          </div>
        )}

        <button
          onClick={() => alert(`STK push sent to 0712 345 678 for KES ${Number(amount).toLocaleString()}. Enter your M-Pesa PIN to confirm.`)}
          className="mt-5 w-full bg-primary text-primary-foreground font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.98] transition"
        >
          Pay Now via M-Pesa
        </button>
      </div>
    </div>
  );
};
