import type { Metadata } from "next"
import { IndividualHero } from "@/components/sections/individual/hero"
import { ConvictionBar } from "@/components/sections/individual/conviction-bar"
import { IndividualProblem } from "@/components/sections/individual/problem"
import { IndividualSolution } from "@/components/sections/individual/solution"
import { IndividualHowItWorks } from "@/components/sections/individual/how-it-works"
import { WhatYouReceive } from "@/components/sections/individual/what-you-receive"
import { Calibration } from "@/components/sections/individual/calibration"
import { Platform } from "@/components/sections/individual/platform"
import { DashboardPreview } from "@/components/sections/individual/dashboard-preview"
import { IndividualWho } from "@/components/sections/individual/who-its-for"
import { IndividualPricing } from "@/components/sections/individual/pricing"
import { IndividualFounder } from "@/components/sections/individual/founder"
import { IndividualComparison } from "@/components/sections/individual/comparison"
import { IndividualFinalCta } from "@/components/sections/individual/final-cta"

export const metadata: Metadata = {
  title: "For Individuals | Put out the fires. Then become one.",
  description:
    "Align360 solves what's urgent, then builds the clarity to ignite everything else. One operating system that evolves with you: discover your wiring, align your career, and build a life that holds together.",
  openGraph: {
    title: "Put out the fires. Then become one.",
    description:
      "Align360 solves what's urgent, then builds the clarity to ignite everything else. One system. A lifetime of clarity.",
  },
}

export default function IndividualsPage() {
  return (
    <>
      <IndividualHero />
      <ConvictionBar />
      <IndividualProblem />
      <IndividualSolution />
      <IndividualHowItWorks />
      <WhatYouReceive />
      <Calibration />
      <Platform />
      <DashboardPreview />
      <IndividualWho />
      <IndividualPricing />
      <IndividualFounder />
      <IndividualComparison />
      <IndividualFinalCta />
    </>
  )
}
