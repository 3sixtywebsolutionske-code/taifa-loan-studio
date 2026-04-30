import { Home, Wallet, History, User } from "lucide-react";
import type { Screen } from "@/lib/taifa-types";

const items = [
  { id: "home" as Screen, label: "Home", Icon: Home },
  { id: "apply" as Screen, label: "Loans", Icon: Wallet },
  { id: "history" as Screen, label: "History", Icon: History },
  { id: "profile" as Screen, label: "Profile", Icon: User },
];

export const BottomNav = ({
  active,
  onNavigate,
}: {
  active: Screen;
  onNavigate: (s: Screen) => void;
}) => (
  <nav className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-border">
    <div className="flex items-center justify-around px-2 py-2 pb-3">
      {items.map(({ id, label, Icon }) => {
        const isActive = active === id || (id === "apply" && active === "apply");
        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all active:scale-95 ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="w-5 h-5" strokeWidth={isActive ? 2.4 : 1.8} />
            <span className="text-[10px] font-semibold">{label}</span>
          </button>
        );
      })}
    </div>
  </nav>
);
