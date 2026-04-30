import { ReactNode } from "react";

export const PhoneShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 gradient-dark">
    <div className="relative" style={{ width: 375 }}>
      {/* Phone frame */}
      <div
        className="relative bg-[#111] shadow-phone overflow-hidden"
        style={{ borderRadius: 44, padding: 10 }}
      >
        {/* Inner screen */}
        <div
          className="relative bg-background overflow-hidden"
          style={{ borderRadius: 36, height: 760 }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 bg-[#111] h-6 w-32 rounded-b-2xl" />
          {children}
        </div>
      </div>
    </div>
  </div>
);

export const StatusBar = ({ dark = false }: { dark?: boolean }) => (
  <div
    className={`flex items-center justify-between px-6 pt-2 pb-1 text-[11px] font-semibold ${
      dark ? "text-white" : "text-foreground"
    }`}
    style={{ paddingTop: 6 }}
  >
    <span>9:41</span>
    <span className="flex items-center gap-1">
      <span>●●●●</span>
      <span>📶</span>
      <span>🔋</span>
    </span>
  </div>
);
