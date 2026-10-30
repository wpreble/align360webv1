"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useSignup } from "@/components/signup-provider"
import type { SignupType } from "@/components/signup-modal"

type Variant = "primary" | "gold" | "ghost" | "outline" | "link"

const variantClass: Record<Variant, string> = {
  primary: "btn btn-primary",
  gold: "btn btn-gold",
  ghost: "btn btn-ghost",
  outline: "btn btn-outline",
  link: "text-[10px] uppercase tracking-[.16em] text-white/50 transition-colors hover:text-white",
}

interface CtaButtonProps {
  /** Opens the signup modal on this tab. Omit when using `href`. */
  intent?: SignupType
  /** Navigates instead of opening the modal. */
  href?: string
  variant?: Variant
  className?: string
  children: ReactNode
}

export function CtaButton({ intent, href, variant = "primary", className, children }: CtaButtonProps) {
  const { openSignup } = useSignup()
  const classes = cn(variantClass[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" onClick={() => openSignup({ type: intent })} className={classes}>
      {children}
    </button>
  )
}
