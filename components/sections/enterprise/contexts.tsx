import { Briefcase, Building2, GitMerge, Landmark, Network, TrendingUp } from "lucide-react"
import { PrototypeTag, Section } from "@/components/site/primitives"

const contexts = [
  {
    icon: Building2,
    tag: "Legacy businesses",
    title: "Operate with AI, without becoming AI experts",
    body: "A practical way to bring AI into how an established company runs, with leaders, teams and workflows aligned around it.",
    accent: "border-gold-light",
  },
  {
    icon: TrendingUp,
    tag: "PE firms & portfolio companies",
    title: "Human capital across the portfolio",
    body: "Read how people, roles and decisions line up across the companies you own, and where execution is stuck.",
    accent: "border-gold-light",
  },
  {
    icon: Briefcase,
    tag: "Consultancies & strategy firms",
    title: "Technology under your advisory work",
    body: "Deliver Align as the technology layer beneath your strategy work, and leave clients with something that keeps working.",
    accent: "border-gold-light",
  },
  {
    icon: GitMerge,
    tag: "Restructuring & transformation",
    title: "Connect people, roles and decisions",
    body: "Link people, roles, decisions and workflows through a restructure, so the plan holds when it meets the organization.",
    accent: "border-wine",
  },
  {
    icon: Network,
    tag: "Workforce development & public sector",
    title: "Connect seekers, coaches, employers and funders",
    body: "Each person owns their own results, and partners see patterns, not individuals. Full sovereignty is available where it's required.",
    accent: "border-wine",
  },
  {
    icon: Landmark,
    tag: "Financial services & wealth advisory",
    title: "Advice that lands at the right moment",
    body: "Reads client readiness and life-stage signals alongside the numbers, so advice lands at the right moment, not just the right calculation.",
    accent: "border-wine",
  },
]

export function Contexts() {
  return (
    <Section id="contexts" tone="stone">
      <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[560px]">
          <div className="eyebrow mb-3.5">See it in your world</div>
          <h2 className="h2-serif [font-size:clamp(28px,3.5vw,42px)] text-obsidian">
            Same intelligence layer.
            <br />
            <em className="text-wine">Adapted to how you operate.</em>
          </h2>
          <p className="mt-4 text-sm font-light leading-[1.8] text-ink-muted">
            Each example is a prototype of a custom build, shaped around your sector, your language and
            the systems you already use.
          </p>
        </div>
        <PrototypeTag onLight className="self-start lg:self-auto" />
      </div>

      <ul className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3">
        {contexts.map(({ icon: Icon, tag, title, body, accent }) => (
          <li
            key={tag}
            className={`border-l-2 bg-white px-6 py-7 transition-colors duration-300 hover:bg-[#FAF8FC] ${accent}`}
          >
            <Icon aria-hidden className="mb-4 h-[22px] w-[22px] text-wine" strokeWidth={1.5} />
            <p className="mb-2 text-[9px] font-medium uppercase tracking-[.18em] text-wine">{tag}</p>
            <h3 className="mb-2 font-serif text-[18px] font-medium leading-[1.25] text-obsidian">{title}</h3>
            <p className="text-xs font-light leading-[1.6] text-[#7A7080]">{body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
