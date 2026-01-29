import { GraduationCap, Users, BookOpen } from "lucide-react"

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Navigating education, career choices, and AI disruption",
    highlight: "Find your path before the world picks one for you",
  },
  {
    icon: Users,
    title: "Parents",
    description: "Helping kids find direction without pressure",
    highlight: "Guide without guessing—with tools that actually work",
  },
  {
    icon: BookOpen,
    title: "Teachers",
    description: "Equipping the next generation with clarity and tools",
    highlight: "Give students more than content—give them a system",
  },
]

export function WhoItsForSection() {
  return (
    <section className="py-28 px-4 lg:px-16 bg-gradient-to-b from-muted to-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-turquoise tracking-widest uppercase bg-turquoise/10 px-4 py-2 rounded-full mb-4">
            {"Who It's For"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-azure mt-4">
            Built for people at the starting line
          </h2>
          <p className="text-azure/70 mt-4 max-w-2xl mx-auto">
            Whether you{"'"}re figuring out your own path or helping someone else find theirs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <div 
              key={audience.title} 
              className="group bg-white rounded-2xl p-8 shadow-lg shadow-azure/5 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-azure flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <audience.icon className="w-10 h-10 text-cream" />
              </div>
              <h3 className="text-xl font-bold text-azure mb-2">{audience.title}</h3>
              <p className="text-azure/70 mb-4">{audience.description}</p>
              <div className="pt-4 border-t border-azure/10">
                <p className="text-sm font-medium text-turquoise">{audience.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
