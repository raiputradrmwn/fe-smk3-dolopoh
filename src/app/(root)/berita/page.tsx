import { getAllNews } from "@/app/api/news/api";
import { NewsList } from "../berita/components/NewsList";


export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const data = await getAllNews(1, 10);

  return <NewsList initialData={data.data} />;
}
