import { getNewsById } from "@/app/api/news/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";

interface Props {
  params: { id: string };
}

export default async function NewsDetailPage({ params }: Props) {
  try {
    const res = await getNewsById(params.id);
    const news = res.data;

    return (
      <main className="mx-auto max-w-4xl px-4 py-12">
        {/* Gambar Berita */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[400px]">
          <Image
            src={news.photo || "/placeholder-news.jpg"}
            alt={news.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Header */}
        <div className="mt-6 flex flex-col gap-3 text-center">
          <Badge className="mx-auto w-fit bg-teal-600 text-white hover:bg-teal-700">
            Berita Sekolah
          </Badge>
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {news.title}
          </h1>

          <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
            <CalendarDays className="h-4 w-4" />
            <span>
              {format(new Date(news.created_at), "EEEE, dd MMMM yyyy", {
                locale: localeID,
              })}
            </span>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Konten */}
        <article className="prose prose-teal mx-auto max-w-none text-gray-800 prose-p:leading-relaxed prose-img:rounded-xl">
          <div
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </article>
      </main>
    );
  } catch (err) {
    console.error(err);
    notFound(); // ⛔ otomatis render 404 page
  }
}
