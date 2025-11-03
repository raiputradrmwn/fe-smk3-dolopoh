// components/navbar.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarCheckboxItem,
} from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown } from "lucide-react";
import NavbarMobile from "./navbarMobile";

export default function Navbar() {
  const [q, setQ] = React.useState("");

  return (
    <div className="sticky top-6 z-50">
      <NavbarMobile />
      <div className="mx-auto hidden max-w-6xl rounded-full border bg-white/30 px-4 py-2 shadow-lg backdrop-blur md:block md:px-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 justify-self-start"
            aria-label="Go to home"
          >
            <span className="text-2xl font-extrabold tracking-wide text-teal-500 md:text-3xl">
              SMK M&apos;TRI&apos;
            </span>
          </Link>

          {/* CENTER: Menubar */}
          <div className="flex items-center justify-center">
            <Menubar className="border-0 bg-transparent shadow-none">
              {/* PROFIL */}
              <MenubarMenu>
                <MenubarTrigger className="gap-1 text-sm font-medium text-gray-700 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  Profil <ChevronDown className="h-4 w-4 opacity-70" />
                </MenubarTrigger>
                <MenubarContent align="start" sideOffset={10}>
                  <MenubarItem asChild>
                    <Link href="/profil/sekolah">Profil Sekolah</Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link href="/profil/struktur">Struktur Organisasi</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* KOMPETENSI KEAHLIAN */}
              <MenubarMenu>
                <MenubarTrigger className="gap-1 text-sm font-medium text-gray-700 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  Kompetensi Keahlian{" "}
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </MenubarTrigger>
                <MenubarContent align="start" sideOffset={10}>
                  <MenubarItem asChild>
                    <Link href="/kompetensi-keahlian/tkro">Teknik Kendaraan Ringan Otomotif</Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link href="/kompetensi-keahlian/dkv">Desain Komunikasi Visual/Komputer</Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link href="/kompetensi-keahlian/tsm">Teknik Bisnis Sepeda Motor</Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link href="/kompetensi-keahlian/tata-busana">Tata Busana</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* GALLERY KEGIATAN */}
              <MenubarMenu>
                <MenubarTrigger className="gap-1 text-sm font-medium text-gray-700 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  Gallery Kegiatan{" "}
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </MenubarTrigger>
                <MenubarContent align="start" sideOffset={10}>
                  <MenubarItem asChild>
                    <Link href="/galeri/ekstrakurikuler">Ekstrakurikuler</Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link href="/galeri/kegiatan-sekolah">
                      Kegiatan Sekolah
                    </Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="gap-1 text-sm font-medium text-gray-700 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  Informasi <ChevronDown className="h-4 w-4 opacity-70" />
                </MenubarTrigger>
                <MenubarContent align="start" sideOffset={10}>
                  <MenubarItem asChild>
                    <Link href="/pendaftaran">Info Pendaftaran</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>

          {/* RIGHT: Search pill */}
          <form
            action="/search"
            className="hidden items-center justify-self-end md:flex"
            onSubmit={(e) => !q.trim() && e.preventDefault()}
          >
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-500" />
              <Input
                name="q"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder=""
                className="h-10 w-64 rounded-full border-teal-500 pr-3 pl-9 focus-visible:ring-teal-500"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
