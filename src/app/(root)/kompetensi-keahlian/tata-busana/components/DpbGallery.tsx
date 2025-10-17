"use client";

import Image from "next/image";

const GALLERY = [
  { src: "/images/tata-busana/fashion-show.png", caption: "Fashion Show hasil karya siswa DPB" },
  { src: "/images/tata-busana/pola.png", caption: "Proses pembuatan pola dan pemotongan kain" },
  { src: "/images/tata-busana/pkl.png", caption: "Pengalaman Prakerin di butik dan industri garmen" },
];

export default function DpbGallery() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
        Galeri Kegiatan Busana
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
