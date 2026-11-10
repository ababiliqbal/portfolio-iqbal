import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Iqbal Ababil | Full-stack Web Developer",
  description:
    "Portofolio profesional Muhammad Iqbal Ababil - Full-stack Web Developer & Mahasiswa S1 Pendidikan Teknik Informatika dan Komputer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
