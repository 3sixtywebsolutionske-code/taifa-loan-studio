import { useState } from "react";
import { ScreenHeader } from "../ScreenHeader";
import type { ApplyState, Screen } from "@/lib/taifa-types";

const periods: ApplyState["period"][] = [7, 14, 30, 60];
const purposes: ApplyState["purpose"][] = ["Business", "School Fees", "Medical", "Emergency"];

export const ApplyScreen = ({
  onNavigate,
  state,
  setState,
}: {
  onNavigate: (s: Screen) => void;
  state: ApplyState;
  setState: (s: ApplyState) => void;
}) => {
  const [amount, setAmount] = useState(state.amount);
  const [period, setPeriod] = useState(state.period);
  const [purpose, setPurpose] = useState(state.purpose);

  const interest = Math.round(amount * 0.05);
  const total = amount + interest;

  const submit = () => {
    setState({ amount, period, purpose });
    onNavigate("crb-check");
  };

  return (
    <div className="animate-fade-in pb-28">
      <ScreenHeader title="Apply for Loan" onBack={() => onNavigate("home")} />

      <div className="px-4 pt-4">
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Loan amount</div>
          <div className="font-display font-extrabold text-3xl text-foreground mt-1">
            KES {amount.toLocaleString()}
          </div>
          <input
            type="range"
            min={500}
            max={25000}
            step={500}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full mt-3 accent-primary"
          />
          <div className="flex justify-between text-[10.5px] text-muted-foreground mt-1">
            <span>KES 500</span>
            <span>KES 25,000</span>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-[12px] font-semibold mb-2">Repayment period</div>
          <div className="flex gap-2">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`flex-1 py-2.5 rounded-xl text-[12px] font-semibold border transition active:scale-95 ${
                  period === p
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-white text-foreground border-border"
                }`}
              >
                {p} days
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="text-[12px] font-semibold mb-2">Loan purpose</div>
          <div className="grid grid-cols-2 gap-2">
            {purposes.map((p) => (
              <button
                key={p}
                onClick={() => setPurpose(p)}
                className={`py-2.5 rounded-xl text-[12px] font-semibold border transition active:scale-95 ${
                  purpose === p
                    ? "bg-secondary text-primary border-primary"
                    : "bg-white text-foreground border-border"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-card border border-secondary">
          <div className="font-display font-bold text-[13px] mb-2">Loan summary</div>
          <Row k="Principal" v={`KES ${amount.toLocaleString()}`} />
          <Row k="Interest (5% flat)" v={`KES ${interest.toLocaleString()}`} />
          <Row k="Total repayable" v={`KES ${total.toLocaleString()}`} bold />
          <Row k="Disbursed to" v="M-Pesa 0712 345 678" />
          <Row k="Repayment period" v={`${period} days`} />
        </div>

        <button
          onClick={submit}
          className="mt-5 w-full bg-primary text-primary-foreground font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.98] transition"
        >
          Check Eligibility & Apply
        </button>
      </div>
    </div>
  );
};

const Row = ({ k, v, bold }: { k: string; v: string; bold?: boolean }) => (
  <div className="flex justify-between py-1 text-[12px]">
    <span className="text-muted-foreground">{k}</span>
    <span className={bold ? "font-display font-extrabold text-foreground" : "font-semibold text-foreground"}>{v}</span>
  </div>
);
