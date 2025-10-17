"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Megaphone } from "lucide-react";

export default function WakaHumasSummary() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Megaphone className="h-5 w-5 text-teal-600" />
          A. Tugas dan Fungsi
        </CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 leading-relaxed">
        <p>
          Tugas dan fungsi Wakil Kepala Sekolah Bidang Hubungan Masyarakat dan
          Dunia Usaha/Dunia Industri SMK Muhammadiyah 3 Dolopo adalah membantu
          Kepala Sekolah dalam melaksanakan tugas hubungan masyarakat dan industri,
          meliputi menyusun dan melaksanakan program kerja, mengarahkan, membina,
          memimpin, mengawasi, dan mengkoordinasikan pelaksanaan tugas—khususnya
          di bidang hubungan kerja sama dengan dunia usaha/dunia industri yang
          relevan—serta memasarkan tamatan SMK.
        </p>
      </CardContent>
    </Card>
  );
}
