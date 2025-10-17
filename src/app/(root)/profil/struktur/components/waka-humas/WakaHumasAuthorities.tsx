"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";

const WEWENANG = [
  "Mengoreksi dan merevisi program kerja bawahan.",
  "Melakukan pengawasan/supervisi tugas bawahan.",
  "Menentukan kontrak kerja sama dengan pihak industri/dunia usaha.",
  "Membantu mempromosikan unit produksi sekolah.",
  "Mengambil langkah-langkah yang tepat sesuai prosedur yang telah ditetapkan dalam melaksanakan tugas.",
];

export default function WakaHumasAuthorities() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <BriefcaseBusiness className="h-5 w-5 text-teal-600" />
          B.1 Wewenang
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {WEWENANG.map((item, i) => (
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
