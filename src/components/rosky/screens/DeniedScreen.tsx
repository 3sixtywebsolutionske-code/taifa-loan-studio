import { ScreenHeader } from "../ScreenHeader";
import type { Screen } from "@/lib/rosky-types";
import { Ban, Lightbulb } from "lucide-react";

export const DeniedScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="animate-fade-in pb-10">
    <ScreenHeader title="Application Declined" onBack={() => onNavigate("home")} variant="danger" />
    <div className="px-4 pt-4">
      <div className="rounded-2xl p-5 border flex flex-col items-center text-center" style={{ background: "#FDECEC", borderColor: "#F5C2C2" }}>
        <Ban className="w-12 h-12 text-[#7A1A1A]" strokeWidth={2.2} />
        <h2 className="font-display font-extrabold text-[17px] text-navy mt-2">Application Not Approved</h2>
        <p className="text-[12px] text-navy/80 mt-1 leading-snug">
          We could not approve your application at this time. This may be due to CRB listing, vehicle ownership issues, or insufficient documentation.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 mt-4 shadow-card border border-soft">
        <div className="font-display font-bold text-[13px] text-navy mb-2">Reasons & Next Steps</div>
        <ol className="space-y-2 text-[11.5px] text-navy list-decimal pl-4">
          <li><b>CRB Listing:</b> Settle outstanding debts, request clearance from Metropol or TransUnion.</li>
          <li><b>Vehicle Issues:</b> Ensure logbook is in your name and free of any finance at NTSA.</li>
          <li><b>Documents:</b> Ensure all required documents are complete and current.</li>
          <li><b>Re-apply:</b> Address the above and re-apply, or call +254 20 200 6587 for guidance.</li>
        </ol>
      </div>

      <div className="rounded-2xl p-4 mt-4 border" style={{ background: "#FFF8E1", borderColor: "#F5DD8A" }}>
        <div className="flex items-center gap-2 mb-1.5">
          <Lightbulb className="w-4 h-4 text-[#B45309]" />
          <div className="font-display font-bold text-[13px] text-navy">Consider a Different Product</div>
        </div>
        <p className="text-[11.5px] text-navy/85 leading-snug">
          If your vehicle only has third-party insurance, you may qualify for our Third-Party Logbook Loan or Insurance Premium Financing, which have different eligibility criteria.
        </p>
        <button
          onClick={() => onNavigate("products")}
          className="mt-3 w-full font-bold text-[12.5px] py-2.5 rounded-xl text-navy active:scale-[0.97] transition"
          style={{ background: "#F5C84B" }}
        >
          Explore Other Products
        </button>
      </div>

      <button
        onClick={() => onNavigate("home")}
        className="mt-5 w-full text-white font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.97] transition"
        style={{ background: "var(--gradient-full)" }}
      >
        Back to Home
      </button>
    </div>
  </div>
);
