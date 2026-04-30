import { ChevronLeft } from "lucide-react";

export const ScreenHeader = ({
  title,
  onBack,
  variant = "light",
  emoji,
}: {
  title: string;
  onBack?: () => void;
  variant?: "light" | "dark" | "success" | "danger";
  emoji?: string;
}) => {
  const styles = {
    light: "bg-white text-foreground border-b border-border",
    dark: "bg-dark-brand text-white",
    success: "bg-primary text-primary-foreground",
    danger: "bg-danger text-white",
  }[variant];
  return (
    <header className={`px-4 pt-2 pb-3 flex items-center gap-2 ${styles}`}>
      {onBack && (
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 active:scale-90 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      <h1 className="font-display font-bold text-base flex-1">
        {title} {emoji}
      </h1>
    </header>
  );
};
