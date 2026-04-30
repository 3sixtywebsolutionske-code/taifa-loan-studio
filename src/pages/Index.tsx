import { useState } from "react";
import { PhoneShell, StatusBar } from "@/components/taifa/PhoneShell";
import { BottomNav } from "@/components/taifa/BottomNav";
import { HomeScreen } from "@/components/taifa/screens/HomeScreen";
import { ApplyScreen } from "@/components/taifa/screens/ApplyScreen";
import { CrbCheckScreen } from "@/components/taifa/screens/CrbCheckScreen";
import { ApprovedScreen } from "@/components/taifa/screens/ApprovedScreen";
import { DeniedScreen } from "@/components/taifa/screens/DeniedScreen";
import { PayScreen } from "@/components/taifa/screens/PayScreen";
import { WithdrawScreen } from "@/components/taifa/screens/WithdrawScreen";
import { CrbStatusScreen } from "@/components/taifa/screens/CrbStatusScreen";
import { HistoryScreen } from "@/components/taifa/screens/HistoryScreen";
import { CompareScreen } from "@/components/taifa/screens/CompareScreen";
import { ProfileScreen } from "@/components/taifa/screens/ProfileScreen";
import type { ApplyState, Screen } from "@/lib/taifa-types";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("home");
  const [apply, setApply] = useState<ApplyState>({
    amount: 10000,
    period: 30,
    purpose: "Business",
  });

  const navigate = (s: Screen) => {
    setScreen(s);
    // scroll content to top
    setTimeout(() => {
      const el = document.getElementById("taifa-scroll");
      if (el) el.scrollTop = 0;
    }, 10);
  };

  const showStatusDark = ["approved", "denied"].includes(screen);
  const navTab: Screen = ["home"].includes(screen)
    ? "home"
    : ["apply", "crb-check", "approved", "denied"].includes(screen)
    ? "apply"
    : screen === "history"
    ? "history"
    : screen === "profile"
    ? "profile"
    : "home";

  return (
    <main>
      <h1 className="sr-only">Taifa Loan App — instant M-Pesa loans powered by Taifa Mobile Kenya</h1>
      <PhoneShell>
        <StatusBar dark={showStatusDark} />
        <div
          id="taifa-scroll"
          className="absolute inset-0 top-7 bottom-[64px] overflow-y-auto scrollbar-hide"
        >
          {screen === "home" && <HomeScreen onNavigate={navigate} />}
          {screen === "apply" && <ApplyScreen onNavigate={navigate} state={apply} setState={setApply} />}
          {screen === "crb-check" && <CrbCheckScreen onNavigate={navigate} />}
          {screen === "approved" && <ApprovedScreen onNavigate={navigate} state={apply} />}
          {screen === "denied" && <DeniedScreen onNavigate={navigate} />}
          {screen === "pay" && <PayScreen onNavigate={navigate} />}
          {screen === "withdraw" && <WithdrawScreen onNavigate={navigate} />}
          {screen === "crb-status" && <CrbStatusScreen onNavigate={navigate} />}
          {screen === "history" && <HistoryScreen onNavigate={navigate} />}
          {screen === "compare" && <CompareScreen onNavigate={navigate} />}
          {screen === "profile" && <ProfileScreen onNavigate={navigate} />}
        </div>
        <BottomNav active={navTab} onNavigate={navigate} />
      </PhoneShell>
    </main>
  );
};

export default Index;
