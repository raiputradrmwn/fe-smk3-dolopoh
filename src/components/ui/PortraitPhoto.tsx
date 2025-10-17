// src/components/media/PortraitPhoto.tsx
"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg" | "xl";

const WRAPS: Record<Size, string> = {
  sm: "w-28",   // ~112px
  md: "w-40",   // ~160px
  lg: "w-56",   // ~224px
  xl: "w-72",   // ~288px (seukuran contoh)
};

export default function PortraitPhoto({
  src,
  alt,
  size = "xl",
  priority = false,
  className,
  rounded = "xl",
  withFrame = true,
}: {
  src: string;
  alt: string;
  size?: Size;
  priority?: boolean;
  className?: string;
  rounded?: "md" | "lg" | "xl" | "2xl" | "full";
  withFrame?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto",
        WRAPS[size],
        className
      )}
    >
      {/* Rasio 3:4 (portrait) */}
      <AspectRatio
        ratio={3 / 4}
        className={cn(
          withFrame && "border border-gray-200 shadow-sm",
          `overflow-hidden rounded-${rounded} bg-gray-100`
        )}
      >
        <Image
          fill
          src={src}
          alt={alt}
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 288px"
          // opsional placeholder blur jika kamu punya file blurDataURL
          // placeholder="blur"
          // blurDataURL="/images/placeholder-blur.png"
        />
      </AspectRatio>
    </div>
  );
}
