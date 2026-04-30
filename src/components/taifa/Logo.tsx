export const Logo = ({ size = 36 }: { size?: number }) => (
  <div className="flex items-center gap-2">
    <div
      className="rounded-full bg-secondary border-2 border-primary flex items-center justify-center font-display font-extrabold text-primary"
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      TL
    </div>
    <div className="leading-tight">
      <div className="font-display font-extrabold text-[15px] text-foreground">Taifa Loan</div>
      <div className="text-[9px] text-muted-foreground -mt-0.5">Powered by Taifa Mobile</div>
    </div>
  </div>
);
