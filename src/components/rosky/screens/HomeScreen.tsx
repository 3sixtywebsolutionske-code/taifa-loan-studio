import { Bell, ShieldCheck, TrendingUp, Wallet, CreditCard, Send, ListChecks, BarChart3, ArrowDownRight, ArrowUpRight, RefreshCcw, Check } from "lucide-react";
import { Logo } from "../Logo";
import { PRODUCTS, type ProductId, type Screen } from "@/lib/rosky-types";

const productList: ProductId[] = ["auto", "third-party", "ipf"];

const tiles: { label: string; emoji: string; Icon: any; target: Screen }[] = [
  { label: "Apply for Loan", emoji: "💰", Icon: Wallet, target: "products" },
  { label: "Repay Loan", emoji: "💳", Icon: CreditCard, target: "pay" },
  { label: "Withdraw Funds", emoji: "📲", Icon: Send, target: "withdraw" },
  { label: "CRB Status", emoji: "🛡️", Icon: ShieldCheck, target: "crb-status" },
  { label: "Loan History", emoji: "📋", Icon: ListChecks, target: "history" },
  { label: "Compare Lenders", emoji: "📊", Icon: BarChart3, target: "compare" },
];

const tx = [
  { Icon: ArrowDownRight, label: "Loan Disbursed", sub: "Bank · Today 09:12", amount: "+KES 300,000", positive: true },
  { Icon: ArrowUpRight, label: "Repayment", sub: "Paybill 400100 · 1 May", amount: "−KES 35,000", positive: false },
  { Icon: RefreshCcw, label: "IPF Installment", sub: "M-Pesa · 28 Apr", amount: "−KES 8,000", positive: false },
];

export const HomeScreen = ({ onNavigate, onPickProduct }: { onNavigate: (s: Screen) => void; onPickProduct: (p: ProductId) => void }) => (
  <div className="animate-fade-in pb-2">
    {/* Hero gradient */}
    <div className="px-4 pt-3 pb-5 text-white" style={{ background: "var(--gradient-full)" }}>
      <div className="flex items-center justify-between">
        <Logo light />
        <button className="relative w-10 h-10 rounded-xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center active:scale-95 transition" style={{ minHeight: 44, minWidth: 44 }}>
          <Bell className="w-4 h-4 text-white" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rosky-green" />
        </button>
      </div>
      <p className="text-[12px] text-white/75 mt-3">Welcome back, 👋</p>
      <h2 className="font-display font-bold text-[18px] -mt-0.5">James Otieno</h2>

      <div className="mt-3 rounded-2xl p-4 border border-white/15" style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(8px)" }}>
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-white/75">Available Credit Limit</span>
          <span className="inline-flex items-center gap-1 bg-rosky-green text-white text-[10px] font-bold px-2 py-1 rounded-full">
            <Check className="w-3 h-3" /> Verified
          </span>
        </div>
        <div className="mt-1 font-display font-extrabold text-3xl">KES 850,000</div>
        <div className="mt-2 flex items-center gap-1 text-[11px]" style={{ color: "#A8F2AC" }}>
          <TrendingUp className="w-3 h-3" /> Eligible for Logbook Loan
        </div>
      </div>
    </div>

    {/* Loan products horizontal scroll */}
    <div className="pt-4">
      <div className="px-4 text-[10.5px] font-bold tracking-wider text-mute uppercase mb-2">Our Loan Products</div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 pb-1">
        {productList.map((id) => {
          const p = PRODUCTS[id];
          return (
            <button
              key={id}
              onClick={() => onPickProduct(id)}
              className="shrink-0 bg-white rounded-2xl shadow-card overflow-hidden text-left active:scale-95 transition border border-soft"
              style={{ width: 145 }}
            >
              <div className="h-[3px] gradient-h" />
              <div className="p-3">
                <div className="text-xl">{p.emoji}</div>
                <div className="font-display font-bold text-[12.5px] text-navy mt-1 leading-tight">{p.name}</div>
                <div className="text-[10px] text-rosky-green font-semibold mt-1">{p.short}</div>
                <div className="text-[10px] text-mute mt-1 leading-snug">{p.tagline}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>

    {/* Quick actions */}
    <div className="px-4 mt-4">
      <div className="grid grid-cols-3 gap-3">
        {tiles.map(({ label, emoji, Icon, target }) => (
          <button
            key={label}
            onClick={() => onNavigate(target)}
            className="bg-white rounded-[14px] p-3 flex flex-col items-center gap-1.5 shadow-card hover:-translate-y-0.5 hover:shadow-tile active:scale-95 transition-all border border-soft"
            style={{ minHeight: 44 }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: "var(--gradient-full)" }}>
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10.5px] font-semibold text-center leading-tight text-navy">{label}</span>
            <span className="text-[10px] -mt-1">{emoji}</span>
          </button>
        ))}
      </div>
    </div>

    {/* Active loan */}
    <div className="px-4 mt-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-display font-bold text-[14px] text-navy">Active Loan</h3>
        <button onClick={() => onNavigate("history")} className="text-[11px] text-rosky-green font-semibold">View all</button>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-card border border-soft">
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-block text-[9px] font-bold text-white px-2 py-0.5 rounded-full mb-1" style={{ background: "var(--gradient-h)" }}>Auto Logbook Loan</span>
            <div className="font-display font-extrabold text-[16px] text-navy">Auto Logbook — KES 300,000</div>
          </div>
          <span className="bg-green-soft text-rosky-green text-[10px] font-bold px-2.5 py-1 rounded-full">Active</span>
        </div>
        <div className="mt-3">
          <div className="flex justify-between text-[11px] text-mute mb-1">
            <span>35% repaid</span>
            <span>Due 15 Jun 2026</span>
          </div>
          <div className="h-2 bg-[#E6F9E7] rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "35%", background: "var(--gradient-h)" }} />
          </div>
          <div className="flex justify-between text-[10.5px] text-mute mt-2">
            <span>Repaid: <b className="text-navy">KES 105,000</b></span>
            <span>Remaining: <b className="text-navy">KES 195,000</b></span>
          </div>
        </div>
      </div>
    </div>

    {/* Recent transactions */}
    <div className="px-4 mt-4 mb-24">
      <h3 className="font-display font-bold text-[14px] text-navy mb-2">Recent Transactions</h3>
      <div className="bg-white rounded-2xl shadow-card divide-y divide-[#D6E0EC] border border-soft">
        {tx.map(({ Icon, label, sub, amount, positive }) => (
          <div key={label} className="flex items-center gap-3 p-3">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center ${positive ? "bg-green-soft text-rosky-green" : "bg-[#F4F6F9] text-navy"}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12.5px] font-semibold text-navy">{label}</div>
              <div className="text-[10.5px] text-mute truncate">{sub}</div>
            </div>
            <div className={`text-[12.5px] font-bold ${positive ? "text-rosky-green" : "text-navy"}`}>{amount}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
