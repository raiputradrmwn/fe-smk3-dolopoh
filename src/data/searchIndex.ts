export interface SearchItem {
  id: string;
  title: string;
  url: string;
  description: string;
  category: "Page" | "News" | "Career";
  keywords: string[];
}

export const staticSearchIndex: SearchItem[] = [
  // Profil
  {
    id: "profil-sekolah",
    title: "Profil Sekolah",
    url: "/profil/sekolah",
    description: "Sejarah, Visi, Misi, dan identitas SMK Muhammadiyah 3 Dolopo.",
    category: "Page",
    keywords: ["visi", "misi", "sejarah", "tentang kami", "identitas"],
  },
  {
    id: "struktur-organisasi",
    title: "Struktur Organisasi",
    url: "/profil/struktur",
    description: "Susunan kepemimpinan dan struktur organisasi sekolah.",
    category: "Page",
    keywords: ["kepala sekolah", "waka", "guru", "staff", "pimpinan", "organisasi"],
  },
  
  // Kompetensi Keahlian
  {
    id: "jurusan-tkro",
    title: "Teknik Kendaraan Ringan Otomotif (TKRO)",
    url: "/kompetensi-keahlian/tkro",
    description: "Kompetensi keahlian teknik otomotif kendaraan ringan.",
    category: "Page",
    keywords: ["mobil", "mesin", "otomotif", "bengkel", "tkr", "jurusan"],
  },
  {
    id: "jurusan-dkv",
    title: "Desain Komunikasi Visual (DKV)",
    url: "/kompetensi-keahlian/dkv",
    description: "Kompetensi keahlian desain grafis dan komunikasi visual.",
    category: "Page",
    keywords: ["desain", "komputer", "multimedia", "grafis", "animasi", "jurusan"],
  },
  {
    id: "jurusan-tsm",
    title: "Teknik Bisnis Sepeda Motor (TBSM)",
    url: "/kompetensi-keahlian/tsm",
    description: "Kompetensi keahlian teknik sepeda motor.",
    category: "Page",
    keywords: ["motor", "honda", "yamaha", "bengkel", "tsm", "jurusan"],
  },
  {
    id: "jurusan-busana",
    title: "Tata Busana",
    url: "/kompetensi-keahlian/tata-busana",
    description: "Kompetensi keahlian tata busana dan fasion design.",
    category: "Page",
    keywords: ["jahit", "baju", "fashion", "mode", "pakaian", "jurusan"],
  },

  // Galeri
  {
    id: "galeri-ekskul",
    title: "Galeri Ekstrakurikuler",
    url: "/galeri/ekstrakurikuler",
    description: "Dokumentasi kegiatan ekstrakurikuler siswa.",
    category: "Page",
    keywords: ["foto", "kegiatan", "ekskul", "pramuka", "hizbul wathan", "pmr", "olahraga"],
  },
  {
    id: "galeri-sekolah",
    title: "Galeri Kegiatan Sekolah",
    url: "/galeri/kegiatan-sekolah",
    description: "Dokumentasi agenda dan event sekolah.",
    category: "Page",
    keywords: ["foto", "event", "upacara", "rapat", "kunjungan"],
  },

  // Informasi
  {
    id: "info-ppdb",
    title: "Info Pendaftaran (PPDB)",
    url: "/pendaftaran",
    description: "Informasi penerimaan peserta didik baru, syarat, dan cara daftar.",
    category: "Page",
    keywords: ["daftar", "siswa baru", "syarat", "biaya", "formulir", "ppdb", "masuk"],
  },
  {
    id: "berita-utama",
    title: "Berita & Artikel",
    url: "/berita",
    description: "Kumpulan berita terbaru dan artikel kegiatan sekolah.",
    category: "Page",
    keywords: ["news", "informasi", "pengumuman", "artikel", "terbaru"],
  },
  {
    id: "info-karir",
    title: "BKK & Info Karir",
    url: "/karir",
    description: "Bursa Kerja Khusus dan informasi lowongan kerja untuk alumni.",
    category: "Page",
    keywords: ["loker", "lowongan", "kerja", "alumni", "bkk", "perusahaan"],
  },
];
