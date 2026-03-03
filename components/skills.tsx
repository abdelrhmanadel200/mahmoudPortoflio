import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "HTML", "CSS", "OOP"],
      accent: "emerald",
    },
    {
      title: "AI / ML",
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "CNNs", "Transfer Learning"],
      accent: "teal",
    },
    {
      title: "Computer Vision",
      skills: ["Vision Transformers", "OpenCV", "Image Classification"],
      accent: "cyan",
    },
    {
      title: "NLP",
      skills: ["BERT", "Transformer Models"],
      accent: "emerald",
    },
    {
      title: "Data Analysis",
      skills: ["NumPy", "Pandas", "Matplotlib"],
      accent: "teal",
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Jupyter Notebook", "Flask"],
      accent: "cyan",
    },
  ]

  const accentColors: Record<string, { border: string; bg: string; text: string; dot: string }> = {
    emerald: {
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/10",
      text: "text-emerald-300",
      dot: "bg-emerald-400",
    },
    teal: {
      border: "border-teal-500/20",
      bg: "bg-teal-500/10",
      text: "text-teal-300",
      dot: "bg-teal-400",
    },
    cyan: {
      border: "border-cyan-500/20",
      bg: "bg-cyan-500/10",
      text: "text-cyan-300",
      dot: "bg-cyan-400",
    },
  }

  return (
    <div id="skills" className="glass rounded-2xl p-6 sm:p-8 animate-blur-in" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-lg font-semibold text-white mb-1">Technical Skills</h2>
      <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mb-5" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skillCategories.map((cat) => {
          const colors = accentColors[cat.accent]
          return (
            <div
              key={cat.title}
              className={`rounded-xl p-4 border ${colors.border} bg-slate-700/20 hover:bg-slate-700/35 transition-all duration-300`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                <h3 className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`text-[10px] ${colors.bg} ${colors.text} border-0 px-2 py-0.5`}
                  >
                    {skill}
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
