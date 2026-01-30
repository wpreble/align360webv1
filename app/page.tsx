"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { ProblemSection } from "@/components/sections/problem"
import { SolutionSection } from "@/components/sections/solution"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { OutcomesSection } from "@/components/sections/outcomes"
import { WhatsIncludedSection } from "@/components/sections/whats-included"
import { WhoItsForSection } from "@/components/sections/who-its-for"
import { PricingSection } from "@/components/sections/pricing"
import { FounderSection } from "@/components/sections/founder"
import { ComparisonSection } from "@/components/sections/comparison"
import { GuaranteeSection } from "@/components/sections/guarantee"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/footer"
import { SignupModal } from "@/components/signup-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)

  return (
    <main>
      <Navigation />
      <HeroSection onOpenSignup={openModal} />
      <ProblemSection onOpenSignup={openModal} />
      <SolutionSection onOpenSignup={openModal} />
      <HowItWorksSection onOpenSignup={openModal} />
      <OutcomesSection onOpenSignup={openModal} />
      <WhatsIncludedSection onOpenSignup={openModal} />
      <WhoItsForSection onOpenSignup={openModal} />
      <PricingSection onOpenSignup={openModal} />
      <FounderSection onOpenSignup={openModal} />
      <ComparisonSection onOpenSignup={openModal} />
      <GuaranteeSection onOpenSignup={openModal} />
      <CTASection onOpenSignup={openModal} />
      <Footer />
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
