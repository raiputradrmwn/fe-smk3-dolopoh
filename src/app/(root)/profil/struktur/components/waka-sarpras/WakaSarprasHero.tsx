// src/app/profil/waka-sarpras/components/WakaSarprasHero.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PortraitPhoto from "@/components/ui/PortraitPhoto";
import { WAKA } from "../../libs/data";
import { MapPin, GraduationCap, CalendarDays } from "lucide-react";
import * as React from "react";

export default function WakaSarprasHero() {
  const sarpras = React.useMemo(
    () => WAKA.find((p) => p.id === "waka-sarpras"),
    []
  );

  if (!sarpras) return null;

  return (
    <section className="text-center">
      <Badge className="rounded-full bg-teal-600 hover:bg-teal-700">
        Waka Sarana &amp; Prasarana
      </Badge>

      <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
        {sarpras.name}
      </h1>
      <p className="mt-2 text-gray-600">{sarpras.role}</p>

      {/* Foto */}
      <div className="mt-8 flex justify-center">
        <PortraitPhoto
          src={sarpras.photo || "/images/placeholder-portrait.jpg"}
          alt={`Foto ${sarpras.name}`}
          size="xl"
          priority
          className="ring-1 ring-gray-200"
        />
      </div>

      {/* Info ringkas dengan ikon */}
      <Card className="mx-auto mt-8 max-w-2xl border-gray-200 shadow-sm">
        <CardContent className="p-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <InfoBox
              icon={MapPin}
              label="Tempat, Tgl Lahir"
              value={[
                sarpras.birthPlace ?? "—",
                sarpras.birthDate ?? "—",
              ]
                .filter(Boolean)
                .join(", ")}
            />
            <InfoBox
              icon={GraduationCap}
              label="Pendidikan Terakhir"
              value="S1 Teknik Mesin"
            />
            <InfoBox
              icon={CalendarDays}
              label="Bekerja Sejak"
              value="07 Mei 2019 - sekarang"
            />
          </div>
        </CardContent>
      </Card>

      <Separator className="mx-auto mt-10 w-full max-w-3xl" />
    </section>
  );
}

function InfoBox({
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
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
