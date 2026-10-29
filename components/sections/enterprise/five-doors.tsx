import { DoorOpen } from "lucide-react"
import { CtaButton } from "@/components/site/cta-button"
import { Section } from "@/components/site/primitives"

const doors = [
  {
    title: "Retention Intelligence",
    body: "See where engagement is slipping across teams, before it turns into attrition.",
  },
  {
    title: "Talent Deployment Intelligence",
    body: "Help people surface the strengths you're already paying for but aren't using, on their terms.",
  },
  {
    title: "Leadership Dependency",
    body: "Find where execution depends too heavily on individual leaders.",
  },
  {
    title: "Organizational Alignment",
    body: "Find where strategy is breaking between leadership and execution.",
  },
  {
    title: "Institutional Intelligence",
    body: "Keep organizational knowledge from disappearing when people leave.",
  },
]

export function FiveDoors() {
  return (
    <Section id="doors" tone="cherry" className="overflow-hidden">
      <div className="glow-top-gold pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative">
        <div className="mb-14 max-w-[680px]">
          <div className="eyebrow eyebrow-gold mb-3.5">Five doors in</div>
          <h2 className="h2-serif text-white">
            You don't have to buy the whole system.
            <br />
            <em className="text-gold-light">Just the problem that's costing you.</em>
          </h2>
          <p className="mt-4 text-sm font-light leading-[1.8] text-white/55">
            Five named entry points into the same intelligence layer. Start wherever it's costing you
            the most right now, and add the others as you need them.
          </p>
        </div>

        <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
          {doors.map((door) => (
            <li
              key={door.title}
              className="border border-white/[.08] bg-white/[.04] px-6 py-7 transition-colors duration-300 hover:bg-white/[.08]"
            >
              <DoorOpen aria-hidden className="mb-4 h-[22px] w-[22px] text-gold-light" strokeWidth={1.5} />
              <h3 className="mb-2.5 font-serif text-[17px] font-medium leading-[1.25] text-white">{door.title}</h3>
              <p className="text-xs font-light leading-[1.6] text-white/55">{door.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-11 text-center">
          <CtaButton href="#offer" variant="gold">
            Start With Your Door →
          </CtaButton>
        </div>
      </div>
    </Section>
  )
}
