"use client"

import { Cpu, Compass, ArrowRight } from "lucide-react"

const designSuiteTools = [
  { icon: "W", name: "Wiring for Impact™", description: "How you're built to contribute", color: "turquoise" },
  { icon: "O", name: "Orientation for Impact™", description: "How you see, decide, and prioritize", color: "turquoise" },
  { icon: "R", name: "Rejection Gift Finder", description: "How setbacks become strengths", color: "orange" },
  { icon: "D", name: "Decision Simulation Lab", description: "Practice decisions safely", color: "turquoise" },
  { icon: "I", name: "Impact Pathways", description: "What to build next", color: "orange" },
  { icon: "M", name: "Market Intelligence", description: "Where the world is moving", color: "turquoise" },
  { icon: "F", name: "Family Mechanics Simulator", description: "How life decisions interact over time", color: "orange" },
]

const careerNavigatorTools = [
  { icon: "1", name: "Career Alignment Assessment", color: "red" },
  { icon: "2", name: "Resume Analyzer and Builder", color: "red" },
  { icon: "3", name: "Job Opportunity Finder", color: "red" },
  { icon: "4", name: "Skills Gap Analyzer", color: "red" },
  { icon: "5", name: "Job Market Insights", color: "red" },
  { icon: "6", name: "Interview Preparation", color: "red" },
  { icon: "7", name: "Salary Negotiation Calculator", color: "red" },
  { icon: "8", name: "LinkedIn Optimization", color: "red" },
]

function ToolItem({ icon, name, description, color }: { icon: string; name: string; description?: string; color: string }) {
  const colorClasses = {
    turquoise: "bg-turquoise/10 border-turquoise/20 hover:border-turquoise/40",
    orange: "bg-orange/10 border-orange/20 hover:border-orange/40",
    red: "bg-red/10 border-red/20 hover:border-red/40",
  }
  const iconColorClasses = {
    turquoise: "bg-turquoise text-white",
    orange: "bg-orange text-white",
    red: "bg-red text-white",
  }

  return (
    <div className={`rounded-xl p-5 flex items-center gap-4 border-2 transition-all duration-200 hover:translate-x-1 ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${iconColorClasses[color as keyof typeof iconColorClasses]}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-azure">{name}</h4>
        {description && <p className="text-sm text-azure/65">{description}</p>}
      </div>
    </div>
  )
}

interface WhatsIncludedSectionProps {
  onOpenSignup: () => void
}

export function WhatsIncludedSection({ onOpenSignup }: WhatsIncludedSectionProps) {
  return (
    <section id="whats-included" className="py-28 px-4 lg:px-16 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-turquoise tracking-widest uppercase bg-turquoise/10 px-4 py-2 rounded-full mb-4">
            {"What's Included"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-azure mt-4">
            Everything in the Optimize Phase
          </h2>
        </div>

        <div className="space-y-16">
          {/* DesignSuite */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-turquoise flex items-center justify-center">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-azure">DesignSuite</h3>
                <p className="text-turquoise font-medium">Understand your wiring</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {designSuiteTools.map((tool) => (
                <ToolItem key={tool.icon} {...tool} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-azure/10" />
            <div className="w-2 h-2 rounded-full bg-azure/20" />
            <div className="flex-1 h-px bg-azure/10" />
          </div>

          {/* Career Navigator */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-red flex items-center justify-center">
                <Compass className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-azure">Career Navigator</h3>
                <p className="text-red font-medium">Align your work</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {careerNavigatorTools.map((tool) => (
                <ToolItem key={tool.icon} {...tool} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={onOpenSignup}
            className="group inline-flex items-center justify-center gap-2 bg-turquoise text-white px-8 py-4 rounded-xl font-semibold text-lg hover:translate-y-[-2px] hover:shadow-xl hover:shadow-turquoise/30 transition-all"
          >
            Access All Tools
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
