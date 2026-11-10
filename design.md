# Project Blueprint & AI Context: Portfolio Iqbal

## 1. Project Overview

- **Project Name:** Iqbal Web Portfolio
- **Owner:** Muhammad Iqbal Ababil (Full-stack Web Developer)
- **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Lucide React (Icons).
- **Architecture:** Jamstack (Static SSG). No external database. All data is hardcoded in `src/data/projects.ts`.
- **Goal:** Create a highly professional, modern, and elegant developer portfolio with 0 layout shifts and 100/100 Lighthouse score.

## 2. UI/UX & Design Rules (Strictly Enforced)

**A. Color Palette (Midnight Aurora Theme)**

- Background: `bg-slate-950` (Dark, slate-blue base).
- Cards/Surfaces: `bg-slate-900/50` with very thin borders `border border-slate-800/50`.
- Primary Text: `text-slate-50`.
- Secondary Text: `text-slate-400`.
- Primary Accent: `indigo-500` (Use for buttons, active states, and glowing effects).

**B. Typography**

- Font: `Geist Sans` or `Plus Jakarta Sans`.
- Headings: Large, bold, and tightly tracked (e.g., `text-4xl md:text-6xl font-extrabold tracking-tight`).
- Paragraphs: Readable with relaxed leading (`leading-relaxed`).

**C. Background Shapes & Glassmorphism**

- Add absolute positioned, blurred mesh gradients in the background (e.g., `bg-indigo-500/10 blur-[120px] rounded-full`) behind the Hero section to give an elegant "glow" without disrupting text readability.
- Navbar should be sticky with a glass effect (`bg-slate-950/50 backdrop-blur-md`).

**D. Micro-Interactions**

- ALL hover states must use `transition-all duration-300 ease-out`.
- Card Hover: `hover:-translate-y-1.5 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10`.
- Never use bouncy or slow animations. Keep it snappy and professional.

## 3. Application Routing & Layout

Only TWO main route types exist:

1. `app/page.tsx` (Landing Page)
   - Sections: Hero, Skills, Featured Projects Grid, Footer.
2. `app/projects/[slug]/page.tsx` (Dynamic Show Page)
   - Sections: Project Header, Visual Showcase, The Problem, The Solution, Tech Stack.

## 4. Personal Data Context (For Landing Page)

- **Headline:** Merancang Aplikasi Web yang Cepat, Terukur, & Cerdas.
- **Sub-headline:** Halo, saya Muhammad Iqbal Ababil. Mahasiswa S1 Pendidikan Teknik Informatika dan Komputer & Full-stack Web Developer.
- **About/Value Prop:** Memiliki keahlian mendalam pada Software Development, Machine Learning, dan Deep Learning. Berpengalaman merancang, membangun, hingga mendistribusikan aplikasi web modern secara mandiri maupun dalam tim.
- **Skills Array:**
  - Frontend: Next.js, Tailwind CSS, Alpine.js, Vite, Streamlit.
  - Backend: Laravel, FastAPI, PostgreSQL, Supabase, MySQL.
  - AI & Tools: Machine Learning, LLM, Gemini, Scikit-Learn, Git, Docker, Vercel.

## 5. Projects Data Context (For `src/data/projects.ts`)

The AI must map these exactly 5 projects into a TypeScript array of objects. Note the `demoType` field which dictates whether the Show Page renders a Video Player or an Image + Live Link.

1. **Amba Shop (B2C E-Commerce)**
   - **Slug:** `amba-shop`
   - **Tech:** Next.js, FastAPI, CI/CD
   - **Summary:** Platform e-commerce komprehensif dengan ongkos kirim otomatis dan pembayaran digital.
   - **Demo Type:** `simulation` (Image + Live Demo Link)
   - **GitHub:** `https://github.com/ababiliqbal/e-commerce-nextjs-fastapi.git`
2. **Memory Guardian AI**
   - **Slug:** `memory-guardian-ai`
   - **Tech:** Next.js, Google Gemini, Supabase
   - **Summary:** Aplikasi web AI interaktif untuk merekam dan mewariskan pengalaman mengajar guru via teks dan suara.
   - **Demo Type:** `simulation` (Image + Live Demo Link)
   - **GitHub:** `https://github.com/ababiliqbal/memory-guardian-ai.git`

3. **Fake News Detector**
   - **Slug:** `fake-news-detector`
   - **Tech:** Python, Scikit-Learn, Streamlit, NLP
   - **Summary:** Aplikasi web pendeteksi berita hoaks menggunakan algoritma Multinomial Naive Bayes dan NLP (TF-IDF).
   - **Demo Type:** `simulation` (Image + Live Demo Link)
   - **GitHub:** `https://github.com/ababiliqbal/fake-news-detector`

4. **Web Profile SMA Lab UPGRIS**
   - **Slug:** `web-profile-sma-upgris`
   - **Tech:** Laravel 10, MySQL, Tailwind CSS
   - **Summary:** Sistem kelola konten (CMS) informasi sekolah.
   - **Demo Type:** `video` (Video Player embed)
   - **GitHub:** `https://github.com/ababiliqbal/web-profile-sma-laboratorium-upgris.git`

5. **Biro Travel Umroh**
   - **Slug:** `biro-travel-umroh`
   - **Tech:** Laravel, MySQL, Tailwind CSS
   - **Summary:** Sistem pendaftaran, pembayaran, dan manajemen laporan keuangan untuk biro travel umroh.
   - **Demo Type:** `video` (Video Player embed)
   - **GitHub:** `https://github.com/ababiliqbal/biro-travel-umroh.git`

## 6. Development Instructions for AI Agent

When requested to build, start by creating the `src/data/projects.ts` file based on Section 5. Then build `app/page.tsx`, extracting components like `<Hero />`, `<Skills />`, and `<ProjectGrid />` into a `src/components` folder for cleanliness. Finally, build `app/projects/[slug]/page.tsx` using conditional rendering based on `demoType`.
