// src/app/profil/kepala-sekolah/components/HeadmasterHero.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import PortraitPhoto from "@/components/ui/PortraitPhoto";
import { HEADMASTER } from "../../libs/data";
export default function HeadmasterHero() {
  const head = HEADMASTER; // { name, role, photo, ... }

  return (
    <section className="text-center">
      <Badge className="rounded-full bg-teal-600 hover:bg-teal-700">
        Kepala Sekolah
      </Badge>

      <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
        {head.name}
      </h1>

      <p className="mt-2 text-gray-600">
        {head.role ?? "Kepala SMK Muhammadiyah 3 Dolopo"}
      </p>

      <div className="mt-8">
        <PortraitPhoto
          src={head.photo || "/images/placeholder-portrait.jpg"}
          alt={`Foto ${head.name}`}
          size="xl"
          priority
        />
      </div>
    </section>
  );
}
