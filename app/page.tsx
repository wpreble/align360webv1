import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { ProblemSection } from "@/components/sections/problem"
import { SolutionSection } from "@/components/sections/solution"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { OutcomesSection } from "@/components/sections/outcomes"
import { WhatsIncludedSection } from "@/components/sections/whats-included"
import { WhoItsForSection } from "@/components/sections/who-its-for"
import { FounderSection } from "@/components/sections/founder"
import { ComparisonSection } from "@/components/sections/comparison"
import { GuaranteeSection } from "@/components/sections/guarantee"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <OutcomesSection />
      <WhatsIncludedSection />
      <WhoItsForSection />
      <FounderSection />
      <ComparisonSection />
      <GuaranteeSection />
      <CTASection />
      <Footer />
    </main>
  )
}
