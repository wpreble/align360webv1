import { PrototypeTag } from "@/components/site/primitives"
import { cn } from "@/lib/utils"

const stats = [
  { label: "Decisions captured", value: "14", note: "this week" },
  { label: "Tasks with owners", value: "41", note: "from notes and transcripts" },
  { label: "Open blockers", value: "3", note: "for the next review" },
]

const items = [
  {
    kind: "Decision",
    title: "Move onboarding in-house from Q1",
    meta: "3 tasks · owners assigned",
    tone: "text-gold-light border-gold/30",
  },
  {
    kind: "Decision",
    title: "Pause the regional expansion until Q3",
    meta: "2 tasks · Operations",
    tone: "text-gold-light border-gold/30",
  },
  {
    kind: "Blocker",
    title: "Hiring plan is waiting on budget sign-off",
    meta: "Owner: Finance · due Friday",
    tone: "text-[#F0A3A3] border-[#F0A3A3]/30",
  },
]

const teams = [
  { name: "Operations", state: "Clear", width: 82, color: "from-wine to-gold" },
  { name: "Sales", state: "Mixed", width: 55, color: "from-wine to-gold/70" },
  { name: "Product", state: "Clear", width: 78, color: "from-wine to-gold" },
  { name: "Support", state: "Strained", width: 36, color: "from-wine to-[#F0A3A3]/80" },
]

/**
 * Illustrative leadership view for the enterprise hero. It is a prototype of a custom
 * build, not a live product screen, and every figure is made up. Keep the Prototype tag.
 */
export function HeroPreview() {
  return (
    <div className="relative mx-auto mb-14 w-full max-w-[1040px] text-left">
      <div
        className="pointer-events-none absolute -inset-x-8 -top-8 bottom-10 bg-[radial-gradient(ellipse_60%_55%_at_50%_30%,rgba(78,2,48,.55),transparent_70%)]"
        aria-hidden
      />
      <figure
        className="relative overflow-hidden border border-white/10 bg-[#110c19] shadow-[0_40px_120px_-40px_rgba(78,2,48,.9)] [mask-image:linear-gradient(to_bottom,black_94%,transparent)]"
        aria-label="Illustrative leadership view (prototype)"
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden />

        <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[.07] px-5 py-3.5 lg:px-6">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[11px] font-medium uppercase tracking-[.2em] text-white/70">Leadership view</span>
            <span className="hidden text-[11px] text-white/45 sm:inline">Example firm</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[.16em] text-white/45">Illustrative data</span>
            <PrototypeTag />
          </div>
        </figcaption>

        <div className="grid gap-px bg-white/[.06] lg:grid-cols-[1.4fr_1fr]">
          {/* Left: from meeting notes to decisions, tasks and owners */}
          <div className="bg-[#110c19] p-5 lg:p-6">
            <ul className="mb-5 grid grid-cols-3 gap-2.5">
              {stats.map((stat) => (
                <li key={stat.label} className="border border-white/[.07] bg-white/[.03] px-3.5 py-3">
                  <div className="font-serif text-[28px] font-medium leading-none text-white">{stat.value}</div>
                  <div className="mt-2 text-[10px] font-medium uppercase leading-[1.4] tracking-[.1em] text-white/60">
                    {stat.label}
                  </div>
                  <div className="mt-0.5 hidden text-[10px] text-white/45 sm:block">{stat.note}</div>
                </li>
              ))}
            </ul>

            <div className="mb-3 text-[10px] font-medium uppercase tracking-[.2em] text-gold">
              From Tuesday's leadership meeting
            </div>
            <ul className="flex flex-col gap-2">
              {items.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3.5 border border-white/[.07] bg-white/[.025] px-4 py-3"
                >
                  <span
                    className={cn(
                      "mt-0.5 flex-shrink-0 border px-2 py-0.5 text-[9px] font-medium uppercase tracking-[.14em]",
                      item.tone,
                    )}
                  >
                    {item.kind}
                  </span>
                  <div className="min-w-0">
                    <div className="text-[13px] font-medium leading-[1.4] text-white/90">{item.title}</div>
                    <div className="mt-0.5 text-[11px] text-white/50">{item.meta}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: a group pattern, shown only because 5+ people opted in */}
          <div className="bg-[#110c19] p-5 lg:p-6">
            <div className="mb-1 text-[10px] font-medium uppercase tracking-[.2em] text-gold">Group pattern</div>
            <div className="mb-5 font-serif text-lg leading-snug text-white">Execution clarity by team</div>
            <ul className="flex flex-col gap-3.5">
              {teams.map((team) => (
                <li key={team.name}>
                  <div className="mb-1.5 flex items-baseline justify-between text-[12px]">
                    <span className="text-white/80">{team.name}</span>
                    <span className="text-[11px] text-white/55">{team.state}</span>
                  </div>
                  <div className="h-1 bg-white/[.07]">
                    <div className={cn("h-full bg-gradient-to-r", team.color)} style={{ width: `${team.width}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/[.07] pt-4 text-[11px] leading-[1.65] text-white/55">
              Shown because 38 of 52 people opted in (5+ required). Individual answers are never shown.
            </p>
          </div>
        </div>
      </figure>
    </div>
  )
}
