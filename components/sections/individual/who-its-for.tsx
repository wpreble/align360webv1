import { CtaButton } from "@/components/site/cta-button"

const audiences = [
  {
    icon: "◎",
    title: "People at the starting line",
    body: "Students and early-career people navigating education, career choices, and AI disruption. Find your path before the world picks one for you.",
  },
  {
    icon: "◈",
    title: "Founders and executive leaders",
    body: "You think systemically and invest in depth. You want to know what is specifically in the way, not generic encouragement about believing in yourself.",
  },
  {
    icon: "◇",
    title: "Coaches who need precision, not personality types",
    body: "Give clients a continuously updating model instead of a type. You can bring your clients onto Align and earn as an affiliate partner, and if you want a portal built for your practice, talk to us.",
  },
  {
    icon: "○",
    title: "Parents and teachers guiding someone else",
    body: "Guide without guessing, with tools that actually work. Give the people you support more than content: give them a system.",
  },
  {
    icon: "◉",
    title: "Anyone done enough self-work to want what comes next",
    body: "You know yourself reasonably well. What you want is the tool that takes everything you know and produces the one specific practice that moves everything forward.",
  },
]

export function IndividualWho() {
  return (
    <section id="who" className="scroll-mt-16 bg-obsidian px-7 py-20 lg:px-[72px] lg:py-[120px]">
      <div className="mx-auto grid max-w-[1200px] items-start gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="eyebrow eyebrow-gold mb-3.5">Who this is for</div>
          <h2 className="mb-5 font-serif [font-size:clamp(34px,4.5vw,56px)] font-medium leading-[1.07] text-white">
            Built for people ready to see what's actually in the way.
          </h2>
          <p className="text-sm font-light leading-[1.8] text-white/40">
            Whether you're figuring out your own path or helping someone else find theirs, Align is for
            the person who has tried the assessments, the courses, the coaching, and still feels like
            something precise is missing.
          </p>
          <div className="mt-9 border border-white/[.06] bg-white/[.03] p-6">
            <div className="mb-2 text-[9px] font-medium uppercase tracking-[.2em] text-gold">Not for</div>
            <p className="text-[13px] font-light leading-[1.7] text-white/35">
              People who want generic motivation. People who want a personality label. People who are
              not ready to see precisely what is between them and their impact.
            </p>
          </div>
          <div className="mt-9">
            <CtaButton intent="individual">Find Your Path →</CtaButton>
          </div>
        </div>

        <ul className="flex flex-col">
          {audiences.map((item) => (
            <li key={item.title} className="flex gap-[22px] border-b border-white/5 py-[26px] last:border-b-0">
              <span aria-hidden className="min-w-[18px] pt-0.5 font-serif text-[13px] text-gold">
                {item.icon}
              </span>
              <div>
                <h3 className="mb-1 text-sm font-medium text-white">{item.title}</h3>
                <p className="text-xs font-light leading-[1.65] text-white/40">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
