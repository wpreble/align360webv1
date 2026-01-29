import { Zap, Brain, Compass } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Zap,
    title: "Solve what's urgent",
    description: "Get instant, life-applicable solutions for the problem in front of you.",
    timeframe: "Minutes",
    color: "red",
  },
  {
    number: 2,
    icon: Brain,
    title: "Discover your wiring",
    description: "Understand how you create value, make decisions, and find impact.",
    timeframe: "30 days",
    color: "turquoise",
  },
  {
    number: 3,
    icon: Compass,
    title: "Align for what's next",
    description: "Build a thriving life of peace and simplicity—from the inside out.",
    timeframe: "90 days",
    color: "orange",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 px-4 lg:px-16 bg-gradient-to-b from-cream to-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-semibold text-turquoise tracking-widest uppercase bg-turquoise/10 px-4 py-2 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-azure mt-4">
            Three steps. One clear path.
          </h2>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-[60px] left-[16%] right-[16%] h-1 bg-azure/10 rounded-full">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-red to-turquoise rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Step number circle */}
                <div className="relative z-10 flex justify-center mb-8">
                  <div 
                    className={`w-[120px] h-[120px] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 ${
                      step.color === "red" ? "bg-red shadow-red/30" :
                      step.color === "turquoise" ? "bg-turquoise shadow-turquoise/30" :
                      "bg-orange shadow-orange/30"
                    }`}
                  >
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg shadow-azure/5 hover:translate-y-[-4px] transition-all duration-300">
                  <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${
                    step.color === "red" ? "text-red" :
                    step.color === "turquoise" ? "text-turquoise" :
                    "text-orange"
                  }`}>
                    Step {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-azure mb-3">{step.title}</h3>
                  <p className="text-azure/70 mb-6 leading-relaxed">{step.description}</p>
                  <div className="inline-block bg-azure/5 px-4 py-2 rounded-full">
                    <span className="text-xs font-bold text-azure/60 uppercase tracking-wide">
                      {step.timeframe}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-6">
              {/* Vertical line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[30px] top-[70px] bottom-[-32px] w-0.5 bg-azure/10" />
              )}

              {/* Icon */}
              <div 
                className={`relative z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center flex-shrink-0 ${
                  step.color === "red" ? "bg-red" :
                  step.color === "turquoise" ? "bg-turquoise" :
                  "bg-orange"
                }`}
              >
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                  step.color === "red" ? "text-red" :
                  step.color === "turquoise" ? "text-turquoise" :
                  "text-orange"
                }`}>
                  Step {step.number} — {step.timeframe}
                </div>
                <h3 className="text-lg font-bold text-azure mb-2">{step.title}</h3>
                <p className="text-azure/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
