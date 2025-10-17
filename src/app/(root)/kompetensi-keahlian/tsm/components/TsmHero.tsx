"use client";
import { Badge } from "@/components/ui/badge";

export default function TsmHero() {
  return (
    <section className="text-center">
      <Badge className="rounded-full bg-teal-600 text-white hover:bg-teal-700">
        Kompetensi Keahlian
      </Badge>
      <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
        Teknik dan Bisnis Sepeda Motor (TSM)
      </h1>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Jurusan unggulan dengan kemitraan Astra Honda Motor & MPM, mencetak
        teknisi profesional berkarakter industri 4.0.
      </p>
    </section>
  );
}
