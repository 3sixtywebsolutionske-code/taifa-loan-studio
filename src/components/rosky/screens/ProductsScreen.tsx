import { ScreenHeader } from "../ScreenHeader";
import { PRODUCTS, type ProductId, type Screen } from "@/lib/rosky-types";
import { Check } from "lucide-react";

const ids: ProductId[] = ["auto", "third-party", "ipf", "civil"];

export const ProductsScreen = ({
  onNavigate,
  onPick,
  selected,
}: {
  onNavigate: (s: Screen) => void;
  onPick: (p: ProductId) => void;
  selected: ProductId;
}) => (
  <div className="animate-fade-in pb-28">
    <ScreenHeader title="Choose Loan Product" onBack={() => onNavigate("home")} />
    <div className="px-4 pt-4">
      <p className="text-[12px] text-mute leading-snug">
        Select the loan product that fits your needs. Each has its own eligibility requirements.
      </p>

      <div className="grid grid-cols-2 gap-3 mt-3">
        {ids.map((id) => {
          const p = PRODUCTS[id];
          const isSel = selected === id;
          return (
            <button
              key={id}
              onClick={() => onPick(id)}
              className={`bg-white rounded-2xl p-3 text-left transition active:scale-95 overflow-hidden ${
                isSel ? "border-[1.5px] border-rosky-green shadow-tile" : "border-[1.5px] border-soft"
              }`}
              style={{ minHeight: 120 }}
            >
              <div className="text-2xl">{p.emoji}</div>
              <div className="font-display font-bold text-[12.5px] text-navy mt-1 leading-tight">{p.name}</div>
              <div className="text-[10.5px] text-rosky-green font-semibold mt-1">{p.short}</div>
            </button>
          );
        })}
      </div>

      <div className="my-5 h-[2px] rounded-full" style={{ background: "var(--gradient-h)" }} />

      <h3 className="font-display font-bold text-[13px] text-navy mb-2">Eligibility</h3>
      <div className="space-y-3">
        {ids.map((id) => {
          const p = PRODUCTS[id];
          return (
            <div key={id} className="bg-green-soft rounded-2xl p-4 border border-[#C6EBC8]">
              <div className="font-display font-bold text-[13px] text-navy mb-2">
                {p.emoji} {p.name} Eligibility
              </div>
              <ul className="space-y-1.5">
                {p.eligibility.map((e) => (
                  <li key={e} className="flex gap-2 text-[11.5px] text-navy leading-snug">
                    <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-rosky-green" strokeWidth={3} />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => onNavigate("apply")}
        className="mt-5 w-full text-white font-bold text-[14px] py-3.5 rounded-2xl shadow-tile active:scale-[0.97] transition"
        style={{ background: "var(--gradient-full)" }}
      >
        Continue with {PRODUCTS[selected].name}
      </button>
    </div>
  </div>
);
