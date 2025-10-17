// src/app/profil/bk/components/BkTeam.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import PortraitPhoto from "@/components/ui/PortraitPhoto";
import { BK_TEAM } from "../../libs/data";
import { MapPin, CalendarDays, Home } from "lucide-react";

export default function BkTeam() {
  // tampilkan semua anggota; koordinator pun bisa muncul di grid (opsional)
  const TEAM = BK_TEAM;

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-900">
        Tim Guru BK/BP
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m) => (
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
            </CardHeader>

            <Separator className="my-5 w-full" />

            <CardContent className="w-full space-y-3 p-0">
              <Row icon={MapPin} label="Tempat, Tgl Lahir" value={`${m.birthPlace ?? "—"}, ${m.birthDate ?? "—"}`} />
              <Row icon={CalendarDays} label="Bekerja Sejak" value={`${m.startedAt ?? "—"} – sekarang`} />
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
