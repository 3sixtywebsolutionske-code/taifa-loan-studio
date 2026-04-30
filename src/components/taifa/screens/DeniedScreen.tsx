import { ScreenHeader } from "../ScreenHeader";
import { Ban } from "lucide-react";
import type { Screen } from "@/lib/taifa-types";

const steps = [
  "Contact the lender who listed you and settle the outstanding amount",
  "Request a clearance certificate from the lender",
  "Submit clearance to Metropol or TransUnion CRB",
  "Return to Taifa Loan and re-apply after 7 days",
];

export const DeniedScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="animate-fade-in pb-10">
    <ScreenHeader title="Application Declined" variant="danger" onBack={() => onNavigate("home")} />
    <div className="px-4 pt-4">
      <div className="bg-danger-soft border border-danger/30 rounded-2xl p-4 flex gap-3 animate-scale-in">
        <div className="w-9 h-9 rounded-full bg-danger/10 flex items-center justify-center shrink-0">
          <Ban className="w-5 h-5 text-danger" />
        </div>
        <div>
          <div className="font-display font-bold text-[14px] text-danger">CRB Listing Detected</div>
          <p className="text-[11.5px] text-foreground/80 mt-1">
            We found an active negative listing on your CRB report. To protect you from over-indebtedness, we cannot approve this loan today.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-card mt-4 p-4">
        <div className="font-display font-bold text-[13px] mb-3">How to clear your CRB</div>
        <ol className="space-y-3">
          {steps.map((s, i) => (
            <li key={i} className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-secondary text-primary font-bold text-[11px] flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <span className="text-[12px] text-foreground leading-snug">{s}</span>
            </li>
          ))}
        </ol>
      </div>

      <button
        onClick={() => onNavigate("home")}
        className="mt-5 w-full bg-primary text-primary-foreground font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.98] transition"
      >
        Back to Home
      </button>
    </div>
  </div>
);
