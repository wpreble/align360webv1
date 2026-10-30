import { Check, X } from "lucide-react"
import { CtaButton } from "@/components/site/cta-button"
import { Section } from "@/components/site/primitives"

const comparisons = [
  {
    align360: "A system that evolves with you",
    other: "A static PDF you forget in a week",
  },
  {
    align360: "Solves urgent problems and builds long-term clarity",
    other: "One-time insight, no implementation",
  },
  {
    align360: "Ethically governed AI",
    other: "Engagement-optimized algorithms",
  },
  {
    align360: "Optimization → Organization progression",
    other: "Scattered tools, no pathway",
  },
]

export function IndividualComparison() {
  return (
    <Section tone="stone" width="md">
      <div className="mb-14 text-center">
        <div className="eyebrow eyebrow-center mb-3.5">Why this is different</div>
        <h2 className="h2-serif text-obsidian">
          This isn't another <em className="text-wine">personality test.</em>
        </h2>
      </div>

      <div className="border border-wine/[.08] bg-white">
        <div className="grid grid-cols-2 border-b border-wine/[.06] bg-wine/[.03]">
          <div className="border-r border-wine/[.06] px-5 py-4 text-[10px] font-semibold uppercase tracking-[.16em] text-wine">
            Align360
          </div>
          <div className="px-5 py-4 text-[10px] font-medium uppercase tracking-[.16em] text-wine/45">
            Personality tests
          </div>
        </div>
        {comparisons.map((row) => (
          <div key={row.align360} className="grid grid-cols-2 border-b border-wine/[.06] last:border-b-0">
            <div className="flex items-start gap-3 border-r border-wine/[.06] bg-wine/[.03] px-5 py-4">
              <Check aria-hidden className="mt-0.5 h-4 w-4 flex-shrink-0 text-wine" strokeWidth={2} />
              <span className="text-xs font-medium leading-[1.55] text-wine">{row.align360}</span>
            </div>
            <div className="flex items-start gap-3 px-5 py-4">
              <X aria-hidden className="mt-0.5 h-4 w-4 flex-shrink-0 text-cherry/25" strokeWidth={2} />
              <span className="text-xs font-light leading-[1.55] text-ink-muted">{row.other}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center font-serif text-xl leading-[1.6] text-obsidian">
        Personality tests tell you what you are.
        <br />
        <em className="text-wine">Align360 shows you what to do with it.</em>
      </p>

      <div className="mt-8 text-center">
        <CtaButton intent="individual">Experience the Difference →</CtaButton>
      </div>
    </Section>
  )
}
