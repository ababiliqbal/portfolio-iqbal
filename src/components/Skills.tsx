import { Code2, Cpu, Layers } from 'lucide-react';
import { skills, SkillCategory } from '@/data/projects';

function getCategoryIcon(category: SkillCategory) {
  switch (category) {
    case 'Frontend':
      return <Code2 className="w-5 h-5 text-indigo-400" />;
    case 'Backend':
      return <Layers className="w-5 h-5 text-indigo-400" />;
    case 'AI & Tools':
      return <Cpu className="w-5 h-5 text-indigo-400" />;
    default:
      return <Code2 className="w-5 h-5 text-indigo-400" />;
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-900/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Kompetensi Teknis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50 mt-2 mb-4">
            Tech Stack & Keahlian
          </h2>
          <p className="leading-relaxed text-slate-400 text-base sm:text-lg">
            Kombinasi teknologi modern untuk pengembangan frontend yang responsif,
            arsitektur backend yang tangguh, serta integrasi ekosistem AI dan developer tooling.
          </p>
        </div>

        {/* Grid dengan items-stretch memastikan ketiga card memiliki dimensi tinggi yang seragam */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-stretch">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 transition-all duration-300 ease-out hover:border-slate-700/80 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-900/40 shrink-0">
                    {getCategoryIcon(skillGroup.category)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 tracking-tight">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-md text-xs font-medium bg-slate-800/60 border border-slate-700/50 text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{skillGroup.items.length} Teknologi Utama</span>
                <span className="text-indigo-400/80">Terverifikasi</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
