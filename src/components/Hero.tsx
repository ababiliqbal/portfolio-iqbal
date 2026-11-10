import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code2, Mail, Phone } from 'lucide-react';
import { profile } from '@/data/projects';

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

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-24 border-b border-slate-900/60">
      {/* Static mesh gradients for Midnight Aurora ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[650px] h-[380px] md:w-[900px] md:h-[450px] bg-indigo-500/10 blur-[120px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-48 -right-20 w-[350px] h-[350px] bg-indigo-600/5 blur-[120px] rounded-full"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Kolom Kiri: Informasi Personal & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-medium text-slate-300 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{profile.role}</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-400">{profile.education}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-50 leading-[1.12] mb-6">
              {profile.headline}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-slate-400 max-w-2xl mb-8">
              {profile.about}
            </p>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-300 ease-out shadow-lg shadow-indigo-500/20"
              >
                <span>Jelajahi Proyek</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <a
                href="https://github.com/ababiliqbal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900 text-slate-300 font-medium text-sm transition-all duration-300 ease-out"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900 text-slate-300 font-medium text-sm transition-all duration-300 ease-out"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Email</span>
              </a>

              <a
                href={`https://wa.me/62${profile.phone.replace(/[\s-]/g, '').replace(/^0/, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-800/80 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/60 text-slate-400 hover:text-slate-200 font-medium text-sm transition-all duration-300 ease-out"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{profile.phone}</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Foto Profil Berbentuk Modern dengan Aurora Glow Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Aurora Glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-600/30 via-indigo-500/10 to-transparent blur-2xl"
              />

              {/* Card Container Frame */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800/80 shadow-2xl backdrop-blur-sm">
                {/* Floating Tech Pill (Top Right) */}
                <div className="absolute -top-3 -right-3 z-20 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-indigo-500/40 backdrop-blur-md shadow-xl flex items-center gap-1.5 text-xs text-indigo-300 font-mono">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Fullstack &amp; ML</span>
                </div>

                {/* Photo / Avatar Canvas */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/60 flex items-center justify-center">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={480}
                    height={480}
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>

                {/* Floating Status Pill (Bottom Left) */}
                <div className="absolute -bottom-3 -left-3 z-20 px-3.5 py-1.5 rounded-xl bg-slate-900/95 border border-slate-800 backdrop-blur-md shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-200">
                    Open for Collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
