import { CtaButton } from "@/components/site/cta-button"
import { Section } from "@/components/site/primitives"

const painPoints = ["Education", "Career", "AI disruption", "Money", "Relationships"]

export function IndividualProblem() {
  return (
    <Section tone="cherry" width="md" className="overflow-hidden text-center">
      <div className="glow-center pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="relative">
        <div className="eyebrow eyebrow-gold eyebrow-center mb-6">The problem</div>
        <h2 className="h2-serif mb-10 text-white">
          You're navigating life without a system that knows you.
        </h2>

        <ul className="mb-12 flex flex-wrap justify-center gap-3">
          {painPoints.map((point) => (
            <li
              key={point}
              className="border border-white/20 bg-white/10 px-5 py-2 text-xs font-medium tracking-[.06em] text-white/90"
            >
              {point}
            </li>
          ))}
        </ul>

        <div className="space-y-5">
          <p className="font-serif text-xl leading-relaxed text-white/90 md:text-2xl">
            You're making decisions, but you're <em className="text-gold-light">guessing</em>.{" "}
            <em className="text-gold-light">Comparing</em>. <em className="text-gold-light">Chasing</em>{" "}
            things that don't fit.
          </p>
          <p className="text-base font-light text-white/60">
            And every time life shifts, you start over from scratch.
          </p>
        </div>

        <div className="mt-12">
          <CtaButton intent="individual" variant="gold">
            Stop Guessing →
          </CtaButton>
        </div>
      </div>
    </Section>
  )
}
