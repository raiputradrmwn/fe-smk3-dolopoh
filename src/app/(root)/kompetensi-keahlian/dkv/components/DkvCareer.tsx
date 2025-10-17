"use client";

import { Briefcase } from "lucide-react";

const CAREERS = [
  "Desainer Grafis",
  "Editor Video / Videografer",
  "Fotografer",
  "Animator 2D / 3D",
  "Desainer Web",
  "Administrasi Kreatif",
];

export default function DkvCareer() {
  return (
    <section className="mt-16 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Prospek Lulusan
      </h2>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CAREERS.map((c, i) => (
          <li
            key={i}
            className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm hover:border-teal-400 transition"
          >
            <Briefcase className="h-5 w-5 text-teal-600" />
            <span className="text-gray-700">{c}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-center text-gray-600 leading-relaxed max-w-3xl mx-auto">
        Lulusan DKV dapat bekerja di industri kreatif seperti agensi desain,
        media digital, periklanan, percetakan, maupun wirausaha di bidang desain
        grafis, animasi, dan multimedia.
      </p>
    </section>
  );
}
