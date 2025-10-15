// src/components/footer/SiteFooter.tsx
"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Kontak Utama */}
        <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          {/* Alamat */}
          <div className="flex items-start gap-3 max-w-sm">
            <MapPin className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700 text-sm leading-relaxed">
              Jl. Raya Dolopo 838, Kecamatan Dolopo, Kabupaten Madiun. <br />
              Kode Pos 63174.
            </p>
          </div>

          {/* Telepon */}
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-teal-600" />
            <p className="text-gray-700 text-sm">(0351) 367 636</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-teal-600" />
            <Link
              href="mailto:smkm3dolopo@gmail.com"
              className="text-teal-600 text-sm hover:underline"
            >
              smkm3dolopo@gmail.com
            </Link>
          </div>
        </div>

        {/* Garis Pembatas */}
        <div className="my-8 border-t border-gray-200" />

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mb-8">
          <Link
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            className="text-gray-500 hover:text-teal-600 transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            className="text-gray-500 hover:text-teal-600 transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            aria-label="YouTube"
            className="text-gray-500 hover:text-teal-600 transition-colors"
          >
            <Youtube className="h-5 w-5" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-center text-center text-gray-500 text-sm md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} SMK Muhammadiyah 3 Dolopo.{" "}
            <span className="block md:inline">
              Semua hak cipta dilindungi.
            </span>
          </p>
          <p className="mt-2 md:mt-0">
            Designed by{" "}
            <span className="text-teal-600 font-medium">RHN &amp; AWP</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
