"use client";

export default function TsmCompetency() {
  return (
    <section className="mt-16 max-w-5xl mx-auto text-gray-700">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Kompetensi yang Diajarkan
      </h2>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-teal-700 mb-3">
            Dasar Kompetensi Kejuruan
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Memahami dasar-dasar mesin dan proses otomotif.</li>
            <li>Menginterpretasikan gambar teknik dan prosedur keselamatan kerja.</li>
            <li>Menggunakan alat ukur dan peralatan bengkel dengan benar.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-teal-700 mb-3">
            Kompetensi Kejuruan
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Melakukan perbaikan sistem bahan bakar, pendingin, dan pengapian.</li>
            <li>Melaksanakan overhaul engine dan kepala silinder.</li>
            <li>Melakukan perbaikan sistem transmisi, rem, dan suspensi.</li>
            <li>Memperbaiki sistem starter, pengisian, dan kelistrikan motor.</li>
            <li>Melakukan servis roda, ban, dan rantai sepeda motor.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
