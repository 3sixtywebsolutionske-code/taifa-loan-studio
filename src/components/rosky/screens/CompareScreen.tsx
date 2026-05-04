import { ScreenHeader } from "../ScreenHeader";
import type { Screen } from "@/lib/rosky-types";

const rows = [
  { lender: "Rosky Credit ✦", max: "60% LTV", rate: "3.5%", product: "Auto + 3P", us: true },
  { lender: "Mwananchi Credit", max: "KES 25M", rate: "3.1–5%", product: "Auto" },
  { lender: "Ngao Credit", max: "KES 4M", rate: "Varies", product: "Auto" },
  { lender: "Platinum Credit", max: "KES 2.5M", rate: "4%", product: "Auto" },
  { lender: "Elevate Credit", max: "Varies", rate: "Varies", product: "Auto" },
  { lender: "Progressive Credit", max: "KES 1M+", rate: "Varies", product: "Auto" },
];

const advantages = [
  "🚙 Third-Party Logbook Loans — unique product accepting third-party insurance cover.",
  "🛡️ Insurance Premium Financing (IPF) — spread your insurance costs into manageable payments.",
  "⚡ Same-day disbursement — funds within 6 hours of document completion.",
  "🌍 Nationwide branches — Nairobi, Kakamega, Bungoma, Kisumu, Migori, Homabay.",
  "📞 5,000+ satisfied clients — trusted Kenyan lender with multi-product offering.",
];

export const CompareScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="animate-fade-in pb-28">
    <ScreenHeader title="Market Comparison" onBack={() => onNavigate("home")} />
    <div className="px-4 pt-4">
      <p className="text-[12px] text-mute leading-snug">Logbook loan providers in Kenya — 2026 data.</p>

      <div className="bg-white rounded-2xl mt-3 shadow-card border border-soft overflow-hidden">
        <div className="grid grid-cols-[1.5fr_1fr_0.8fr_0.9fr] bg-navy text-white text-[10.5px] font-bold px-3 py-2">
          <span>Lender</span><span>Max Loan</span><span>Rate/mo</span><span>Product</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.lender}
            className={`grid grid-cols-[1.5fr_1fr_0.8fr_0.9fr] px-3 py-2.5 text-[10.5px] ${
              r.us ? "bg-green-soft" : i % 2 ? "bg-[#F4F6F9]" : "bg-white"
            }`}
          >
            <span className={`font-semibold ${r.us ? "text-rosky-green" : "text-navy"}`}>{r.lender}</span>
            <span className="text-navy">{r.max}</span>
            <span className="text-navy">{r.rate}</span>
            <span className="text-navy">{r.product}</span>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-mute mt-2 leading-snug">
        3P = Third-Party logbook accepted · US = Unique Selling Point · LTV = Loan to Value
      </p>

      <div className="bg-white rounded-2xl mt-4 p-4 shadow-card border border-soft">
        <div className="font-display font-bold text-[13px] text-navy mb-2">Why Rosky Credit?</div>
        <ul className="space-y-2">
          {advantages.map((a) => (
            <li key={a} className="text-[11.5px] text-navy leading-snug">{a}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => onNavigate("products")}
        className="mt-5 w-full text-white font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.97] transition"
        style={{ background: "var(--gradient-full)" }}
      >
        Apply Now ↗
      </button>
    </div>
  </div>
);
