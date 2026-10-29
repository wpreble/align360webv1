import { CtaButton } from "@/components/site/cta-button"
import { Section } from "@/components/site/primitives"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "OPTIMIZED",
    tier: "Tier 1 · Identity Profile",
    description: "Everything you need to discover your wiring and align your career path",
    regularPrice: 297,
    founderPrice: 178,
    monthlyEquiv: "14.83",
    features: [
      "Full DesignSuite Access",
      "Career Alignment Assessment",
      "Resume Analyzer and Builder",
      "Job Opportunity Finder",
      "Skills Gap Analyzer",
      "Job Market Insights",
      "Interview Preparation",
      "Salary Negotiation Calculator",
      "LinkedIn Optimization",
    ],
    featured: false,
  },
  {
    name: "FULL STACK",
    tier: "Tier 1 + 2 · Identity Profile + Life Systems",
    description: "Complete transformation with advanced tools and priority support",
    regularPrice: 497,
    founderPrice: 298,
    monthlyEquiv: "24.83",
    features: [
      "Everything in OPTIMIZED",
      "Life Systems (Integrate360™) included",
      "Priority Support",
      "1-on-1 Strategy Session",
      "Custom Career Roadmap",
      "Lifetime Updates",
      "Early Access to New Tools",
      "Exclusive Community Access",
      "Quarterly Check-ins",
    ],
    featured: true,
  },
]

export function IndividualPricing() {
  return (
    <Section id="pricing" tone="stone" width="lg">
      <div className="mb-14 text-center">
        <div className="eyebrow eyebrow-center mb-3.5">Limited time · Founder Circle now open</div>
        <h2 className="h2-serif text-obsidian">Join the Founder Circle</h2>
        <p className="mx-auto mt-[18px] max-w-[560px] text-[15px] font-light leading-[1.8] text-ink-muted">
          Lock in 40% off annual pricing forever. Be among the first to transform your career with
          Align360.
        </p>
      </div>

      <div className="mx-auto grid max-w-[900px] gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex flex-col px-8 pb-9 pt-10",
              plan.featured ? "border-2 border-wine/25 bg-[#FAF8FC]" : "border border-wine/10 bg-white",
            )}
          >
            {plan.featured && (
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-wine px-[18px] py-[5px] text-[9px] font-medium uppercase tracking-[.2em] text-white">
                Most popular
              </span>
            )}
            <div className="mb-1 text-[10px] font-medium uppercase tracking-[.24em] text-wine/60">{plan.name}</div>
            <div className="mb-5 text-[9px] font-medium uppercase tracking-[.16em] text-ink-muted">{plan.tier}</div>
            <p className="mb-6 min-h-[44px] text-[13px] font-light leading-[1.65] text-ink-muted">{plan.description}</p>

            <div className="mb-6 border-b border-wine/[.08] pb-6">
              <div className="mb-1 flex items-center gap-2.5">
                <span className="text-sm text-ink-muted line-through">${plan.regularPrice}/yr</span>
                <span className="bg-wine/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[.14em] text-wine">
                  Save 40%
                </span>
              </div>
              <div className="font-serif text-[52px] font-medium leading-none text-obsidian">
                ${plan.founderPrice}
                <span className="ml-1 text-base font-normal text-wine/40">/year</span>
              </div>
              <p className="mt-2 text-[11px] text-ink-muted">Just ${plan.monthlyEquiv}/month billed annually</p>
            </div>

            <ul className="mb-9 flex flex-grow flex-col gap-2.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-xs font-light leading-[1.45] text-ink-soft">
                  <span aria-hidden className="flex-shrink-0 font-medium text-wine">
                    —
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <CtaButton intent="individual" variant={plan.featured ? "primary" : "outline"} className="w-full !px-6 !py-3.5">
              Join Founder Circle
            </CtaButton>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-[640px] border border-wine/[.08] bg-wine/[.03] px-6 py-5 text-center">
        <p className="mb-3 text-xs font-light leading-[1.7] text-ink-muted">
          Founder Circle pricing is locked in for life. Even as prices increase, you will always pay your
          founding rate. 627Figures™ and LegacyLab™ are available as add-ons.
        </p>
        <p className="text-xs font-light leading-[1.7] text-ink-muted">
          Your data stays yours: you own your account, we don't train on anyone's content, and your data
          is encrypted at rest and in transit. Cancel anytime.
        </p>
      </div>
    </Section>
  )
}
