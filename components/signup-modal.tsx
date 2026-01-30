"use client"

import React from "react"

import { useState, useEffect } from "react"
import { X, User, Building2 } from "lucide-react"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

type SignupType = "individual" | "organization"

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [signupType, setSignupType] = useState<SignupType>("individual")
  const [individualData, setIndividualData] = useState({
    name: "",
    email: "",
    challenge: "",
  })
  const [organizationData, setOrganizationData] = useState({
    contactName: "",
    email: "",
    organizationName: "",
    organizationType: "",
    teamSize: "",
    goals: "",
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

  const handleIndividualSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! We'll be in touch soon.")
    onClose()
    setIndividualData({ name: "", email: "", challenge: "" })
  }

  const handleOrganizationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! Our team will reach out to discuss your organization's needs.")
    onClose()
    setOrganizationData({ 
      contactName: "", 
      email: "", 
      organizationName: "", 
      organizationType: "",
      teamSize: "",
      goals: "" 
    })
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-azure/90 backdrop-blur-lg z-[200] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-cream rounded-2xl max-w-lg w-full p-8 md:p-12 relative animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-azure/50 hover:text-azure transition-opacity"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-azure mb-2">{"Join Founder's Circle"}</h2>
        <p className="text-azure/70 mb-6">Early access + direct input on what we build next</p>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 p-1 bg-azure/5 rounded-xl">
          <button
            type="button"
            onClick={() => setSignupType("individual")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
              signupType === "individual"
                ? "bg-white text-azure shadow-md"
                : "text-azure/60 hover:text-azure hover:bg-white/50"
            }`}
          >
            <User size={18} />
            Individual
          </button>
          <button
            type="button"
            onClick={() => setSignupType("organization")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
              signupType === "organization"
                ? "bg-white text-azure shadow-md"
                : "text-azure/60 hover:text-azure hover:bg-white/50"
            }`}
          >
            <Building2 size={18} />
            Organization
          </button>
        </div>

        {/* Individual Form */}
        {signupType === "individual" && (
          <form onSubmit={handleIndividualSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-azure mb-2">Full Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={individualData.name}
                onChange={(e) => setIndividualData({ ...individualData, name: e.target.value })}
                className="w-full px-4 py-4 border-2 border-azure/15 rounded-lg bg-white text-azure placeholder:text-azure/40 focus:outline-none focus:border-turquoise transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-azure mb-2">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={individualData.email}
                onChange={(e) => setIndividualData({ ...individualData, email: e.target.value })}
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
                value={individualData.challenge}
                onChange={(e) => setIndividualData({ ...individualData, challenge: e.target.value })}
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
        )}

        {/* Organization Form */}
        {signupType === "organization" && (
          <form onSubmit={handleOrganizationSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-azure mb-2">Contact Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={organizationData.contactName}
                  onChange={(e) => setOrganizationData({ ...organizationData, contactName: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-azure/15 rounded-lg bg-white text-azure placeholder:text-azure/40 focus:outline-none focus:border-turquoise transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-azure mb-2">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={organizationData.email}
                  onChange={(e) => setOrganizationData({ ...organizationData, email: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-azure/15 rounded-lg bg-white text-azure placeholder:text-azure/40 focus:outline-none focus:border-turquoise transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-azure mb-2">Organization Name</label>
              <input
                type="text"
                required
                placeholder="Company or organization name"
                value={organizationData.organizationName}
                onChange={(e) => setOrganizationData({ ...organizationData, organizationName: e.target.value })}
                className="w-full px-4 py-4 border-2 border-azure/15 rounded-lg bg-white text-azure placeholder:text-azure/40 focus:outline-none focus:border-turquoise transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-azure mb-2">Organization Type</label>
                <select
                  required
                  value={organizationData.organizationType}
                  onChange={(e) => setOrganizationData({ ...organizationData, organizationType: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-azure/15 rounded-lg bg-white text-azure focus:outline-none focus:border-turquoise transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select type</option>
                  <option value="corporation">Corporation</option>
                  <option value="startup">Startup</option>
                  <option value="nonprofit">Non-profit</option>
                  <option value="educational">Educational Institution</option>
                  <option value="government">Government Agency</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-azure mb-2">Team Size</label>
                <select
                  required
                  value={organizationData.teamSize}
                  onChange={(e) => setOrganizationData({ ...organizationData, teamSize: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-azure/15 rounded-lg bg-white text-azure focus:outline-none focus:border-turquoise transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select size</option>
                  <option value="1-10">1-10 people</option>
                  <option value="11-50">11-50 people</option>
                  <option value="51-200">51-200 people</option>
                  <option value="201-500">201-500 people</option>
                  <option value="500+">500+ people</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-azure mb-2">
                What are your team development goals?
              </label>
              <textarea
                placeholder="Career alignment, talent development, team clarity..."
                value={organizationData.goals}
                onChange={(e) => setOrganizationData({ ...organizationData, goals: e.target.value })}
                rows={3}
                className="w-full px-4 py-4 border-2 border-azure/15 rounded-lg bg-white text-azure placeholder:text-azure/40 focus:outline-none focus:border-turquoise transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red text-white py-4 rounded-lg font-semibold hover:translate-y-[-2px] hover:shadow-xl hover:shadow-red/30 transition-all"
            >
              Request Organization Demo
            </button>

            <p className="text-center text-sm text-azure/50">
              Our team will contact you within 24 hours to discuss your needs
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
