import Image from "next/image"
import { BookOpen, Briefcase, Globe } from "lucide-react"
import { CtaButton } from "@/components/site/cta-button"
import { Section } from "@/components/site/primitives"

const credentials = [
  { icon: Briefcase, text: "$200M+ in executed deals" },
  { icon: BookOpen, text: "5 books on leadership" },
  { icon: Globe, text: "Fortune 500 experience" },
]

const scores = [
  { value: "86", label: "Conviction Score™" },
  { value: "92", label: "Value Score™" },
  { value: "94%", label: "AI-Era Readiness" },
]

export function IndividualFounder() {
  return (
    <Section id="founder" tone="white">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="eyebrow mb-3.5">Built from lived experience</div>
          <h2 className="mb-8 font-serif [font-size:clamp(30px,4vw,50px)] font-medium leading-[1.1] text-obsidian">
            Built by someone who had to figure it out <em className="text-wine">the hard way.</em>
          </h2>

          <div className="mb-8 flex items-center gap-5">
            <Image
              src="/images/founder-headshot.png"
              alt="Samuel Ngu, Founder of Align360"
              width={96}
              height={96}
              className="h-24 w-24 object-cover"
            />
            <div>
              <h3 className="font-serif text-2xl font-medium text-obsidian">Samuel Ngu</h3>
              <p className="text-xs font-medium uppercase tracking-[.18em] text-wine">Founder, Align360</p>
            </div>
          </div>

          <div className="space-y-4 text-[15px] font-light leading-[1.85] text-ink-soft">
            <p>Samuel Ngu grew up selling food at bus stops in West Africa to pay his own tuition.</p>
            <p>
              By his teens, he'd helped scale a multimillion-dollar family business. Then political unrest
              forced him to flee, and rebuild from nothing in the U.S.
            </p>
            <p>
              He's been near homeless. Mentored by federal judges. Worked alongside diplomats. Closed
              nine-figure corporate deals. Led value creation inside a Fortune 500 firm.
            </p>
          </div>

          <blockquote className="my-7 border-l-2 border-wine/30 pl-5 font-serif text-lg leading-[1.6] text-obsidian">
            Across every environment, he noticed the same thing: smart, capable people were stalling, not
            because they lacked talent, but because their <em className="text-wine">identity</em>,{" "}
            <em className="text-wine">decisions</em>, and <em className="text-wine">execution</em> weren't
            aligned.
          </blockquote>

          <p className="mb-6 text-[15px] font-light leading-[1.85] text-ink-soft">
            That gap quietly destroys momentum, confidence, and results. So he built the solution.
            Align360 isn't theory. It's the system Samuel wished existed when he was starting over with
            nothing, built from two decades of lived experience.
          </p>

          <ul className="mb-8 flex flex-col gap-2.5">
            {credentials.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3.5 border-l-2 border-wine/[.12] bg-wine/[.02] px-4 py-3.5 text-[13px] font-medium text-obsidian"
              >
                <Icon aria-hidden className="h-4 w-4 text-wine" strokeWidth={1.5} />
                {text}
              </li>
            ))}
          </ul>

          <CtaButton intent="individual">Join the Founder's Circle →</CtaButton>
        </div>

        <div className="relative overflow-hidden bg-obsidian p-8 lg:sticky lg:top-24 lg:p-11">
          <div className="glow-panel-bl pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <div className="mb-4 text-[9px] font-medium uppercase tracking-[.24em] text-gold">
              Samuel's actual result · The founding moment
            </div>
            <blockquote className="mb-5 font-serif text-lg italic leading-[1.6] text-white">
              &ldquo;I had the scores, the credentials, the client wins. I still qualified every offer
              before anyone pushed back. Align named the pattern, and gave me the one practice that
              closed it.&rdquo;
            </blockquote>
            <ul className="mb-5 flex gap-3">
              {scores.map((score) => (
                <li key={score.label} className="flex-1 border border-white/5 bg-white/[.04] p-3.5 text-center">
                  <div className="font-serif text-[30px] font-medium leading-none text-gold-light">{score.value}</div>
                  <div className="mt-1 text-[9px] font-medium uppercase tracking-[.14em] text-white/30">{score.label}</div>
                </li>
              ))}
            </ul>
            <div className="mb-4 border border-gold/15 bg-gold/[.07] px-4 py-3.5">
              <div className="mb-1 text-[9px] font-medium uppercase tracking-[.18em] text-gold">
                Primary gap · Release Threshold · 3/10
              </div>
              <p className="text-[13px] font-medium text-white/75">
                The Realist gift running one beat past its productive range at the moment of delivery.
              </p>
            </div>
            <div className="border-l-2 border-[#4EC87A]/35 bg-[#0F6E56]/[.06] px-3.5 py-2.5">
              <div className="mb-1 text-[9px] font-medium uppercase tracking-[.16em] text-[#64D296]/65">
                The founding practice
              </div>
              <p className="text-[13px] font-medium text-white/75">
                State it. Then stop. Everything else in the profile was already at Convicted level. This
                was the last thing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
