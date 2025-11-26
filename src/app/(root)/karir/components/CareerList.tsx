"use client";

import * as React from "react";
import { CareerCard } from "./CareerCard";
import { CareerPagination } from "./CareerPagination";
import type { CareerListResponse } from "@/app/api/careers/types";

interface Props {
  initialData: CareerListResponse["data"];
}

export function CareerList({ initialData }: Props) {
  const [data, setData] = React.useState(initialData);

  const handlePageChange = (newPage: number) => {
    // TODO: Implement client-side fetching or navigation
    console.log("Page changed to", newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
        Karir & Lowongan Kerja
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.data.map((item) => (
          <CareerCard key={item.id} career={item} />
        ))}
      </div>

      <CareerPagination
        pagination={{
          page: data.pagination.page,
          totalPages: data.pagination.pageCount,
        }}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
