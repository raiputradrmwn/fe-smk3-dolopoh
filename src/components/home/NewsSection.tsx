"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getLatestNews } from "@/app/api/news/api";
import type { News } from "@/app/api/news/types";
import { NewsCard } from "@/app/(root)/berita/components/NewsCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function NewsSection() {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getLatestNews();
        if (res?.data?.data && Array.isArray(res.data.data)) {
          setNewsData(res.data.data.slice(0, 3));
        } else {
          setNewsData([]);
        }
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-48 w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))
            : newsData.map((news) => <NewsCard key={news.id} news={news} />)}
        </div>

        {/* Button */}
        <div className="mt-10">
          <Button
            asChild
            className="bg-teal-600 px-8 py-5 text-white hover:bg-teal-700"
          >
            <Link href="/berita">Lihat Semua</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
