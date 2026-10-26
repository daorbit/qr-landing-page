"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { featureLines, formatInr, type Plan } from "@/lib/plans";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "../ui/button-link";
import { Reveal } from "../motion/reveal";

type Cycle = "monthly" | "yearly";

export function PricingCards({ plans }: { plans: Plan[] }) {
  const [cycle, setCycle] = useState<Cycle>("yearly");
  const paid = plans.filter((p) => p.monthlyPrice > 0 && p.yearlyPrice > 0);
  const saving = paid.length ? Math.max(...paid.map((p) => Math.round((1 - p.yearlyPrice / (p.monthlyPrice * 12)) * 100))) : 0;

  return (
    <>
      <div className="mt-12 flex">
        <div role="radiogroup" aria-label="Billing cycle" className="inline-flex rounded-full border border-line-strong p-1">
          {(["monthly", "yearly"] as const).map((value) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={cycle === value}
              onClick={() => setCycle(value)}
              className={cn("rounded-full px-5 py-1.5 text-[13.5px] font-medium capitalize transition-colors", cycle === value ? "bg-fg text-base" : "text-fg-2 hover:text-fg")}
            >
              {value}
              {value === "yearly" && saving > 0 && <span className={cn("ml-1.5 text-[12px]", cycle === value ? "opacity-60" : "text-muted")}>−{saving}%</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan, i) => {
          const featured = plan.key === "pro";
          const enterprise = plan.key === "enterprise";
          const perMonth = cycle === "yearly" ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice;
          return (
            <Reveal key={plan.key} delay={i * 70} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col rounded-[20px] border p-7",
                  featured ? "border-brand bg-panel ring-1 ring-brand" : "border-line bg-panel"
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[17px] font-medium tracking-[-0.02em] text-fg">{plan.name}</h3>
                  {featured && <span className="rounded-full bg-brand px-2.5 py-1 text-[11px] font-medium text-white">Most popular</span>}
                </div>
                <p className="mt-2 min-h-[40px] text-[13.5px] leading-relaxed text-muted">{plan.tagline}</p>
                <p className="mt-7 flex items-baseline gap-1.5 text-fg">
                  <span className="text-[42px] font-medium leading-none tracking-[-0.045em]">{enterprise ? "Custom" : formatInr(perMonth)}</span>
                  {!enterprise && <span className="text-[13.5px] text-muted">/ month</span>}
                </p>
                <p className="mt-2 min-h-[18px] text-[12.5px] text-muted">
                  {!enterprise && plan.monthlyPrice > 0 && cycle === "yearly" ? `${formatInr(plan.yearlyPrice)} billed yearly` : ""}
                </p>
                <ButtonLink href={enterprise ? "#contact" : site.signUpUrl} variant={featured ? "primary" : "secondary"} className="mt-7 w-full">
                  {enterprise ? "Talk to us" : plan.monthlyPrice === 0 ? "Start free" : `Get ${plan.name}`}
                </ButtonLink>
                <ul className="mt-7 space-y-3 border-t border-line pt-6">
                  {featureLines(plan.features).map((line) => (
                    <li key={line} className="flex items-start gap-2.5 text-[13.5px] text-fg-2">
                      <Check size={15} strokeWidth={2.25} className={cn("mt-0.5 shrink-0", featured ? "text-brand" : "text-fg")} />
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
