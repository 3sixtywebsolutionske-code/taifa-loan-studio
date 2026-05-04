import { useState } from "react";
import { PhoneShell, StatusBar } from "@/components/rosky/PhoneShell";
import { BottomNav } from "@/components/rosky/BottomNav";
import { HomeScreen } from "@/components/rosky/screens/HomeScreen";
import { ProductsScreen } from "@/components/rosky/screens/ProductsScreen";
import { ApplyScreen } from "@/components/rosky/screens/ApplyScreen";
import { CrbCheckScreen } from "@/components/rosky/screens/CrbCheckScreen";
import { ApprovedScreen } from "@/components/rosky/screens/ApprovedScreen";
import { DeniedScreen } from "@/components/rosky/screens/DeniedScreen";
import { PayScreen } from "@/components/rosky/screens/PayScreen";
import { WithdrawScreen } from "@/components/rosky/screens/WithdrawScreen";
import { CrbStatusScreen } from "@/components/rosky/screens/CrbStatusScreen";
import { HistoryScreen } from "@/components/rosky/screens/HistoryScreen";
import { CompareScreen } from "@/components/rosky/screens/CompareScreen";
import { ProfileScreen } from "@/components/rosky/screens/ProfileScreen";
import { PRODUCTS, type ProductId, type Screen } from "@/lib/rosky-types";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("home");
  const [productId, setProductId] = useState<ProductId>("auto");
  const [amount, setAmount] = useState(200000);
  const [period, setPeriod] = useState(12);

  const navigate = (s: Screen) => {
    setScreen(s);
    setTimeout(() => {
      const el = document.getElementById("rosky-scroll");
      if (el) el.scrollTop = 0;
    }, 10);
  };

  const pickProduct = (p: ProductId) => {
    setProductId(p);
    const periods = PRODUCTS[p].periods;
    if (!periods.includes(period)) setPeriod(periods[1] ?? periods[0]);
    navigate("apply");
  };

  const navTab: Screen = screen === "home"
    ? "home"
    : ["products", "apply", "crb-check", "approved", "denied"].includes(screen)
    ? "products"
    : screen === "history"
    ? "history"
    : screen === "profile"
    ? "profile"
    : "home";

  return (
    <main>
      <h1 className="sr-only">Rosky Credit — Logbook Loans, IPF and Civil Servant Loans in Kenya</h1>
      <PhoneShell>
        <StatusBar dark />
        <div id="rosky-scroll" className="absolute inset-0 top-0 bottom-[64px] overflow-y-auto scrollbar-hide">
          {screen === "home" && <HomeScreen onNavigate={navigate} onPickProduct={pickProduct} />}
          {screen === "products" && <ProductsScreen onNavigate={navigate} onPick={setProductId} selected={productId} />}
          {screen === "apply" && (
            <ApplyScreen
              onNavigate={navigate}
              productId={productId}
              amount={amount}
              setAmount={setAmount}
              period={period}
              setPeriod={setPeriod}
            />
          )}
          {screen === "crb-check" && <CrbCheckScreen onNavigate={navigate} />}
          {screen === "approved" && <ApprovedScreen onNavigate={navigate} productId={productId} amount={amount} period={period} />}
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
