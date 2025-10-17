"use client";

export default function DpbAdvantages() {
  const ADVANTAGES = [
    "Belajar dari dasar — mulai dari menggambar, mengenal bahan tekstil, membuat pola, menjahit, hingga menghias dan finishing.",
    "Setiap kompetensi diulas tuntas baik teori maupun praktik, dari kerja tangan hingga mesin jahit industri.",
    "Peserta didik dilatih menciptakan karya busana inovatif dan berdaya jual tinggi.",
    "Mampu menilai dan membedakan kualitas busana berdasarkan bahan, jahitan, dan teknik pressing.",
    "Bekal wirausaha dan pengelolaan usaha busana agar siap menjadi pengusaha mandiri.",
  ];

  return (
    <section className="mt-16 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Keunggulan Program Keahlian
      </h2>

      <ul className="mt-6 space-y-3">
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
