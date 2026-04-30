import { ScreenHeader } from "../ScreenHeader";
import { CheckCircle2 } from "lucide-react";
import type { ApplyState, Screen } from "@/lib/taifa-types";

export const ApprovedScreen = ({
  onNavigate,
  state,
}: {
  onNavigate: (s: Screen) => void;
  state: ApplyState;
}) => {
  const interest = Math.round(state.amount * 0.05);
  const total = state.amount + interest;
  const due = new Date(Date.now() + state.period * 86400000).toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
  });

  return (
    <div className="animate-fade-in pb-10">
      <ScreenHeader title="Loan Approved!" emoji="🎉" variant="success" onBack={() => onNavigate("home")} />
      <div className="px-4 pt-4">
        <div className="bg-secondary border border-primary/30 rounded-2xl p-4 flex gap-3 animate-scale-in">
          <CheckCircle2 className="w-7 h-7 text-primary shrink-0" />
          <div>
            <div className="font-display font-bold text-[14px]">CRB Check Passed</div>
            <p className="text-[11.5px] text-foreground/80 mt-1">
              You're CRB clear with both TransUnion & Metropol. Your loan has been approved and is ready for instant disbursement to M-Pesa.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card mt-4 divide-y divide-border">
          <Row k="Approved amount" v={`KES ${state.amount.toLocaleString()}`} bold />
          <Row k="Repayment period" v={`${state.period} days`} />
          <Row k="Interest (5% flat)" v={`KES ${interest.toLocaleString()}`} />
          <Row k="Total repayable" v={`KES ${total.toLocaleString()}`} bold />
          <Row k="Disbursement" v="M-Pesa 0712 345 678" />
          <Row k="Due date" v={due} />
        </div>

        <button
          onClick={() => onNavigate("withdraw")}
          className="mt-5 w-full bg-primary text-primary-foreground font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.98] transition"
        >
          Withdraw to M-Pesa Now
        </button>
        <button
          onClick={() => onNavigate("home")}
          className="mt-2 w-full border border-border text-foreground font-semibold text-[13px] py-3 rounded-2xl active:scale-[0.98] transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

const Row = ({ k, v, bold }: { k: string; v: string; bold?: boolean }) => (
  <div className="flex justify-between items-center px-4 py-3 text-[12.5px]">
    <span className="text-muted-foreground">{k}</span>
    <span className={bold ? "font-display font-extrabold text-foreground" : "font-semibold text-foreground"}>{v}</span>
  </div>
);
