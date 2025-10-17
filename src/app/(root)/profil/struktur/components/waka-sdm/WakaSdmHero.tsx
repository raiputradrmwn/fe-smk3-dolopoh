// src/app/profil/waka-sdm/components/WakaSdmHero.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PortraitPhoto from "@/components/ui/PortraitPhoto";
import { WAKA } from "../../libs/data";
import { MapPin, IdCard, GraduationCap, CalendarDays } from "lucide-react";
import * as React from "react";

export default function WakaSdmHero() {
  const sdm = React.useMemo(
    () => WAKA.find((p) => p.id === "waka-sdm"),
    []
  );
  if (!sdm) return null;

  return (
    <section className="text-center">
      <Badge className="rounded-full bg-teal-600 text-white hover:bg-teal-700">
        Waka Sumber Daya Manusia
      </Badge>

      <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
        {sdm.name}
      </h1>
      <p className="mt-2 text-gray-600">{sdm.role}</p>

      <div className="mt-8 flex justify-center">
        <PortraitPhoto
          src={sdm.photo || "/images/placeholder-portrait.jpg"}
          alt={`Foto ${sdm.name}`}
          size="xl"
          priority
          className="ring-1 ring-gray-200"
        />
      </div>

      <Card className="mx-auto mt-8 max-w-3xl border-gray-200 shadow-sm">
        <CardContent className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3">
          <Info icon={MapPin} label="Tempat, Tgl Lahir" value={`${sdm.birthPlace ?? "—"}, ${sdm.birthDate ?? "—"}`} />
          <Info icon={GraduationCap} label="Pendidikan" value={sdm.education ?? "—"} />
          <Info icon={CalendarDays} label="Berkarya Sejak" value={`${sdm.startedAt ?? "—"} – sekarang`} />
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
