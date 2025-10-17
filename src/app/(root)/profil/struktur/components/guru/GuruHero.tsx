// src/app/profil/guru/components/GuruHero.tsx
"use client";

import { Badge } from "@/components/ui/badge";

export default function GuruHero() {
  return (
    <section className="text-center">
      <Badge className="rounded-full bg-teal-600 text-white hover:bg-teal-700">
        Daftar Guru
      </Badge>
      <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
        SMK Muhammadiyah 3 Dolopo
      </h1>
      <p className="mt-2 text-gray-600">Tenaga Pendidik & Pengajar</p>
    </section>
  );
}
