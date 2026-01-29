import { Check, X } from "lucide-react"

const comparisons = [
  {
    align360: "System that evolves with you",
    other: "Static PDF you forget in a week",
  },
  {
    align360: "Solves urgent problems + builds long-term clarity",
    other: "One-time insight, no implementation",
  },
  {
    align360: "Ethically governed AI",
    other: "Engagement-optimized algorithms",
  },
  {
    align360: "Optimization → Organization progression",
    other: "Scattered tools, no pathway",
  },
]

export function ComparisonSection() {
  return (
    <section className="py-28 px-4 lg:px-16 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-turquoise tracking-widest uppercase bg-turquoise/10 px-4 py-2 rounded-full mb-4">
            Why This Is Different
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-azure mt-4">
            {"This isn't another personality test."}
          </h2>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-azure/10">
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="p-6 text-center font-bold text-white bg-turquoise">
              <span className="text-lg">Align360</span>
            </div>
            <div className="p-6 text-center font-bold text-cream bg-azure">
              <span className="text-lg">Personality Tests</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 border-b border-azure/8 last:border-b-0"
            >
              <div className="p-5 bg-turquoise/5 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-turquoise/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-turquoise" />
                </div>
                <span className="font-medium text-azure">{comparison.align360}</span>
              </div>
              <div className="p-5 flex items-start gap-3 border-t md:border-t-0 md:border-l border-azure/8">
                <div className="w-6 h-6 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-red/70" />
                </div>
                <span className="text-azure/60">{comparison.other}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-azure rounded-xl px-8 py-5">
            <p className="text-lg font-semibold text-cream">
              Personality tests tell you what you are.
              <br />
              <span className="text-orange">Align360 shows you what to do with it.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
