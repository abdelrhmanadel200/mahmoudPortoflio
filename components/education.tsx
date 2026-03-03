import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen, Heart } from "lucide-react"

export function Education() {
  return (
    <div id="education" className="glass rounded-2xl p-6 sm:p-8 h-full animate-blur-in" style={{ animationDelay: '0.55s' }}>
      <h2 className="text-lg font-semibold text-white mb-1">Education & More</h2>
      <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mb-5" />

      <div className="space-y-4">
        {/* Degree */}
        <div className="rounded-xl border border-emerald-500/20 bg-slate-700/20 p-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">BS Computer Science & AI</h3>
              <p className="text-xs text-emerald-300 font-medium">Beni Suef University</p>
              <p className="text-xs text-slate-500">Third-Year | 2027</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {["Deep Learning", "CV", "NLP", "Algorithms"].map((c) => (
                  <Badge key={c} variant="secondary" className="text-[10px] bg-emerald-500/10 text-emerald-300 border-0 px-1.5 py-0">
                    {c}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ITI Certificate */}
        <div className="rounded-xl border border-teal-500/20 bg-slate-700/20 p-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Award className="w-4 h-4 text-teal-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Professional Training</h3>
              <p className="text-xs text-teal-300 font-medium">ITI | 2024</p>
              <p className="text-xs text-slate-400 mt-1">Intensive software development program.</p>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="rounded-xl border border-cyan-500/20 bg-slate-700/20 p-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <BookOpen className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-xs font-medium text-white">ML & Python Training</p>
                <p className="text-xs text-cyan-300">ITI | 2024</p>
              </div>
              <div>
                <p className="text-xs font-medium text-white">100 Days of Code</p>
                <p className="text-xs text-cyan-300">Dr. Angela Yu | 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="rounded-xl border border-emerald-500/20 bg-slate-700/20 p-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Heart className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white mb-2">Services I Offer</h3>
              <ul className="space-y-1 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <span className="text-teal-400">&#x25B8;</span>
                  <span>Data Cleaning & Preprocessing</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-teal-400">&#x25B8;</span>
                  <span>Building ML Models</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-teal-400">&#x25B8;</span>
                  <span>Data Analysis & Visualization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
