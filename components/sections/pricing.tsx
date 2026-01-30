"use client"

interface PricingSectionProps {
  onOpenSignup: () => void
}

export function PricingSection({ onOpenSignup }: PricingSectionProps) {
  const plans = [
    {
      name: "OPTIMIZED",
      description: "Everything you need to discover your wiring and align your career path",
      regularPrice: 297,
      founderPrice: 178,
      monthlyEquiv: 14.83,
      features: [
        "Full DesignSuite Access",
        "Career Alignment Assessment",
        "Resume Analyzer and Builder",
        "Job Opportunity Finder",
        "Skills Gap Analyzer",
        "Job Market Insights",
        "Interview Preparation",
        "Salary Negotiation Calculator",
        "LinkedIn Optimization",
      ],
      popular: false,
      color: "turquoise",
    },
    {
      name: "FULL STACK",
      description: "Complete transformation with advanced tools and priority support",
      regularPrice: 497,
      founderPrice: 298,
      monthlyEquiv: 24.83,
      features: [
        "Everything in OPTIMIZED",
        "ORGANIZED Add-on Included",
        "Priority Support",
        "1-on-1 Strategy Session",
        "Custom Career Roadmap",
        "Lifetime Updates",
        "Early Access to New Tools",
        "Exclusive Community Access",
        "Quarterly Check-ins",
      ],
      popular: true,
      color: "red",
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-azure relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
            Limited Time Offer - Founder Circle Now Open
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4 text-balance">
            Join the Founder Circle
          </h2>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto text-pretty">
            Lock in 40% off annual pricing forever. Be among the first to transform your career with Align360.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] ${
                plan.popular
                  ? "bg-cream border-4 border-red shadow-2xl shadow-red/20"
                  : "bg-cream/10 backdrop-blur-sm border-2 border-cream/20"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-red text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-azure" : "text-cream"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-azure/70" : "text-cream/70"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-lg line-through ${plan.popular ? "text-azure/40" : "text-cream/40"}`}>
                    ${plan.regularPrice}/yr
                  </span>
                  <span className="bg-orange/20 text-orange px-2 py-0.5 rounded text-xs font-bold">
                    SAVE 40%
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-azure" : "text-cream"}`}>
                    ${plan.founderPrice}
                  </span>
                  <span className={`text-lg ${plan.popular ? "text-azure/70" : "text-cream/70"}`}>/year</span>
                </div>
                <p className={`text-sm mt-1 ${plan.popular ? "text-azure/60" : "text-cream/60"}`}>
                  Just ${plan.monthlyEquiv}/month billed annually
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-turquoise" : "text-turquoise"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.popular ? "text-azure/80" : "text-cream/80"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={onOpenSignup}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:translate-y-[-2px] ${
                  plan.popular
                    ? "bg-red text-white hover:shadow-xl hover:shadow-red/30"
                    : "bg-cream text-azure hover:shadow-xl hover:shadow-cream/20"
                }`}
              >
                Join Founder Circle
              </button>
            </div>
          ))}
        </div>

        {/* Trust elements */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-cream/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Cancel Anytime</span>
            </div>
          </div>
          <p className="mt-6 text-cream/50 text-sm max-w-lg mx-auto">
            Founder Circle pricing is locked in for life. Even as prices increase, you will always pay your founding rate.
          </p>
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenSignup}
            className="inline-flex items-center gap-2 bg-orange text-azure px-8 py-4 rounded-xl font-bold hover:translate-y-[-2px] hover:shadow-xl hover:shadow-orange/30 transition-all"
          >
            Lock In Your Founder Rate
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
