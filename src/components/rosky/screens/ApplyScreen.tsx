import { useState } from "react";
import { ScreenHeader } from "../ScreenHeader";
import { PRODUCTS, type ProductId, type Screen } from "@/lib/rosky-types";
import { Check } from "lucide-react";

export const ApplyScreen = ({
  onNavigate,
  productId,
  amount,
  setAmount,
  period,
  setPeriod,
}: {
  onNavigate: (s: Screen) => void;
  productId: ProductId;
  amount: number;
  setAmount: (n: number) => void;
  period: number;
  setPeriod: (n: number) => void;
}) => {
  const product = PRODUCTS[productId];
  const monthlyInterest = Math.round(amount * 0.035);
  const totalInterest = monthlyInterest * period;
  const total = amount + totalInterest;
  const monthly = Math.round(total / period);
  const fee = Math.round(amount * 0.01);

  return (
    <div className="animate-fade-in pb-28">
      <ScreenHeader title={product.name} onBack={() => onNavigate("products")} />

      <div className="px-4 pt-4">
        <span className="inline-block text-[10px] font-bold text-white px-3 py-1 rounded-full" style={{ background: "var(--gradient-h)" }}>
          {product.emoji} {product.name}
        </span>

        <div className="bg-green-soft rounded-2xl p-4 mt-3 border border-[#C6EBC8]">
          <div className="font-display font-bold text-[13px] text-navy mb-2">Eligibility Checklist</div>
          <ul className="space-y-1.5">
            {product.eligibility.map((e) => (
              <li key={e} className="flex gap-2 text-[11.5px] text-navy leading-snug">
                <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-rosky-green" strokeWidth={3} />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-4 mt-4 shadow-card border border-soft">
          <div className="text-[10.5px] font-bold tracking-wider text-mute uppercase">Loan Amount (KES)</div>
          <div className="font-display font-extrabold text-[28px] text-navy mt-1">
            KES {amount.toLocaleString()}
          </div>
          <input
            type="range"
            min={50000}
            max={5000000}
            step={50000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full mt-3"
            style={{ accentColor: "#42CF49" }}
          />
          <div className="flex justify-between text-[10.5px] text-mute mt-1">
            <span>KES 50K</span><span>KES 5M</span>
          </div>

          <div className="text-[12px] font-semibold text-navy mt-4 mb-2">Repayment period</div>
          <div className="flex gap-2">
            {product.periods.map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`flex-1 py-2.5 rounded-xl text-[12px] font-semibold border transition active:scale-95 ${
                  period === p ? "text-white border-transparent" : "bg-white text-navy border-soft"
                }`}
                style={period === p ? { background: "var(--gradient-h)" } : {}}
              >
                {p} mo
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 mt-4 shadow-card border border-soft">
          <div className="font-display font-bold text-[13px] text-navy mb-2">Loan Summary</div>
          <Row k="Principal" v={`KES ${amount.toLocaleString()}`} />
          <Row k="Monthly Interest (3.5% flat)" v={`KES ${monthlyInterest.toLocaleString()}`} />
          <Row k="Monthly Repayment" v={`KES ${monthly.toLocaleString()}`} />
          <Row k="Total Repayable" v={`KES ${total.toLocaleString()}`} bold />
          <Row k="Processing Fee (1%)" v={`KES ${fee.toLocaleString()}`} />
        </div>

        <button
          onClick={() => onNavigate("crb-check")}
          className="mt-5 w-full text-white font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.97] transition"
          style={{ background: "var(--gradient-full)" }}
        >
          Check Eligibility & Apply
        </button>
      </div>
    </div>
  );
};

const Row = ({ k, v, bold }: { k: string; v: string; bold?: boolean }) => (
  <div className="flex justify-between py-1 text-[12px]">
    <span className="text-mute">{k}</span>
    <span className={bold ? "font-display font-extrabold text-navy" : "font-semibold text-navy"}>{v}</span>
  </div>
);
