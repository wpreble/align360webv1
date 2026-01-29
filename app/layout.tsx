import React from "react"
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: 'Align360 | Optimize Phase — Discover Your Wiring. Align Your Career.',
  description: 'Align360 is an AI-powered operating system that helps you understand how you\'re wired, align your career, and build a thriving life of peace and simplicity. Start with the Optimize Phase.',
  openGraph: {
    title: 'Put out the fires. Then become one.',
    description: 'Align360 solves what\'s urgent—then builds the clarity to ignite everything else. One system. A lifetime of clarity.',
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${quicksand.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
