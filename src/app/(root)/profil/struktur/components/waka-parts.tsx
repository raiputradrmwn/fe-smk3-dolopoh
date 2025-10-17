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
import WakaKurikulumHero from "./waka-kurikulum/WakaKurikulumHero";
import WakaKurikulumPrograms from "./waka-kurikulum/WakaKurikulumPrograms";
import BkHero from "./bk/BkHero";
import BkTeam from "./bk/BKTeam";
import BkPrograms from "./bk/BKPrograms";
import WakaSdmHero from "./waka-sdm/WakaSdmHero";
import WakaSdmPrograms from "./waka-sdm/WakaSdmPrograms";

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
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 space-y-10">
        <WakaKurikulumHero />
        <WakaKurikulumPrograms />
      </section>
    </WakaWrapper>
  );
}

export function WakaBKBp() {
  return (
    <WakaWrapper title="BK/BP">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 space-y-10">
        <BkHero />
        <BkTeam />
        <BkPrograms />
      </section>
    </WakaWrapper>
  );
}

export function WakaSDM() {
  return (
    <WakaWrapper title="Sumber Daya Manusia">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 space-y-10">
        <WakaSdmHero />
        <WakaSdmPrograms />
      </section>
    </WakaWrapper>
  );
}
