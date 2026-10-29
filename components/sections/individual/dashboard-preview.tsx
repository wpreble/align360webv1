import { Section } from "@/components/site/primitives"

const nav = [
  { section: "Personal", items: ["Home", "My Alignment", "User Model", "Life Journey™", "Ask Align AI"], active: "Home" },
  { section: "Products", items: ["DesignSuite™", "Career Navigator", "Integrate360™", "627Figures™", "LegacyLab™"] },
]

const feed = [
  {
    type: "Today's insight",
    title: "One thing Align AI noticed about you today: you finish strong, then soften the ask.",
    dot: "#C97A2A",
  },
  {
    type: "Conviction Event logged",
    title: "Partnership offer sent without qualifier. Your model is updating. Release Threshold moving 3 → 7.",
    dot: "#27AE60",
  },
  {
    type: "Life Journey prompt",
    title: "Something worth capturing happened in your last conversation. Log it before the window closes.",
    dot: "rgba(255,255,255,.2)",
  },
]

export function DashboardPreview() {
  return (
    <Section id="dashboard" tone="white">
      <div className="mb-[52px] text-center">
        <div className="eyebrow eyebrow-center mb-3.5">Inside the platform</div>
        <h2 className="h2-serif text-obsidian">
          This is what your life looks like
          <br />
          inside Align.
        </h2>
        <p className="mx-auto mt-[18px] max-w-[560px] text-[15px] font-light leading-[1.8] text-ink-muted">
          The result is the beginning. The platform is where it compounds, every day, every decision,
          every season. Align AI reads the full picture before every conversation, and it works in any
          browser, on your phone or your desktop.
        </p>
      </div>

      <div className="relative overflow-hidden border border-white/[.06] bg-obsidian p-5 lg:p-7">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_15%_0%,rgba(78,2,48,.7),transparent_50%)]"
          aria-hidden
        />
        <div className="relative">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-white/[.06] pb-4">
            <div className="flex items-center gap-2.5">
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none" aria-hidden>
                <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1.2" strokeOpacity=".5" />
                <circle cx="20" cy="20" r="3" fill="white" opacity=".8" />
                <line x1="20" y1="2" x2="20" y2="9" stroke="white" strokeWidth="1.2" strokeOpacity=".5" />
                <line x1="20" y1="31" x2="20" y2="38" stroke="white" strokeWidth="1.2" strokeOpacity=".5" />
                <line x1="2" y1="20" x2="9" y2="20" stroke="white" strokeWidth="1.2" strokeOpacity=".5" />
                <line x1="31" y1="20" x2="38" y2="20" stroke="white" strokeWidth="1.2" strokeOpacity=".5" />
              </svg>
              <span className="text-[11px] font-medium uppercase tracking-[.2em] text-white/50">Align360</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] tracking-[.06em] text-white/30">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#27AE60] shadow-[0_0_6px_#27AE60]" />
              Sample · Peak day · Building season
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[180px_1fr]">
            <nav className="hidden flex-col gap-0.5 lg:flex" aria-label="Sample navigation">
              {nav.map((group) => (
                <div key={group.section}>
                  <div className="mt-1.5 px-2.5 pb-1 pt-2.5 text-[9px] font-medium uppercase tracking-[.18em] text-white/20">
                    {group.section}
                  </div>
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className={
                        item === group.active
                          ? "rounded border-l-2 border-gold/50 bg-white/[.07] px-2.5 py-[7px] text-[11px] tracking-[.04em] text-white/75"
                          : "px-2.5 py-[7px] text-[11px] tracking-[.04em] text-white/30"
                      }
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <div>
                <p className="mb-1 font-serif text-[22px] text-white/90">
                  Good morning, <em className="text-gold-light">Alex.</em>
                </p>
                <p className="text-xs text-white/30">Tuesday · Building season · Align AI is loaded and ready.</p>
              </div>

              <div className="grid items-center gap-4 border border-white/[.06] bg-white/[.04] p-4 sm:grid-cols-[auto_1fr]">
                <div className="relative mx-auto h-[76px] w-[76px] flex-shrink-0">
                  <svg width="76" height="76" viewBox="0 0 76 76" className="-rotate-90" aria-hidden>
                    <circle cx="38" cy="38" r="30" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="5" />
                    <circle
                      cx="38"
                      cy="38"
                      r="30"
                      fill="none"
                      stroke="url(#dash-ring)"
                      strokeWidth="5"
                      strokeDasharray="188.5"
                      strokeDashoffset="22.6"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="dash-ring" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4E0230" />
                        <stop offset="100%" stopColor="#C9A96E" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="font-serif text-[22px] leading-none text-gold-light">89</span>
                    <span className="text-[8px] tracking-[.08em] text-white/30">Alignment</span>
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-[9px] font-medium uppercase tracking-[.16em] text-gold/55">
                    Integrated User Model · Context-independent
                  </div>
                  <p className="mb-1.5 text-[13px] font-medium leading-[1.4] text-white/80">
                    Your clarity is compounding. Align AI is reading everything.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["IR: 86 · Convicted", "VS: 92 · Rockstar", "AI-Era: 94%"].map((chip) => (
                      <span key={chip} className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] font-medium text-white/40">
                        {chip}
                      </span>
                    ))}
                    <span className="rounded-full border border-[#27AE60]/20 px-2 py-0.5 text-[9px] font-medium text-[#27AE60]/70">
                      Peak day · Full capacity
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Conviction Score™", value: "86", sub: "Convicted", color: "#C97A2A", bar: "linear-gradient(90deg,#C97A2A,#E8A850)" },
                  { label: "Value Score™", value: "92", sub: "Authentic Rockstar", color: "#E8C97E", bar: "#C9A96E" },
                ].map((tile) => (
                  <div key={tile.label} className="border border-white/5 bg-white/[.04] p-3">
                    <div className="mb-1 text-[9px] font-medium uppercase tracking-[.12em] text-white/30">{tile.label}</div>
                    <div className="mb-0.5 font-serif text-2xl font-medium leading-none" style={{ color: tile.color }}>
                      {tile.value}
                    </div>
                    <div className="text-[10px] text-white/30">{tile.sub}</div>
                    <div className="mt-2 h-0.5 bg-white/[.06]">
                      <div className="h-full" style={{ width: `${tile.value}%`, background: tile.bar }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-gold/[.12] bg-gold/[.06] px-3.5 py-3">
                <div className="mb-1 text-[9px] font-medium uppercase tracking-[.16em] text-gold">
                  Align AI · Peak day · Building season
                </div>
                <p className="text-xs italic leading-[1.6] text-white/45">
                  &ldquo;You build what is right. The last step is releasing it without the apology.
                  Today is a Peak day, full capacity. The partnership decision is in your queue. This is
                  the window. State it. Then stop.&rdquo;
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                {feed.map((item) => (
                  <div key={item.type} className="flex gap-2.5 border border-white/5 bg-white/[.03] px-3 py-2.5">
                    <span
                      aria-hidden
                      className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full"
                      style={{ background: item.dot }}
                    />
                    <div>
                      <div className="mb-0.5 text-[9px] font-medium uppercase tracking-[.1em] text-white/25">{item.type}</div>
                      <div className="text-[11px] text-white/60">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-7 max-w-[560px] text-center text-sm font-light leading-[1.7] text-ink-muted">
        This is a sample of the personal home view, one of many surfaces inside the platform.{" "}
        <strong className="font-medium text-obsidian">The tools you choose and the intelligence behind them show up here as your model builds.</strong>
      </p>
    </Section>
  )
}
