// src/components/home/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-16 lg:py-30">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-[50px] lg:leading-[1.15]">
              Selamat Datang di{" "}
              <span className="text-teal-600">SMK Muhammadiyah 3 Dolopo</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
              Sekolah Vokasi HEBAT (Humanis, Excellent, Beriman, Adaptif,
              Teknologi) yang berkomitmen mencetak generasi berkarakter Islami,
              berwawasan luas, serta siap menghadapi tantangan era global.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-11 bg-teal-600 px-6 text-white hover:bg-teal-700"
              >
                <Link href="/pendaftaran">Daftar Sekarang</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 border-teal-500 px-6 text-teal-600 hover:bg-teal-50"
              >
                <Link href="/profil/sekolah">Lihat Detail</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/smk.jpg"
                alt="Image"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
