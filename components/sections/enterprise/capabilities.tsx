import { PrototypeTag, Section } from "@/components/site/primitives"

const views = [
  {
    tag: "Workforce Intelligence",
    tagClass: "border-gold/15 bg-gold/[.08] text-gold",
    accent: "from-wine to-[#521F58]",
    title: "Team & Organizational Intelligence",
    body: "Deploy alignment intelligence across teams. See misalignment before it becomes attrition, match how people work to how roles are designed, and plan succession from real signals.",
    items: [
      "Team-level alignment patterns (5+ opt-in)",
      "Role-fit signals, shared with consent",
      "Succession planning intelligence",
      "Culture signal mapping",
      "Manager readiness signals",
    ],
  },
  {
    tag: "Coach Intelligence",
    tagClass: "border-[#4EC9C8]/15 bg-[#4EC9C8]/[.08] text-[#4EC9C8]",
    accent: "from-[#0D6B6B] to-[#4EC9C8]",
    title: "Coach & Advisor Portal",
    body: "Give internal coaches and advisors a portal informed by what their clients choose to share. Every session starts from signal, not gut feel, and every intervention is tracked.",
    items: [
      "Client alignment profiles, shared by the client",
      "Session history",
      "Outcome tracking by dimension",
      "Cross-client pattern signals",
      "Coach outcomes over time",
    ],
  },
  {
    tag: "Strategy Intelligence",
    tagClass: "border-[#2E6AC8]/15 bg-[#2E6AC8]/[.08] text-[#5B9FE8]",
    accent: "from-[#0F2744] to-[#2E6AC8]",
    title: "Executive & Leadership Intelligence",
    body: "Executive alignment is organizational alignment. StrategyOS turns what your leadership team already discusses into decisions, tasks and owners, and gives leaders a shared operating language.",
    items: [
      "Transcripts, emails and notes turned into decisions, tasks and owners",
      "Goal cascade from strategy to teams",
      "Quarterly Alignment Reviews",
      "Board-level reporting layer",
      "Works with your task system, or we build one as part of the engagement",
    ],
  },
]

const firstBuild = ["Work updates turned into decisions, tasks and owners", "Basic goals", "Value realization"]

export function Capabilities() {
  return (
    <Section id="platform" tone="obsidian">
      <div className="mb-10 max-w-[620px]">
        <div className="eyebrow eyebrow-gold mb-3.5">Platform capabilities</div>
        <h2 className="font-serif [font-size:clamp(34px,4.5vw,56px)] font-medium leading-[1.07] text-white">
          Not a tool. An <em className="text-gold-light">intelligence layer</em> for your workforce.
        </h2>
        <p className="mt-4 text-sm font-light leading-[1.8] text-white/60">
          Three views, each custom-built around how your firm operates. Every one is powered by what
          individuals choose to share, so leaders see patterns across teams and never an individual's
          answers.
        </p>
      </div>

      <div className="mb-10 flex flex-col gap-4 border border-gold/20 bg-gold/[.05] px-6 py-5 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex-shrink-0 text-[10px] font-medium uppercase tracking-[.22em] text-gold">
          What we build first
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] font-light text-white/70">
          {firstBuild.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <ul className="grid gap-px bg-white/[.05] lg:grid-cols-3">
        {views.map((view) => (
          <li
            key={view.title}
            className="relative overflow-hidden bg-obsidian px-8 py-12 transition-colors duration-300 hover:bg-white/[.025] lg:px-10"
          >
            <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${view.accent}`} aria-hidden />
            <div className="mb-7 flex items-start justify-between gap-3">
              <span
                className={`inline-block rounded-full border px-3.5 py-1.5 text-[9px] font-medium uppercase tracking-[.22em] ${view.tagClass}`}
              >
                {view.tag}
              </span>
              <PrototypeTag />
            </div>
            <h3 className="mb-3 font-serif text-[26px] font-medium leading-[1.15] text-white">{view.title}</h3>
            <p className="mb-6 text-[13px] font-light leading-[1.7] text-white/60">{view.body}</p>
            <ul className="flex flex-col gap-2">
              {view.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[11px] leading-[1.5] tracking-[.03em] text-white/60">
                  <span aria-hidden className="mt-[7px] h-[3px] w-[3px] flex-shrink-0 rounded-full bg-white/25" />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <p className="mt-6 max-w-[760px] text-xs font-light leading-[1.7] text-white/50">
        These views are shown as prototypes. They're the custom builds we do inside an engagement, and
        timelines are set once the scope is agreed.
      </p>
    </Section>
  )
}
