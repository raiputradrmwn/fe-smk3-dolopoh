"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function DkvHero() {
  return (
    <section className="text-center">
      <Badge className="rounded-full bg-teal-600 text-white hover:bg-teal-700">
        Kompetensi Keahlian
      </Badge>
      <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
        Desain Komunikasi Visual (DKV)
      </h1>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Membangun generasi kreatif, inovatif, dan kompeten di bidang industri
        seni dan ekonomi kreatif.
      </p>

      <div className="mt-10 flex justify-center">
        <Image
          src="/images/dkv/dkv.png"
          alt="Logo Program Keahlian DKV"
          width={180}
          height={180}
          className="object-contain drop-shadow-lg"
        />
      </div>
    </section>
  );
}
