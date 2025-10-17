// src/app/profil/tata-usaha/components/TuStaffGrid.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import PortraitPhoto from "@/components/ui/PortraitPhoto";
import { TU_STAFF } from "../../libs/data";
import { MapPin, IdCard, GraduationCap, Briefcase } from "lucide-react";

export default function TuStaffGrid() {
  const STAFF = TU_STAFF;

  return (
    <section className="mt-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {STAFF.map((m) => (
          <Card
            key={m.id}
            className="group relative flex flex-col items-stretch overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex justify-center">
              <PortraitPhoto
                src={m.photo || "/images/placeholder-portrait.jpg"}
                alt={`Foto ${m.name}`}
                size="lg"
                className="mt-2"
              />
            </div>

            <CardHeader className="mt-4 w-full p-0">
              <CardTitle className="mx-auto max-w-[22ch] text-center text-xl font-semibold leading-snug text-gray-900 [text-wrap:balance]">
                {m.name}
              </CardTitle>
              <p className="mt-1 text-center text-sm text-gray-500">{m.role}</p>
            </CardHeader>

            <Separator className="my-5 w-full" />

            <CardContent className="w-full space-y-3 p-0">
              <Row
                icon={MapPin}
                label="Tempat, Tanggal Lahir"
                value={`${m.birthPlace ?? "—"}, ${m.birthDate ?? "—"}`}
              />
              <Row icon={Briefcase} label="Jabatan" value={m.role} />
              <Row icon={GraduationCap} label="Pendidikan" value={m.education ?? "—"} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Row({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-200">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-[13px] font-medium text-gray-500">{label}</p>
        <p className="truncate text-sm font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
