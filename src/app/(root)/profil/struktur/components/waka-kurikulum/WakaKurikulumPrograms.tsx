// src/app/profil/waka-kurikulum/components/WakaKurikulumPrograms.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Goal,
  LayoutList,
  BookOpenCheck,
  FileStack,
  Wrench,
  ClipboardList,
} from "lucide-react";

type Item = { title: string; desc?: string };
type Section = { icon: React.ElementType; title: string; items: Item[] };

const SECTIONS: Section[] = [
  {
    icon: Goal,
    title: "Sukses PPDB",
    items: [
      {
        title: "Ikut mensosialisasikan sekolah untuk mencapai target 300 siswa baru",
      },
    ],
  },
  {
    icon: LayoutList,
    title: "Menyusun Perencanaan Kurikulum",
    items: [
      { title: "Program kerja dan evaluasi" },
      { title: "Kalender Pendidikan" },
      { title: "Pembagian jam mengajar guru" },
      { title: "Jadwal Pelajaran" },
      { title: "Koordinasi perangkat ajar guru" },
      { title: "Koordinasi tupoksi piket" },
    ],
  },
  {
    icon: BookOpenCheck,
    title: "Perangkat Kurikulum & KBM Guru",
    items: [
      { title: "Jurnal kelas lengkap" },
      { title: "Jurnal guru lengkap" },
      { title: "Absensi kelas" },
      { title: "Absensi siswa oleh guru mapel" },
    ],
  },
  {
    icon: FileStack,
    title: "Pengadaan & Dokumen Kurikulum",
    items: [
      {
        title:
          "Pengadaan buku: buku teks pelajaran (guru & siswa), non-teks, modul",
      },
      { title: "Review & pembuatan dokumen: KTSP, KOS, P5BK" },
    ],
  },
  {
    icon: Wrench,
    title: "Pengembangan Kurikulum",
    items: [
      { title: "Sinkronisasi materi dengan DUDIKA" },
      { title: "Peningkatan kompetensi guru/siswa" },
      { title: "IHT (In House Training) guru" },
    ],
  },
  {
    icon: ClipboardList,
    title: "Agenda Evaluasi & Administrasi",
    items: [
      { title: "PTS ganjil (X–XII)", desc: "Cek prestasi tengah semester; e-rapor" },
      { title: "PAS ganjil (X–XII)", desc: "Cek prestasi semester; lapor ke orang tua" },
      { title: "Realisasi e-rapor semester 1", desc: "Bukti fisik evaluasi belajar" },
      { title: "Cek buku induk & rapor (semester 1)" },
      { title: "PTS genap (X–XII)", desc: "Cek prestasi tengah semester; e-rapor" },
      {
        title: "PAS genap (X–XI)",
        desc: "Penentuan kenaikan kelas; lapor ke dinas & orang tua",
      },
      {
        title: "Realisasi e-rapor semester 2",
        desc: "Bukti fisik + Reward siswa",
      },
      { title: "Cek buku induk & rapor (semester 2)" },
      {
        title: "Penambahan materi uji produktif / drill",
        desc: "Kompetensi UKK siswa baik",
      },
      {
        title: "UKK",
        desc:
          "Pengetahuan, keterampilan, & sikap terstandar sesuai program keahlian",
      },
      { title: "PAS genap kelas XII", desc: "Nilai semester 6" },
      { title: "USP", desc: "NS & pengisian nilai ijazah" },
      {
        title: "Administrasi Kelulusan",
        desc:
          "Cek buku induk/ijazah/sertifikat; bukti fisik tuntas/lulus; cek admin ke dinas; nominatif",
      },
      { title: "PKL", desc: "Siswa melaksanakan PKL dengan baik" },
      {
        title: "Kelas Industri & Kelas Wirausaha",
        desc: "Kelas berjalan + guru tamu dari DuDi",
      },
      {
        title: "Koordinasi Sukses UMPTN",
        desc: "Terselenggaranya kegiatan sukses UMPTN",
      },
      {
        title: "Evaluasi Bulanan & Tahunan",
        desc: "Paparan evaluasi kurikulum dalam rapat",
      },
      { title: "ANBK", desc: "Terselenggara dengan baik" },
      { title: "Kontrol KBM", desc: "KBM aktif tanpa jam kosong" },
      { title: "Biaya tak terduga", desc: "Insidental" },
    ],
  },
];

export default function WakaKurikulumPrograms() {
  return (
    <section className="space-y-6">
      {SECTIONS.map((s, idx) => (
        <Card key={idx}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <s.icon className="h-5 w-5 text-teal-600" />
              {s.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal space-y-3 pl-5">
              {s.items.map((it, i) => (
                <li key={i} className="text-gray-800">
                  <span className="font-medium">{it.title}</span>
                  {it.desc && <p className="text-gray-600">{it.desc}</p>}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
