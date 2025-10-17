// src/app/profil/struktur/page.tsx
"use client";

import * as React from "react";
import StrukturMenu, { type MenuSelection } from "./components/StrukturMenu";

import {
  WakaHumas, WakaSarpras, WakaIsmuba, WakaKesiswaan, WakaKurikulum, WakaBKBp, WakaSDM,
} from "./components/waka-parts";
import KepalaSekolah, { Guru, TataUsaha } from "./components/Section";

export default function StrukturPage() {
  const [sel, setSel] = React.useState<MenuSelection>({ main: "kepala" });

  function renderContent() {
    if (sel.main === "kepala") return <KepalaSekolah />;
    if (sel.main === "tata-usaha") return <TataUsaha />;
    if (sel.main === "guru") return <Guru />;
    // Waka:
    switch (sel.sub) {
      case "humas": return <WakaHumas />;
      case "sarpras": return <WakaSarpras />;
      case "ismuba": return <WakaIsmuba />;
      case "kesiswaan": return <WakaKesiswaan />;
      case "kurikulum": return <WakaKurikulum />;
      case "bkbp": return <WakaBKBp />;
      case "sdm": return <WakaSDM />;
      default:
        return <WakaHumas />; // default tampilan saat klik Waka tanpa sub
    }
  }

  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Struktur Organisasi
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px,1fr]">
          {/* Sidebar */}
          <div className="lg:top-20 h-max">
            <StrukturMenu value={sel} onChange={setSel} />
          </div>

          {/* Content */}
          <div className="min-h-[280px]">{renderContent()}</div>
        </div>
      </section>
    </main>
  );
}
