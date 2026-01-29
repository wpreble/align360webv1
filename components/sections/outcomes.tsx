import { Clock, Target, TrendingUp, Sparkles, Shield, Zap } from "lucide-react"

const outcomes = [
  {
    timeframe: "45 minutes",
    metric: "45",
    unit: "min",
    icon: Zap,
    items: ["Articulate exactly how you create value"],
  },
  {
    timeframe: "30 days",
    metric: "50-70",
    unit: "%",
    icon: Target,
    items: [
      "Reduce major life/career indecision by 50-70%",
      "Identify competitive advantages formed through adversity",
      "Make decisions from clarity—not fear of missing out",
    ],
  },
  {
    timeframe: "90 days",
    metric: "90",
    unit: "days",
    icon: Sparkles,
    items: ["Access a thriving life of peace and simplicity"],
  },
]

export function OutcomesSection() {
  return (
    <section className="py-28 px-4 lg:px-16 bg-azure relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-orange tracking-widest uppercase bg-orange/10 px-4 py-2 rounded-full mb-4">
            Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mt-4">
            What optimization actually looks like
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Icon and timeframe header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-turquoise/20 flex items-center justify-center">
                  <outcome.icon className="w-5 h-5 text-turquoise" />
                </div>
                <span className="text-sm font-bold text-orange uppercase tracking-wide">
                  In {outcome.timeframe}
                </span>
              </div>

              {/* Big metric */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-bold text-cream">
                    {outcome.metric}
                  </span>
                  <span className="text-xl text-cream/60 font-medium">
                    {outcome.unit}
                  </span>
                </div>
              </div>

              {/* Outcome items */}
              <ul className="space-y-3">
                {outcome.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-turquoise mt-2.5 flex-shrink-0" />
                    <span className="text-cream/85 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
