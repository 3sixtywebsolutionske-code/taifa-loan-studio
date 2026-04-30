import { Bell, Shield, TrendingUp, Wallet, CreditCard, Send, ShieldCheck, ListChecks, BarChart3, ArrowDownRight, ArrowUpRight, RefreshCcw } from "lucide-react";
import { Logo } from "../Logo";
import type { Screen } from "@/lib/taifa-types";

const tiles: { label: string; emoji: string; Icon: any; target: Screen }[] = [
  { label: "Apply Loan", emoji: "💰", Icon: Wallet, target: "apply" },
  { label: "Pay Loan", emoji: "💳", Icon: CreditCard, target: "pay" },
  { label: "Withdraw", emoji: "📲", Icon: Send, target: "withdraw" },
  { label: "CRB Status", emoji: "🛡️", Icon: ShieldCheck, target: "crb-status" },
  { label: "Loan History", emoji: "📋", Icon: ListChecks, target: "history" },
  { label: "Compare Apps", emoji: "📊", Icon: BarChart3, target: "compare" },
];

const tx = [
  { Icon: ArrowDownRight, label: "Loan Disbursed", sub: "M-Pesa · Today 09:12", amount: "+KES 10,000", positive: true },
  { Icon: ArrowUpRight, label: "Withdrawal", sub: "M-Pesa 0712••• · Today", amount: "−KES 5,000", positive: false },
  { Icon: RefreshCcw, label: "Loan Repayment", sub: "Paybill 888200 · 2 Apr", amount: "−KES 4,000", positive: false },
];

export const HomeScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="animate-fade-in pb-2">
    <div className="px-4 pt-2 pb-3 flex items-center justify-between bg-white">
      <Logo />
      <button className="relative w-10 h-10 rounded-full bg-secondary flex items-center justify-center active:scale-95 transition">
        <Bell className="w-4 h-4 text-foreground" />
        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-danger" />
      </button>
    </div>

    <div className="px-4 pt-2">
      <p className="text-[13px] text-muted-foreground">Habari, 👋</p>
      <h2 className="font-display font-bold text-lg text-foreground -mt-0.5">Jane Wanjiku</h2>

      <div className="mt-3 rounded-2xl gradient-dark text-white p-4 shadow-card animate-scale-in">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-white/70">Available loan limit</span>
          <span className="inline-flex items-center gap-1 bg-primary/90 text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-full">
            <Shield className="w-3 h-3" /> CRB Clear
          </span>
        </div>
        <div className="mt-1 font-display font-extrabold text-3xl">KES 25,000</div>
        <div className="mt-2 flex items-center gap-1 text-[11px] text-primary-glow">
          <TrendingUp className="w-3 h-3" /> +KES 2,500 monthly limit increase
        </div>
      </div>
    </div>

    <div className="px-4 mt-4">
      <div className="grid grid-cols-3 gap-3">
        {tiles.map(({ label, emoji, Icon, target }) => (
          <button
            key={label}
            onClick={() => onNavigate(target)}
            className="bg-white rounded-2xl p-3 flex flex-col items-center gap-1.5 shadow-card hover:-translate-y-0.5 hover:shadow-tile active:scale-95 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary">
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10.5px] font-semibold text-center leading-tight text-foreground">{label}</span>
            <span className="text-[10px] -mt-1">{emoji}</span>
          </button>
        ))}
      </div>
    </div>

    <div className="px-4 mt-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-display font-bold text-sm">Active Loan</h3>
        <button onClick={() => onNavigate("history")} className="text-[11px] text-primary font-semibold">View all</button>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-card">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] text-muted-foreground">Loan amount</div>
            <div className="font-display font-extrabold text-lg">KES 10,000</div>
          </div>
          <span className="bg-secondary text-primary text-[10px] font-bold px-2.5 py-1 rounded-full">ACTIVE</span>
        </div>
        <div className="mt-3">
          <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
            <span>40% repaid · KES 4,000</span>
            <span>Due 14 May</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full gradient-primary rounded-full transition-all" style={{ width: "40%" }} />
          </div>
        </div>
        <button
          onClick={() => onNavigate("pay")}
          className="mt-3 w-full bg-primary text-primary-foreground font-semibold text-[13px] py-2.5 rounded-xl active:scale-[0.98] transition"
        >
          Pay KES 6,000 outstanding
        </button>
      </div>
    </div>

    <div className="px-4 mt-4 mb-24">
      <h3 className="font-display font-bold text-sm mb-2">Recent Transactions</h3>
      <div className="bg-white rounded-2xl shadow-card divide-y divide-border">
        {tx.map(({ Icon, label, sub, amount, positive }) => (
          <div key={label} className="flex items-center gap-3 p-3">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center ${positive ? "bg-secondary text-primary" : "bg-muted text-foreground"}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12.5px] font-semibold">{label}</div>
              <div className="text-[10.5px] text-muted-foreground truncate">{sub}</div>
            </div>
            <div className={`text-[12.5px] font-bold ${positive ? "text-primary" : "text-foreground"}`}>{amount}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
