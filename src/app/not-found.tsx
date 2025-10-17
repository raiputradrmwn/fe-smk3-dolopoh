// src/app/not-found.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, Search, ArrowLeft } from "lucide-react";
import * as React from "react";

export default function NotFound() {
  const router = useRouter();
  const [q, setQ] = React.useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // arahkan ke halaman pencarian kalau nanti ada, sementara fallback ke beranda
    if (q.trim()) {
      router.push(`/search?q=${encodeURIComponent(q.trim())}`);
    } else {
      router.push("/");
    }
  }

  return (
    <main className="relative min-h-[80vh] w-full overflow-hidden bg-white">
      {/* background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-teal-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-32 right-1/2 h-72 w-[42rem] translate-x-1/2 rounded-full bg-cyan-100 blur-3xl opacity-60" />
      </div>

      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center md:py-28">
        {/* Ilustrasi 404 */}
        <div className="mb-8 inline-flex items-center justify-center">
          <svg
            role="img"
            aria-label="Halaman tidak ditemukan"
            width="220"
            height="160"
            viewBox="0 0 440 320"
            className="drop-shadow-sm"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            <rect x="20" y="40" rx="16" ry="16" width="400" height="200" fill="url(#g1)" opacity="0.15" />
            <g fill="#0f766e">
              <text x="70" y="160" fontFamily="ui-sans-serif, system-ui" fontWeight="800" fontSize="96">4</text>
              <circle cx="220" cy="132" r="38" fill="none" stroke="#0f766e" strokeWidth="10" />
              <line x1="248" y1="160" x2="280" y2="192" stroke="#0f766e" strokeWidth="10" strokeLinecap="round" />
              <text x="310" y="160" fontFamily="ui-sans-serif, system-ui" fontWeight="800" fontSize="96">4</text>
            </g>
          </svg>
        </div>

        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-teal-700">
          404 • Halaman tidak ditemukan
        </p>
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Waduh, alamat yang kamu tuju tidak tersedia
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Mungkin tautannya salah, dipindahkan, atau sementara tidak aktif. Kamu bisa kembali ke beranda
          atau cari halaman yang kamu butuhkan.
        </p>

        {/* Search */}
        

        {/* Aksi cepat */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="secondary">
            <Link href="/" className="inline-flex items-center gap-2">
              <Home className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </Button>
          <Button variant="ghost" onClick={() => router.back()} className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Halaman Sebelumnya
          </Button>
        </div>

        {/* Saran tautan penting */}
        <div className="mt-10 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {[
            { href: "/profil/sekolah", label: "Profil Sekolah" },
            { href: "/profil/struktur", label: "Struktur Organisasi" },
            { href: "/kompetensi/tkr", label: "TKR (Teknik Kendaraan Ringan)" },
            { href: "/kompetensi/tsm", label: "TSM (Teknik & Bisnis Sepeda Motor)" },
            { href: "/kompetensi/dkv", label: "DKV (Desain Komunikasi Visual)" },
            { href: "/kompetensi/dpb", label: "DPB (Desain & Produksi Busana)" },
            { href: "/gallery/ekstrakulikuler", label: "Galeri Ekstrakurikuler" },
            { href: "/gallery/kegiatan-sekolah", label: "Galeri Kegiatan Sekolah" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-gray-200 bg-white p-4 text-gray-700 shadow-sm transition hover:border-teal-300 hover:bg-teal-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
