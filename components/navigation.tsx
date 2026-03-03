"use client"

import { useState, useEffect, useRef } from "react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const clickedRef = useRef<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Skip scroll-based detection if a click just happened
      if (clickedRef.current) return

      const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"]

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Force active immediately on click
      setActiveSection(sectionId)
      clickedRef.current = sectionId

      element.scrollIntoView({ behavior: "smooth" })

      // Resume scroll detection after animation settles
      setTimeout(() => {
        clickedRef.current = null
      }, 1000)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "opacity-100 translate-y-0" : "opacity-90 translate-y-0"
      }`}
    >
      <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-slate-800/80 backdrop-blur-xl border border-slate-600/30 shadow-lg shadow-emerald-500/5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-emerald-500/20 text-emerald-400 shadow-inner shadow-emerald-500/10"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
