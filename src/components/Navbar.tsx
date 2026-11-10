import Link from 'next/link';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { profile } from '@/data/projects';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight text-slate-100 hover:text-indigo-400 transition-all duration-300 ease-out"
        >
          <Code2 className="w-5 h-5 text-indigo-500" />
          <span className="text-base sm:text-lg">{profile.name}</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/#skills"
            className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-all duration-300 ease-out"
          >
            Keahlian
          </Link>
          <Link
            href="/#projects"
            className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-all duration-300 ease-out"
          >
            Proyek
          </Link>
          <a
            href="https://github.com/ababiliqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-all duration-300 ease-out"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}

