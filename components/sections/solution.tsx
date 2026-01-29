import { Sparkles } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="py-28 px-4 lg:px-16 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-turquoise/15 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-turquoise" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-azure mb-10 leading-snug text-center text-balance">
          Align360 is one operating system that evolves with you.
        </h2>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg shadow-azure/5">
          <div className="space-y-8 text-center">
            <p className="text-xl text-azure/85 leading-relaxed">
              It starts by optimizing the foundation:
            </p>

            {/* Two pillars visual */}
            <div className="flex flex-col md:flex-row justify-center gap-6 my-8">
              <div className="flex-1 max-w-xs mx-auto bg-turquoise/10 rounded-xl p-6 border-2 border-turquoise/30">
                <div className="text-sm font-bold text-turquoise uppercase tracking-wider mb-2">Pillar 1</div>
                <div className="text-2xl font-bold text-azure">Who you are</div>
              </div>
              <div className="hidden md:flex items-center">
                <div className="w-8 h-0.5 bg-azure/20" />
                <div className="text-azure/40 font-bold px-2">+</div>
                <div className="w-8 h-0.5 bg-azure/20" />
              </div>
              <div className="flex-1 max-w-xs mx-auto bg-orange/10 rounded-xl p-6 border-2 border-orange/30">
                <div className="text-sm font-bold text-orange uppercase tracking-wider mb-2">Pillar 2</div>
                <div className="text-2xl font-bold text-azure">What you do</div>
              </div>
            </div>

            <p className="text-lg text-azure/80 leading-relaxed">
              Then it helps you organize everything else—
              <span className="font-medium">finances, relationships, health, wealth, legacy</span>.
            </p>

            <div className="pt-6 border-t border-azure/10">
              <p className="text-xl font-semibold text-azure">
                But optimization comes first.
              </p>
              <p className="text-azure/70 mt-2">
                You can{"'"}t organize a life you don{"'"}t understand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
