import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}
