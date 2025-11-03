"use client";

import * as React from "react";
import { NewsCard } from "./NewsCard";
import { NewsPagination } from "./NewsPagination";
import type { NewsListResponse } from "@/app/api/news/types";

interface Props {
  initialData: NewsListResponse["data"];
}

export function NewsList({ initialData }: Props) {
  const [data, setData] = React.useState(initialData);

  const handlePageChange = (newPage: number) => {
    // TODO: nanti fetch dari API
    console.log("Page changed to", newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
        Berita Sekolah
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.data.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>

      <NewsPagination
        pagination={data.pagination}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
