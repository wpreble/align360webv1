"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { SignupModal, type SignupType } from "./signup-modal"

interface OpenOptions {
  type?: SignupType
  email?: string
}

interface SignupContextValue {
  openSignup: (options?: OpenOptions) => void
}

const SignupContext = createContext<SignupContextValue | null>(null)

export function useSignup() {
  const ctx = useContext(SignupContext)
  if (!ctx) throw new Error("useSignup must be used within a SignupProvider")
  return ctx
}

export function SignupProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [type, setType] = useState<SignupType>("organization")
  const [email, setEmail] = useState("")

  const openSignup = useCallback((options: OpenOptions = {}) => {
    setType(options.type ?? "organization")
    setEmail(options.email ?? "")
    setIsOpen(true)
  }, [])

  const value = useMemo(() => ({ openSignup }), [openSignup])

  return (
    <SignupContext.Provider value={value}>
      {children}
      <SignupModal
        isOpen={isOpen}
        initialType={type}
        initialEmail={email}
        onClose={() => setIsOpen(false)}
      />
    </SignupContext.Provider>
  )
}
