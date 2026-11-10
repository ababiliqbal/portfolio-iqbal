import Link from 'next/link';
import { ArrowLeft, FileQuestion } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col justify-between selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Static mesh aurora backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full"
        />

        <div className="relative max-w-md w-full text-center bg-slate-900/50 border border-slate-800/60 rounded-2xl p-8 sm:p-10 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center text-indigo-400 mx-auto mb-6">
            <FileQuestion className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-widest block mb-2">
            Status 404
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-50 mb-3">
            Halaman Tidak Ditemukan
          </h1>

          <p className="text-sm leading-relaxed text-slate-400 mb-8">
            Halaman atau proyek yang Anda cari tidak tersedia atau tautan telah dipindahkan.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-300 ease-out shadow-lg shadow-indigo-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

