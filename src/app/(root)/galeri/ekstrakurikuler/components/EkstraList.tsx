"use client";

import Image from "next/image";

export default function EkstraList() {
  const EKSTRA = [
    {
      name: "Hisbul Wathan",
      desc: "Kegiatan kepramukaan khas Muhammadiyah yang menanamkan nilai disiplin, tanggung jawab, dan kepemimpinan.",
      img: "/images/ekskul/hisbun-watan.png",
    },
    {
      name: "Kesenian Reyog Ponorogo",
      desc: "Ekstrakurikuler unggulan untuk melestarikan kesenian Reyog Ponorogo dan mewadahi minat bakat siswa di bidang seni.",
      img: "/images/ekskul/reog.png",
    },
    {
      name: "Jurnalistik",
      desc: "Mewadahi minat siswa di bidang tulis-menulis dan media, baik media cetak maupun elektronik.",
      img: "/images/ekskul/jurnalistik.png",
    },
    {
      name: "Lintang Pala",
      desc: "Kegiatan pecinta alam yang mengajak siswa mencintai alam, tadabur, dan menjadi relawan bencana.",
      img: "/images/ekskul/lintang-pala.png",
    },
    {
      name: "Tahsin dan Tahfidz Qur'an",
      desc: "Ekstrakurikuler rohis yang mengajarkan membaca dan menghafal Al-Qur'an dengan baik serta membentuk karakter spiritual.",
      img: "/images/ekskul/tahfidz.png",
    },
{
      name: "Bulutangkis",
      desc: "Mengembangkan keterampilan teknik, kecepatan, dan ketangkasan dalam olahraga bulutangkis.",
      img: "/images/ekskul/bulutangkis.png",
    },
    {
      name: "Bola Voli",
      desc: "Melatih kerja sama tim, sportivitas, dan kemampuan taktis dalam olahraga voli.",
      img: "/images/ekskul/volly.png",
    },
    {
      name: "Renang",
      desc: "Menumbuhkan keberanian, kekuatan fisik, dan ketahanan melalui kegiatan renang.",
      img: "/images/ekskul/renang.png",
    },
    {
      name: "Futsal",
      desc: "Menumbuhkan semangat kompetitif dan solidaritas tim dalam olahraga futsal.",
      img: "/images/ekskul/futsal.png",
    },
    {
      name: "Tenis Meja",
      desc: "Melatih fokus, refleks cepat, dan konsentrasi tinggi dalam permainan tenis meja.",
      img: "/images/ekskul/tenis-meja.png",
    },
    {
      name: "Tapak Suci",
      desc: "Seni bela diri khas Muhammadiyah yang mengajarkan kedisiplinan, moral, dan kekuatan fisik.",
      img: "/images/ekskul/tapak-suci.png",
    },
  ];

  return (
    <section className="mt-16 max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {EKSTRA.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
        >
          <div className="relative h-48 w-full">
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-5 text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              {item.name}
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
