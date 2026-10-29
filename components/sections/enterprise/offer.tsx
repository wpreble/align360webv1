import { CtaButton } from "@/components/site/cta-button"
import { CheckItem, Section } from "@/components/site/primitives"
import { siteConfig } from "@/lib/site-config"

export function Offer() {
  const startingPrice = siteConfig.enterpriseStartingPrice

  return (
    <Section id="offer" tone="stone" width="lg">
      <div className="mb-12 text-center">
        <div className="eyebrow eyebrow-center mb-3.5">The enterprise offer</div>
        <h2 className="h2-serif mb-3.5 text-obsidian">
          A custom version of Align,
          <br />
          <em className="text-wine">implemented for your firm.</em>
        </h2>
        <p className="text-sm font-light leading-[1.8] text-ink-muted">
          No self-serve tiers. Every build is scoped to how your organization actually works.
        </p>
      </div>

      <blockquote className="mb-14 border border-wine/10 bg-wine/[.04] px-8 py-8 lg:px-9">
        <p className="font-serif text-[19px] italic leading-[1.6] text-obsidian">
          &ldquo;For our enterprise clients, we implement a custom version of the Align operating
          system for your firm. That includes custom dashboards, custom functionality, connection to
          your data sources, and integration with the systems you already use, so that Align can
          optimize how your people work and live.&rdquo;
        </p>
      </blockquote>

      <div className="mb-11 grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col border border-wine/10 bg-white px-8 py-9">
          <div className="mb-2.5 text-[9px] font-medium uppercase tracking-[.18em] text-wine">
            Embedded engagement
          </div>
          <h3 className="mb-3 font-serif text-[22px] font-medium leading-[1.2] text-obsidian">
            Implementation &amp; partnership
          </h3>
          {startingPrice && (
            <p className="mb-3 font-serif text-lg text-wine">Starting at {startingPrice}</p>
          )}
          <p className="mb-6 text-[13px] font-light leading-[1.7] text-ink-muted">
            We go in, set Align up around how your company actually operates, and work alongside your
            leadership. Dashboards, workflows and integrations are scoped to your systems and how your
            team works.
          </p>
          <ul className="mb-7 flex flex-grow flex-col gap-3.5">
            <CheckItem>Custom dashboards and functionality, built around your firm.</CheckItem>
            <CheckItem>
              Connection to your data sources and integration with the systems you already use. Single
              sign-on can be added for enterprise rollouts.
            </CheckItem>
            <CheckItem>Custom agentic workflows built around how your team operates.</CheckItem>
            <CheckItem>
              We start with work updates turned into decisions, tasks and owners, basic goals, and
              value realization.
            </CheckItem>
            <CheckItem>Executive advisory with Samuel, available as an add-on and not bundled.</CheckItem>
          </ul>
          <CtaButton intent="organization" className="w-full">
            Talk to Us →
          </CtaButton>
        </div>

        <div className="flex flex-col border border-gold/20 bg-obsidian px-8 py-9">
          <div className="mb-2.5 text-[9px] font-medium uppercase tracking-[.18em] text-gold">
            Higher-end customization
          </div>
          <h3 className="mb-3 font-serif text-[22px] font-medium leading-[1.2] text-white">Sovereign build</h3>
          <p className="mb-6 text-[13px] font-light leading-[1.7] text-white/50">
            For firms and government partners that need everything in full self-custody: full data, AI
            inference and platform sovereignty, with sensitive IP staying inside your boundary. Scoped
            as a custom build, per client.
          </p>
          <ul className="mb-7 flex flex-grow flex-col gap-3.5">
            <CheckItem dark>Fully private deployment, built for your requirements.</CheckItem>
            <CheckItem dark>Sensitive IP stays inside your firm.</CheckItem>
            <CheckItem dark>Deeper integration into internal data sources and existing systems.</CheckItem>
          </ul>
          <CtaButton intent="organization" variant="gold" className="w-full">
            Talk to Us →
          </CtaButton>
        </div>
      </div>

      <div className="text-center">
        <CtaButton intent="organization" variant="outline">
          See It In Action →
        </CtaButton>
        <p className="mx-auto mt-5 max-w-[560px] text-xs font-light leading-[1.7] text-ink-muted">
          We start by understanding your problem. Scope and budget are set together on the call, and
          nothing is quoted before then.
        </p>
      </div>
    </Section>
  )
}
