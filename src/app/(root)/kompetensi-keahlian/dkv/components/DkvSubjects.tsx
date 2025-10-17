"use client";

import { Palette, Camera, Video, Film, Globe, MousePointer } from "lucide-react";

const SUBJECTS = [
  { icon: Palette, text: "Desain Grafis" },
  { icon: Video, text: "Video Shooting" },
  { icon: Camera, text: "Fotografi" },
  { icon: Film, text: "Animasi 2 Dimensi" },
  { icon: Film, text: "Animasi 3 Dimensi" },
  { icon: MousePointer, text: "Media Interaktif" },
  { icon: Globe, text: "Desain Web" },
];

export default function DkvSubjects() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Materi Kompetensi Keahlian
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {SUBJECTS.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 shadow-sm hover:bg-teal-50 transition"
          >
            <s.icon className="h-5 w-5 text-teal-600" />
            <span className="text-gray-700 font-medium">{s.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
