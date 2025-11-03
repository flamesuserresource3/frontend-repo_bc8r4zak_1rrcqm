import React from 'react';
import { Star, Code, Palette, Cpu } from 'lucide-react';

const skills = [
  { name: 'React & Frontend', level: 90, icon: Code },
  { name: 'UI/UX & Desain', level: 85, icon: Palette },
  { name: 'Arsitektur & API', level: 80, icon: Cpu },
];

const projects = [
  {
    title: 'Dashboard Analitik',
    img: 'https://images.unsplash.com/photo-1551281044-8af9c5f3f05b?q=80&w=1600&auto=format&fit=crop',
    desc: 'Visualisasi data real-time untuk pengambilan keputusan yang lebih cepat.'
  },
  {
    title: 'Website Edukasi',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    desc: 'Platform pembelajaran dengan materi interaktif dan progres belajar.'
  },
  {
    title: 'Portfolio Kreatif',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
    desc: 'Showcase karya dengan animasi halus dan performa optimal.'
  }
];

function Progress({ value }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
      <div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-sky-600" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="keahlian" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Keahlian & Portofolio</h2>
          <p className="mt-2 text-slate-600">Kombinasi kemampuan teknis dan kreatif untuk menyelesaikan masalah.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-700">
          <Star className="h-4 w-4" />
          <span className="text-sm">Terbuka untuk proyek freelance</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-slate-900">Keahlian</h3>
          <ul className="space-y-5">
            {skills.map((s) => (
              <li key={s.name} className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-sky-50 text-sky-600">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="w-full">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-medium text-slate-900">{s.name}</span>
                    <span className="text-sm text-slate-600">{s.level}%</span>
                  </div>
                  <Progress value={s.level} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div id="portofolio" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-slate-900">Portofolio</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <figure key={p.title} className="group overflow-hidden rounded-lg border border-slate-200">
                <img src={p.img} alt={p.title} className="h-40 w-full object-cover transition duration-300 group-hover:scale-105" />
                <figcaption className="space-y-1 p-3">
                  <div className="font-medium text-slate-900">{p.title}</div>
                  <p className="text-sm text-slate-600">{p.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
