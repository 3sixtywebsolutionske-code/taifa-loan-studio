import { useState } from "react";
import { ScreenHeader } from "../ScreenHeader";
import { Smartphone, Zap, CheckCircle2 } from "lucide-react";
import type { Screen } from "@/lib/taifa-types";

const stepsHow = [
  { Icon: Smartphone, label: "Confirm your M-Pesa number" },
  { Icon: Zap, label: "We send funds via Safaricom B2C" },
  { Icon: CheckCircle2, label: "M-Pesa SMS confirms in seconds" },
];

export const WithdrawScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [phone, setPhone] = useState("0712 345 678");
  const [amount, setAmount] = useState("5000");

  return (
    <div className="animate-fade-in pb-10">
      <ScreenHeader title="Withdraw to M-Pesa" onBack={() => onNavigate("home")} />
      <div className="px-4 pt-4">
        <div className="bg-secondary rounded-2xl p-4 border border-primary/20">
          <div className="text-[11px] uppercase tracking-wider text-foreground/60">Wallet balance</div>
          <div className="font-display font-extrabold text-2xl mt-0.5">KES 5,000</div>
          <div className="text-[11px] text-foreground/70 mt-0.5">Ready to withdraw</div>
        </div>

        <div className="mt-4">
          <label className="text-[12px] font-semibold mb-1.5 block">M-Pesa phone number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-white border border-border rounded-2xl px-4 py-3 outline-none font-semibold text-[14px] shadow-card"
          />
        </div>

        <div className="mt-3">
          <label className="text-[12px] font-semibold mb-1.5 block">Withdrawal amount</label>
          <div className="flex items-center bg-white border border-border rounded-2xl px-4 py-3 shadow-card">
            <span className="text-[12px] font-semibold text-muted-foreground mr-2">KES</span>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
              className="flex-1 bg-transparent outline-none font-display font-bold text-lg"
              inputMode="numeric"
            />
          </div>
          <div className="text-[11px] text-primary font-semibold mt-1.5 flex items-center gap-1">
            <Zap className="w-3 h-3" /> Free withdrawal · Instant transfer
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-card">
          <div className="font-display font-bold text-[13px] mb-2">How it works</div>
          {stepsHow.map(({ Icon, label }, i) => (
            <div key={i} className="flex items-center gap-3 py-1.5">
              <div className="w-7 h-7 rounded-full bg-secondary text-primary flex items-center justify-center">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-[12px] text-foreground">{i + 1}. {label}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => alert(`✅ KES ${Number(amount).toLocaleString()} sent to ${phone}. Check your M-Pesa SMS.`)}
          className="mt-5 w-full bg-primary text-primary-foreground font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.98] transition"
        >
          Withdraw Now
        </button>
      </div>
    </div>
  );
};
