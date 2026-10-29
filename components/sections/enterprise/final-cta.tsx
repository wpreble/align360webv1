import { CtaButton } from "@/components/site/cta-button"

export function EnterpriseFinalCta() {
  return (
    <section className="relative overflow-hidden bg-obsidian px-7 py-[100px] text-center lg:px-[72px] lg:py-[140px]">
      <div className="glow-center pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[680px]">
        <div className="mb-7 flex items-center justify-center gap-[18px]">
          <span className="text-[10px] font-medium uppercase tracking-[.3em] text-gold/55">
            Enterprise · Organizational Intelligence
          </span>
        </div>
        <h2 className="mb-4 font-serif [font-size:clamp(36px,6vw,72px)] font-medium leading-none text-white">
          Alignment intelligence.
          <br />
          <em className="text-gold-light">At organizational scale.</em>
        </h2>
        <p className="mb-12 text-[15px] font-light leading-[1.8] text-white/40">
          Your people are already making decisions that shape your organization.
          <br className="hidden md:block" /> Give them, and you, a system that makes those decisions land right.
        </p>
        <div className="mb-[18px] flex flex-wrap justify-center gap-4">
          <CtaButton intent="organization" variant="gold">
            See It In Action →
          </CtaButton>
          <CtaButton href="/individuals" variant="ghost">
            For Individuals →
          </CtaButton>
        </div>
        <p className="text-[10px] tracking-[.1em] text-white/25">
          Live walkthroughs on request · Every engagement scoped with you
        </p>
      </div>
    </section>
  )
}
