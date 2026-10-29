import { Section } from "@/components/site/primitives"

const steps = [
  {
    title: "Solve what's urgent",
    body: "Get instant, life-applicable solutions for the problem in front of you.",
    timeframe: "Minutes",
  },
  {
    title: "Discover your wiring",
    body: "Understand how you create value, make decisions, and find impact.",
    timeframe: "30 days",
  },
  {
    title: "Align for what's next",
    body: "Build a thriving life of peace and simplicity, from the inside out.",
    timeframe: "90 days",
  },
]

const domains = [
  { name: "Identity", value: 92, color: "#9B59B6" },
  { name: "Capability", value: 75, color: "#C97A2A" },
  { name: "Rejection", value: 92, color: "#27AE60" },
  { name: "Direction", value: 78, color: "#2E6AC8" },
  { name: "Belonging", value: 92, color: "#7E5CDB" },
]

export function IndividualHowItWorks() {
  return (
    <Section id="how" tone="white">
      <div className="eyebrow mb-3.5">How it works</div>
      <h2 className="h2-serif text-obsidian">
        Three steps.
        <br />
        <em className="text-wine">One clear path.</em>
      </h2>

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <ol className="flex flex-col">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-6 border-b border-cherry/[.07] py-7 last:border-b-0">
              <span className="min-w-6 pt-[3px] font-serif text-xs font-medium tracking-[.1em] text-cherry/25">
                0{i + 1}
              </span>
              <div>
                <h3 className="mb-1.5 font-serif text-xl font-medium text-obsidian">{step.title}</h3>
                <p className="mb-3 text-[13px] font-light leading-[1.7] text-ink-muted">{step.body}</p>
                <span className="inline-block border border-wine/20 px-3 py-1 text-[9px] font-medium uppercase tracking-[.18em] text-wine">
                  {step.timeframe}
                </span>
              </div>
            </li>
          ))}
          <li className="pt-7 text-[13px] font-light leading-[1.7] text-ink-muted">
            Every conversation, decision and life event updates your model, with no retakes. Five
            assessments build it; Align AI reads it before every conversation.
          </li>
        </ol>

        <div className="relative min-h-[460px] overflow-hidden bg-obsidian p-8 lg:p-11">
          <div className="glow-panel-tl pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <div className="mb-5 text-[9px] font-medium uppercase tracking-[.24em] text-gold">
              Integrated User Model · Sample
            </div>
            <div className="mb-0.5 font-serif text-[80px] font-normal leading-none text-gold-light">86</div>
            <div className="mb-8 text-[11px] font-medium uppercase tracking-[.2em] text-white/50">
              Convicted · Clarity layer
            </div>
            <ul className="flex flex-col gap-3.5">
              {domains.map((domain) => (
                <li key={domain.name} className="flex items-center gap-3.5">
                  <span className="min-w-[76px] text-[11px] tracking-[.04em] text-white/60">{domain.name}</span>
                  <span className="h-px flex-1 bg-white/[.08]">
                    <span
                      className="block h-full"
                      style={{ width: `${domain.value}%`, background: domain.color }}
                    />
                  </span>
                  <span className="min-w-[26px] text-right text-[13px] font-medium text-white/70">{domain.value}</span>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-3.5 border-t border-white/[.06] pt-3.5">
                <span className="min-w-[76px] text-[11px] tracking-[.04em] text-white/60">Value Score™</span>
                <span className="h-px flex-1 bg-white/[.08]">
                  <span className="block h-full bg-gold" style={{ width: "92%" }} />
                </span>
                <span className="min-w-[26px] text-right text-[13px] font-medium text-gold-light">92</span>
              </li>
            </ul>
            <div className="mt-9 border-l-2 border-gold/30 bg-white/[.04] p-[18px]">
              <div className="mb-1.5 text-[9px] font-medium uppercase tracking-[.18em] text-gold">
                Align AI · Peak day signal
              </div>
              <p className="text-xs italic leading-[1.7] text-white/60">
                &ldquo;You build what is right. The last step is releasing it without the apology. Today
                is a Peak day, full capacity. This is the window. State it. Then stop.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
