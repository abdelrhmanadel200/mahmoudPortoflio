"use client"

import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <div id="contact" className="glass rounded-2xl p-6 sm:p-8 animate-blur-in" style={{ animationDelay: '0.6s' }}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white mb-1">Get In Touch</h2>
          <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mb-2" />
          <p className="text-xs text-slate-400">Feel free to reach out through any channel below.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="mailto:mahmoudelnahass776@gmail.com"
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <Mail className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="hidden sm:inline text-xs">mahmoudelnahass776@gmail.com</span>
          </a>

          <a
            href="tel:+201552199188"
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-teal-400 transition-colors group"
          >
            <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
              <Phone className="w-4 h-4 text-teal-400" />
            </div>
            <span className="hidden sm:inline text-xs">+20 1552199188</span>
          </a>

          <a
            href="https://wa.me/201552199188"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-green-400 transition-colors group"
          >
            <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 text-green-400">
                <path d="M16.01 3.003c-7.18 0-13 5.819-13 13 0 2.303.602 4.55 1.746 6.532L3 29l6.626-1.715A12.954 12.954 0 0 0 16.01 29c7.181 0 13-5.819 13-13s-5.819-13-13-13z" />
              </svg>
            </div>
            <span className="hidden sm:inline text-xs">WhatsApp</span>
          </a>

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="hidden sm:inline text-xs">Giza, Egypt</span>
          </div>

          <a
            href="http://www.linkedin.com/in/mahmoud-amr21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <Linkedin className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="hidden sm:inline text-xs">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}
