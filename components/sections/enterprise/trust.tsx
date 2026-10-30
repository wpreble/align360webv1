import { Cpu, KeyRound, Lock, ShieldCheck, UserCheck, Users } from "lucide-react"
import { Section } from "@/components/site/primitives"

const pillars = [
  {
    icon: UserCheck,
    title: "Owned by each person",
    body: "Each participant owns their account. Employers, organizations and funders never see their answers, reports or conversations.",
  },
  {
    icon: Users,
    title: "Patterns need 5+",
    body: "Organizations see who holds a seat, and group patterns only once 5+ people opt in. Anyone can opt out.",
  },
  {
    icon: Cpu,
    title: "Open models",
    body: "The AI runs on open models, not OpenAI or Anthropic, and we don't train on anyone's content.",
  },
  {
    icon: Lock,
    title: "Encrypted",
    body: "Data is encrypted at rest and in transit.",
  },
  {
    icon: KeyRound,
    title: "SSO, DPA & BAA",
    body: "Single sign-on can be added for enterprise rollouts. We can sign a BAA for clients who need HIPAA, and a DPA, each scoped per engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Full sovereignty, when needed",
    body: "A government partner, or any organization that needs everything in full self-custody, can have full data, AI inference and platform sovereignty as a custom build.",
  },
]

export function Trust() {
  return (
    <Section id="trust" tone="obsidian" className="border-t border-white/[.04] lg:py-[88px]">
      <div className="mx-auto mb-14 max-w-[720px] text-center">
        <div className="mb-5 text-[9px] font-medium uppercase tracking-[.22em] text-white/45">
          Enterprise trust
        </div>
        <p className="font-serif text-[22px] italic leading-[1.5] text-white/80">
          People own their accounts. Organizations see patterns, not people.
        </p>
      </div>

      <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map(({ icon: Icon, title, body }) => (
          <li key={title} className="border border-white/[.06] bg-white/[.015] px-6 py-7">
            <Icon aria-hidden className="mb-4 h-5 w-5 text-gold" strokeWidth={1.5} />
            <h3 className="mb-2 text-[10px] font-medium uppercase tracking-[.16em] text-white/70">{title}</h3>
            <p className="text-[13px] font-light leading-[1.65] text-white/60">{body}</p>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-[720px] text-center text-xs font-light leading-[1.7] text-white/50">
        Align360 isn't SOC 2 or HIPAA certified, because we mainly build custom for our enterprise
        partners. We're prepared to pursue either on a client-by-client basis.
      </p>
    </Section>
  )
}
