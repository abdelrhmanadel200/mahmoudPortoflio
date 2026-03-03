import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = [
    {
      icon: "✈️",
      title: "Flight - AI Pathfinding System",
      description:
        "Intelligent flight itinerary planner using A* search algorithm in Python. Reduced route calculation time by 40% compared to traditional methods. Optimal pathfinding across 50+ airports with 95% accuracy.",
      technologies: ["Python", "A* Algorithm", "AI", "Graph Theory"],
      accent: "emerald",
      featured: true,
    },
    {
      icon: "🔐",
      title: "Caesar Cipher Encryption Tool",
      description:
        "Python-based encryption and decryption application supporting 26 different shift values. Processes 500+ character messages in under 0.5 seconds with 100% accuracy.",
      technologies: ["Python", "Cryptography", "Algorithms"],
      accent: "teal",
      featured: false,
    },
    {
      icon: "🎮",
      title: "Hangman Game",
      description:
        "Interactive word-guessing game with a database of 200+ words, featuring 3 difficulty levels and ASCII art visualization. Achieved 98% bug-free gameplay.",
      technologies: ["Python", "Game Logic", "OOP"],
      accent: "cyan",
      featured: false,
    },
  ]

  const accentMap: Record<string, { border: string; iconBg: string; badgeBg: string; badgeText: string }> = {
    emerald: {
      border: "border-emerald-500/20 hover:border-emerald-400/40",
      iconBg: "bg-emerald-500/10",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-emerald-300",
    },
    teal: {
      border: "border-teal-500/20 hover:border-teal-400/40",
      iconBg: "bg-teal-500/10",
      badgeBg: "bg-teal-500/10",
      badgeText: "text-teal-300",
    },
    cyan: {
      border: "border-cyan-500/20 hover:border-cyan-400/40",
      iconBg: "bg-cyan-500/10",
      badgeBg: "bg-cyan-500/10",
      badgeText: "text-cyan-300",
    },
  }

  return (
    <div id="projects" className="glass rounded-2xl p-6 sm:p-8 animate-blur-in" style={{ animationDelay: '0.45s' }}>
      <h2 className="text-lg font-semibold text-white mb-1">Projects</h2>
      <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mb-5" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {projects.map((project) => {
          const colors = accentMap[project.accent]
          return (
            <div
              key={project.title}
              className={`rounded-xl border ${colors.border} bg-slate-700/20 p-5 transition-all duration-300 hover:bg-slate-700/35 ${
                project.featured ? "sm:col-span-1" : ""
              }`}
            >
              <div className={`w-10 h-10 rounded-lg ${colors.iconBg} flex items-center justify-center text-xl mb-3`}>
                {project.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className={`text-[10px] ${colors.badgeBg} ${colors.badgeText} border-0 px-2 py-0.5`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
