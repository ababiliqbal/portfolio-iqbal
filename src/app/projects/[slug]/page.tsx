import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  MonitorPlay,
  PlayCircle,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { projects } from '@/data/projects';

type PageProps = {
  params: Promise<{ slug: string }>;
};

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyek Tidak Ditemukan | Portofolio',
    };
  }

  return {
    title: `${project.title} | Muhammad Iqbal Ababil`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  const targetDemoUrl =
    project.demoType === 'video'
      ? project.videoUrl || project.githubUrl
      : project.liveUrl || project.githubUrl;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative selection:bg-indigo-500/30 selection:text-indigo-200 flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Semua Proyek</span>
          </Link>

          {/* Project Header */}
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-50 leading-[1.15]">
              {project.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-slate-400 max-w-3xl">
              {project.summary}
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium text-slate-300 bg-slate-900/80 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Tombol Aksi: Dua Tombol Outline Elegan */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-slate-900">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700/80 bg-slate-900/40 hover:border-indigo-500/60 hover:bg-slate-900 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 ease-out shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>Source Code</span>
              </a>

              <a
                href={targetDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700/80 bg-slate-900/40 hover:border-indigo-500/60 hover:bg-slate-900 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 ease-out shadow-sm"
              >
                <MonitorPlay className="w-4 h-4 text-indigo-400" />
                <span>{project.demoType === 'video' ? 'Video Demo' : 'Live Demo'}</span>
              </a>
            </div>
          </header>

          {/* Render Kondisional Etalase Visual */}
          <section className="mb-12">
            {project.demoType === 'video' ? (
              /* Video: Area Container Berwarna slate-900 dengan Ikon PlayCircle */
              <div className="bg-slate-900 border border-slate-800/80 rounded-2xl aspect-video w-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group shadow-2xl">
                <a
                  href={project.videoUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex flex-col items-center focus:outline-none"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-indigo-400 group-hover/btn:scale-110 group-hover/btn:text-indigo-300 transition-all duration-300 ease-out mb-4">
                    <PlayCircle className="w-16 h-16 sm:w-20 sm:h-20 stroke-[1.25]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 tracking-tight">
                    Tonton Rekaman Video Demo
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-2 leading-relaxed">
                    Klik untuk membuka pemutaran video showcase sistem dan demonstrasi fitur secara lengkap.
                  </p>
                </a>

                <a
                  href={project.videoUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 bg-slate-950/60 hover:border-indigo-500 text-xs text-slate-300 hover:text-white transition-all duration-300 ease-out"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka Video di YouTube</span>
                </a>
              </div>
            ) : (
              /* Simulation: Container Mockup Gambar dengan Tombol Live Demo */
              <div className="bg-slate-900 border border-slate-800/80 rounded-2xl aspect-video w-full p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-700 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-slate-700 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-slate-700 inline-block" />
                  </div>
                  <div className="px-4 py-1 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 max-w-xs truncate">
                    {project.liveUrl || `https://${project.slug}.vercel.app`}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase">
                    Aktif
                  </span>
                </div>

                {/* Mockup Canvas */}
                <div className="my-auto py-6 text-center max-w-lg mx-auto">
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2">
                    Mockup Antarmuka Web
                  </span>
                  <h3 className="text-2xl font-extrabold tracking-tight text-slate-100">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex justify-center">
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-indigo-500/60 bg-indigo-600/20 hover:bg-indigo-600/30 text-white font-medium text-xs sm:text-sm transition-all duration-300 ease-out shadow-lg shadow-indigo-500/10"
                    >
                      <MonitorPlay className="w-4 h-4 text-indigo-400" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* Mockup Footer Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-[11px] text-slate-500 font-mono">
                  <span>Stack: {project.techStack.join(' • ')}</span>
                  <span>Interaktif Simulation</span>
                </div>
              </div>
            )}
          </section>

          {/* Layout Studi Kasus: Bagian Tantangan dan Solusi Arsitektur (Prosa dengan margin y luas) */}
          <div className="py-12 sm:py-16 border-t border-slate-900 space-y-12">
            {/* Tantangan */}
            <article className="prose prose-invert max-w-none">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 block mb-2">
                Studi Kasus &bull; Analisis Kebutuhan
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-100 mb-4">
                Tantangan
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-400 max-w-3xl">
                {project.problem}
              </p>
            </article>

            {/* Solusi Arsitektur */}
            <article className="prose prose-invert max-w-none pt-8 border-t border-slate-900/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 block mb-2">
                Studi Kasus &bull; Implementasi Teknis
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-100 mb-4">
                Solusi Arsitektur
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-400 max-w-3xl mb-8">
                {project.solution}
              </p>

              {project.keyFeatures && (
                <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 max-w-3xl">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                    Sorotan Fitur &amp; Arsitektur Sistem
                  </h3>
                  <ul className="space-y-3">
                    {project.keyFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <Check className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>

            {/* Spesifikasi Stack */}
            <article className="pt-8 border-t border-slate-900/80">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Komponen Teknologi Utama
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {project.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/70 flex items-center gap-2.5"
                  >
                    <Code2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Navigasi Antar Proyek */}
          <nav
            aria-label="Navigasi Proyek Lain"
            className="pt-10 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <Link
              href={`/projects/${prevProject.slug}`}
              className="w-full sm:w-auto p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 text-left transition-colors group flex items-center gap-3"
            >
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 group-hover:text-indigo-400 transition-all" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                  Proyek Sebelumnya
                </span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="w-full sm:w-auto p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 text-right transition-colors group flex items-center justify-end gap-3"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                  Proyek Berikutnya
                </span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-indigo-400 transition-all" />
            </Link>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
