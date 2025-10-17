"use client";

import Carousel from "@/components/ui/carousel";

export default function GallerySekolah() {
  const slideData = [
    {
      title: "Gelar Lomba Tiktok PPDB 2025",
      button: "Lihat Kegiatan",
      src: "/images/galeri/lomba-tiktok.png",
    },
    {
      title: "Fashion Ethnic Modern & Turnamen Mobile Legend",
      button: "Lihat Kegiatan",
      src: "/images/galeri/fashion.png",
    },
    {
      title: "Workshop Teaching Factory: Sinergi SMK dan Industri",
      button: "Lihat Kegiatan",
      src: "/images/galeri/workshop.png",
    },
    {
      title: "Kegiatan P5: Sosialisasi Polsek & Damkar Kabupaten Madiun",
      button: "Lihat Kegiatan",
      src: "/images/galeri/p5.png",
    },
    {
      title:
        "Peringatan Hari Santri: Pengajian Bersama Dr. Wahyudi Setiawan, M.Psi",
      button: "Lihat Kegiatan",
      src: "/images/galeri/hari-santri.png",
    },
    {
      title:
        "Evaluasi Penerapan Modul Ajar Program Bantuan TEFA: Tingkatkan Kualitas Pembelajaran",
      button: "Lihat Kegiatan",
      src: "/images/galeri/evaluasi.png",
    },
    {
      title: "Aksi Kemanusiaan: Penggalangan Dana Bencana Alam Pulung-Banaran",
      button: "Lihat Kegiatan",
      src: "/images/galeri/aksi-kemanusiaan.png",
    },
    {
      title:
        "Taruna Melati bersama Motivator Muda 'Eko Purnomo' - Lembaga Training Center",
      button: "Lihat Kegiatan",
      src: "/images/galeri/taruna-melati.png",
    },
    {
      title: "Tahsin Al-Qur'an",
      button: "Lihat Kegiatan",
      src: "/images/galeri/tahsin.png",
    },
    {
      title: "Penyembelihan Hewan Qurban Idul Adha 1440 H",
      button: "Lihat Kegiatan",
      src: "/images/galeri/qurban.png",
    },
    {
      title: "Takbir Keliling",
      button: "Lihat Kegiatan",
      src: "/images/galeri/takbir.png",
    },
    {
      title: "Ujian Praktek PAI: Mengkafani Jenazah",
      button: "Lihat Kegiatan",
      src: "/images/galeri/kafan.png",
    },
    {
      title: "Bhakti Sosial Bencana Alam Pacitan",
      button: "Lihat Kegiatan",
      src: "/images/galeri/bakti.png",
    },
    {
      title: "Shalat Istisqa Civitas Akademika SMK Muhammadiyah 3 Dolopo",
      button: "Lihat Kegiatan",
      src: "/images/galeri/istiqa.png",
    },
    {
      title:
        "Sosialisasi PKL & Narkotika bersama Polsek Dolopo",
      button: "Lihat Kegiatan",
      src: "/images/galeri/pkl.png",
    },
    {
      title:
        "Menghadiri Undangan KPU Kabupaten Madiun: Edukasi Pemilu 2019",
      button: "Lihat Kegiatan",
      src: "/images/galeri/kpu.png",
    },
    {
      title: "Paskibraka SMK Muhammadiyah 3 Dolopo",
      button: "Lihat Kegiatan",
      src: "/images/galeri/paskib.png",
    },
    {
      title: "Lomba Cerdas Cermat Antar Kelas",
      button: "Lihat Kegiatan",
      src: "/images/galeri/lomba.png",
    },
    {
      title: "Donor Darah di SMK Muhammadiyah 3 Dolopo",
      button: "Lihat Kegiatan",
      src: "/images/galeri/donor.png",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Galeri Sekolah
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Berikut beberapa dokumentasi kegiatan <b>SMK Muhammadiyah 3 Dolopo</b>,
            mulai dari lomba, pelatihan, kegiatan sosial, hingga ekstrakurikuler
            siswa.
          </p>
        </div>

        <div className="relative overflow-hidden w-full h-full pb-14">
          <Carousel slides={slideData} />
        </div>
      </section>
    </main>
  );
}
