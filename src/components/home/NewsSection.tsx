// src/components/home/NewsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, User } from "lucide-react";

const newsData = [
  {
    id: 1,
    title:
      "SMA Muhammadiyah 1 Madiun Laksanakan Studi Tiru ke SMK Muhammadiyah 3 Dolopo",
    date: "27 Agustus 2025",
    author: "Waka Humas",
    image: "/news.png", // ganti sesuai file kamu
    link: "#",
  },
  {
    id: 2,
    title:
      "SMA Muhammadiyah 1 Madiun Laksanakan Studi Tiru ke SMK Muhammadiyah 3 Dolopo",
    date: "27 Agustus 2025",
    author: "Waka Humas",
    image: "/news.png",
    link: "#",
  },
  {
    id: 3,
    title:
      "SMA Muhammadiyah 1 Madiun Laksanakan Studi Tiru ke SMK Muhammadiyah 3 Dolopo",
    date: "27 Agustus 2025",
    author: "Waka Humas",
    image: "/news.png",
    link: "#",
  },
];

export default function NewsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Berita Terbaru
        </h2>
        <p className="mt-2 text-gray-600">
          Ikuti informasi dan berita terkini seputar kegiatan, prestasi, serta
          perkembangan SMK Muhammadiyah 3 Dolopo.
        </p>

        {/* News Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border border-gray-200 shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <CardContent className="p-4">
                <div className="mb-2 flex items-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" /> {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" /> {item.author}
                  </span>
                </div>
                <h3 className="mb-2 line-clamp-2 text-left text-base font-semibold text-gray-800">
                  {item.title}
                </h3>
                <Link
                  href={item.link}
                  className="text-sm font-medium text-teal-600 hover:underline"
                >
                  Baca selengkapnya
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
          <Button
            asChild
            className="bg-teal-600 px-8 py-5 text-white hover:bg-teal-700"
          >
            <Link href="/informasi/berita">Lihat Semua</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
