"use client";

export default function TsmAchievements() {
  const ACHIEVEMENTS = [
    "Juara 1 Automotive Skill Contest - Politeknik Negeri Madiun (2013)",
    "Juara 1 Honda Skill Contest - Se-Karesidenan Madiun (2014)",
    "Juara 3 Lomba Karya Cipta - UPT PPPK Provinsi Jawa Timur",
    "Juara 1 Kewirausahaan - Tingkat Provinsi Jawa Timur",
  ];

  return (
    <section className="mt-16 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold text-gray-900">
        Prestasi Teknik Sepeda Motor
      </h2>

      <ul className="mt-6 space-y-3 text-gray-700">
        {ACHIEVEMENTS.map((a, i) => (
          <li
            key={i}
            className="rounded-lg bg-gray-50 border border-gray-200 p-3 shadow-sm hover:bg-teal-50 transition"
          >
            {a}
          </li>
        ))}
      </ul>
    </section>
  );
}
