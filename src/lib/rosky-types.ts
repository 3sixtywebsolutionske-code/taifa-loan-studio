export type Screen =
  | "home"
  | "products"
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

export type ProductId = "auto" | "third-party" | "ipf" | "civil";

export type Product = {
  id: ProductId;
  emoji: string;
  name: string;
  short: string;
  tagline: string;
  eligibility: string[];
  periods: number[]; // months
};

export const PRODUCTS: Record<ProductId, Product> = {
  auto: {
    id: "auto",
    emoji: "🚗",
    name: "Auto Logbook Loan",
    short: "Up to 60% car value",
    tagline: "Use your car logbook as security. Keep driving.",
    periods: [6, 12, 24, 36],
    eligibility: [
      "Must be the registered owner (logbook in your name at NTSA)",
      "Vehicle must have valid comprehensive insurance cover",
      "Vehicle must be free of existing finance or encumbrances",
      "Vehicle age: typically under 10 years old",
      "Required docs: National ID, KRA PIN, 6-month certified bank statements",
      "Vehicle valuation by Rosky-approved valuer required",
    ],
  },
  "third-party": {
    id: "third-party",
    emoji: "🚙",
    name: "Third-Party Logbook Loan",
    short: "Third-party cover OK",
    tagline: "No comprehensive insurance needed.",
    periods: [6, 12, 24, 36],
    eligibility: [
      "Own a vehicle with at least third-party insurance cover",
      "Vehicle logbook must be in applicant's name at NTSA",
      "Comprehensive insurance is NOT required — unique product",
      "Required docs: National ID, KRA PIN, proof of income",
      "Vehicle must be free of all existing finance obligations",
      "6-month bank statements or M-Pesa statements",
    ],
  },
  ipf: {
    id: "ipf",
    emoji: "🛡️",
    name: "Insurance Premium Financing (IPF)",
    short: "Drive Now, Pay Later",
    tagline: "Spread your insurance into installments.",
    periods: [3, 6, 10],
    eligibility: [
      "Must have a valid insurance policy from an approved Kenyan underwriter",
      "Minimum 30% deposit of total insurance premium payable upfront",
      "Policy must be a new policy or a renewal — not mid-term",
      "Required docs: National ID and KRA PIN certificate",
      "Repay the financed balance in monthly installments (3–10 months)",
      "No vehicle ownership or valuation required",
    ],
  },
  civil: {
    id: "civil",
    emoji: "🏛️",
    name: "Civil Servant Loan",
    short: "Up to 120 months",
    tagline: "Long-tenor loans for government employees.",
    periods: [12, 24, 60, 120],
    eligibility: [
      "Must be a confirmed civil servant (national or county government)",
      "Salary must be processed through the government payroll system",
      "Minimum net salary of KES 15,000 per month",
      "Required: Employment confirmation letter from employer/HR",
      "Required docs: National ID, KRA PIN, 3-month payslips",
      "Repayment period of up to 120 months (10 years)",
    ],
  },
};
