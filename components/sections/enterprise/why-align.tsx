import { Section } from "@/components/site/primitives"

const reasons = [
  {
    title: "Personal and professional, in one system",
    body: "Most tools stop at work performance or at personal coaching. Align builds a persistent intelligence layer across both: one account per person, with many contexts attached.",
    note: "One person. One account. Many contexts.",
  },
  {
    title: "People own their data",
    body: "Each person owns their account. Their answers, reports and conversations stay theirs. Organizations see who holds a seat, and group patterns only once 5+ people opt in. The AI runs on open models, not OpenAI or Anthropic, and we don't train on anyone's content.",
    note: "Patterns, not people. Anyone can opt out.",
  },
  {
    title: "Built to work through partners",
    body: "Advisory firms, consultancies and operating teams can bring Align to their own clients as their technology layer. We set partnership terms per relationship.",
    note: "Partner as channel, not just customer.",
  },
  {
    title: "What we build stays yours",
    body: "Enterprise software routinely locks organizational work inside the vendor. With Align, the dashboards, workflows and integrations we build for you are yours, and each person keeps ownership of their own results.",
    note: "Your work. Your call to stay or leave.",
  },
  {
    title: "A structured system, not raw AI output",
    body: "The market is full of generic AI wrappers. Align is an opinionated alignment framework, not a chatbot. The structure is the product, and guidance gets sharper the longer it runs.",
    note: "Built from lived research, not a prompt.",
  },
]

export function WhyAlign() {
  return (
    <Section tone="white">
      <div className="eyebrow mb-3.5">Why Align</div>
      <h2 className="h2-serif mb-16 text-obsidian">
        Built differently,
        <br />
        <em className="text-wine">from the people up.</em>
      </h2>

      <ol className="border-t border-wine/[.08]">
        {reasons.map((reason, i) => (
          <li
            key={reason.title}
            className="grid gap-4 border-b border-wine/[.08] py-9 lg:grid-cols-[72px_1fr_1fr] lg:gap-10"
          >
            <span aria-hidden className="font-serif text-[52px] font-medium leading-none text-wine/20">
              0{i + 1}
            </span>
            <div>
              <h3 className="mb-2.5 font-serif text-[22px] font-medium leading-[1.2] text-obsidian">{reason.title}</h3>
              <p className="text-sm font-light leading-[1.7] text-ink-soft">{reason.body}</p>
            </div>
            <p className="pt-1 font-serif text-[15px] italic leading-[1.65] text-wine">{reason.note}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
