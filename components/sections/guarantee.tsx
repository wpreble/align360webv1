import { Zap, Heart } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-28 px-4 lg:px-16 bg-gradient-to-br from-turquoise to-[#5d8a82] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative">
        <span className="inline-block text-sm font-semibold text-white/80 tracking-widest uppercase bg-white/10 px-4 py-2 rounded-full mb-6">
          Our Promise
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16">
          We{"'"}re committed to your transformation
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-left border border-white/20 hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center mb-5">
              <Zap className="w-6 h-6 text-orange" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Urgent problems</h4>
            <p className="text-white/85 leading-relaxed">
              {"Life-applicable solutions customized for who you are, what you're capable of, and the impact you hope to create."}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-left border border-white/20 hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-cream/20 flex items-center justify-center mb-5">
              <Heart className="w-6 h-6 text-cream" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Long-term clarity</h4>
            <p className="text-white/85 leading-relaxed">
              A thriving life of peace and simplicity—or we work with you until you get there.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
