// src/components/home/KompetensiSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Award, Briefcase } from "lucide-react";

type Competency = {
  id: string;
  kode: string;
  title: string;
  image: string;
  href: string;
  duration: string;
  certification: string;
  career: string;
};

const list: Competency[] = [
  {
    id: "tkro",
    kode: "TKRO",
    title: "Teknik Kendaraan Ringan Otomotif",
    image: "/tkr.png",
    href: "/kompetensi/tkro",
    duration: "3 Tahun",
    certification: "Teknisi Otomotif & LSP Otomotif Nasional",
    career: "Mekanik mobil, teknisi bengkel resmi, teknisi sparepart",
  },
  {
    id: "dkv",
    kode: "DKV",
    title: "Desain Komunikasi Visual / Komputer",
    image: "/dkv.png",
    href: "/kompetensi/dkv",
    duration: "3 Tahun",
    certification: "Desainer Grafis Muda & Adobe Certified Associate",
    career: "Desainer grafis, fotografer, UI/UX designer, content creator",
  },
  {
    id: "tbsm",
    kode: "TBSM",
    title: "Teknik Bisnis Sepeda Motor",
    image: "/tsm.png",
    href: "/kompetensi/tbsm",
    duration: "3 Tahun",
    certification: "Teknisi Sepeda Motor Honda/Yamaha",
    career: "Teknisi motor, service advisor, wirausaha bengkel motor",
  },
  {
    id: "tb",
    kode: "TB",
    title: "Tata Busana",
    image: "/tbs.png",
    href: "/kompetensi/tata-busana",
    duration: "3 Tahun",
    certification: "Desainer Busana & LSP Tata Busana Nasional",
    career: "Perancang busana, penjahit profesional, entrepreneur fashion",
  },
];

export default function KompetensiSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Kompetensi Keahlian
        </h2>
        <p className="mt-2 text-gray-600">
          Temukan beragam program akademik kami yang dirancang untuk
          mengembangkan potensi dan minat setiap siswa.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((item) => (
            <Card
              key={item.id}
              className="group h-full overflow-hidden border border-gray-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col"
            >
              <Link href={item.href} className="block">
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </Link>

              <CardHeader className="px-5 pb-0">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-teal-100 text-teal-700"
                  >
                    {item.kode}
                  </Badge>
                </div>
                <h3 className="mt-3 text-left text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </CardHeader>

              {/* flex-1 supaya area konten mengisi sisa tinggi */}
              <CardContent className="px-5 pt-3 flex-1">
                <div className="space-y-2 text-left text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-teal-600" />
                    <span>
                      <strong>Durasi:</strong> {item.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-teal-600" />
                    <span>
                      <strong>Sertifikasi:</strong> {item.certification}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-teal-600" />
                    <span>
                      <strong>Karier:</strong> {item.career}
                    </span>
                  </div>
                </div>
              </CardContent>

              {/* mt-auto menekan footer ke bawah, tanpa overlap */}
              <CardFooter className="mt-auto w-full border-t border-gray-100 bg-white px-5 py-3">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-teal-600 hover:underline"
                >
                  Baca selengkapnya
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
