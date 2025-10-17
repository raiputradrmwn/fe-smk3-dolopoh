// src/app/profil/waka-humas/components/WakaHumasHero.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PortraitPhoto from "@/components/ui/PortraitPhoto";
import { WAKA } from "../../libs/data";
import { MapPin, CalendarDays, Briefcase } from "lucide-react";
import * as React from "react";

export default function WakaHumasHero() {
  const humas = React.useMemo(
    () => WAKA.find((p) => p.id === "waka-humas"),
    []
  );

  if (!humas) return null;

  return (
    <section className="text-center">
      {/* Badge */}
      <Badge className="rounded-full bg-teal-600 hover:bg-teal-700 text-white">
        Waka Humas
      </Badge>

      {/* Nama & Jabatan */}
      <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
        {humas.name}
      </h1>
      <p className="mt-2 text-gray-600">{humas.role}</p>

      {/* Foto */}
      <div className="mt-8 flex justify-center">
        <PortraitPhoto
          src={humas.photo || "/images/placeholder-portrait.jpg"}
          alt={`Foto ${humas.name}`}
          size="xl"
          priority
          className="ring-1 ring-gray-200"
        />
      </div>

      {/* Info utama */}
      <Card className="mx-auto mt-8 max-w-2xl border-gray-200 shadow-sm">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <InfoBox
              icon={MapPin}
              label="Tempat, Tanggal Lahir"
              value={`${humas.birthPlace ?? "—"}, ${
                humas.birthDate ?? "—"
              }`}
            />
            <InfoBox
              icon={CalendarDays}
              label="Mulai Bertugas"
              value={`${humas.startedAt ?? "—"} - sekarang`}
            />
            <InfoBox
              icon={Briefcase}
              label="Instansi"
              value="SMK Muhammadiyah 3 Dolopo"
            />
          </div>
        </CardContent>
      </Card>

      <Separator className="mx-auto mt-10 w-full max-w-3xl" />
    </section>
  );
}

/* ===== Subcomponent InfoBox ===== */
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
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
