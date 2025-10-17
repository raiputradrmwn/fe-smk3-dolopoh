"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListChecks } from "lucide-react";

const PROGRAM_KERJA = [
  "Merencanakan program kerja hubungan industri/dunia usaha dan masyarakat.",
  "Merencanakan program kerja hubungan industri setiap program keahlian dalam pelaksanaan Prakerin.",
  "Mengkoordinasikan dengan ketua program keahlian tentang program kerja hubungan industri/DU–DI dan masyarakat serta pelaksanaannya.",
  "Membuat peta kerja DU-DI yang relevan dengan program keahlian.",
  "Mempromosikan sekolah dan mengkoordinir penelusuran tamatan (tracer study).",
  "Melaksanakan reuni khusus alumni yang sudah bekerja untuk menghimpun informasi pelaksanaan Prakerin.",
  "Merencanakan program Prakerin, validasi kurikulum, serta mengkoordinir pelaksanaannya bersama Waka Kurikulum.",
  "Mengundang dan mengkoordinir guru tamu dari DU-DI untuk memberikan bahan ajar di sekolah.",
  "Mengkoordinir pelaksanaan Uji Kompetensi Keahlian (UKK) bersama Waka Kurikulum.",
  "Mengawasi pelaksanaan Prakerin bersama ketua program keahlian.",
  "Melaksanakan bimbingan karier/bimbingan kejuruan.",
  "Mengkoordinir program Bursa Kerja Khusus (BKK).",
  "Menciptakan dan memelihara hubungan baik dengan komite sekolah.",
  "Membantu Kepala Sekolah dalam menyusun RAPBS.",
  "Membuat laporan kerja secara berkala dan insidental.",
  "Mengadakan service visit ke lembaga pendidikan maupun lembaga pemerintahan.",
];

export default function WakaHumasPrograms() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-teal-600" />
          C. Program Kerja & Tugas Khusus
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal space-y-2 pl-5 text-gray-700">
          {PROGRAM_KERJA.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
