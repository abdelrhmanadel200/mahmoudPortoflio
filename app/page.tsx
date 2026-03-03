import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative">
      {/* Grid background */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      {/* Gradient orbs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[120px] pointer-events-none z-0 animate-glow" />
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/[0.04] rounded-full blur-[120px] pointer-events-none z-0 animate-glow" style={{ animationDelay: '1.5s' }} />

      <Navigation />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-5">
          {/* Row 1: Hero + About */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            <div className="lg:col-span-3">
              <Hero />
            </div>
            <div className="lg:col-span-2">
              <About />
            </div>
          </div>

          {/* Row 2: Skills */}
          <Skills />

          {/* Row 3: Experience + Education */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            <div className="lg:col-span-3">
              <Experience />
            </div>
            <div className="lg:col-span-2">
              <Education />
            </div>
          </div>

          {/* Row 4: Projects */}
          <Projects />

          {/* Row 5: Contact */}
          <Contact />
        </div>
      </main>
    </div>
  )
}
