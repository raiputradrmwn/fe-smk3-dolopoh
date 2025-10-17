"use client";

import { Wrench, Cog, Car, Fuel, Factory } from "lucide-react";

const FACILITIES = [
  "Bengkel Engine Bensin, Diesel dan EFI (Electric Fuel Injection)",
  "Bengkel Chasis, Spooring dan Balancing",
  "Bengkel Kelistrikan Otomotif",
  "Bengkel Kerja Bangku / Teknik Pengelasan",
  "Bengkel Resmi Kubota",
  "Training Center Daihatsu",
];

export default function TkrFacilities() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Fasilitas Bengkel TKR
      </h2>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {FACILITIES.map((f, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-xl bg-gray-50 p-4 shadow-sm hover:bg-teal-50 transition"
          >
            <Wrench className="h-5 w-5 text-teal-600 mt-1" />
            <span className="text-gray-700">{f}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
