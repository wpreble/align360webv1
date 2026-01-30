"use client"

import { AlertCircle, ArrowRight } from "lucide-react"

const painPoints = [
  "Education",
  "Career",
  "AI disruption",
  "Money",
  "Relationships",
]

interface ProblemSectionProps {
  onOpenSignup: () => void
}

export function ProblemSection({ onOpenSignup }: ProblemSectionProps) {
  return (
    <section className="py-28 px-4 lg:px-16 bg-azure relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-cream rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-cream rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-red/20 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-red" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-10 leading-snug text-center text-balance">
          {"You're navigating life without a system that knows you."}
        </h2>

        {/* Pain points as visual pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {painPoints.map((point) => (
            <span
              key={point}
              className="px-5 py-2 bg-cream/10 text-cream/90 rounded-full text-sm font-medium border border-cream/20"
            >
              {point}
            </span>
          ))}
        </div>

        <div className="space-y-6 text-center">
          <p className="text-xl md:text-2xl text-cream/90 leading-relaxed">
            {"You're making decisions—but you're "}
            <span className="text-orange font-semibold">guessing</span>.{" "}
            <span className="text-orange font-semibold">Comparing</span>.{" "}
            <span className="text-orange font-semibold">Chasing</span> things that don{"'"}t fit.
          </p>
          <p className="text-lg text-cream/75">
            And every time life shifts, you start over from scratch.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onOpenSignup}
            className="group inline-flex items-center justify-center gap-2 bg-orange text-azure px-8 py-4 rounded-xl font-semibold text-lg hover:translate-y-[-2px] hover:shadow-xl hover:shadow-orange/30 transition-all"
          >
            Stop Guessing
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Visual divider */}
        <div className="flex items-center justify-center mt-16 gap-4">
          <div className="w-16 h-px bg-turquoise/50" />
          <div className="w-3 h-3 rotate-45 border-2 border-turquoise/50" />
          <div className="w-16 h-px bg-turquoise/50" />
        </div>
      </div>
    </section>
  )
}
