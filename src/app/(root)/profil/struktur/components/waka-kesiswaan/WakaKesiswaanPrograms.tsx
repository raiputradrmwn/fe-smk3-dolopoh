// src/app/profil/waka-kesiswaan/components/WakaKesiswaanPrograms.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CalendarDays, CalendarRange } from "lucide-react";

type ProgramItem = { title: string; desc?: string };

const HARlAN: ProgramItem[] = [
  {
    title: "Menyanyikan lagu Indonesia Raya & lagu nasional",
    desc:
      "Dilaksanakan saat awal siswa datang sebagai tanda masuk dan menumbuhkan rasa nasionalisme.",
  },
  {
    title: "Menjaga ketertiban siswa",
    desc:
      "Dilaksanakan setiap hari; siswa diharapkan disiplin terhadap aturan sekolah (seragam, badge, dan perlengkapan lainnya).",
  },
  {
    title: "Mengelola daftar hadir peserta didik",
    desc: "Mengetahui keaktifan siswa.",
  },
];

const BULANAN: ProgramItem[] = [
  {
    title:
      "Menyusun & mensosialisasikan tata tertib siswa serta Visi-Misi Sekolah",
    desc: "Agar siswa tertib dalam kegiatan sekolah.",
  },
  {
    title:
      "Mengatur & mengkoordinir ketertiban, kedisiplinan, dan kehadiran siswa di sekolah",
    desc:
      "Mengetahui keaktifan, kedisiplinan, dan permasalahan siswa sehingga dapat ditangani.",
  },
  {
    title:
      "Mengkoordinir program supervisi bagi siswa yang memiliki permasalahan",
    desc:
      "Pengajaran, penyesuaian pribadi, penyesuaian sosial, dan penataan emosi.",
  },
  {
    title: "Mengkoordinir program kesehatan & keamanan bagi siswa",
    desc: "Memantau kesehatan dan keamanan saat belajar.",
  },
  {
    title: "Mengkoordinir & membina program OSIS / IPM",
    desc: "Memantau pelaksanaan program OSIS/IPM.",
  },
  {
    title:
      "Pembinaan & pembimbingan pengurus OSIS dalam berorganisasi serta memantau realisasi kegiatannya",
    desc: "Memantau pelaksanaan program OSIS/IPM.",
  },
  {
    title: "Melaksanakan Kegiatan MPLS",
    desc: "Agar siswa baru mengenal lingkungan sekolah.",
  },
  { title: "Melaksanakan Kegiatan Taruna Melati I Kelas X" },
  { title: "Melaksanakan Pemilu Ketua IPM" },
  { title: "Upgrading IPM" },
  { title: "Pelantikan Pengurus IPM Baru" },
  {
    title: "Membuat etalase produk siswa",
    desc: "Membiasakan siswa berwirausaha dengan memajang produknya.",
  },
  {
    title:
      "Bersama Waka Humas mengkoordinir kegiatan penerimaan siswa baru (PPDB)",
    desc: "Target 300 siswa.",
  },
  {
    title: "Mengkoordinasi kegiatan Outdoor Learning",
    desc: "Refreshment siswa.",
  },
  {
    title: "Mengkoordinir penempatan siswa dalam setiap kelas",
    desc: "Siswa menempati kelas sesuai absensi.",
  },
  {
    title: "Mengkoordinir penerimaan siswa pindahan",
    desc: "Memastikan data Dapodik siswa berpindah.",
  },
  {
    title:
      "Mengkoordinir pencatatan & penyimpanan dokumen prestasi akademik & non-akademik siswa",
    desc: "Agar dokumen prestasi tertata rapi.",
  },
  { title: "Mengkoordinir kegiatan ketarunaan" },
  {
    title:
      "Mengkoordinir penyusunan & pelaksanaan ekstrakurikuler (kecuali Reog)",
    desc:
      "Memastikan pelaksanaan kegiatan dan koordinasi pembina ekstrakurikuler.",
  },
  { title: "Mengkoordinir kegiatan class meeting, peragaan hasil karya siswa, dll." },
  {
    title:
      "Menjaring siswa untuk diusulkan mendapat beasiswa pemerintah (KIP, BKSM, BPOPP, Bidikmisi)",
    desc: "Membantu siswa memperoleh bantuan.",
  },
  { title: "Mengkoordinir pelaksanaan Wisuda Siswa (Purnawiyata)" },
  { title: "Pemilihan siswa untuk mewakili sekolah (contoh: Paskibraka)" },
  { title: "Mengkoordinir kegiatan siswa yang mengikuti lomba/kejuaraan" },
  { title: "Menyiapkan petugas upacara (17-an, PHBN)" },
  { title: "Mengkoordinasi Kunjungan Industri" },
  { title: "Bazar di SMP" },
  { title: "FRNP (Festival Reog Nasional Ponorogo)" },
];

export default function WakaKesiswaanPrograms() {
  return (
    <section className="space-y-6">
      <ProgramCard icon={CalendarDays} title="Program Harian" items={HARlAN} />
      <ProgramCard icon={CalendarRange} title="Program Bulanan" items={BULANAN} />
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
  items: ProgramItem[];
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
        <ol className="space-y-3">
          {items.map((it, i) => (
            <li key={i} className="text-gray-800">
              <span className="font-medium">{`${i + 1}. ${it.title}`}</span>
              {it.desc && <p className="text-gray-600">{it.desc}</p>}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
