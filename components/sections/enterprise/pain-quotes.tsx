import { Section } from "@/components/site/primitives"

const quotes = [
  { quote: "Everything still comes through me.", label: "Leadership bandwidth leakage" },
  { quote: "I thought we already agreed on this.", label: "Strategy degrading in transit" },
  { quote: "My team should be able to handle this.", label: "Weak middle layer" },
  { quote: "Why are we talking about this again?", label: "No institutional memory" },
  { quote: "We're spending money on AI. Where's the ROI?", label: "Tools without transformation" },
  { quote: "Are we actually on track?", label: "Data without synthesis" },
]

export function PainQuotes() {
  return (
    <Section tone="obsidian" width="lg" className="border-t border-white/[.04] lg:py-[100px]">
      <div className="eyebrow eyebrow-gold eyebrow-center mb-3.5">
        You've said at least one of these this month
      </div>
      <h2 className="mx-auto mb-14 max-w-[700px] text-center font-serif [font-size:clamp(26px,3.2vw,38px)] font-normal leading-[1.3] text-white">
        That's not a leadership flaw. It's a system that never got built.
      </h2>
      <ul className="grid gap-px border border-white/[.06] bg-white/[.06] md:grid-cols-2 lg:grid-cols-3">
        {quotes.map((item) => (
          <li key={item.quote} className="bg-obsidian px-[26px] py-8">
            <div aria-hidden className="mb-3.5 font-serif text-[22px] leading-none text-gold-light">
              &ldquo;
            </div>
            <p className="mb-2.5 font-serif text-base italic leading-[1.5] text-white/85">{item.quote}</p>
            <p className="text-[10px] uppercase tracking-[.1em] text-white/50">{item.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
