"use client"

import Image from "next/image"
import { BookOpen, Briefcase, Globe, ArrowRight } from "lucide-react"

const credentials = [
  { icon: Briefcase, text: "$200M+ in executed deals" },
  { icon: BookOpen, text: "5 books on leadership" },
  { icon: Globe, text: "Fortune 500 experience" },
]

interface FounderSectionProps {
  onOpenSignup: () => void
}

export function FounderSection({ onOpenSignup }: FounderSectionProps) {
  return (
    <section id="founder" className="py-28 px-4 lg:px-16 bg-azure">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-orange tracking-widest uppercase bg-orange/10 px-4 py-2 rounded-full mb-4">
            The Founder
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mt-4 text-balance">
            Built by someone who had to figure it out the hard way.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left column: Photo and credentials */}
          <div className="lg:w-2/5 flex flex-col items-center lg:items-start">
            <div className="relative">
              <Image
                src="/images/founder-headshot.png"
                alt="Samuel Ngu, Founder of Align360"
                width={320}
                height={320}
                className="rounded-2xl shadow-2xl"
              />
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-turquoise/20 rounded-2xl -z-10" />
            </div>

            <div className="mt-8 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-cream">Samuel Ngu</h3>
              <p className="text-turquoise font-medium text-lg">Founder, Align360</p>
            </div>

            {/* Credentials */}
            <div className="mt-6 space-y-3 w-full">
              {credentials.map((cred, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                  <cred.icon className="w-5 h-5 text-orange flex-shrink-0" />
                  <span className="text-cream/85 text-sm font-medium">{cred.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Story */}
          <div className="lg:w-3/5 text-lg text-cream/90 leading-relaxed">
            <div className="space-y-6">
              <p>
                Samuel Ngu grew up selling food at bus stops in West Africa to pay his own tuition.
              </p>
              <p>
                {"By his teens, he'd helped scale a multimillion-dollar family business. Then political unrest forced him to flee—and rebuild from nothing in the U.S."}
              </p>
              <p>
                {"He's been near homeless. Mentored by federal judges. Worked alongside diplomats. Closed nine-figure corporate deals. Led value creation inside a Fortune 500 firm."}
              </p>
            </div>

            <blockquote className="my-10 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange to-turquoise rounded-full" />
              <p className="text-xl md:text-2xl font-semibold text-cream pl-6">
                Across every environment, he noticed the same thing: Smart, capable people were stalling—not because they lacked talent, but because their{" "}
                <span className="text-orange">identity</span>,{" "}
                <span className="text-orange">decisions</span>, and{" "}
                <span className="text-orange">execution</span> weren{"'"}t aligned.
              </p>
            </blockquote>

            <div className="space-y-4">
              <p>That gap quietly destroys momentum, confidence, and results.</p>
              <p className="font-semibold text-cream">So he built the solution.</p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mt-8 border border-white/10">
              <p className="text-cream/85">
                {"Align360 isn't theory. It's the system Samuel wished existed when he was starting over with nothing—built from two decades of lived experience, $200M+ in real-world execution, and 5 books on leadership and resilience."}
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button
                onClick={onOpenSignup}
                className="group inline-flex items-center justify-center gap-2 bg-orange text-azure px-8 py-4 rounded-xl font-semibold text-lg hover:translate-y-[-2px] hover:shadow-xl hover:shadow-orange/30 transition-all"
              >
                Join the Founder{"'"}s Circle
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
