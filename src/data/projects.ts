export type DemoType = 'video' | 'simulation';

export interface Project {
  slug: string;
  title: string;
  techStack: string[];
  summary: string;
  demoType: DemoType;
  githubUrl: string;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  liveUrl?: string;
  videoUrl?: string;
}

export type SkillCategory = 'Frontend' | 'Backend' | 'AI & Tools';

export interface Skill {
  category: SkillCategory;
  items: string[];
}

export interface Profile {
  name: string;
  role: string;
  education: string;
  headline: string;
  subheadline: string;
  about: string;
  email: string;
  phone: string;
  avatar: string;
}

export const profile: Profile = {
  name: 'Muhammad Iqbal Ababil',
  role: 'Full-stack Web Developer',
  education: 'S1 Pendidikan Teknik Informatika dan Komputer',
  headline: 'Merancang Aplikasi Web yang Cepat, Terukur, & Cerdas.',
  subheadline:
    'Halo, saya Muhammad Iqbal Ababil. Mahasiswa S1 Pendidikan Teknik Informatika dan Komputer & Full-stack Web Developer.',
  about:
    'Memiliki keahlian mendalam pada Software Development, Machine Learning, dan Deep Learning. Berpengalaman merancang, membangun, hingga mendistribusikan aplikasi web modern secara mandiri maupun dalam tim.',
  email: 'ababiliqbalmuhammad@gmail.com',
  phone: '0819 1433 2341',
  avatar: '/images/iqbal.jpg',
};

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['Next.js', 'Tailwind CSS', 'Alpine.js', 'Vite', 'Streamlit'],
  },
  {
    category: 'Backend',
    items: ['Laravel', 'FastAPI', 'PostgreSQL', 'Supabase', 'MySQL'],
  },
  {
    category: 'AI & Tools',
    items: [
      'Machine Learning',
      'LLM',
      'Git',
      'Docker',
      'Dbeaver',
      'Antigravity IDE',
    ],
  },
];

export const projects: Project[] = [
  {
    slug: 'amba-shop',
    title: 'Amba Shop (B2C E-Commerce)',
    techStack: ['Next.js', 'FastAPI', 'CI/CD'],
    summary:
      'Platform e-commerce komprehensif dengan ongkos kirim otomatis dan pembayaran digital.',
    demoType: 'simulation',
    githubUrl: 'https://github.com/ababiliqbal/e-commerce-nextjs-fastapi.git',
    liveUrl: 'https://ecommerce-nextjs-frontend-two.vercel.app/',
    problem:
      'Pelaku usaha B2C membutuhkan platform e-commerce yang mampu menghitung ongkos kirim secara dinamis antarkota dan memproses pembayaran digital secara otomatis tanpa intervensi manual yang memperlambat pemrosesan pesanan.',
    solution:
      'Merancang arsitektur decoupled dengan frontend Next.js yang cepat dan backend performa tinggi FastAPI. Mengintegrasikan kalkulasi tarif kurir real-time, webhook gateway pembayaran otomatis, serta pipeline CI/CD untuk deployment yang terotomasi penuh.',
    keyFeatures: [
      'Kalkulasi ongkos kirim otomatis terintegrasi API ekspedisi',
      'Gateway pembayaran digital dengan verifikasi webhook otomatis',
      'Arsitektur decoupled modern: Next.js frontend dan FastAPI backend',
      'Pipeline CI/CD terotomasi untuk deployment dan pengujian kode',
    ],
  },
  {
    slug: 'memory-guardian-ai',
    title: 'Memory Guardian AI',
    techStack: ['Next.js', 'Google Gemini', 'Supabase'],
    summary:
      'Aplikasi web AI interaktif untuk merekam dan mewariskan pengalaman mengajar guru via teks dan suara.',
    demoType: 'simulation',
    githubUrl: 'https://github.com/ababiliqbal/memory-guardian-ai.git',
    liveUrl: 'https://memory-guardian-ai.vercel.app/',
    problem:
      'Banyak wawasan pedagogis, studi kasus praktis, dan pengalaman mengajar bernilai tinggi dari para guru senior yang hilang begitu saja karena tidak terdokumentasikan ke dalam format terstruktur yang dapat dipelajari generasi pengajar selanjutnya.',
    solution:
      'Membangun platform AI interaktif berbasis Google Gemini dan Next.js yang memfasilitasi wawancara terarah melalui input teks dan transkripsi suara. Data diolah menjadi repositori pengetahuan terstruktur dengan Supabase sebagai penyimpanan data relasional dan otentikasi.',
    keyFeatures: [
      'Interaksi multimodal berbasis teks dan rekaman suara',
      'Sintesis pengetahuan dan ringkasan pedagogis dengan Google Gemini',
      'Penyimpanan repositori terpusat dan aman menggunakan Supabase',
      'Antarmuka responsif dan ramah pengguna untuk kalangan pendidik',
    ],
  },
  {
    slug: 'fake-news-detector',
    title: 'Fake News Detector',
    techStack: ['Python', 'Scikit-Learn', 'Streamlit', 'NLP'],
    summary:
      'Aplikasi web pendeteksi berita hoaks menggunakan algoritma Multinomial Naive Bayes dan NLP (TF-IDF).',
    demoType: 'simulation',
    githubUrl: 'https://github.com/ababiliqbal/fake-news-detector',
    liveUrl: 'https://fake-news-detector-naive-bayes.streamlit.app/',
    problem:
      'Maraknya penyebaran informasi palsu dan disinformasi di media sosial menuntut adanya sistem verifikasi kredibilitas berita yang cepat, objektif, dan dapat diakses dengan mudah oleh publik luas.',
    solution:
      'Mengembangkan aplikasi machine learning klasifikasi teks menggunakan algoritma Multinomial Naive Bayes yang dikombinasikan dengan pembobotan fitur TF-IDF (Term Frequency-Inverse Document Frequency) pada Python, lalu disajikan melalui antarmuka web interaktif Streamlit.',
    keyFeatures: [
      'Klasifikasi teks cepat berbasis algoritma Multinomial Naive Bayes',
      'Ekstraksi fitur linguistik dengan pembobotan TF-IDF',
      'Antarmuka eksplorasi berita instan menggunakan Streamlit',
      'Analisis probabilitas prediksi keaslian artikel secara transparan',
    ],
  },
  {
    slug: 'web-profile-sma-upgris',
    title: 'Web Profile SMA Lab UPGRIS',
    techStack: ['Laravel 10', 'MySQL', 'Tailwind CSS'],
    summary: 'Sistem kelola konten (CMS) informasi sekolah.',
    demoType: 'video',
    githubUrl:
      'https://github.com/ababiliqbal/web-profile-sma-laboratorium-upgris.git',
    videoUrl: 'https://youtu.be/DQxDuWsowl8?si=GVWMvaPnbAvsk2GZ',
    problem:
      'Pihak sekolah membutuhkan wadah informasi digital resmi yang profesional, terstruktur, dan mudah diperbarui oleh staf non-teknis untuk kegiatan penerimaan siswa baru, pengumuman agenda, dan profil prestasi.',
    solution:
      'Membangun sistem kelola konten (CMS) informasi sekolah berbasis Laravel 10 dan MySQL dengan antarmuka modern Tailwind CSS. Dilengkapi dashboard manajemen artikel, galeri kegiatan, struktur kepengurusan, dan optimasi SEO lokal sekolah.',
    keyFeatures: [
      'Content Management System (CMS) mandiri berbasis Laravel 10',
      'Dashboard manajemen publikasi berita, pengumuman, dan agenda',
      'Desain antarmuka modern dan responsif dengan Tailwind CSS',
      'Struktur basis data relasional MySQL terindeks untuk akses cepat',
    ],
  },
  {
    slug: 'biro-travel-umroh',
    title: 'Biro Travel Umroh',
    techStack: ['Laravel', 'MySQL', 'Tailwind CSS'],
    summary:
      'Sistem pendaftaran, pembayaran, dan manajemen laporan keuangan untuk biro travel umroh.',
    demoType: 'video',
    githubUrl: 'https://github.com/ababiliqbal/biro-travel-umroh.git',
    videoUrl: 'https://youtu.be/ecrJnHzgurI?si=EhHkHzXIupNbS1Vj',
    problem:
      'Pencatatan manual pada pendaftaran jamaah, pemantauan status cicilan pembayaran paket, dan pelaporan keuangan biro perjalanan umroh sering memicu ketidaksesuaian data operasional dan inefisiensi administrasi.',
    solution:
      'Merancang sistem informasi operasional terpadu berbasis Laravel, MySQL, dan Tailwind CSS untuk mengotomatisasi pendaftaran jamaah, manajemen paket keberangkatan, tracking riwayat pembayaran, serta rekapitulasi laporan laba-rugi operasional.',
    keyFeatures: [
      'Pendaftaran dan administrasi manifest jamaah umroh secara terpusat',
      'Pencatatan dan verifikasi bertahap untuk pembayaran cicilan paket',
      'Modul rekapitulasi laporan keuangan dan cash flow otomatis',
      'Hak akses multi-level: administrator, bagian keuangan, dan pimpinan',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
