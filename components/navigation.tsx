"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { SignupModal } from "./signup-modal"

export function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-4 lg:px-16 py-5 flex justify-between items-center bg-cream/95 backdrop-blur-xl z-50 border-b border-azure/8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Align360"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-2xl font-bold text-azure tracking-tight">Align360</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#how-it-works" className="text-sm font-medium text-azure/70 hover:text-azure transition-opacity">
            How It Works
          </Link>
          <Link href="#whats-included" className="text-sm font-medium text-azure/70 hover:text-azure transition-opacity">
            {"What's Included"}
          </Link>
          <Link href="#founder" className="text-sm font-medium text-azure/70 hover:text-azure transition-opacity">
            About
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-red text-white px-6 py-3 rounded-lg font-semibold hover:translate-y-[-2px] hover:shadow-xl hover:shadow-red/30 transition-all"
          >
            Start Optimizing
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-azure"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-cream z-40 md:hidden">
          <div className="flex flex-col items-center gap-8 pt-12">
            <Link 
              href="#how-it-works" 
              className="text-lg font-medium text-azure"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#whats-included" 
              className="text-lg font-medium text-azure"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {"What's Included"}
            </Link>
            <Link 
              href="#founder" 
              className="text-lg font-medium text-azure"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                setIsModalOpen(true)
              }}
              className="bg-red text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-red/30 transition-all"
            >
              Start Optimizing
            </button>
          </div>
        </div>
      )}

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
