import { ChevronLeft } from "lucide-react";

type Variant = "gradient" | "success" | "danger";

export const ScreenHeader = ({
  title,
  onBack,
  variant = "gradient",
  emoji,
}: {
  title: string;
  onBack?: () => void;
  variant?: Variant;
  emoji?: string;
}) => {
  const bg =
    variant === "gradient"
      ? { background: "var(--gradient-full)" }
      : variant === "success"
      ? { background: "#0D4F1A" }
      : { background: "#7A1A1A" };
  return (
    <header className="px-4 pt-2 pb-4 flex items-center gap-2 text-white" style={bg}>
      {onBack && (
        <button onClick={onBack} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 active:scale-90 transition" style={{ minHeight: 44, minWidth: 44 }}>
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      <h1 className="font-display font-bold text-[16px] flex-1">
        {title} {emoji}
      </h1>
    </header>
  );
};
