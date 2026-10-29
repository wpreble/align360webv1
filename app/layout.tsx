import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SignupProvider } from '@/components/signup-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Align360 | Clarity. Alignment. Abundance.',
    template: '%s | Align360',
  },
  description:
    'Align360 is an intelligence layer implemented inside your organization: a practical way for legacy businesses, PE firms and consultancies to operate with AI without their leaders having to become AI experts.',
  openGraph: {
    title: 'Align360 | Your people are already making decisions.',
    description:
      'A custom version of Align, implemented for your firm. Give your people the system to make better decisions.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}>
        <SignupProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SignupProvider>
        <Analytics />
      </body>
    </html>
  )
}
