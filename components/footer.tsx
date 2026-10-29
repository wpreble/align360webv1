import Image from "next/image"
import Link from "next/link"
import { CtaButton } from "@/components/site/cta-button"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-obsidian px-7 py-11 lg:px-[72px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:text-left">
        <Image
          src="/images/align-wordmark.png"
          alt="Align"
          width={411}
          height={124}
          className="h-7 w-auto opacity-45 brightness-[10]"
        />
        <p className="text-[10px] font-medium uppercase tracking-[.22em] text-white/20">
          Clarity · Alignment · Abundance
        </p>
        <ul className="flex items-center gap-7">
          <li>
            <Link
              href={siteConfig.privacyHref}
              className="text-[10px] uppercase tracking-[.16em] text-white/30 transition-colors hover:text-white/60"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href={siteConfig.termsHref}
              className="text-[10px] uppercase tracking-[.16em] text-white/30 transition-colors hover:text-white/60"
            >
              Terms
            </Link>
          </li>
          <li>
            <CtaButton variant="link" intent="organization">
              Contact
            </CtaButton>
          </li>
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-[1200px] text-center text-[10px] tracking-[.08em] text-white/20 lg:text-left">
        © {new Date().getFullYear()} {siteConfig.legalEntity}. All rights reserved.
      </p>
    </footer>
  )
}
