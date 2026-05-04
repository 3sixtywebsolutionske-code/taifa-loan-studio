import { ScreenHeader } from "../ScreenHeader";
import type { Screen } from "@/lib/rosky-types";
import { User, Phone, Mail, MapPin, ShieldCheck, LogOut, ChevronRight, Building2 } from "lucide-react";

const branches = [
  "Gateway Mall, 4th Floor, Mombasa Road, Nairobi (HQ)",
  "Transnational House, 3rd Floor, City Hall Way, Nairobi CBD",
  "ACK Church House Plaza, Kakamega",
  "Ebenezer Building, Bungoma",
  "Kisumu · Migori · Homabay",
];

export const ProfileScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="animate-fade-in pb-28">
    <div className="px-4 pt-4 pb-6 text-white" style={{ background: "var(--gradient-full)" }}>
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-white/15 border border-white/25 flex items-center justify-center">
          <User className="w-7 h-7 text-white" />
        </div>
        <div>
          <div className="font-display font-bold text-[16px]">James Otieno</div>
          <div className="text-[11.5px] text-white/80">ID 28912345 · KRA A012345678X</div>
          <span className="inline-flex items-center gap-1 bg-rosky-green text-white text-[10px] font-bold px-2 py-0.5 rounded-full mt-1">
            <ShieldCheck className="w-3 h-3" /> Verified
          </span>
        </div>
      </div>
    </div>

    <div className="px-4 -mt-4">
      <div className="bg-white rounded-2xl p-4 shadow-card border border-soft space-y-2.5">
        <Item Icon={Phone} label="Phone" value="+254 712 345 678" />
        <Item Icon={Mail} label="Email" value="james@example.co.ke" />
        <Item Icon={MapPin} label="Location" value="Nairobi, Kenya" />
      </div>

      <div className="bg-white rounded-2xl mt-4 shadow-card border border-soft divide-y divide-[#D6E0EC]">
        {[
          { label: "CRB & Credit Status", target: "crb-status" as Screen },
          { label: "Loan History", target: "history" as Screen },
          { label: "Compare Lenders", target: "compare" as Screen },
        ].map((it) => (
          <button key={it.label} onClick={() => onNavigate(it.target)} className="w-full flex items-center justify-between px-4 py-3 text-[12.5px] text-navy font-semibold active:bg-[#F4F6F9]">
            {it.label}
            <ChevronRight className="w-4 h-4 text-mute" />
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl mt-4 p-4 shadow-card border border-soft">
        <div className="flex items-center gap-2 mb-2">
          <Building2 className="w-4 h-4 text-navy" />
          <div className="font-display font-bold text-[13px] text-navy">Rosky Credit Branches</div>
        </div>
        <ul className="space-y-1.5 text-[11.5px] text-navy/85 leading-snug">
          {branches.map((b) => <li key={b}>• {b}</li>)}
        </ul>
        <div className="mt-3 text-[11px] text-mute">
          📞 +254 20 200 6587 · ✉️ info@roskycredit.com
        </div>
      </div>

      <button className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-2xl border-[1.5px] border-navy text-navy font-bold text-[13px] active:scale-[0.97] transition">
        <LogOut className="w-4 h-4" /> Sign out
      </button>
    </div>
  </div>
);

const Item = ({ Icon, label, value }: { Icon: any; label: string; value: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-green-soft flex items-center justify-center">
      <Icon className="w-4 h-4 text-rosky-green" />
    </div>
    <div className="flex-1">
      <div className="text-[10.5px] text-mute">{label}</div>
      <div className="text-[12.5px] font-semibold text-navy">{value}</div>
    </div>
  </div>
);
