import { Section } from "@/components/site/primitives"

const layers = [
  {
    title: "What it is",
    body: "The precise behavioral definition: not the question it asked, the pattern it measured. Named in a sentence you will remember.",
  },
  {
    title: "What it looks like in your life",
    body: "Concrete behavioral examples derived from your specific wiring, orientation, and current season. Not generic illustrations.",
  },
  {
    title: "Where it came from",
    body: "Named in terms of your wiring profile: which gift is producing the gap, and how. Often a strength misapplied, not a deficit.",
  },
  {
    title: "The practice",
    body: "One sentence. One behavioral instruction. Not a development plan. One action that addresses the mechanism, achievable in the next 24 hours.",
  },
]

const domains = [
  { label: "Identity", value: 92, color: "#9B59B6" },
  { label: "Capability", value: 75, color: "#C97A2A" },
  { label: "Rejection", value: 92, color: "#27AE60" },
  { label: "Direction", value: 78, color: "#2E6AC8" },
  { label: "Belonging", value: 92, color: "#7E5CDB" },
]

export function WhatYouReceive() {
  return (
    <Section tone="stone">
      <div className="eyebrow mb-3.5">What you receive</div>
      <h2 className="h2-serif text-obsidian">
        Not a score.
        <br />
        <em className="text-wine">A diagnosis.</em>
      </h2>
      <p className="mt-[18px] max-w-[560px] text-[15px] font-light leading-[1.8] text-ink-muted">
        Every result answers four questions a score alone cannot: the pattern, what it looks like in
        your life, where it came from in your wiring, and the one practice that closes it.
      </p>

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="relative overflow-hidden bg-obsidian p-8 lg:p-11">
          <div className="glow-panel-br pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <div className="mb-4 text-[9px] font-medium uppercase tracking-[.2em] text-gold">Sample result</div>
            <p className="mb-5 border-b border-white/[.07] pb-5 font-serif text-[17px] font-medium leading-[1.55] text-white">
              &ldquo;You are not held back by who you are. You are held back by one pattern at the moment
              of release.&rdquo;
            </p>
            <div className="mb-2 text-[9px] font-medium uppercase tracking-[.2em] text-gold">
              Primary gap · Capability · Release Threshold · 3/10
            </div>
            <p className="mb-1.5 text-sm font-medium leading-[1.4] text-white/75">
              You release the work. Then you apologize before anyone evaluates it.
            </p>
            <p className="mb-[18px] text-xs leading-[1.7] text-white/40">
              You send the proposal and add &ldquo;let me know if the pricing feels too high.&rdquo; The
              Realist gift, your diagnostic precision, is running one beat past its productive range at
              the moment of delivery. This is not insecurity. This is a gift misapplied.
            </p>
            <div className="mb-5 border-l-2 border-[#4EC87A]/30 bg-[#0F6E56]/[.07] px-4 py-3.5">
              <div className="mb-1 text-[9px] font-medium uppercase tracking-[.16em] text-[#64D296]/65">
                The practice · One sentence
              </div>
              <p className="text-[13px] font-medium leading-[1.5] text-white/75">
                State it. Then stop. No qualification. No softening. If they push back, address it then.
              </p>
            </div>
            <ul className="grid grid-cols-5 gap-1.5">
              {domains.map((domain) => (
                <li key={domain.label} className="border border-white/[.04] bg-white/[.04] px-1 py-2.5 text-center">
                  <div className="font-serif text-lg font-medium" style={{ color: domain.color }}>
                    {domain.value}
                  </div>
                  <div className="mt-0.5 text-[9px] tracking-[.04em] text-white/25">{domain.label}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          {layers.map((layer, i) => (
            <div
              key={layer.title}
              className="flex items-start gap-4 border border-cherry/[.07] bg-white p-5 transition-colors hover:border-cherry/[.18]"
            >
              <span className="mt-px flex h-6 w-6 flex-shrink-0 items-center justify-center bg-wine text-[10px] font-medium text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="mb-0.5 text-sm font-medium text-obsidian">{layer.title}</h3>
                <p className="text-xs font-light leading-[1.6] text-ink-muted">{layer.body}</p>
              </div>
            </div>
          ))}
          <div className="mt-1 border border-cherry/[.07] bg-cherry/[.02] p-5">
            <div className="mb-2 text-[10px] font-medium uppercase tracking-[.18em] text-cherry/40">Why this matters</div>
            <p className="font-serif text-[15px] leading-[1.6] text-obsidian">
              Most assessments produce types. Align produces mechanisms. The gap between knowing you are
              &ldquo;an Organizer&rdquo; and knowing your Realist gift runs past its productive range at
              the delivery moment is the difference between information and behavior change.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
