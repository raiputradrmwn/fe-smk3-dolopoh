"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeadmasterHero from "./kepala-sekolah/HeadmasterHero";
import HeadmasterGreeting from "./kepala-sekolah/HeadmasterGreeting";
import HeadmasterPositions from "./kepala-sekolah/HeadmasterPositions";

export default function KepalaSekolah() {
  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 space-y-10">
        <HeadmasterHero />
        <HeadmasterGreeting />
        <HeadmasterPositions />
      </section>
    </main>
  );
}

export function WakaWrapper({
  children,
}: React.PropsWithChildren<{ title: string }>) {
  return (
    <main>
      <div className="text-gray-700 leading-relaxed space-y-2">{children}</div>
    </main>
  );
}

export function TataUsaha() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tata Usaha</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 leading-relaxed">
        <ul className="list-disc pl-5 space-y-1">
          <li>Layanan administrasi peserta didik dan kepegawaian.</li>
          <li>Pengarsipan dokumen sekolah dan persuratan.</li>
          <li>Pelayanan front office & informasi.</li>
        </ul>
      </CardContent>
    </Card>
  );
}

export function Guru() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Guru</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 leading-relaxed">
        <p>
          Tenaga pendidik profesional pada tiap kompetensi keahlian dengan
          sertifikasi dan pengalaman industri.
        </p>
      </CardContent>
    </Card>
  );
}
