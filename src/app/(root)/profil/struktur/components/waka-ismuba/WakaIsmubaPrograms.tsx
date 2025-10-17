// src/app/profil/waka-ismuba/components/WakaIsmubaPrograms.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListChecks, CalendarClock, CalendarRange, CalendarDays } from "lucide-react";

export default function WakaIsmubaPrograms() {
  return (
    <section className="space-y-6">
      <ProgramCard
        icon={CalendarDays}
        title="Program Kerja Harian"
        items={[
          "Tilawah sebelum KBM",
          "Shalat Dhuha",
          "Jama'ah Dhuhur dan Ashar",
        ]}
      />

      <ProgramCard
        icon={CalendarClock}
        title="Program Kerja Mingguan"
        items={[
          "TBTQ",
          "Tahfidzul Qur'an",
          "Kajian Keputrian",
          "Seni Baca Qur'an (Qiro'ah)",
          "Mukhadlarah",
          "Shalat Jum'at",
          "Tahsin Qur'an Guru",
        ]}
      />

      <ProgramCard
        icon={CalendarRange}
        title="Program Kerja Bulanan"
        items={["Tausiyah/kultum rapat koordinasi bulanan"]}
      />

      <ProgramCard
        icon={ListChecks}
        title="Program Kerja Triwulan"
        items={["Ujian Praktek hafalan (Qur'an juz 30)"]}
      />

      <ProgramCard
        icon={ListChecks}
        title="Program Kerja Tahunan"
        items={[
          "Pondok Romadhon",
          "Penghimpunan dan Pentasyarufan Zakat, Infaq, Shodaqoh",
          "Buka bersama, halal bihalal (silaturrahim)",
          "Taruna Melati",
          "Sholat Idul Adha",
          "Latihan Kurban Siswa",
          "Peringatan Hari Besar Islam (Isra' Mi'raj, Muharram, Maulid Nabi, Nuzulul Qur'an)",
        ]}
      />

      <ProgramCard
        icon={ListChecks}
        title="Program Kerja Insidental"
        items={[
          "Penghimpunan infaq dan sedekah (kematian, sakit, bencana alam, dll.)",
          "Pendelegasian siswa mengikuti kompetisi-kompetisi keagamaan",
          "Upgrading/Pematangan kader IPM",
          "Kegiatan pelaporan program kerja IPM selama 1 tahun",
        ]}
      />
    </section>
  );
}

function ProgramCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-teal-600" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          {items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
