import { ScreenHeader } from "../ScreenHeader";
import { PRODUCTS, type ProductId, type Screen } from "@/lib/rosky-types";
import { CheckCircle2 } from "lucide-react";

export const ApprovedScreen = ({
  onNavigate,
  productId,
  amount,
  period,
}: {
  onNavigate: (s: Screen) => void;
  productId: ProductId;
  amount: number;
  period: number;
}) => {
  const product = PRODUCTS[productId];
  const monthly = Math.round((amount + amount * 0.035 * period) / period);
  const total = monthly * period;
  return (
    <div className="animate-fade-in pb-10">
      <ScreenHeader title="Loan Approved! 🎉" onBack={() => onNavigate("home")} variant="success" />
      <div className="px-4 pt-4">
        <div className="bg-green-soft rounded-2xl p-5 border border-[#C6EBC8] flex flex-col items-center text-center">
          <CheckCircle2 className="w-14 h-14 text-rosky-green" strokeWidth={2.2} />
          <h2 className="font-display font-extrabold text-[18px] text-navy mt-2">Congratulations!</h2>
          <p className="text-[12px] text-navy/80 mt-1 leading-snug">
            Your {product.name} has been approved. Funds will be disbursed within 6 hours of document completion.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 mt-4 shadow-card border border-soft">
          <div className="font-display font-bold text-[13px] text-navy mb-2">Approved Loan Details</div>
          <Row k="Product" v={product.name} />
          <Row k="Approved Amount" v={`KES ${amount.toLocaleString()}`} green bold />
          <Row k="Repayment Period" v={`${period} months`} />
          <Row k="Monthly Repayment" v={`KES ${monthly.toLocaleString()}`} />
          <Row k="Total Repayable" v={`KES ${total.toLocaleString()}`} />
          <Row k="Disbursement" v="Bank Account / M-Pesa" />
        </div>

        <div className="bg-green-soft rounded-2xl p-4 mt-4 border border-[#C6EBC8]">
          <div className="font-display font-bold text-[13px] text-navy mb-2">Next Steps</div>
          <ol className="space-y-1.5 text-[11.5px] text-navy list-decimal pl-4">
            <li>Visit any Rosky Credit office with original documents.</li>
            <li>Vehicle inspection & valuation by an approved valuer.</li>
            <li>Sign loan agreement & NTSA logbook transfer processing.</li>
            <li>Funds disbursed within 6 hours of document completion.</li>
          </ol>
        </div>

        <button
          onClick={() => onNavigate("withdraw")}
          className="mt-5 w-full text-white font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.97] transition"
          style={{ background: "var(--gradient-full)" }}
        >
          Proceed to Withdraw Funds
        </button>
        <button
          onClick={() => onNavigate("home")}
          className="mt-2 w-full font-bold text-[13.5px] py-3 rounded-2xl border-[1.5px] border-navy text-navy active:scale-[0.97] transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

const Row = ({ k, v, bold, green }: { k: string; v: string; bold?: boolean; green?: boolean }) => (
  <div className="flex justify-between py-1 text-[12px]">
    <span className="text-mute">{k}</span>
    <span className={`${bold ? "font-display font-extrabold" : "font-semibold"} ${green ? "text-rosky-green" : "text-navy"}`}>{v}</span>
  </div>
);
