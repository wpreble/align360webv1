import { Section, SectionHeading } from "@/components/site/primitives"

const steps = [
  {
    title: "Map",
    body: "We map your organization with Align360: how people work, where they're strong, and where execution gets stuck.",
  },
  {
    title: "Plan",
    body: "We set priorities with your leadership and agree a baseline before any work starts.",
  },
  {
    title: "Implement and build",
    body: "AI goes into real work, and we build what the plan needs, alongside your people.",
  },
  {
    title: "Measure",
    body: "We report progress against the baseline: in money where it can be counted, in plain terms where it can't.",
  },
]

const lanes = [
  {
    label: "Start",
    title: "Strategy",
    body: "A fractional executive works with your leadership team, with Align360 for your leaders.",
  },
  {
    label: "Add",
    title: "AI implementation",
    body: "AI goes into your everyday work and workflows, with the people who do the work trained to use it.",
  },
  {
    label: "Grow into",
    title: "The full team",
    body: "Fractional development and a broader executive bench, working as your strategy, AI and engineering department.",
  },
]

export function HowWeWork() {
  return (
    <Section id="how" tone="white">
      <SectionHeading
        eyebrow="How we work with you"
        title={
          <>
            Start with strategy.
            <br />
            <em className="text-wine">Scale into the full team.</em>
          </>
        }
        sub="Strategy to execution, with your people and your technology aligned. Most clients start with strategy and add the rest when the plan calls for it."
      />

      <ol className="mt-14 grid gap-px border border-wine/[.08] bg-wine/[.08] md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="bg-white px-7 py-9">
            <div className="mb-5 font-serif text-[11px] font-medium tracking-[.12em] text-cherry/25">
              0{i + 1}
            </div>
            <div className="mb-5 h-px w-7 bg-wine" aria-hidden />
            <h3 className="mb-2.5 font-serif text-[21px] font-medium leading-[1.2] text-obsidian">{step.title}</h3>
            <p className="text-[13px] font-light leading-[1.75] text-ink-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      <ul className="mt-6 grid gap-6 lg:grid-cols-3">
        {lanes.map((lane) => (
          <li key={lane.title} className="border border-wine/[.08] bg-stone px-7 py-7">
            <div className="mb-2 text-[9px] font-medium uppercase tracking-[.22em] text-wine">{lane.label}</div>
            <h3 className="mb-2 font-serif text-[22px] font-medium leading-[1.15] text-obsidian">{lane.title}</h3>
            <p className="text-[13px] font-light leading-[1.7] text-ink-muted">{lane.body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-6 border-t border-wine/10 pt-10 lg:grid-cols-2">
        <p className="font-serif text-lg leading-[1.55] text-obsidian">
          What we build stays yours. We measure against a baseline we set with you, and we don't
          promise a number before we've measured anything.
        </p>
        <p className="text-sm font-light leading-[1.8] text-ink-muted">
          We don't hand over a plan and leave. We stay, put it to work, build what it needs, and leave
          technology behind that keeps working.
        </p>
      </div>
    </Section>
  )
}
