"use client";
import { getLatestNews } from "@/app/api/news/api";
import NewsSection from "@/components/home/NewsSection";

export default async function HomeNewsWrapper() {
  const latest = await getLatestNews();

  return <NewsSection data={latest.data} />;
}
