"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function DpbHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Ambil ID video dari link YouTube
  const videoId = "PkKqBnDQe0Q";
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="text-center">
      <Badge className="rounded-full bg-teal-600 text-white hover:bg-teal-700">
        Kompetensi Keahlian
      </Badge>

      <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
        Desain dan Produksi Busana (DPB)
      </h1>

      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Membangun kreativitas dan keterampilan di bidang fesyen, membatik, dan
        wirausaha busana yang berdaya saing.
      </p>

      <div className="mt-10 flex justify-center">
        {!isPlaying ? (
          <div
            className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={thumbnail}
              alt="Thumbnail Video DPB"
              className="w-full h-full object-cover transition group-hover:brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-80 rounded-full p-4 shadow-md group-hover:scale-110 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Video Profil Jurusan DPB"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}
