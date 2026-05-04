export const Logo = ({ light = false, showSub = true }: { light?: boolean; showSub?: boolean }) => (
  <div className="flex items-center gap-2">
    <div
      className="rounded-xl flex items-center justify-center font-display font-extrabold text-white text-[13px]"
      style={{ width: 36, height: 36, background: "var(--gradient-full)" }}
    >
      RC
    </div>
    <div className="leading-tight">
      <div className={`font-display font-extrabold text-[15px] ${light ? "text-white" : "text-navy"}`}>Rosky Credit</div>
      {showSub && <div className={`text-[9px] -mt-0.5 ${light ? "text-white/70" : "text-mute"}`}>roskycredit.com</div>}
    </div>
  </div>
);
