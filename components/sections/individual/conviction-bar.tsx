export function ConvictionBar() {
  return (
    <div className="bg-wine px-7 py-12 lg:px-[72px] lg:py-[60px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-7 text-center lg:flex-row lg:justify-between lg:gap-12 lg:text-left">
        <blockquote className="max-w-[640px] font-serif [font-size:clamp(18px,2.5vw,26px)] leading-[1.5] text-white">
          &ldquo;Most platforms sell a course and move on. Align builds a{" "}
          <em className="text-gold-light">continuously improving model of who you are</em>, and routes
          every product, decision and recommendation through it.&rdquo;
        </blockquote>
        <span className="hidden h-20 w-px flex-shrink-0 bg-white/[.12] lg:block" aria-hidden />
        <div className="flex-shrink-0 lg:text-right">
          <div className="font-serif text-[52px] font-medium leading-none text-gold-light">5</div>
          <div className="mt-1 text-[10px] font-medium uppercase leading-[1.5] tracking-[.18em] text-white/35">
            Assessments build
            <br />
            your living model
          </div>
        </div>
      </div>
    </div>
  )
}
