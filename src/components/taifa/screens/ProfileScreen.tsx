import { ScreenHeader } from "../ScreenHeader";
import { Phone, Mail, MapPin, ShieldCheck, LogOut } from "lucide-react";
import type { Screen } from "@/lib/taifa-types";

export const ProfileScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="animate-fade-in pb-24">
    <ScreenHeader title="My Profile" onBack={() => onNavigate("home")} />
    <div className="px-4 pt-4">
      <div className="bg-white rounded-2xl p-5 shadow-card flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center font-display font-extrabold text-2xl text-primary-foreground">
          JW
        </div>
        <div className="font-display font-bold text-base mt-2">Jane Wanjiku</div>
        <div className="text-[11px] text-muted-foreground">Member since Nov 2025</div>
        <span className="mt-2 inline-flex items-center gap-1 bg-secondary text-primary text-[10px] font-bold px-2.5 py-1 rounded-full">
          <ShieldCheck className="w-3 h-3" /> Verified · CRB Clear
        </span>
      </div>

      <div className="bg-white rounded-2xl shadow-card mt-4 divide-y divide-border">
        {[
          { Icon: Phone, k: "Phone", v: "+254 712 345 678" },
          { Icon: Mail, k: "Email", v: "jane.w@taifamobile.co.ke" },
          { Icon: MapPin, k: "Location", v: "Nairobi, Kenya" },
        ].map(({ Icon, k, v }) => (
          <div key={k} className="flex items-center gap-3 px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center">
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="text-[10.5px] text-muted-foreground uppercase tracking-wider">{k}</div>
              <div className="text-[12.5px] font-semibold">{v}</div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => onNavigate("crb-status")}
        className="mt-4 w-full bg-primary text-primary-foreground font-bold text-[13px] py-3 rounded-2xl shadow-tile active:scale-[0.98] transition"
      >
        View CRB Status
      </button>
      <button className="mt-2 w-full border border-border text-danger font-semibold text-[13px] py-3 rounded-2xl active:scale-[0.98] transition flex items-center justify-center gap-2">
        <LogOut className="w-4 h-4" /> Sign out
      </button>
    </div>
  </div>
);
