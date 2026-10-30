import { CtaButton } from "@/components/site/cta-button"
import { HeroPreview } from "./hero-preview"

const principles = [
  { value: "Custom", label: "Built around how your firm operates" },
  { value: "5+", label: "People opt in before group patterns appear" },
  { value: "Open", label: "Open models. We don't train on anyone's content" },
  { value: "Theirs", label: "Each person owns their own results" },
]

export function EnterpriseHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-obsidian px-7 pb-24 pt-36 text-center lg:px-10">
      <div className="glow-hero pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 w-full max-w-[1040px]">
        <div className="animate-fade-in-up animation-delay-100 mb-9 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[.08] px-5 py-2">
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
          <span className="text-[9px] font-medium uppercase tracking-[.22em] text-gold">
            Enterprise · Organizational Intelligence
          </span>
        </div>

        <h1 className="animate-fade-in-up animation-delay-200 mx-auto mb-7 max-w-[900px] font-serif text-white [font-size:clamp(42px,6vw,82px)] font-medium leading-[1.03] tracking-[-.02em]">
          Your people are already
          <br />
          making <em className="text-gold-light">decisions.</em>
          <span className="mt-2 block text-[.75em] font-normal text-white/60">
            Give them the system to make better ones.
          </span>
        </h1>

        <p className="animate-fade-in-up animation-delay-300 mx-auto mb-12 max-w-[680px] text-base font-light leading-[1.75] text-white/65">
          A practical way for legacy businesses, PE firms and consultancies to operate with AI —
          without their leaders having to become AI experts. Align360 is an{" "}
          <strong className="font-medium text-white">intelligence layer</strong> we implement inside
          your organization: not another coaching subscription, not a dashboard, and not a system you
          rip anything out to install. It connects to the systems you already use and turns human
          signals into decisions your leaders can act on.
        </p>

        <div className="animate-fade-in-up animation-delay-400 mb-16 flex flex-wrap justify-center gap-4">
          <CtaButton intent="organization">See It In Action →</CtaButton>
          <CtaButton href="#platform" variant="ghost">
            See the Platform
          </CtaButton>
        </div>

        <HeroPreview />

        <ul className="mx-auto grid max-w-[820px] grid-cols-2 gap-px border border-white/[.06] bg-white/[.06] md:grid-cols-4">
          {principles.map((item) => (
            <li key={item.value} className="bg-obsidian px-5 py-6 text-center">
              <div className="font-serif text-[30px] font-medium leading-none text-gold-light">
                {item.value}
              </div>
              <div className="mt-2.5 text-[9px] font-medium uppercase leading-[1.5] tracking-[.14em] text-white/50">
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
