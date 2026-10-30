import { CtaButton } from "@/components/site/cta-button"

const chip = "border px-2.5 py-1 text-[9px] font-medium uppercase tracking-[.1em]"
const redacted = "select-none blur-[3px] pointer-events-none"

/** Placeholder bars that stand in for locked content. Never real text. */
function Locked({ children, className }: { children: string; className?: string }) {
  return (
    <span aria-hidden className={`${redacted} ${className ?? ""}`}>
      {children}
    </span>
  )
}

export function Calibration() {
  return (
    <section
      id="calibration"
      className="relative scroll-mt-16 overflow-hidden bg-obsidian px-7 py-20 lg:px-[72px] lg:py-[120px]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(15,39,68,.5),transparent_60%),radial-gradient(ellipse_40%_35%_at_85%_100%,rgba(42,18,46,.4),transparent_60%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-[52px]">
          <div className="mb-4 flex items-center gap-3.5 text-[10px] font-medium uppercase tracking-[.28em] text-gold">
            Opportunity signals · two calibrations
            <span className="h-px flex-1 bg-white/[.06]" aria-hidden />
          </div>
          <h2 className="mb-3.5 font-serif [font-size:clamp(32px,5vw,62px)] font-normal italic leading-[1.02] tracking-[-.02em] text-white">
            The market has changed.
            <br />
            Your signals should too.
          </h2>
          <p className="max-w-[580px] text-[15px] font-light leading-[1.8] text-white/60">
            The first set of signals reflects the 2022 professional landscape, the world as it was when
            most assessment tools were designed. The second reflects where value is concentrating in an
            AI-accelerated world. Both are built from the same profile. The difference is the world they
            are speaking into.
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[.16em] text-white/45">
            Sample calibration · illustrative profile
          </p>
        </div>

        <div className="mb-[52px] grid gap-px bg-white/[.06] lg:grid-cols-2">
          {/* 2022 panel */}
          <div className="border-t-2 border-[#8B1A1A]/50 bg-[rgba(80,10,20,.35)] p-9">
            <div className="mb-5 inline-flex items-center gap-2 border border-[#8B1A1A]/30 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[.22em] text-[#DC6464]/60">
              <span aria-hidden>⚠</span> 2022 job market
            </div>
            <p className="mb-6 text-[13px] font-medium italic leading-[1.65] text-white/65">
              <em className="not-italic text-[#DC6464]/70">These signals are not wrong. They are incomplete.</em>{" "}
              They describe a stable professional landscape and don't account for what AI is doing to
              each category right now. Read them as a baseline.
            </p>

            <div className="mb-5 border-b border-white/5 pb-5">
              <h3 className="mb-2 font-serif text-lg font-normal text-white">Strategic advisory &amp; consulting</h3>
              <p className="mb-2.5 text-[11px] tracking-[.04em] text-white/50">
                Organizer wiring · Truth-Seeker · Paradigm Challenger gift
              </p>
              <div className="mb-2 flex flex-wrap gap-1.5">
                <span className={`${chip} border-white/[.12] text-white/60`}>Management Consultant</span>
                <span className={`${chip} border-white/[.12] text-white/60`}>Strategy Consultant</span>
                <span className={`${chip} border-white/[.06] text-white/20`}>
                  <Locked>████ ███████</Locked>
                </span>
              </div>
              <p className="mt-2 flex items-start gap-2 text-[10px] font-medium uppercase leading-[1.4] tracking-[.06em] text-[#DC6464]/50">
                <span aria-hidden>▲</span>
                <Locked>
                  AI risk: Generic consulting is being automated. Your result shows where repositioning
                  lives in your specific profile.
                </Locked>
              </p>
            </div>

            <div className="mb-5 border-b border-white/5 pb-5">
              <h3 className="mb-2 font-serif text-lg font-normal text-white">Leadership development &amp; coaching</h3>
              <p className="mb-2.5 text-[11px] tracking-[.04em] text-white/50">
                Realist supporting gift · Relational processing · Insight secondary
              </p>
              <div className="mb-2 flex flex-wrap gap-1.5">
                <span className={`${chip} border-white/[.12] text-white/60`}>Executive Coach</span>
                <span className={`${chip} border-white/[.06] text-white/20`}>
                  <Locked>████████ ███████</Locked>
                </span>
              </div>
            </div>

            <div className="opacity-55" aria-hidden>
              <h3 className="font-serif text-lg font-normal text-white blur-[4px]">████████ ██████████ ███</h3>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[.06em] text-[#DC6464]/40">
                ▲ Unlock your full result to see this signal
              </p>
            </div>
          </div>

          {/* AI-era panel */}
          <div className="border-t-2 border-[#5B9FE8]/40 bg-[rgba(15,39,68,.4)] p-9">
            <div className="mb-5 inline-flex items-center gap-2 border border-[#5B9FE8]/25 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[.22em] text-[#5B9FE8]/70">
              <span aria-hidden>◎</span> AI-era calibration
            </div>
            <p className="mb-6 text-[13px] font-light italic leading-[1.65] text-white/60">
              The same profile. A different world. These signals are recalibrated for what AI is doing to
              the value of each capability.{" "}
              <em className="font-medium not-italic text-[#5B9FE8]/70">
                For this profile, AI does not reduce the opportunity. It concentrates it.
              </em>
            </p>

            <div className="mb-5 border-b border-white/5 pb-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="mb-2.5 font-serif text-lg font-normal text-white">
                  Paradigm diagnosis for AI-era organizations
                </h3>
                <div className="flex-shrink-0 text-right">
                  <div className="font-serif text-[40px] font-light leading-none text-[#5B9FE8]/65">96</div>
                  <div className="text-[8px] uppercase tracking-[.14em] text-[#5B9FE8]/40">AI-era</div>
                </div>
              </div>
              <div className="mb-2.5 flex flex-wrap gap-1.5">
                <span className={`${chip} border-[#5B9FE8]/20 bg-[#5B9FE8]/[.06] text-[#5B9FE8]/55`}>
                  Chief Strategy Officer
                </span>
                <span className={`${chip} border-[#5B9FE8]/20 bg-[#5B9FE8]/[.06] text-[#5B9FE8]/55`}>
                  Transformation Lead
                </span>
                <span className={`${chip} border-[#5B9FE8]/20 bg-[#5B9FE8]/[.06] text-[#5B9FE8]/55 opacity-40`}>
                  <Locked>██ ██████████ ███████</Locked>
                </span>
              </div>
              <p className="text-xs italic leading-[1.65] text-white/50">
                <Locked>
                  AI gives every organization the same information and the same analysis. What it cannot
                  give them is the question that exposes when the whole framework is wrong.
                </Locked>
              </p>
            </div>

            <div className="opacity-50" aria-hidden>
              <h3 className="font-serif text-lg font-normal text-white blur-[4px]">
                ████-██████ █████ ███████ ██ ████████
              </h3>
              <div className="mt-2 flex gap-1.5">
                <span className={`${chip} border-[#5B9FE8]/20 text-[#5B9FE8]/55 blur-[3px]`}>████████ █████</span>
                <span className={`${chip} border-[#5B9FE8]/20 text-[#5B9FE8]/55 blur-[3px]`}>██████ ███████</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-8 border border-white/[.07] bg-white/[.03] px-7 py-7 lg:grid-cols-[1fr_auto] lg:px-9">
          <div>
            <div className="mb-2 text-[9px] font-medium uppercase tracking-[.22em] text-gold">Free: your Wiring result</div>
            <h3 className="mb-1.5 font-serif text-xl leading-[1.3] text-white">
              See your Wiring result free. Unlock your full calibration when you're ready.
            </h3>
            <p className="max-w-[540px] text-[13px] font-light leading-[1.65] text-white/60">
              The 2022 signals, the AI-era signals, the AI risk for each category, and why your specific
              wiring produces the market position it does are part of your full result. It is not a
              generic career guide. It is yours.
            </p>
          </div>
          <CtaButton intent="individual" className="whitespace-nowrap">
            Discover your wiring →
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
