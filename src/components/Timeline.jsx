import React from 'react';

const items = {
  pendidikan: [
    { title: 'S1 Informatika', org: 'Universitas Contoh', year: '2016 — 2020', desc: 'Fokus pada pengembangan perangkat lunak dan UI/UX.' },
    { title: 'SMA IPA', org: 'SMAN 1 Contoh', year: '2013 — 2016', desc: 'Aktif di klub sains dan olimpiade komputer.' },
  ],
  pengalaman: [
    { title: 'Frontend Engineer', org: 'PT Teknologi Maju', year: '2022 — Sekarang', desc: 'Membangun antarmuka web yang cepat, responsif, dan aksesibel.' },
    { title: 'Product Designer', org: 'Startup Kreatif', year: '2020 — 2022', desc: 'Merancang alur pengguna, wireframe, dan prototipe interaktif.' },
  ],
};

function Column({ title, list }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">{title}</h3>
      <ol className="relative space-y-6">
        {list.map((it, idx) => (
          <li key={idx} className="pl-6">
            <span className="absolute ml-[-0.4rem] mt-1 h-2 w-2 rounded-full bg-sky-500" />
            <div className="text-sm text-slate-500">{it.year}</div>
            <div className="font-medium text-slate-900">{it.title} • <span className="text-slate-700">{it.org}</span></div>
            <p className="mt-1 text-slate-700">{it.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="pengalaman" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Pendidikan & Pengalaman</h2>
        <p className="mt-2 text-slate-600">Ringkasan perjalanan belajar dan karier dalam format terstruktur.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Column title="Pendidikan" list={items.pendidikan} />
        <Column title="Pengalaman" list={items.pengalaman} />
      </div>
    </section>
  );
}
