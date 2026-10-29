import { CtaButton } from "@/components/site/cta-button"

const asks = [
  "Nominate a 25-person cohort within 14 days of kickoff",
  "Designate one internal champion with decision authority",
  "Complete a 30-minute kickoff session with our team",
  "Share one honest signal from the org at the 30-day mark",
  "Decide to expand, restructure, or exit with full data export",
]

export function Pilot() {
  return (
    <section
      id="pilot"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-br from-wine to-obsidian px-7 py-[100px] lg:px-[72px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,169,110,.06),transparent)]" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        <h2 className="mb-5 font-serif [font-size:clamp(32px,4.5vw,56px)] font-medium leading-[1.07] text-white">
          Start with a <em className="text-gold-light">funded, bounded pilot.</em>
        </h2>
        <p className="mb-[52px] text-base font-light leading-[1.75] text-white/60">
          Five things we ask of every enterprise pilot partner. That's it. No open-ended contract
          before you've seen what alignment intelligence does for your team.
        </p>

        <ol className="mb-12 grid gap-3.5 text-left md:grid-cols-2 lg:grid-cols-5">
          {asks.map((ask, i) => (
            <li key={ask} className="border border-gold/[.15] bg-white/5 px-[18px] py-[22px]">
              <div aria-hidden className="mb-2.5 font-serif text-[28px] leading-none text-gold/70">
                0{i + 1}
              </div>
              <p className="text-[11px] font-light leading-[1.55] text-white/65">{ask}</p>
            </li>
          ))}
        </ol>

        <CtaButton intent="organization" variant="gold">
          Request Your Pilot →
        </CtaButton>
        <p className="mt-4 text-[10px] tracking-[.12em] text-gold/80">
          Scope, budget and timeline are agreed together on the call. Nothing is committed before then.
        </p>
      </div>
    </section>
  )
}
