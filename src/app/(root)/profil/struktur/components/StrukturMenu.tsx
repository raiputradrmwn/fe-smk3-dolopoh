// src/app/profil/struktur/components/StrukturMenu.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export type MainKey = "kepala" | "waka" | "tata-usaha" | "guru";
export type SubKey =
  | "humas"
  | "sarpras"
  | "ismuba"
  | "kesiswaan"
  | "kurikulum"
  | "bkbp"
  | "sdm";

export type MenuSelection = { main: MainKey; sub?: SubKey };

const WAKA_SUBS: { key: SubKey; label: string }[] = [
  { key: "humas", label: "Humas" },
  { key: "sarpras", label: "Sarana & Prasarana" },
  { key: "ismuba", label: "Ismuba" },
  { key: "kesiswaan", label: "Kesiswaan" },
  { key: "kurikulum", label: "Kurikulum" },
  { key: "bkbp", label: "BK/BP" },
  { key: "sdm", label: "Sumber Daya Manusia" },
];

export default function StrukturMenu({
  value,
  onChange,
  className,
}: {
  value: MenuSelection;
  onChange: (v: MenuSelection) => void;
  className?: string;
}) {
  const [openWaka, setOpenWaka] = React.useState(value.main === "waka");
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  // Sinkronkan buka/tutup submenu WAKA jika parent selection berubah
  React.useEffect(() => {
    setOpenWaka(value.main === "waka");
  }, [value.main]);

  // Klik di luar -> tutup submenu
  React.useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) {
        setOpenWaka(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Handlers — semua pemanggilan onChange terjadi HANYA di event handler
  const handleSelectMain = (main: MainKey) => {
    setOpenWaka(false);
    onChange({ main });
  };

  const handleToggleWaka = () => {
    const next = !openWaka;
    setOpenWaka(next);
    // tetap set main="waka" saat dibuka/ditutup agar highlight konsisten
    onChange({ main: "waka", sub: value.sub });
  };

  const handleSelectWakaSub = (sub: SubKey) => {
    onChange({ main: "waka", sub });
  };

  return (
    <nav
      ref={rootRef}
      aria-label="Menu Struktur Organisasi"
      className={cn(
        "w-full rounded-xl border bg-white p-2 shadow-sm",
        "lg:w-full", // sidebar width on desktop
        className
      )}
    >
      <ul className="space-y-1">
        {/* Kepala Sekolah */}
        <li>
          <button
            onClick={() => handleSelectMain("kepala")}
            className={rowCls(value.main === "kepala")}
          >
            Kepala Sekolah
          </button>
        </li>

        {/* Wakil Kepala Sekolah */}
        <li>
          <button
            aria-expanded={openWaka}
            onClick={handleToggleWaka}
            className={rowCls(value.main === "waka")}
          >
            <span>Wakil Kepala Sekolah</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                openWaka ? "rotate-180" : "rotate-0"
              )}
            />
          </button>

          {/* Submenu WAKA */}
          <div
            className={cn(
              "overflow-hidden rounded-lg border border-transparent transition-[max-height,opacity]",
              openWaka ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <ul className="mt-1 space-y-1 border-l pl-2">
              {WAKA_SUBS.map((s) => (
                <li key={s.key}>
                  <button
                    onClick={() => handleSelectWakaSub(s.key)}
                    className={subRowCls(value.main === "waka" && value.sub === s.key)}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* Tata Usaha */}
        <li>
          <button
            onClick={() => handleSelectMain("tata-usaha")}
            className={rowCls(value.main === "tata-usaha")}
          >
            Tata Usaha
          </button>
        </li>

        {/* Guru */}
        <li>
          <button
            onClick={() => handleSelectMain("guru")}
            className={rowCls(value.main === "guru")}
          >
            Guru
          </button>
        </li>
      </ul>
    </nav>
  );
}

/* ===== Utility Styles ===== */

function rowCls(active: boolean) {
  return cn(
    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium",
    active
      ? "bg-teal-50 text-teal-700 ring-1 ring-teal-200"
      : "text-gray-700 hover:bg-gray-50"
  );
}

function subRowCls(active: boolean) {
  return cn(
    "w-full rounded-md px-3 py-2 text-left text-sm",
    active
      ? "bg-teal-50 text-teal-700 ring-1 ring-teal-200"
      : "text-gray-700 hover:bg-gray-50"
  );
}
