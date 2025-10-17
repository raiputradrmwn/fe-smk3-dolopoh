// src/app/profil/waka-ismuba/components/WakaIsmubaHero.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PortraitPhoto from "@/components/ui/PortraitPhoto";
import { WAKA } from "../../libs/data";
import { MapPin, CalendarDays, Home } from "lucide-react";
import * as React from "react";

export default function WakaIsmubaHero() {
  const ismuba = React.useMemo(
    () => WAKA.find((p) => p.id === "waka-ismuba"),
    []
  );

  if (!ismuba) return null;

  return (
    <section className="text-center">
      <Badge className="rounded-full bg-teal-600 text-white hover:bg-teal-700">
        Waka ISMUBA
      </Badge>

      <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
        {ismuba.name}
      </h1>
      <p className="mt-2 text-gray-600">{ismuba.role}</p>

      <div className="mt-8 flex justify-center">
        <PortraitPhoto
          src={ismuba.photo || "/images/placeholder-portrait.jpg"}
          alt={`Foto ${ismuba.name}`}
          size="xl"
          priority
          className="ring-1 ring-gray-200"
        />
      </div>

      <Card className="mx-auto mt-8 max-w-3xl border-gray-200 shadow-sm">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <InfoBox
              icon={MapPin}
              label="Tempat, Tgl Lahir"
              value={`${ismuba.birthPlace ?? "—"}, ${ismuba.birthDate ?? "—"}`}
            />
            <InfoBox
              icon={CalendarDays}
              label="Berkarya Sejak"
              value={`${ismuba.startedAt ?? "—"} - sekarang`}
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
