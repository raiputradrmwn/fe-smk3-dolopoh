"use client";

import Image from "next/image";

const GALLERY = [
  { src: "/images/tkro/mou.png", caption: "MoU dengan PT Kubota Indonesia" },
  { src: "/images/tkro/kubota.png", caption: "Peresmian Pusat Pelatihan Kubota" },
  { src: "/images/tkro/juara2.png", caption: "Juara II Kubota Student Skill Competition" },
  { src: "/images/tkro/praktek-roda.png", caption: "Praktik Perbaikan Balancing Roda" },
  { src: "/images/tkro/praktek-ac.png", caption: "Praktik Perawatan AC Mobil" },
  { src: "/images/tkro/praktek-rusak.png", caption: "Diagnosa Mobil EFI dengan Scanner" },
  { src: "/images/tkro/praktek-overhaul.png", caption: "Overhaul Sistem Rem Tromol & Cakram" },
];

export default function TkrGallery() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
        Galeri Kegiatan TKR
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {GALLERY.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition"
          >
            <Image
              src={item.src}
              alt={item.caption}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <p className="p-3 text-center text-sm text-gray-700">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
