import { Badge } from "@/components/ui/badge"

export function Experience() {
  return (
    <div id="experience" className="glass rounded-2xl p-6 sm:p-8 h-full animate-blur-in" style={{ animationDelay: '0.35s' }}>
      <h2 className="text-lg font-semibold text-white mb-1">Experience</h2>
      <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mb-5" />

      <div className="flex flex-col">
        {/* DEPI */}
        <div className="border-l-2 border-teal-400/50 pl-4 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-semibold text-white">Trainee / Intern</h3>
            <Badge variant="outline" className="text-[10px] border-teal-500/30 text-teal-300 bg-teal-500/10 px-1.5 py-0">
              Present
            </Badge>
          </div>

          <p className="text-sm text-emerald-300 font-medium mb-1">
            Digital Egypt Pioneers Initiative (DEPI)
          </p>
          <p className="text-xs text-slate-500 mb-4">Egypt</p>

          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-teal-400 mt-1 flex-shrink-0">&#x2022;</span>
              <span>Enrolled in a 6-month AI & Data Science training program focused on Microsoft Machine Learning Engineering</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal-400 mt-1 flex-shrink-0">&#x2022;</span>
              <span>Hands-on experience in Python, data preprocessing, visualization, and applied ML techniques</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal-400 mt-1 flex-shrink-0">&#x2022;</span>
              <span>Studying deep learning, NLP with attention models, computer vision, and transfer learning</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal-400 mt-1 flex-shrink-0">&#x2022;</span>
              <span>Training on Microsoft Azure AI services, MLOps tools including MLflow and Hugging Face</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {["Python", "Azure AI", "MLflow", "Hugging Face", "NLP", "Computer Vision"].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-[10px] bg-emerald-500/10 text-emerald-300 border-0 px-2 py-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Volunteer */}
        <div className="border-l-2 border-slate-600/30 pl-4 mt-6 pt-4 border-t-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-semibold text-white">Volunteer Member</h3>
          </div>
          <p className="text-xs text-emerald-300 font-medium mb-0.5">Resala Charity Organization</p>
          <p className="text-xs text-slate-500 mb-2">2020 - 2024</p>
          <p className="text-xs text-slate-400">
            4 years of community service, teamwork-based initiatives, and social impact projects.
          </p>
        </div>
      </div>
    </div>
  )
}
