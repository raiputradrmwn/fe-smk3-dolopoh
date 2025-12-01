"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProfileCTA() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
      <Button
        asChild
        className="rounded-full bg-teal-600 px-6 py-6 text-white hover:bg-teal-700"
      >
        <Link href="/pendaftaran">Daftar PPDB</Link>
      </Button>
      <Button
        asChild
        variant="outline"
        className="rounded-full border-teal-500 text-teal-700"
      >
        <Link href="/berita">Lihat Berita Sekolah</Link>
      </Button>
      <Button
        asChild
        variant="ghost"
        className="rounded-full text-teal-700 hover:bg-teal-50"
      >
        <Link href="/">Hubungi Kami</Link>
      </Button>
    </div>
  );
}
