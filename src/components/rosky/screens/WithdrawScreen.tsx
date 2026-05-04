import { useState } from "react";
import { ScreenHeader } from "../ScreenHeader";
import type { Screen } from "@/lib/rosky-types";

const methods = ["🏦 Bank Account", "📲 M-Pesa", "Cheque"];

export const WithdrawScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [method, setMethod] = useState(methods[0]);
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("200000");

  return (
    <div className="animate-fade-in pb-28">
      <ScreenHeader title="Withdraw Funds" onBack={() => onNavigate("home")} />
      <div className="px-4 pt-4">
        <div className="rounded-2xl p-4 border border-soft" style={{ background: "var(--gradient-tint)" }}>
          <div className="text-[10.5px] font-bold tracking-wider text-mute uppercase">Approved & Ready for Withdrawal</div>
          <div className="font-display font-extrabold text-[26px] text-navy mt-1">KES 200,000</div>
          <div className="text-[11px] text-rosky-green font-semibold">Auto Logbook Loan — Approved</div>
        </div>

        <div className="bg-white rounded-2xl p-4 mt-4 shadow-card border border-soft">
          <div className="text-[12px] font-semibold text-navy mb-2">Withdrawal Method</div>
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

          <div className="text-[12px] font-semibold text-navy mt-4 mb-1">Bank Account / Phone Number</div>
          <input
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            placeholder="e.g. 0712345678 or 01234567890"
            className="w-full bg-[#F4F6F9] rounded-xl px-3 py-3 text-[13px] outline-none border border-soft"
          />

          <div className="text-[12px] font-semibold text-navy mt-3 mb-1">Amount to Withdraw (KES)</div>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
            className="w-full bg-[#F4F6F9] rounded-xl px-3 py-3 text-[15px] font-display font-bold text-navy outline-none border border-soft"
          />

          <div className="text-[10.5px] text-mute mt-2">Disbursement: Same day if completed before 3pm</div>
        </div>

        <div className="bg-green-soft rounded-2xl p-4 mt-4 border border-[#C6EBC8]">
          <div className="font-display font-bold text-[13px] text-navy mb-2">How It Works</div>
          <ol className="space-y-1.5 text-[11.5px] text-navy list-decimal pl-4">
            <li>Complete document signing at Rosky Credit office.</li>
            <li>Confirm withdrawal method and account details.</li>
            <li>Receive funds within 6 hours of document completion.</li>
          </ol>
        </div>

        <button
          onClick={() => alert("Withdrawal of KES " + amount + " confirmed. Funds will arrive within 6 hours.")}
          className="mt-5 w-full text-white font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.97] transition"
          style={{ background: "var(--gradient-full)" }}
        >
          Confirm Withdrawal
        </button>
      </div>
    </div>
  );
};
