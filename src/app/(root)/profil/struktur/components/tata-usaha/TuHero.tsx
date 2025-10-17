
"use client";

import { Badge } from "@/components/ui/badge";

export default function TuHero() {
  return (
    <section className="text-center">
      <Badge className="rounded-full bg-teal-600 text-white hover:bg-teal-700">
        Tata Usaha
      </Badge>
      <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
        Daftar Karyawan Tata Usaha
      </h1>
      <p className="mt-2 text-gray-600">
        SMK Muhammadiyah 3 Dolopo
      </p>
    </section>
  );
}
