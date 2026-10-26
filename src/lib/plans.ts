import { site } from "./site";

export interface PlanFeatures {
  maxQRCodes: number;
  maxScansPerQR: number;
  maxMembers?: number;
  analytics: boolean;
  advancedAnalytics: boolean;
  whiteLabel: boolean;
  removeWatermark: boolean;
  passwordProtection: boolean;
  expirationDate: boolean;
  customScanLimit: boolean;
}

export interface Plan {
  key: "free" | "basic" | "pro" | "enterprise";
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PlanFeatures;
}

interface ApiPlan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PlanFeatures;
}

const FREE: Plan = {
  key: "free",
  name: "Free",
  tagline: "For trying QR Studio on a few codes.",
  monthlyPrice: 0,
  yearlyPrice: 0,
  features: {
    maxQRCodes: 5,
    maxScansPerQR: 100,
    maxMembers: 1,
    analytics: true,
    advancedAnalytics: false,
    whiteLabel: false,
    removeWatermark: false,
    passwordProtection: false,
    expirationDate: false,
    customScanLimit: false,
  },
};

const TAGLINES: Record<Exclude<Plan["key"], "free">, string> = {
  basic: "For small businesses printing their first campaigns.",
  pro: "For growing teams that live on their scan data.",
  enterprise: "For organisations that need it all, without limits.",
};

export const getPlans = async (): Promise<Plan[] | null> => {
  try {
    const res = await fetch(`${site.apiUrl}/payments/plans`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const body = (await res.json()) as { success?: boolean; plans?: Record<string, ApiPlan> };
    if (!body.success || !body.plans) return null;
    const paid = (["basic", "pro", "enterprise"] as const)
      .filter((key) => body.plans?.[key])
      .map((key) => ({ key, tagline: TAGLINES[key], ...body.plans![key] }));
    return [FREE, ...paid];
  } catch {
    return null;
  }
};

export const featureLines = (f: PlanFeatures): string[] =>
  [
    f.maxQRCodes === -1 ? "Unlimited QR codes" : `${f.maxQRCodes.toLocaleString()} QR codes`,
    `${f.maxScansPerQR === -1 ? "Unlimited" : f.maxScansPerQR.toLocaleString()} scans per code`,
    f.maxMembers === -1 ? "Unlimited seats" : `${f.maxMembers ?? 1} ${f.maxMembers === 1 || !f.maxMembers ? "seat" : "seats"}`,
    f.advancedAnalytics ? "Audience insights" : "Scan analytics",
    f.passwordProtection ? "Password protection" : "",
    f.expirationDate ? "Expiry dates" : "",
    f.customScanLimit ? "Custom scan limits" : "",
    f.removeWatermark ? "No watermark" : "",
    f.whiteLabel ? "White-label redirect pages" : "",
  ].filter(Boolean);

export const formatInr = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
