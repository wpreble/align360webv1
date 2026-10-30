import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type Tone = "white" | "stone" | "obsidian" | "wine" | "cherry"

const toneClasses: Record<Tone, string> = {
  white: "bg-white text-obsidian",
  stone: "bg-stone text-obsidian",
  obsidian: "bg-obsidian text-white",
  wine: "bg-wine text-white",
  cherry: "bg-cherry text-white",
}

const widthClasses = {
  xl: "max-w-[1200px]",
  lg: "max-w-[1040px]",
  md: "max-w-[900px]",
  sm: "max-w-[760px]",
}

interface SectionProps {
  id?: string
  tone?: Tone
  width?: keyof typeof widthClasses
  className?: string
  innerClassName?: string
  children: ReactNode
}

export function Section({
  id,
  tone = "white",
  width = "xl",
  className,
  innerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-16 px-7 py-20 lg:px-[72px] lg:py-[120px]",
        toneClasses[tone],
        className,
      )}
    >
      <div className={cn("relative mx-auto", widthClasses[width], innerClassName)}>{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  sub?: ReactNode
  dark?: boolean
  center?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, sub, dark, center, className }: SectionHeadingProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      <div className={cn("eyebrow mb-3.5", dark && "eyebrow-gold", center && "eyebrow-center")}>
        {eyebrow}
      </div>
      <h2 className={cn("h2-serif", dark ? "text-white" : "text-obsidian")}>{title}</h2>
      {sub && (
        <p
          className={cn(
            "mt-[18px] text-[15px] font-light leading-[1.8]",
            dark ? "text-white/60" : "text-ink-muted",
            center ? "mx-auto max-w-[560px]" : "max-w-[560px]",
          )}
        >
          {sub}
        </p>
      )}
    </div>
  )
}

/** Marks anything that is designed but not built yet, so no one reads it as live. */
export function PrototypeTag({ onLight, className }: { onLight?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-dashed px-2.5 py-1 text-[9px] font-medium uppercase tracking-[.2em]",
        onLight ? "border-wine/40 text-wine" : "border-gold/50 text-gold",
        className,
      )}
    >
      Prototype
    </span>
  )
}

/** Small uppercase status label, e.g. "Live now". */
export function StatusTag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[.2em]",
        className,
      )}
    >
      {children}
    </span>
  )
}

/** Gold check used in feature lists on light cards. */
export function CheckItem({
  children,
  dark,
  arrow,
}: {
  children: ReactNode
  dark?: boolean
  arrow?: boolean
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden
        className={cn(
          "mt-[1px] flex-shrink-0 font-serif text-base leading-[1.4]",
          dark ? "text-gold" : "text-gold",
        )}
      >
        {arrow ? "→" : "✓"}
      </span>
      <span
        className={cn(
          "text-[13px] font-light leading-[1.6]",
          dark ? "text-white/70" : "text-ink-body",
        )}
      >
        {children}
      </span>
    </li>
  )
}
