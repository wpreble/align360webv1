import Image from "next/image"
import { CtaButton } from "@/components/site/cta-button"

const sample = [
  { label: "Conviction Score™", value: "86", sub: "Convicted", bar: 86 },
  { label: "Value Score™", value: "92", sub: "Authentic Rockstar", bar: 92 },
]

export function IndividualHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-obsidian px-7 pb-24 pt-36 text-center lg:px-10">
      <div className="glow-hero pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 max-w-[980px]">
        <div className="animate-fade-in-up animation-delay-100 mb-9 flex items-center justify-center gap-[18px]">
          <span className="h-px w-9 bg-gold/30" aria-hidden />
          <span className="text-[10px] font-medium uppercase tracking-[.32em] text-gold/65">
            Clarity · Alignment · Abundance
          </span>
          <span className="h-px w-9 bg-gold/30" aria-hidden />
        </div>

        <Image
          src="/images/align-mark.png"
          alt="Align"
          width={432}
          height={306}
          priority
          className="animate-fade-in-up animation-delay-100 mx-auto mb-10 h-auto w-[104px] opacity-90"
        />

        <h1 className="animate-fade-in-up animation-delay-200 font-serif [font-size:clamp(44px,7.5vw,96px)] font-medium leading-[.98] tracking-[-.02em] text-white">
          Put out the fires.
          <em className="mt-1 block text-gold-light">Then become one.</em>
        </h1>

        <p className="animate-fade-in-up animation-delay-300 mx-auto mt-8 max-w-[600px] text-[clamp(14px,1.8vw,18px)] font-light leading-[1.8] text-white/60">
          Align360 solves what's urgent, then builds the clarity to ignite everything else. One
          operating system that evolves with you: it finds the one pattern between you and your full
          impact, and routes every decision and Align AI recommendation through closing it.
        </p>

        <div className="animate-fade-in-up animation-delay-400 mt-[52px] flex flex-wrap items-center justify-center gap-3.5">
          <CtaButton intent="individual">Discover your wiring, free</CtaButton>
          <CtaButton href="#how" variant="ghost">
            See how it works
          </CtaButton>
        </div>

        <div className="mt-20">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[.24em] text-white/45">Sample result</p>
          <div className="inline-flex flex-wrap items-stretch justify-center gap-4 border border-white/[.06] bg-white/[.03] p-6">
            {sample.map((chip) => (
              <div key={chip.label} className="flex min-w-[120px] flex-col items-center px-5 py-4">
                <span className="mb-1.5 text-[9px] font-medium uppercase tracking-[.2em] text-white/50">
                  {chip.label}
                </span>
                <span className="mb-1 font-serif text-[32px] font-medium leading-none text-white">{chip.value}</span>
                <span className="h-px w-[60px] bg-white/10">
                  <span className="block h-full bg-gold" style={{ width: `${chip.bar}%` }} />
                </span>
                <span className="mt-1 text-[10px] tracking-[.04em] text-white/50">{chip.sub}</span>
              </div>
            ))}
            <span className="hidden w-px self-stretch bg-white/[.06] md:block" aria-hidden />
            <div className="flex min-w-[140px] flex-col items-center px-5 py-4">
              <span className="mb-1.5 text-[9px] font-medium uppercase tracking-[.2em] text-white/50">Primary gap</span>
              <span className="pt-1 font-serif text-lg font-medium leading-tight text-white">
                Release
                <br />
                Threshold
              </span>
              <span className="mt-1.5 text-[10px] tracking-[.04em] text-white/50">Capability domain · 3/10</span>
            </div>
            <div className="flex min-w-[140px] flex-col items-center px-5 py-4">
              <span className="mb-1.5 text-[9px] font-medium uppercase tracking-[.2em] text-white/50">The practice</span>
              <span className="pt-1 font-serif text-base font-medium leading-tight text-white">
                State it.
                <br />
                Then stop.
              </span>
              <span className="mt-1.5 text-[10px] tracking-[.04em] text-white/50">One sentence. Achievable today.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
