// src/app/profil/waka-sdm/components/WakaSdmPrograms.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

type Item = { title: string; desc?: string };

const PROGRAMS: Item[] = [
  {
    title: "Menyusun program kerja tahunan",
    desc:
      "Membuat dan mensosialisasikan program kerja selama satu tahun kepada civitas akademika SMK Muhammadiyah 3 Dolopo.",
  },
  {
    title: "Memberikan masukan & saran atas kebijakan kepala sekolah",
    desc:
      "Terkait perencanaan, pelaksanaan, evaluasi, dan pengembangan sekolah.",
  },
  {
    title: "Mengkoordinasi pelaksanaan tugas Waka lainnya",
    desc: "Sinkronisasi kerja seluruh Waka & struktural independen.",
  },
  {
    title:
      "Koordinasi dengan Waka/struktural lain untuk analisis kebutuhan diklat sekolah",
    desc:
      "Peningkatan kompetensi guru & karyawan (profesional dan non-profesional/ruhaniyah).",
  },
  {
    title:
      "Koordinasi perencanaan, pelaksanaan, evaluasi, dan pengembangan SDM guru & karyawan",
    desc:
      "Peningkatan kompetensi, jenjang studi, dan karir.",
  },
  {
    title:
      "Menganalisis hasil evaluasi pembelajaran secara berkala untuk peningkatan kualitas tamatan",
    desc:
      "Penyesuaian kompetensi guru dengan kebutuhan DUDIKA & BMW.",
  },
  {
    title: "Analisis kebutuhan rasio guru berdasarkan data riil & Dapodik",
    desc: "Menentukan kebutuhan guru baru berdasarkan rasio JP & Dapodik.",
  },
  {
    title: "Rekrutmen guru & karyawan sesuai kebutuhan",
    desc: "Pemenuhan guru mapel & karyawan baru.",
  },
  {
    title: "Pembinaan guru & karyawan",
    desc:
      "Peningkatan etitude, tupoksi, & tata tertib guru/karyawan.",
  },
  {
    title: "Menyiapkan & menyusun rapor penjaminan mutu",
    desc: "Capaian rapor mutu sekolah baik.",
  },
  {
    title: "Menyusun laporan kegiatan akhir tahun",
    desc: "Penyusunan SPJ.",
  },
];

export default function WakaSdmPrograms() {
  return (
    <section className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-teal-600" />
            Program Kerja Waka SDM
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal space-y-3 pl-5 text-gray-800">
            {PROGRAMS.map((it, i) => (
              <li key={i}>
                <span className="font-semibold">{it.title}</span>
                {it.desc && <p className="text-gray-600">{it.desc}</p>}
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </section>
  );
}
