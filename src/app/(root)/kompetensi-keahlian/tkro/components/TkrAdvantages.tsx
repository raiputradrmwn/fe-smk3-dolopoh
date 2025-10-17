"use client";

const ADVANTAGES = [
  "Menjadi Pilot Project PT Kubota Indonesia (2014) — Bengkel Resmi Kubota pertama se-Indonesia.",
  "Peralatan bengkel up-to-date dan sesuai standar industri (scanner, analyzer gas emission, spooring, balancing, dll).",
  "Lulusan memiliki empat kompetensi: Otomotif Roda 2, Roda 4, Mesin Diesel Kubota, dan Pengelasan.",
  "Guru instruktur bersertifikat profesi dari LSP.",
  "Siswa dibekali kemampuan kewirausahaan dan inovasi.",
  "Lulusan banyak diterima di perusahaan ternama, baik dalam maupun luar negeri.",
];

export default function TkrAdvantages() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Keunggulan Program
      </h2>

      <ul className="mt-6 space-y-3 max-w-4xl mx-auto">
        {ADVANTAGES.map((a, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm hover:border-teal-400 transition"
          >
            <span className="text-teal-600 font-bold">{i + 1}.</span>
            <p className="text-gray-700">{a}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
