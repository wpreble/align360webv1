"use client"

import React from "react"
import { useState, useEffect } from "react"
import { X, User, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

export type SignupType = "individual" | "organization"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
  initialType?: SignupType
  initialEmail?: string
}

const emptyIndividual = { name: "", email: "", challenge: "" }
const emptyOrganization = {
  contactName: "",
  email: "",
  organizationName: "",
  organizationType: "",
  teamSize: "",
  goals: "",
}

const inputClass =
  "w-full border border-input bg-white px-4 py-3.5 text-sm font-light text-obsidian placeholder:text-obsidian/35 transition-colors focus:border-wine focus:outline-none"
const labelClass = "mb-2 block text-[10px] font-medium uppercase tracking-[.18em] text-obsidian/70"

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  )
}

export function SignupModal({ isOpen, onClose, initialType = "organization", initialEmail = "" }: SignupModalProps) {
  const [signupType, setSignupType] = useState<SignupType>(initialType)
  const [submitted, setSubmitted] = useState(false)
  const [individualData, setIndividualData] = useState(emptyIndividual)
  const [organizationData, setOrganizationData] = useState(emptyOrganization)

  // Each time the modal opens, start from the tab and email the caller asked for.
  useEffect(() => {
    if (!isOpen) return
    setSignupType(initialType)
    setSubmitted(false)
    setIndividualData({ ...emptyIndividual, email: initialType === "individual" ? initialEmail : "" })
    setOrganizationData({ ...emptyOrganization, email: initialType === "organization" ? initialEmail : "" })
  }, [isOpen, initialType, initialEmail])

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

  // TODO(leads): submissions are not sent anywhere yet. Connect both handlers to the
  // CRM / email destination before relying on this form for real sign-ups.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (!isOpen) return null

  const isOrg = signupType === "organization"

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-obsidian/90 p-4 backdrop-blur-lg"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-title"
        className="animate-in fade-in zoom-in-95 relative max-h-[92vh] w-full max-w-lg overflow-y-auto bg-white p-7 duration-300 md:p-11"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 text-obsidian/40 transition-colors hover:text-obsidian"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        <div className="eyebrow mb-3">{isOrg ? "Enterprise" : "Founder's Circle"}</div>
        <h2 id="signup-title" className="font-serif text-3xl font-medium leading-tight text-obsidian">
          {isOrg ? "See Align in action" : "Join the Founder's Circle"}
        </h2>
        <p className="mb-7 mt-2 text-sm font-light leading-relaxed text-ink-muted">
          {isOrg
            ? "Tell us about your organization. We'll set up a live walkthrough and work out scope together."
            : "Early access + direct input on what we build next."}
        </p>

        {/* Tabs */}
        <div className="mb-8 grid grid-cols-2 gap-1 bg-stone p-1" role="tablist">
          {(
            [
              { type: "organization", label: "Organization", icon: Building2 },
              { type: "individual", label: "Individual", icon: User },
            ] as const
          ).map(({ type, label, icon: Icon }) => (
            <button
              key={type}
              type="button"
              role="tab"
              aria-selected={signupType === type}
              onClick={() => {
                setSignupType(type)
                setSubmitted(false)
              }}
              className={cn(
                "flex items-center justify-center gap-2 px-4 py-3 text-[11px] font-medium uppercase tracking-[.18em] transition-all",
                signupType === type
                  ? "bg-wine text-white"
                  : "text-obsidian/55 hover:bg-white hover:text-obsidian",
              )}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="border border-gold/40 bg-gold/5 px-6 py-8 text-center">
            <p className="font-serif text-xl text-obsidian">Thank you.</p>
            <p className="mt-2 text-sm font-light leading-relaxed text-ink-muted">
              {isOrg
                ? "We'll be in touch to set up a live walkthrough."
                : "You're on the list. We'll be in touch with early access details."}
            </p>
            <button type="button" onClick={onClose} className="btn btn-outline mt-6 px-8 py-3.5">
              Close
            </button>
          </div>
        ) : isOrg ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Contact name" htmlFor="org-contact">
                <input
                  id="org-contact"
                  type="text"
                  required
                  autoFocus
                  placeholder="Your name"
                  value={organizationData.contactName}
                  onChange={(e) => setOrganizationData({ ...organizationData, contactName: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Work email" htmlFor="org-email">
                <input
                  id="org-email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={organizationData.email}
                  onChange={(e) => setOrganizationData({ ...organizationData, email: e.target.value })}
                  className={inputClass}
                />
              </Field>
            </div>
            <Field label="Organization name" htmlFor="org-name">
              <input
                id="org-name"
                type="text"
                required
                placeholder="Company or organization name"
                value={organizationData.organizationName}
                onChange={(e) => setOrganizationData({ ...organizationData, organizationName: e.target.value })}
                className={inputClass}
              />
            </Field>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Organization type" htmlFor="org-type">
                <select
                  id="org-type"
                  required
                  value={organizationData.organizationType}
                  onChange={(e) => setOrganizationData({ ...organizationData, organizationType: e.target.value })}
                  className={cn(inputClass, "cursor-pointer appearance-none")}
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option value="established">Established or owner-led company</option>
                  <option value="fund-owned">PE or fund-owned company</option>
                  <option value="consultancy">Consultancy or advisory firm</option>
                  <option value="workforce">Workforce development / public sector</option>
                  <option value="nonprofit">Non-profit</option>
                  <option value="other">Other</option>
                </select>
              </Field>
              <Field label="Team size" htmlFor="org-size">
                <select
                  id="org-size"
                  required
                  value={organizationData.teamSize}
                  onChange={(e) => setOrganizationData({ ...organizationData, teamSize: e.target.value })}
                  className={cn(inputClass, "cursor-pointer appearance-none")}
                >
                  <option value="" disabled>
                    Select size
                  </option>
                  <option value="1-10">1-10 people</option>
                  <option value="11-50">11-50 people</option>
                  <option value="51-200">51-200 people</option>
                  <option value="201-500">201-500 people</option>
                  <option value="500+">500+ people</option>
                </select>
              </Field>
            </div>
            <Field label="What are you looking to change?" htmlFor="org-goals">
              <textarea
                id="org-goals"
                placeholder="Operating with AI, aligning leadership and teams, a restructure..."
                value={organizationData.goals}
                onChange={(e) => setOrganizationData({ ...organizationData, goals: e.target.value })}
                rows={3}
                className={cn(inputClass, "resize-none")}
              />
            </Field>
            <button type="submit" className="btn btn-primary w-full">
              Request a live walkthrough
            </button>
            <p className="text-center text-xs font-light text-ink-muted">
              Scope, budget and timeline are agreed together on the call.
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Field label="Full name" htmlFor="ind-name">
              <input
                id="ind-name"
                type="text"
                required
                autoFocus
                placeholder="Your name"
                value={individualData.name}
                onChange={(e) => setIndividualData({ ...individualData, name: e.target.value })}
                className={inputClass}
              />
            </Field>
            <Field label="Email" htmlFor="ind-email">
              <input
                id="ind-email"
                type="email"
                required
                placeholder="you@example.com"
                value={individualData.email}
                onChange={(e) => setIndividualData({ ...individualData, email: e.target.value })}
                className={inputClass}
              />
            </Field>
            <Field label="What's your biggest challenge right now?" htmlFor="ind-challenge">
              <input
                id="ind-challenge"
                type="text"
                placeholder="Career direction, decisions, clarity..."
                value={individualData.challenge}
                onChange={(e) => setIndividualData({ ...individualData, challenge: e.target.value })}
                className={inputClass}
              />
            </Field>
            <button type="submit" className="btn btn-primary w-full">
              Get early access
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
