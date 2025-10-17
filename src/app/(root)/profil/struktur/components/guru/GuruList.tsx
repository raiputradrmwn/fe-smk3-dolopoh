// src/app/profil/guru/components/GuruList.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import PortraitPhoto from "@/components/ui/PortraitPhoto";
import { GURU } from "../../libs/data";
import { MapPin, IdCard, GraduationCap, Briefcase } from "lucide-react";

export default function GuruList() {
  return (
    <section className="mt-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {GURU.map((g) => (
          <Card
            key={g.id}
            className="group relative flex flex-col items-stretch overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex justify-center">
              <PortraitPhoto
                src={g.photo || "/images/placeholder-portrait.jpg"}
                alt={`Foto ${g.name}`}
                size="lg"
              />
            </div>

            <CardHeader className="mt-4 w-full p-0">
              <CardTitle className="text-center text-lg font-semibold text-gray-900">
                {g.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="text-sm text-gray-700 mt-4 space-y-2">
              <Row icon={Briefcase} label="Jabatan" value={g.role} />
              <Row
                icon={MapPin}
                label="Tempat, Tanggal Lahir"
                value={`${g.birthPlace ?? "—"}, ${g.birthDate ?? "—"}`}
              />
              <Row icon={IdCard} label="NUPTK/NBM" value={g.nbmNuptk ?? "—"} />
              <Row icon={GraduationCap} label="Pendidikan" value={g.education ?? "—"} />
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
        <p className="text-xs font-medium text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
