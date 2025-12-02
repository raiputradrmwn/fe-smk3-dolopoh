"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";
import type { Career } from "@/app/api/careers/types";
import { MapPin, Calendar, Clock } from "lucide-react";

export function CareerCard({ career }: { career: Career }) {
  return (
    <Link
      href={`/karir/${career.id}`}
      className="block hover:scale-[1.01] transition-transform"
    >
      <Card className="overflow-hidden border-gray-200 shadow-sm h-full flex flex-col">
        {career.photo && (
          <div className="relative h-48 w-full">
            <Image
              src={career.photo}
              alt={career.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
        <CardHeader className="space-y-2 p-4 pb-0 flex-grow">
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-lg font-semibold leading-snug text-gray-900 line-clamp-2">
              {career.title}
            </h3>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 gap-2">
             <MapPin className="w-4 h-4" />
             <span className="line-clamp-1">{career.location}</span>
          </div>

          <div className="flex items-center text-sm text-gray-500 gap-2">
             <Clock className="w-4 h-4" />
             <span>Deadline: {format(new Date(career.deadline), "dd MMMM yyyy", { locale: localeID })}</span>
          </div>

        </CardHeader>
        <CardContent className="p-4 pt-2">
          <div className="text-sm text-gray-600 line-clamp-3">
            <div dangerouslySetInnerHTML={{ __html: career.job_description }} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
