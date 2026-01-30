"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

interface CTASectionProps {
  onOpenSignup: () => void
}

export function CTASection({ onOpenSignup }: CTASectionProps) {
  return (
    <section className="py-32 px-4 lg:px-16 bg-cream text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-turquoise/5 to-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-red/10 text-red px-4 py-2 rounded-full text-sm font-semibold mb-8">
          <Sparkles className="w-4 h-4" />
          Founder{"'"}s Circle Now Open
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-azure mb-6">
          Ready to optimize?
        </h2>
        <p className="text-xl text-azure/70 mb-12 max-w-xl mx-auto">
          Join the Founder{"'"}s Circle for early access and direct input on what we build next.
        </p>

        <div className="flex flex-col items-center gap-6">
          <button
            onClick={onOpenSignup}
            className="group bg-red text-white px-12 py-5 rounded-xl text-lg font-semibold hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-red/30 transition-all flex items-center gap-3"
          >
            {"Join Founder's Circle"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-col items-center gap-1">
            <p className="text-sm text-azure/50">
              Early access + direct input on what we build next
            </p>
          </div>

          <div className="h-px w-16 bg-azure/20 my-4" />

          <Link
            href="#"
            className="text-turquoise font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            {"Not sure yet? Discover Your Wiring — Free"}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
