import { EnterpriseHero } from "@/components/sections/enterprise/hero"
import { PainQuotes } from "@/components/sections/enterprise/pain-quotes"
import { RealCost } from "@/components/sections/enterprise/real-cost"
import { FiveDoors } from "@/components/sections/enterprise/five-doors"
import { HowWeWork } from "@/components/sections/enterprise/how-we-work"
import { Capabilities } from "@/components/sections/enterprise/capabilities"
import { Contexts } from "@/components/sections/enterprise/contexts"
import { WhyAlign } from "@/components/sections/enterprise/why-align"
import { Offer } from "@/components/sections/enterprise/offer"
import { Qualify } from "@/components/sections/enterprise/qualify"
import { Pilot } from "@/components/sections/enterprise/pilot"
import { Trust } from "@/components/sections/enterprise/trust"
import { EnterpriseFinalCta } from "@/components/sections/enterprise/final-cta"

export default function EnterprisePage() {
  return (
    <>
      <EnterpriseHero />
      <PainQuotes />
      <RealCost />
      <FiveDoors />
      <HowWeWork />
      <Capabilities />
      <Contexts />
      <WhyAlign />
      <Offer />
      <Qualify />
      <Pilot />
      <Trust />
      <EnterpriseFinalCta />
    </>
  )
}
