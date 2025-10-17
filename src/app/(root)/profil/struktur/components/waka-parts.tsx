// src/app/profil/struktur/components/waka-parts.tsx
"use client";

import { WakaWrapper } from "./Section";
import WakaHumasAuthorities from "./waka-humas/WakaHumasAuthorities";
import WakaHumasHero from "./waka-humas/WakaHumasHero";
import WakaHumasPrograms from "./waka-humas/WakaHumasPrograms";
import WakaHumasResponsibilities from "./waka-humas/WakaHumasResponsibilities";
import WakaHumasSummary from "./waka-humas/WakaHumasSummary";
import WakaIsmubaHero from "./waka-ismuba/WakaIsmubaHero";
import WakaIsmubaPrograms from "./waka-ismuba/WakaIsmubaPrograms";
import WakaIsmubaTeam from "./waka-ismuba/WakaIsmubaTeam";
import WakaSarprasHero from "./waka-sarpras/WakaSarprasHero";
import WakaSarprasTeam from "./waka-sarpras/WakaSarprasTeam";
import WakaKesiswaanHero from "./waka-kesiswaan/WakaKesiswaanHero";
import WakaKesiswaanPrograms from "./waka-kesiswaan/WakaKesiswaanPrograms";
import WakaKesiswaanTeam from "./waka-kesiswaan/WakaKesiswaanTeam";

export function WakaHumas() {
  return (
    <WakaWrapper title="Humas">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 space-y-10">
        <WakaHumasHero />
        <WakaHumasSummary />
        <WakaHumasAuthorities />
        <WakaHumasResponsibilities />
        <WakaHumasPrograms />
      </section>
    </WakaWrapper>
  );
}

export function WakaSarpras() {
  return (
    <WakaWrapper title="Sarana dan Prasarana">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 space-y-10">
        <WakaSarprasHero />
        <WakaSarprasTeam />
      </section>
    </WakaWrapper>
  );
}

export function WakaIsmuba() {
  return (
    <WakaWrapper title="Ismuba">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 space-y-10">
        <WakaIsmubaHero />
        <WakaIsmubaTeam />
        <WakaIsmubaPrograms />
      </section>
    </WakaWrapper>
  );
}

export function WakaKesiswaan() {
  return (
    <WakaWrapper title="Kesiswaan">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 space-y-10">
        <WakaKesiswaanHero />
        <WakaKesiswaanTeam />
        <WakaKesiswaanPrograms />
      </section>
    </WakaWrapper>
  );
}

export function WakaKurikulum() {
  return (
    <WakaWrapper title="Kurikulum">
      <ul className="list-disc pl-5 space-y-1">
        <li>Perencanaan kurikulum kejuruan & sinkronisasi industri.</li>
        <li>Supervisi pembelajaran & penilaian.</li>
      </ul>
    </WakaWrapper>
  );
}

export function WakaBKBp() {
  return (
    <WakaWrapper title="BK/BP">
      <ul className="list-disc pl-5 space-y-1">
        <li>Konseling akademik, sosial, dan karier siswa.</li>
        <li>Pemetaan minat-bakat & intervensi masalah siswa.</li>
      </ul>
    </WakaWrapper>
  );
}

export function WakaSDM() {
  return (
    <WakaWrapper title="Sumber Daya Manusia">
      <ul className="list-disc pl-5 space-y-1">
        <li>Rekrutmen, pengembangan, dan evaluasi kinerja guru/karyawan.</li>
        <li>Pelatihan & sertifikasi kompetensi pendidik.</li>
      </ul>
    </WakaWrapper>
  );
}
