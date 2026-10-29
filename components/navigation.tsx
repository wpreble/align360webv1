"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSignup } from "@/components/signup-provider"

const audiences = [
  { label: "For Enterprise", href: "/" },
  { label: "For Individuals", href: "/individuals" },
]

const links = {
  enterprise: [
    { label: "How we work", href: "#how" },
    { label: "Platform", href: "#platform" },
    { label: "The offer", href: "#offer" },
    { label: "Trust", href: "#trust" },
  ],
  individual: [
    { label: "How it works", href: "#how" },
    { label: "What's included", href: "#platform" },
    { label: "Who it's for", href: "#who" },
    { label: "Pricing", href: "#pricing" },
  ],
}

export function Navigation() {
  const pathname = usePathname()
  const { openSignup } = useSignup()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isIndividual = pathname.startsWith("/individuals")
  const audience = isIndividual ? "individual" : "enterprise"
  const ctaLabel = isIndividual ? "Get Early Access" : "See It In Action"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const openCta = () => {
    setMenuOpen(false)
    openSignup({ type: isIndividual ? "individual" : "organization" })
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
          scrolled || menuOpen
            ? "border-b border-white/5 bg-obsidian/95 py-[18px] backdrop-blur-2xl"
            : "py-5 lg:py-7",
        )}
      >
        <nav className="flex items-center justify-between px-7 lg:px-[72px]" aria-label="Main">
          <Link href="/" className="flex-shrink-0" aria-label="Align360 home">
            <Image
              src="/images/align-wordmark.png"
              alt="Align"
              width={411}
              height={124}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <AudienceToggle isIndividual={isIndividual} />
            <ul className="hidden items-center gap-8 xl:flex">
              {links[audience].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[11px] font-medium uppercase tracking-[.2em] text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button type="button" onClick={openCta} className="btn btn-primary !px-7 !py-[13px] !tracking-[.2em]">
              {ctaLabel}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="p-2 text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>
      {/* Sibling of <header>: its backdrop-filter would otherwise become the containing block for this fixed panel. */}
      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[66px] z-[90] flex flex-col items-center gap-7 overflow-y-auto bg-obsidian px-7 pb-10 pt-10 lg:hidden">
          <AudienceToggle isIndividual={isIndividual} />
          <ul className="flex flex-col items-center gap-6">
            {links[audience].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs font-medium uppercase tracking-[.2em] text-white/70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" onClick={openCta} className="btn btn-primary">
            {ctaLabel}
          </button>
        </div>
      )}
    </>
  )
}

function AudienceToggle({ isIndividual }: { isIndividual: boolean }) {
  return (
    <div
      className="flex gap-1 rounded-full border border-white/10 bg-white/[.08] p-1"
      role="group"
      aria-label="Choose your audience"
    >
      {audiences.map(({ label, href }) => {
        const active = (href === "/individuals") === isIndividual
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-full px-5 py-2 text-[10px] font-medium uppercase tracking-[.12em] transition-all duration-300",
              active ? "bg-wine text-white" : "text-white/50 hover:text-white",
            )}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}
