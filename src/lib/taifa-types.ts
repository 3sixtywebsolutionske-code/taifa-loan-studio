export type Screen =
  | "home"
  | "apply"
  | "crb-check"
  | "approved"
  | "denied"
  | "pay"
  | "withdraw"
  | "crb-status"
  | "history"
  | "compare"
  | "profile";

export type ApplyState = {
  amount: number;
  period: 7 | 14 | 30 | 60;
  purpose: "Business" | "School Fees" | "Medical" | "Emergency";
};
