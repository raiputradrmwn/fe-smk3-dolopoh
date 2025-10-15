// src/components/header/navbarMobile.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Menu, Search } from "lucide-react";

export default function NavbarMobile() {
  const pathname = usePathname();
  const [q, setQ] = React.useState("");

  const NavLink = ({
    href,
    children,
    onClick,
  }: React.PropsWithChildren<{ href: string; onClick?: () => void }>) => {
    const active =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname?.startsWith(`${href}/`);
    return (
      <SheetClose asChild>
        <Link
          href={href}
          onClick={onClick}
          className={`block rounded-md px-2 py-2 text-sm ${
            active ? "text-teal-600 font-semibold" : "text-gray-700"
          }`}
        >
          {children}
        </Link>
      </SheetClose>
    );
  };

  return (
    <div className="md:hidden px-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="rounded-full border bg-white/30 p-2 shadow-lg backdrop-blur hover:bg-white/50"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[88%] sm:w-[380px] p-0">
          <SheetHeader className="px-4 pb-2 pt-4">
            <SheetTitle className="text-left text-xl font-bold text-teal-600">
              SMK M&apos;TRI&apos;
            </SheetTitle>

            {/* Search */}
            <form
              action="/search"
              className="relative"
              onSubmit={(e) => !q.trim() && e.preventDefault()}
            >
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-600" />
              <Input
                name="q"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari..."
                className="h-10 rounded-full pl-9"
              />
            </form>
          </SheetHeader>

          <Separator />

          {/* Menu list */}
          <nav className="px-2 py-3">
            {/* Profil */}
            <Accordion type="single" collapsible>
              <AccordionItem value="profil" className="border-b-0">
                <AccordionTrigger className="px-2 py-2 text-base">
                  Profil
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-2">
                  <NavLink href="/profil/sekolah">Profil Sekolah</NavLink>
                  <NavLink href="/profil/visi-misi">Visi &amp; Misi</NavLink>
                  <NavLink href="/profil/struktur">Struktur Organisasi</NavLink>
                  <NavLink href="/profil/prestasi">Prestasi</NavLink>
                </AccordionContent>
              </AccordionItem>

              {/* Kompetensi Keahlian */}
              <AccordionItem value="kompetensi" className="border-b-0">
                <AccordionTrigger className="px-2 py-2 text-base">
                  Kompetensi Keahlian
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-2">
                  <NavLink href="/kompetensi/tkro">
                    Teknik Kendaraan Ringan Otomotif
                  </NavLink>
                  <NavLink href="/kompetensi/dkv">
                    Desain Komunikasi Visual/Komputer
                  </NavLink>
                  <NavLink href="/kompetensi/tbsm">
                    Teknik Bisnis Sepeda Motor
                  </NavLink>
                  <NavLink href="/kompetensi/tata-busana">Tata Busana</NavLink>
                  <Separator className="my-2" />
                  <NavLink href="/kompetensi/kurikulum">Kurikulum</NavLink>
                  <NavLink href="/kompetensi/pkl">Program PKL</NavLink>
                </AccordionContent>
              </AccordionItem>

              {/* Gallery */}
              <AccordionItem value="galeri" className="border-b-0">
                <AccordionTrigger className="px-2 py-2 text-base">
                  Gallery Kegiatan
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-2">
                  <NavLink href="/galeri/kegiatan-sekolah">
                    Kegiatan Sekolah
                  </NavLink>
                  <NavLink href="/galeri/ekstrakurikuler">
                    Ekstrakurikuler
                  </NavLink>
                  <NavLink href="/galeri/event">Event &amp; Lomba</NavLink>
                </AccordionContent>
              </AccordionItem>

              {/* Informasi */}
              <AccordionItem value="informasi" className="border-b-0">
                <AccordionTrigger className="px-2 py-2 text-base">
                  Informasi
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-2">
                  <NavLink href="/informasi/berita">Berita</NavLink>
                  <NavLink href="/informasi/pengumuman">Pengumuman</NavLink>
                  <NavLink href="/informasi/ppdb">PPDB</NavLink>
                  <NavLink href="/informasi/arsip">Arsip</NavLink>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Link cepat (opsional) */}
            <div className="mt-3 px-2">
              <Separator className="my-3" />
              <SheetClose asChild>
                <Link
                  href="/kontak"
                  className="block rounded-md bg-teal-600 px-4 py-2 text-center text-white"
                >
                  Hubungi Kami
                </Link>
              </SheetClose>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
