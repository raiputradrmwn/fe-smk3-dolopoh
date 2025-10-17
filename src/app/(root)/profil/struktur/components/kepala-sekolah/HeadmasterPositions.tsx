// src/app/profil/kepala-sekolah/components/HeadmasterPositions.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const struktural = [
  "Kepala Sekolah SMK Muhammadiyah 3 Dolopo",
  "Ketua MKKS Swasta Kab. Madiun",
  "Wakil Ketua MKKS Swasta Provinsi Jawa Timur",
  "Ketua Guru Kinerja Kab/Kota Madiun",
];

const organisasi = [
  "Koordinator FOSKAM SMK Wilayah 4",
  "Wakil Ketua FOSKAM SMK Jawa Timur",
  "Wakil Sekretaris FOSKAM SMK Jawa Timur",
  "Ketua FOSKAM Kab/Kota Madiun",
  "Komandan KOKAM Kab. Madiun",
  "Ketua Majelis Dikdasmen PNF Ranting Ngrupit",
  "Ketua Majelis Kader PDM Kab. Madiun",
];

export default function HeadmasterPositions() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Jabatan Struktural</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            {struktural.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Jabatan Organisasi</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            {organisasi.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
