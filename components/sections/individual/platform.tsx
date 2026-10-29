import { CheckItem, Section, StatusTag } from "@/components/site/primitives"
import { CtaButton } from "@/components/site/cta-button"

const designSuite = [
  { name: "Wiring for Impact™", note: "How you're built to contribute" },
  { name: "Orientation for Impact™", note: "How you see, decide, and prioritize" },
  { name: "Rejection Gift Finder™", note: "How setbacks become strengths" },
  { name: "Impact Readiness™", note: "Your Conviction Score" },
  { name: "Value Spectrum™", note: "Your Value Score" },
  { name: "AI-Era Readiness™", note: "Where your wiring sits in the AI era" },
]

const careerNavigator = [
  "Career Alignment Assessment",
  "Resume Analyzer and Builder",
  "Job Opportunity Finder",
  "Skills Gap Analyzer",
  "Job Market Insights",
  "Interview Preparation",
  "Salary Negotiation Calculator",
  "LinkedIn Optimization",
]

const lifeSystems = [
  "Relational alignment: at work, at home, in community",
  "Financial stewardship: clarity and organization, not investment advice",
  "Built on your living model, so nothing starts from scratch",
]

const addOns = [
  {
    name: "627Figures™",
    body: "Leadership, value creation and monetization. Turn what you're built for into leverage.",
  },
  {
    name: "LegacyLab™",
    body: "Succession, legacy and wisdom transfer, for what outlasts you.",
  },
]

export function Platform() {
  return (
    <Section id="platform" tone="stone">
      <div className="mb-14 max-w-[600px]">
        <div className="eyebrow mb-3.5">What's included</div>
        <h2 className="h2-serif text-obsidian">
          Identity Profile. Life Systems.
          <br />
          <em className="text-wine">One infrastructure.</em>
        </h2>
        <p className="mt-4 text-sm font-light leading-[1.8] text-ink-muted">
          Both run on the same Align AI, the same governance framework and the same living model. You
          optimize first, then organize.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        {/* Tier 1 */}
        <div className="relative border border-wine/10 bg-white px-8 py-10 lg:px-10">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-wine to-[#521F58]" aria-hidden />
          <div className="mb-5 flex items-center justify-between gap-3">
            <StatusTag className="text-wine">Tier 1 · Optimize</StatusTag>
            <StatusTag className="text-ink-muted">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#27AE60]" /> Live now
            </StatusTag>
          </div>
          <h3 className="mb-2 font-serif text-[28px] font-medium leading-[1.15] text-obsidian">Identity Profile</h3>
          <p className="mb-8 text-[13px] font-light leading-[1.7] text-ink-muted">
            The identity-first foundation. Everything reads from your living model, and Align AI loads it
            before every conversation. Context-aware, not generic.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-1 font-serif text-lg font-medium text-obsidian">DesignSuite™</h4>
              <p className="mb-4 text-xs font-light text-ink-muted">Understand your wiring</p>
              <ul className="flex flex-col gap-3">
                {designSuite.map((tool) => (
                  <li key={tool.name} className="border-l-2 border-wine/20 pl-3.5">
                    <div className="text-[13px] font-medium text-obsidian">{tool.name}</div>
                    <div className="text-xs font-light text-ink-muted">{tool.note}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-1 font-serif text-lg font-medium text-obsidian">Career Navigator</h4>
              <p className="mb-4 text-xs font-light text-ink-muted">Align your work, from direction to the offer</p>
              <ul className="flex flex-col gap-2.5">
                {careerNavigator.map((tool) => (
                  <CheckItem key={tool}>{tool}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="relative flex flex-col border border-gold/20 bg-obsidian px-8 py-10 lg:px-10">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#0D6B6B] to-[#4EC9C8]" aria-hidden />
          <div className="mb-5 flex items-center justify-between gap-3">
            <StatusTag className="text-gold">Tier 2 · Organize</StatusTag>
            <StatusTag className="text-white/50">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#27AE60]" /> Live now
            </StatusTag>
          </div>
          <h3 className="mb-2 font-serif text-[28px] font-medium leading-[1.15] text-white">Life Systems</h3>
          <p className="mb-2 font-serif text-lg text-white/80">Integrate360™: where clarity becomes a life.</p>
          <p className="mb-6 text-[13px] font-light leading-[1.7] text-white/50">
            Once you know who you are and where you're headed, Life Systems is everything built around
            that: a life that holds together instead of competing with itself.
          </p>
          <ul className="mb-6 flex flex-grow flex-col gap-3.5">
            {lifeSystems.map((item) => (
              <CheckItem key={item} dark arrow>
                {item}
              </CheckItem>
            ))}
          </ul>
          <p className="border-t border-white/10 pt-5 text-[11px] leading-[1.7] tracking-[.03em] text-white/35">
            Align AI can suggest Life Systems when it fits. You decide, always.
          </p>
        </div>
      </div>

      {/* Add-ons */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {addOns.map((addOn) => (
          <div
            key={addOn.name}
            className="flex flex-col gap-4 border border-wine/10 bg-white px-8 py-7 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <StatusTag className="mb-2 text-wine">Add-on · Live now</StatusTag>
              <h3 className="mb-1.5 font-serif text-[22px] font-medium text-obsidian">{addOn.name}</h3>
              <p className="max-w-[360px] text-[13px] font-light leading-[1.6] text-ink-muted">{addOn.body}</p>
            </div>
            <CtaButton intent="individual" variant="outline" className="flex-shrink-0 !px-6 !py-3.5">
              Ask us
            </CtaButton>
          </div>
        ))}
      </div>
    </Section>
  )
}
