"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { NewsListResponse } from "@/app/api/news/types";
import { NewsCard } from "@/app/(root)/berita/components/NewsCard";


export default function NewsSection({
  data,
}: {
  data: NewsListResponse["data"];
}) {
  const newsData = data.data.slice(0, 3);

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Berita Terbaru
        </h2>
        <p className="mt-2 text-gray-600">
          Ikuti informasi dan berita terkini seputar kegiatan, prestasi, serta
          perkembangan SMK Muhammadiyah 3 Dolopo.
        </p>

        {/* News Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
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
