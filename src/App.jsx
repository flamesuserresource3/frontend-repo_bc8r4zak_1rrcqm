import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Showcase from './components/Showcase';

function Navbar() {
  const links = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#tentang', label: 'Tentang' },
    { href: '#pengalaman', label: 'Pengalaman' },
    { href: '#keahlian', label: 'Keahlian' },
    { href: '#kontak', label: 'Kontak' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#beranda" className="text-lg font-semibold text-slate-900">Portofolio</a>
        <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-sky-700">{l.label}</a>
          ))}
        </nav>
        <a href="#kontak" className="hidden rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 md:block">Hubungi</a>
      </div>
    </header>
  );
}

export default function App() {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nama = form.nama.value;
    const email = form.email.value;
    const pesan = form.pesan.value;
    const subject = encodeURIComponent(`Halo, saya ${nama}`);
    const body = encodeURIComponent(`Nama: ${nama}\nEmail: ${email}\n\n${pesan}`);
    window.location.href = `mailto:emailanda@contoh.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Timeline />
        <Showcase />

        {/* Kontak */}
        <section id="kontak" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Kontak</h2>
            <p className="mt-2 text-slate-600">Silakan tinggalkan pesan. Saya akan menghubungi Anda kembali.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <form onSubmit={handleContactSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                <div>
                  <label htmlFor="nama" className="mb-1 block text-sm font-medium text-slate-700">Nama</label>
                  <input id="nama" name="nama" required className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-sky-300 focus:ring" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" id="email" name="email" required className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-sky-300 focus:ring" />
                </div>
                <div>
                  <label htmlFor="pesan" className="mb-1 block text-sm font-medium text-slate-700">Pesan</label>
                  <textarea id="pesan" name="pesan" rows="5" required className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-sky-300 focus:ring" />
                </div>
                <button type="submit" className="mt-2 rounded-lg bg-sky-600 px-4 py-2 font-medium text-white transition hover:bg-sky-700">Kirim</button>
              </div>
            </form>

            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Info Kontak</h3>
              <ul className="space-y-3 text-slate-700">
                <li><span className="font-medium text-slate-900">Email:</span> emailanda@contoh.com</li>
                <li><span className="font-medium text-slate-900">WhatsApp:</span> +62 812-3456-7890</li>
                <li><span className="font-medium text-slate-900">LinkedIn:</span> linkedin.com/in/username</li>
                <li><span className="font-medium text-slate-900">Instagram:</span> @username</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600">Ganti dengan data Anda agar pengunjung dapat menghubungi Anda dengan mudah.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Nama Lengkap Anda — Dibuat dengan cinta dan teknologi.
        </div>
      </footer>
    </div>
  );
}
