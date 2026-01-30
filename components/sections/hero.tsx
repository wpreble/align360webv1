"use client"

import Image from "next/image"
import Link from "next/link"

interface HeroSectionProps {
  onOpenSignup: () => void
}

export function HeroSection({ onOpenSignup }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-24 px-4 lg:px-16 bg-cream">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        <div className="max-w-xl lg:max-w-none order-2 lg:order-1">
          <div className="animate-fade-in-up animation-delay-100 flex items-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-turquoise" />
            <span className="text-sm font-semibold text-turquoise tracking-widest uppercase">
              The Optimize Phase
            </span>
          </div>
          
          <h1 className="animate-fade-in-up animation-delay-200 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-azure mb-6 text-balance">
            Put out the fires.
            <br />
            Then become <span className="text-red">one</span>.
          </h1>
          
          <p className="animate-fade-in-up animation-delay-300 text-xl text-azure/80 mb-10 leading-relaxed">
            {"Align360 solves what's urgent—then builds the clarity to ignite everything else."}
          </p>
          
          <div className="animate-fade-in-up animation-delay-400 flex flex-wrap gap-4">
            <button
              onClick={onOpenSignup}
              className="bg-red text-white px-8 py-4 rounded-lg font-semibold hover:translate-y-[-2px] hover:shadow-xl hover:shadow-red/30 transition-all"
            >
              Start Optimizing
            </button>
            <Link
              href="#how-it-works"
              className="border-2 border-azure text-azure px-8 py-4 rounded-lg font-semibold hover:bg-azure hover:text-cream transition-all"
            >
              {"Learn how it works ↓"}
            </Link>
          </div>
        </div>
        
        <div className="animate-fade-in-up animation-delay-300 flex justify-center order-1 lg:order-2">
          <Image
            src="/images/logo.jpg"
            alt="Align360 Logo"
            width={450}
            height={450}
            className="w-full max-w-xs lg:max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  )
}
