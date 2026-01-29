"use client"

import React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    challenge: "",
  })

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! We'll be in touch soon.")
    onClose()
    setFormData({ name: "", email: "", challenge: "" })
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-azure/90 backdrop-blur-lg z-[200] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-cream rounded-2xl max-w-lg w-full p-8 md:p-12 relative animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-azure/50 hover:text-azure transition-opacity"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-azure mb-2">{"Join Founder's Circle"}</h2>
        <p className="text-azure/70 mb-8">Early access + direct input on what we build next</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-azure mb-2">Full Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-4 border-2 border-azure/15 rounded-lg bg-white text-azure placeholder:text-azure/40 focus:outline-none focus:border-turquoise transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-azure mb-2">Email</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-4 border-2 border-azure/15 rounded-lg bg-white text-azure placeholder:text-azure/40 focus:outline-none focus:border-turquoise transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-azure mb-2">
              {"What's your biggest challenge right now?"}
            </label>
            <input
              type="text"
              placeholder="Career direction, decisions, clarity..."
              value={formData.challenge}
              onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
              className="w-full px-4 py-4 border-2 border-azure/15 rounded-lg bg-white text-azure placeholder:text-azure/40 focus:outline-none focus:border-turquoise transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red text-white py-4 rounded-lg font-semibold hover:translate-y-[-2px] hover:shadow-xl hover:shadow-red/30 transition-all"
          >
            Get Early Access
          </button>
        </form>
      </div>
    </div>
  )
}
