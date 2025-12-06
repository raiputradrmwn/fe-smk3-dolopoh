"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";
import type { News } from "@/app/api/news/types";

export function NewsCard({ news }: { news: News }) {
  return (
    <Card className="group h-full overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      {news.photo && (
        <div className="relative h-48 w-full overflow-hidden">
          <Link href={`/berita/${news.id}`}>
            <Image
              src={news.photo}
              alt={news.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </Link>
        </div>
      )}
      <CardHeader className="space-y-2 p-4 pb-0">
        <Badge variant="secondary" className="text-xs w-fit">
          {news.status === "PUBLISHED" ? "Dipublikasikan" : "Draft"}
        </Badge>
        <Link href={`/berita/${news.id}`} className="block">
          <h3 className="text-lg font-semibold leading-snug text-gray-900 line-clamp-2 group-hover:text-teal-600 transition-colors">
            {news.title}
          </h3>
        </Link>
        <p className="text-xs text-gray-500" suppressHydrationWarning>
          {format(new Date(news.created_at), "dd MMMM yyyy", {
            locale: localeID,
          })}
        </p>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="text-sm text-gray-600 line-clamp-3">
          <div dangerouslySetInnerHTML={{ __html: news.headline }} />
        </div>
      </CardContent>
    </Card>
  );
}
