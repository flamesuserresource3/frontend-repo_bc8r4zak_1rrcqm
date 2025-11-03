import React from 'react';

export default function About() {
  return (
    <section id="tentang" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Tentang Saya</h2>
        <p className="mt-2 text-slate-600">Perkenalan singkat mengenai diri dan nilai yang Anda bawa.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
          <p className="leading-relaxed text-slate-700">
            Saya adalah seorang profesional yang berfokus pada pengembangan produk digital dengan perhatian pada
            detail, pengalaman pengguna, dan dampak bisnis. Memiliki ketertarikan pada teknologi, desain,
            dan kolaborasi lintas fungsi. Senang mempelajari hal baru dan mengemas ide menjadi solusi nyata.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Di waktu luang, saya menikmati membaca, menulis, serta membangun side-project untuk
            mengeksplorasi gagasan dan memperluas wawasan.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-sky-700">Profil Singkat</h3>
          <ul className="space-y-3 text-slate-700">
            <li><span className="font-medium text-slate-900">Lokasi:</span> Jakarta, Indonesia</li>
            <li><span className="font-medium text-slate-900">Fokus:</span> Produk, Frontend, UX</li>
            <li><span className="font-medium text-slate-900">Minat:</span> Teknologi, Desain, Edukasi</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
