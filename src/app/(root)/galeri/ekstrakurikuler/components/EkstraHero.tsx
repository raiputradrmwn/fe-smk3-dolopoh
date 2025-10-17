"use client";

import { Badge } from "@/components/ui/badge";

export default function EkstraHero() {
  return (
    <section className="text-center">
      <Badge className="rounded-full bg-teal-600 text-white hover:bg-teal-700">
        Gallery Sekolah
      </Badge>

      <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
        Ekstrakurikuler SMK Muhammadiyah 3 Dolopo
      </h1>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
        SMK Muhammadiyah 3 Dolopo berkomitmen mengembangkan bakat, minat, dan
        potensi peserta didik melalui kegiatan <strong>ekstrakurikuler</strong>.
        Program ini menjadi wadah bagi siswa untuk mengasah kemampuan non-akademik
        sesuai minat dan bakat mereka.
      </p>
    </section>
  );
}
