import { Section } from "@/components/site/primitives"

const costs = [
  {
    number: "01",
    title: "The cost of a mis-cast hire",
    body: "Recruiting, onboarding, lost productivity, replacement. Role-fit signals, shared with each person's consent, help you see a mismatch earlier.",
  },
  {
    number: "02",
    title: "Managers promoted past their fit",
    body: "Promoted for individual performance, deployed in a role that asks for a different operating mode. The team pays for it.",
  },
  {
    number: "03",
    title: "Attrition you could have seen coming",
    body: "The signals exist long before the exit interview. Group patterns, shown once 5+ people opt in, let you act while there's still time.",
  },
]

const chain = ["Board objective", "CEO priorities", "Exec team", "Business unit", "Manager"]

export function RealCost() {
  return (
    <Section tone="stone">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="eyebrow mb-3.5">The real cost</div>
          <h2 className="h2-serif mb-6 text-obsidian">
            Misalignment isn't a culture problem.
            <br />
            <em className="text-wine">It's a P&amp;L problem.</em>
          </h2>
          <p className="mb-4 text-[15px] font-light leading-[1.8] text-ink-soft">
            HR buys culture. Finance funds performance. Every enterprise decision needs both to say
            yes. Align360 helps you make that case, because misalignment has a cost and it shows up in
            your numbers.
          </p>
          <p className="text-[15px] font-light leading-[1.8] text-ink-soft">
            The symptoms are visible. The system causing them usually isn't.
          </p>
        </div>

        <ul className="flex flex-col gap-3.5">
          {costs.map((cost) => (
            <li key={cost.number} className="flex items-start gap-6 border-l-[3px] border-wine bg-white p-7">
              <span className="min-w-[48px] font-serif text-[32px] font-medium leading-none text-wine">
                {cost.number}
              </span>
              <div>
                <h3 className="mb-1.5 text-[13px] font-medium text-obsidian">{cost.title}</h3>
                <p className="text-xs font-light leading-[1.55] text-ink-muted">{cost.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 border border-black/[.06] bg-white p-8 lg:p-10">
        <p className="mb-5 text-center text-[11px] font-medium uppercase tracking-[.14em] text-wine">
          Strategy degradation: the telephone game you're paying for
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-center text-[11px] font-medium text-ink-muted">
          {chain.map((step) => (
            <span key={step} className="flex items-center gap-2">
              {step}
              <span aria-hidden className="text-gold">
                →
              </span>
            </span>
          ))}
          <span className="font-semibold text-obsidian">&ldquo;Increase engagement by 8% this quarter.&rdquo;</span>
        </div>
        <p className="mt-[18px] text-center font-serif text-[15px] italic text-wine">
          The original strategic intent is gone by the time it reaches the person doing the work.
        </p>
      </div>
    </Section>
  )
}
