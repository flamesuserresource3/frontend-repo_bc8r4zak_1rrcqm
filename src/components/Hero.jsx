import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
          <span className="h-2 w-2 rounded-full bg-sky-500" /> Tersedia untuk kolaborasi
        </span>
        <h1 className="font-semibold tracking-tight text-slate-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          <span className="block text-4xl sm:text-5xl md:text-6xl">Nama Lengkap Anda</span>
          <span className="mt-2 block text-lg font-normal text-slate-600 sm:text-xl">
            Tagline singkat yang mencerminkan diri Anda — modern, kreatif, dan profesional.
          </span>
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portofolio"
            className="rounded-lg bg-sky-600 px-5 py-3 text-white shadow-sm transition hover:bg-sky-700"
          >
            Lihat Karya
          </a>
          <a
            href="#kontak"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
