import { ReactNode } from "react";

export const PhoneShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8" style={{ background: "linear-gradient(160deg,#0A1929,#012F59)" }}>
    <div className="relative" style={{ width: 375 }}>
      <div className="relative bg-[#0A0A0A] shadow-phone overflow-hidden" style={{ borderRadius: 48, padding: 10 }}>
        <div className="relative bg-background overflow-hidden" style={{ borderRadius: 36, height: 760 }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 bg-[#0A0A0A] h-6 w-32 rounded-b-2xl" />
          {children}
        </div>
      </div>
    </div>
  </div>
);

export const StatusBar = ({ dark = true }: { dark?: boolean }) => (
  <div
    className={`flex items-center justify-between px-6 text-[11px] font-semibold relative z-10 ${dark ? "text-white" : "text-foreground"}`}
    style={{ paddingTop: 6, paddingBottom: 4 }}
  >
    <span>9:41</span>
    <span className="flex items-center gap-1">
      <span>●●●●</span><span>📶</span><span>🔋</span>
    </span>
  </div>
);
