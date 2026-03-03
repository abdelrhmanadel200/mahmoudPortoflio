import { Badge } from "@/components/ui/badge"

export function About() {
  const softSkills = ["Problem-Solving", "Teamwork", "Communication", "Leadership", "Critical Thinking", "Adaptability"]

  return (
    <div
      id="about"
      className="glass rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between animate-blur-in"
      style={{ animationDelay: '0.15s' }}
    >
      <div>
        <h2 className="text-lg font-semibold text-white mb-1">About</h2>
        <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mb-4" />

        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Seeking a machine learning or data-focused role to apply analytical skills and practical ML knowledge to real-world problems.
        </p>

        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          Experienced in building and evaluating models such as Linear Regression, Logistic Regression, Gradient Boosting, and other supervised learning algorithms.
        </p>
      </div>

      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">Soft Skills</p>
        <div className="flex flex-wrap gap-1.5">
          {softSkills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="text-[10px] border-slate-600/50 text-slate-300 bg-slate-700/30 px-2 py-0.5"
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-600/30">
          <div className="text-xs text-slate-400">
            <span className="text-white font-medium">Arabic</span> Native
          </div>
          <div className="text-xs text-slate-400">
            <span className="text-white font-medium">English</span> Conversational
          </div>
        </div>
      </div>
    </div>
  )
}
