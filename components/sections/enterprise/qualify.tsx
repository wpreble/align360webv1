import { CtaButton } from "@/components/site/cta-button"
import { Section } from "@/components/site/primitives"

const signs = [
  {
    lead: "Strategy keeps degrading on the way down.",
    body: "The board says one thing; by the time it reaches an employee's task list, the intent is gone.",
  },
  {
    lead: "You've become the bottleneck.",
    body: "Decisions escalate upward that shouldn't. Your team asks questions whose answers already exist somewhere.",
  },
  {
    lead: "You've bought the tools and still ask “are we on track?”",
    body: "Slack, Jira, dashboards, OKRs. The problem was never missing data. It's missing synthesis.",
  },
  {
    lead: "You're spending on AI with no way to show the ROI.",
    body: "Tool spend without transformation, and no governance over where sensitive data actually goes.",
  },
  {
    lead: "Your best people are quietly leaving before you know it.",
    body: "The signals exist long before the exit interview. You just don't have a system that surfaces them.",
  },
  {
    lead: "Critical knowledge has no successor.",
    body: "If your top three people left tomorrow, the organization would lose things it doesn't know it's relying on.",
  },
]

export function Qualify() {
  return (
    <Section tone="white" width="md">
      <div className="eyebrow eyebrow-center mb-3.5">This is built for you if</div>
      <h2 className="h2-serif mb-14 text-center text-obsidian">
        You recognize your own <em className="text-wine">organization</em> below.
      </h2>

      <ul className="flex flex-col gap-px border border-black/[.08] bg-black/[.08]">
        {signs.map((sign) => (
          <li key={sign.lead} className="flex items-start gap-5 bg-white px-7 py-6">
            <span aria-hidden className="flex-shrink-0 font-serif text-xl leading-[1.4] text-gold">
              ✓
            </span>
            <p className="text-sm font-light leading-[1.6] text-ink-body">
              <strong className="font-medium text-obsidian">{sign.lead}</strong> {sign.body}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center">
        <CtaButton href="#pilot">See how a pilot works →</CtaButton>
      </div>
    </Section>
  )
}
