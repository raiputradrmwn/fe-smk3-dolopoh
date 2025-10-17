// src/app/profil/bk/components/BkPrograms.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

const PROGRAM_BK: { title: string }[] = [
  { title: "Terpenuhinya kebutuhan kegiatan BK" },
  { title: "Melakukan sosialisasi bersama wali murid" },
  { title: "Membuat angket bakat minat untuk siswa baru kelas X (awal tahun ajaran)" },
  { title: "Sosialisasi BK bekerja sama dengan lembaga dari luar" },
  { title: "Pelaksanaan konseling klasikal" },
  { title: "Sosialisasi siswa untuk mengikuti SMPTN/SBMPTN (yang berminat melanjutkan kuliah)" },
  { title: "Membuat angket/kuisioner minat setelah lulus (bekerja, kuliah, atau berwirausaha)" },
  { title: "Kunjungan siswa (home/hospital visit) bila diperlukan" },
];

export default function BkPrograms() {
  return (
    <section className="mt-12">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-teal-600" />
            Program Kerja BK/BP
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal space-y-3 pl-5 text-gray-800">
            {PROGRAM_BK.map((p, i) => (
              <li key={i} className="font-medium">
                {p.title}
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </section>
  );
}
