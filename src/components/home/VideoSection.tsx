// src/components/home/VideoSection.tsx
"use client";

import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [play, setPlay] = useState(false);
  const videoId = "SpoVb9uv8rw"; 

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Video Profil Sekolah
        </h2>
        <p className="mt-2 text-gray-600">
          Jelajahi Sekolah kami secara virtual dan temukan keistimewaan SMK
          Muhammadiyah 3 Dolopo
        </p>

        {/* Video */}
        <div className="mt-10">
          <AspectRatio
            ratio={16 / 9}
            className=" rounded-2xl overflow-hidden shadow-md"
          >
            {!play ? (
              <div className="relative h-full w-full cursor-pointer">
                {/* Thumbnail dari YouTube */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Thumbnail Video Profil Sekolah"
                  className="h-full w-full object-cover"
                  onClick={() => setPlay(true)}
                />

                {/* Tombol Play */}
                <div
                  onClick={() => setPlay(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all"
                >
                  <div className="group flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:scale-105">
                    <Play className="h-10 w-10 text-teal-600 transition-all group-hover:text-teal-700" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Video Profil SMK Muhammadiyah 3 Dolopo"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
