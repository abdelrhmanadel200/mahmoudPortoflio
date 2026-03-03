"use client"

import { Mail, MapPin, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <div
      id="home"
      className="glass rounded-2xl p-8 sm:p-10 h-full min-h-[320px] flex flex-col justify-between animate-scale-in"
    >
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-glow" />
          <span className="text-xs font-medium text-teal-400 uppercase tracking-widest">
            Available for opportunities
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Mahmoud{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Amr
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-emerald-300/80 font-medium mb-6">
          AI & Machine Learning Engineer
        </p>

        <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
          Computer Science student with a strong foundation in Python and Machine Learning.
          Experienced in building and evaluating models. Familiar with Deep Learning and Generative AI.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 pt-6 border-t border-slate-600/30">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
          <span>Giza, Egypt</span>
        </div>
        <a
          href="mailto:mahmoudelnahass776@gmail.com"
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span className="hidden sm:inline">mahmoudelnahass776@gmail.com</span>
          <span className="sm:hidden">Email</span>
        </a>
        <a
          href="http://www.linkedin.com/in/mahmoud-amr21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <Linkedin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  )
}
