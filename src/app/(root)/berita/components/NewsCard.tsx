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
    <Link
      href={`/berita/${news.id}`}
      className="block hover:scale-[1.01] transition-transform"
    >
      <Card className="overflow-hidden border-gray-200 shadow-sm">
        {news.photo && (
          <div className="relative h-48 w-full">
            <Image
              src={news.photo}
              alt={news.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
        <CardHeader className="space-y-2 p-4 pb-0">
          <Badge variant="secondary" className="text-xs">
            {news.status === "PUBLISHED" ? "Dipublikasikan" : "Draft"}
          </Badge>
          <h3 className="text-lg font-semibold leading-snug text-gray-900 line-clamp-2">
            {news.title}
          </h3>
          <p className="text-xs text-gray-500">
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
    </Link>
  );
}
