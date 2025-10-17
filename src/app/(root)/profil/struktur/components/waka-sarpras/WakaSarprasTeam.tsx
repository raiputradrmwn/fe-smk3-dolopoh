// src/app/profil/waka-sarpras/components/WakaSarprasTeam.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import PortraitPhoto from "@/components/ui/PortraitPhoto";
import { POKJA_SARPRAS } from "../../libs/data";
import { MapPin, GraduationCap, CalendarDays } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const TEAM = POKJA_SARPRAS;

export default function WakaSarprasTeam() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Pokja Waka Sarana & Prasarana
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m) => (
          <Card
            key={m.id}
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <PortraitPhoto
              src={m.photo || "/images/placeholder-portrait.jpg"}
              alt={`Foto ${m.name}`}
              size="lg"
              className="mt-2"
            />

            <CardHeader className="p-0 mt-4 w-full">
              <CardTitle
                className="
        mx-auto max-w-[22ch] text-center text-xl font-semibold text-gray-900
        leading-snug tracking-normal
        [text-wrap:balance]    /* modern CSS, aman di browser baru */
        sm:[text-wrap:balance]
      "
              >
                {m.name}
              </CardTitle>
            </CardHeader>

            <Separator className="my-4" />

            <CardContent className="w-full space-y-3 p-0">
              <InfoRow
                icon={MapPin}
                label="Tempat, Tanggal Lahir"
                value={[
                  m.birthPlace ?? "—",
                  m.birthDate ? m.birthDate : undefined,
                ]
                  .filter(Boolean)
                  .join(", ")}
              />

              <InfoRow
                icon={GraduationCap}
                label="Pendidikan"
                value={m.education ?? "—"}
              />

              <InfoRow
                icon={CalendarDays}
                label="Bekerja sejak"
                value={m.startedAt ?? "—"}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function InfoRow({
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
