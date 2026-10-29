import { CtaButton } from "@/components/site/cta-button"
import { Section } from "@/components/site/primitives"

const pillars = [
  { label: "Pillar 1", title: "Who you are" },
  { label: "Pillar 2", title: "What you do" },
]

export function IndividualSolution() {
  return (
    <Section tone="stone" width="md">
      <div className="eyebrow eyebrow-center mb-3.5">The answer</div>
      <h2 className="h2-serif mb-10 text-center text-obsidian">
        Align360 is one operating system
        <br />
        <em className="text-wine">that evolves with you.</em>
      </h2>

      <div className="border border-wine/[.08] bg-white px-7 py-10 text-center md:px-12">
        <p className="font-serif text-xl text-obsidian">It starts by optimizing the foundation:</p>

        <div className="my-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="flex items-center gap-4">
              {i === 1 && (
                <span aria-hidden className="hidden font-serif text-2xl text-wine/30 md:block">
                  +
                </span>
              )}
              <div className="min-w-[220px] border border-wine/[.12] bg-stone/60 px-6 py-6">
                <div className="mb-2 text-[9px] font-medium uppercase tracking-[.22em] text-wine">{pillar.label}</div>
                <div className="font-serif text-2xl font-medium text-obsidian">{pillar.title}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-base font-light leading-relaxed text-ink-soft">
          Then it helps you organize everything else:{" "}
          <span className="font-medium text-obsidian">finances, relationships, health, wealth, legacy</span>.
        </p>

        <div className="mt-8 border-t border-wine/10 pt-8">
          <p className="font-serif text-xl text-obsidian">But optimization comes first.</p>
          <p className="mt-2 text-sm font-light text-ink-muted">
            You can't organize a life you don't understand.
          </p>
        </div>

        <div className="mt-8">
          <CtaButton intent="individual">Start Your Optimization →</CtaButton>
        </div>
      </div>
    </Section>
  )
}
