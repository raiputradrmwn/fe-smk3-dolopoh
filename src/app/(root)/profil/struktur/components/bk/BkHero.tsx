// src/app/profil/bk/components/BkHero.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PortraitPhoto from "@/components/ui/PortraitPhoto";
import { BK_TEAM } from "../../libs/data";
import { MapPin, CalendarDays } from "lucide-react";

export default function BkHero() {
  const koor = BK_TEAM.find((p) => p.id === "bk-koordinator");
  if (!koor) return null;

  return (
    <section className="text-center">
      <Badge className="rounded-full bg-teal-600 text-white hover:bg-teal-700">
        Bimbingan & Konseling
      </Badge>

      <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
        {koor.name}
      </h1>
      <p className="mt-2 text-gray-600">{koor.role} • SMK Muhammadiyah 3 Dolopo</p>

      <div className="mt-8 flex justify-center">
        <PortraitPhoto
          src={koor.photo || "/images/placeholder-portrait.jpg"}
          alt={`Foto ${koor.name}`}
          size="xl"
          priority
          className="ring-1 ring-gray-200"
        />
      </div>

      <Card className="mx-auto mt-8 max-w-2xl border-gray-200 shadow-sm">
        <CardContent className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
          <Info icon={MapPin} label="Tempat, Tgl Lahir" value={`${koor.birthPlace ?? "—"}, ${koor.birthDate ?? "—"}`} />
          <Info icon={CalendarDays} label="Berkarya Sejak" value={`${koor.startedAt ?? "—"} – sekarang`} />
        </CardContent>
      </Card>

      <Separator className="mx-auto mt-10 w-full max-w-3xl" />
    </section>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 text-left">
      <div className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-200">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
