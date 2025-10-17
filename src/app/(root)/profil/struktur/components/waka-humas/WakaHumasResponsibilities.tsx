"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const TANGGUNG_JAWAB = [
  "Tercapainya kerja sama dengan dunia industri/dunia usaha dan masyarakat dengan baik.",
  "Pelaksanaan praktik kerja industri (Prakerin) pada setiap program keahlian berjalan baik.",
  "Sekolah dikenal oleh masyarakat dan dunia industri/dunia usaha.",
  "Pendataan dan pelaksanaan reuni para tamatan.",
  "Terselenggaranya ujian kompetensi/profesi dengan hasil memuaskan.",
  "Tercapainya karier siswa secara optimal.",
  "Bursa Kerja Khusus (BKK) di sekolah terselenggara dengan baik.",
  "Terpeliharanya hubungan baik dengan komite sekolah.",
  "Pelaporan kegiatan berkala maupun insidental (lisan maupun tulisan) kepada Kepala Sekolah.",
];

export default function WakaHumasResponsibilities() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-teal-600" />
          B.2 Tanggung Jawab
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {TANGGUNG_JAWAB.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-teal-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
