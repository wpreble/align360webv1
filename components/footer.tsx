import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-azure-dark py-16 px-4 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-cream/80 leading-relaxed mb-8">
          After you optimize—you organize.
          <br />
          Finances. Relationships. Health. Wealth. Legacy.
          <br />
          But it only works when the foundation is clear.
        </p>

        <p className="text-xl font-bold text-orange mb-2">
          Align360 = Optimize + Organize
        </p>
        <p className="text-cream/70 italic">
          {"Solve what's urgent. Stay aligned for what's next."}
        </p>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Align360"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-cream font-bold text-lg">Align360</span>
          </div>
          <p className="text-cream/50 text-sm">
            © 2025 Feeling Like Chocolate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
