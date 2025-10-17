"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeadmasterHero from "./kepala-sekolah/HeadmasterHero";
import HeadmasterGreeting from "./kepala-sekolah/HeadmasterGreeting";
import HeadmasterPositions from "./kepala-sekolah/HeadmasterPositions";
import TuHero from "./tata-usaha/TuHero";
import TuStaffGrid from "./tata-usaha/TuStaffGrid";
import GuruHero from "./guru/GuruHero";
import GuruList from "./guru/GuruList";

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
    <main className="w-full bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 space-y-10">
        <TuHero />
        <TuStaffGrid />
      </section>
    </main>
  );
}

export function Guru() {
  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 space-y-10">   
        <GuruHero />
        <GuruList />
      </section>
    </main>
  );
}
