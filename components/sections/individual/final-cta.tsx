"use client"

import Image from "next/image"
import { useState } from "react"
import { CtaButton } from "@/components/site/cta-button"
import { useSignup } from "@/components/signup-provider"

export function IndividualFinalCta() {
  const { openSignup } = useSignup()
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    openSignup({ type: "individual", email })
  }

  return (
    <section
      id="cta"
      className="relative scroll-mt-16 overflow-hidden bg-obsidian px-7 py-[100px] text-center lg:px-[72px] lg:py-[140px]"
    >
      <div className="glow-center pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[680px]">
        <Image
          src="/images/align-mark.png"
          alt="Align"
          width={432}
          height={306}
          className="mx-auto mb-10 h-auto w-[84px] opacity-70"
        />
        <div className="mb-7 flex items-center justify-center gap-[18px]">
          <span className="h-px w-9 bg-gold/30" aria-hidden />
          <span className="text-[10px] font-medium uppercase tracking-[.3em] text-gold/55">
            Founder's Circle now open
          </span>
          <span className="h-px w-9 bg-gold/30" aria-hidden />
        </div>
        <h2 className="mb-4 font-serif [font-size:clamp(36px,6vw,72px)] font-medium leading-none text-white">
          Ready to <em className="text-gold-light">optimize?</em>
        </h2>
        <p className="mb-12 text-[15px] font-light leading-[1.8] text-white/60">
          Join the Founder's Circle for early access and direct input on what we build next.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mb-[18px] flex max-w-[460px] flex-col sm:flex-row">
          <label htmlFor="cta-email" className="sr-only">
            Email address
          </label>
          <input
            id="cta-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to begin"
            className="flex-1 border border-white/10 bg-white/[.07] px-5 py-4 text-[13px] text-white outline-none transition-colors placeholder:text-white/45 focus:border-gold/35 sm:border-r-0"
          />
          <button type="submit" className="btn btn-primary whitespace-nowrap !px-[26px] !py-4 !text-[10px]">
            Begin →
          </button>
        </form>

        <p className="mb-8 text-[10px] tracking-[.1em] text-white/45">
          Early access + direct input on what we build next · Moves to Life Systems only with your consent
        </p>

        <CtaButton intent="individual" variant="ghost">
          Not sure yet? Discover your wiring, free →
        </CtaButton>
      </div>
    </section>
  )
}
