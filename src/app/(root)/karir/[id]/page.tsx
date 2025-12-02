import { getCareerById } from "@/app/api/careers/api";
export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, Clock, Briefcase } from "lucide-react";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";

interface Props {
  params: { id: string };
}

export default async function CareerDetailPage({ params }: Props) {
  try {
    const res = await getCareerById(params.id);
    const career = res.data;

    return (
      <main className="mx-auto max-w-4xl px-4 py-12">
        {/* Gambar Career */}
        {career.photo && (
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[400px] mb-8">
            <Image
              src={career.photo}
              alt={career.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col gap-4 text-center mb-8">
          <Badge className="mx-auto w-fit bg-teal-600 text-white hover:bg-teal-700">
            Lowongan Kerja
          </Badge>
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {career.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{career.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Deadline: {format(new Date(career.deadline), "dd MMMM yyyy", { locale: localeID })}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>Diposting: {format(new Date(career.created_at), "dd MMMM yyyy", { locale: localeID })}</span>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Konten */}
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-teal-600" />
                Deskripsi Pekerjaan
              </h2>
              <div className="prose prose-teal max-w-none text-gray-700 whitespace-pre-line">
                <div dangerouslySetInnerHTML={{ __html: career.job_description }} />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Persyaratan</h2>
              <div className="prose prose-teal max-w-none text-gray-700 whitespace-pre-line">
                <div dangerouslySetInnerHTML={{ __html: career.requirements }} />
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Benefit</h2>
              <div className="prose prose-teal max-w-none text-gray-700 whitespace-pre-line">
                <div dangerouslySetInnerHTML={{ __html: career.benefits }} />
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  } catch (err) {
    console.error(err);
    notFound()
  }
}
