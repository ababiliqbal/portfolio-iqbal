import Link from 'next/link';
import { ArrowRight, ExternalLink, FolderGit2, Monitor, Video } from 'lucide-react';
import { projects } from '@/data/projects';

export function ProjectGrid() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Koleksi Karya
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50 mt-2 mb-4">
            Proyek Unggulan
          </h2>
          <p className="leading-relaxed text-slate-400 text-base sm:text-lg">
            Aplikasi web skala penuh, sistem manajemen informasi, dan eksperimen machine
            learning yang dibangun dengan performa tinggi serta arsitektur teruji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:border-indigo-500/50 transition-all duration-300 ease-out"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  {project.demoType === 'video' ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                      <Video className="w-3.5 h-3.5" />
                      <span>Video Demo</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/50">
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Live Simulation</span>
                    </span>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-200 transition-colors p-1"
                    title="Buka Repositori GitHub"
                  >
                    <FolderGit2 className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-slate-100 tracking-tight mt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-indigo-400 transition-colors duration-300"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-800/50 border border-slate-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/50 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Detail Proyek</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <span>Kode</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

