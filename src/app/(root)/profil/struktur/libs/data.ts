// src/data/data.ts

export type Person = {
  id: string;
  name: string;
  role: string;
  photo: string;
  birthPlace?: string;
  birthDate?: string;
  startedAt?: string;
  email?: string;
  phone?: string;
  section?: string; 
  education?: string;
};

/* ==============================
   KEPALA SEKOLAH
================================ */
export const HEADMASTER: Person = {
  id: "kepala-sekolah",
  name: "BAMBANG HARIYADI, S.T., S.Kom., M.Pd",
  role: "Kepala SMK Muhammadiyah 3 Dolopo",
  photo: "/photos/kepalasekolah.png",
  birthPlace: "Madiun",
  birthDate: "—",
  startedAt: "—",
};

/* ==============================
   WAKA (Wakil Kepala Sekolah)
================================ */
export const WAKA: Person[] = [
  {
    id: "waka-humas",
    name: "Zulfickri Alwi Jauhari, S.Pd",
    role: "Waka Humas / Public Relations",
    section: "Humas",
    photo: "/photos/humas/waka-humas.png",
    birthPlace: "Madiun",
    birthDate: "23 November 1992",
    startedAt: "2018",
  },
  {
    id: "waka-sarpras",
    name: "Danang Eko Handoyo, S.Pd",
    role: "Waka Sarana & Prasarana",
    section: "Sarpras",
    photo: "/photos/sarpras/waka-sarpras.png",
    birthPlace: "Ponorogo",
    birthDate: "20 November 1993",
    startedAt: "07 Mei 2019",
  },
  {
    id: "waka-ismuba",
    name: "Alaudin Haris Ash Shobiri",
    role: "Waka ISMUBA",
    section: "Ismuba",
    photo: "/photos/ismuba/waka-ismuba.png",
    birthPlace: "Madiun",
    birthDate: "2 Agustus 1998",
    startedAt: "2019",
  },
{
    id: "waka-kesiswaan",
    name: "Abdan Syakuro Almahbubi, S.Pd",
    role: "Waka Kesiswaan",
    section: "Kesiswaan",
    photo: "/photos/kesiswaan/waka-kesiswaan.png",
    birthPlace: "Ponorogo",
    birthDate: "16 Juli 1998",
    education: "S1 Pendidikan Teknik Otomotif",
    startedAt: "06 Juli 2020",
  },
  {
    id: "waka-kurikulum",
    name: "Nama Waka Kurikulum",
    role: "Waka Kurikulum",
    section: "Kurikulum",
    photo: "/photos/waka-kurikulum.png",
  },
  {
    id: "waka-bkbp",
    name: "Nama Waka BK/BP",
    role: "Waka BK/BP",
    section: "BK/BP",
    photo: "/photos/waka-bkbp.png",
  },
  {
    id: "waka-sdm",
    name: "Nama Waka SDM",
    role: "Waka Sumber Daya Manusia",
    section: "SDM",
    photo: "/photos/waka-sdm.png",
  },
];
export const POKJA_SARPRAS: Person[] = [
  {
    id: "pokja-sarpras-1",
    name: "Manto, S.Pd",
    role: "Pokja Waka Sarpras",
    section: "Sarana & Prasarana",
    photo: "/photos/sarpras/pokja-sarpras1.png",
    birthPlace: "Ponorogo",
    birthDate: "08 Agustus 1965",
    email: "-",
    phone: "-",
    startedAt: "06 Juli 2003",
    education: "S1 Bahasa Indonesia",
  },
  {
    id: "pokja-sarpras-2",
    name: "Yusron Rizqi Saputro, M.Pd",
    role: "Pokja Waka Sarpras",
    section: "Sarana & Prasarana",
    photo: "/photos/sarpras/pokja-sarpras2.png",
    birthPlace: "Madiun",
    birthDate: "28 Januari 1999",
    startedAt: "05 Juli 2021",
    education: "S2 Pendidikan Agama Islam",
  },
  {
    id: "pokja-sarpras-3",
    name: "Noviatoni Jauhari, S.Pd",
    role: "Pokja Waka Sarpras",
    section: "Sarana & Prasarana",
    photo: "/photos/sarpras/pokja-sarpras3.png",
    birthPlace: "Madiun",
    birthDate: "14 November 1981",
    startedAt: "20 Juli 2005",
    education: "S1 Bahasa Inggris",
  },
];
export const POKJA_ISMUBA: Person[] = [
  {
    id: "pokja-ismuba-1",
    name: "Yusron Rizqi Saputro, S.Pd",
    role: "Pokja Waka ISMUBA",
    section: "ISMUBA",
    photo: "/photos/ismuba/pokja-ismuba1.png",
    birthPlace: "Madiun",
    birthDate: "28 Januari 1999",
    education: "S1 Pendidikan Agama Islam (PAI)",
    startedAt: "5 Juli 2021",
  },
  {
    id: "pokja-ismuba-2",
    name: "Endang Sri Wahyuningsih, S.Pd",
    role: "Pokja Waka ISMUBA",
    section: "ISMUBA",
    photo: "/photos/ismuba/pokja-ismuba2.png",
    birthPlace: "Madiun",
    birthDate: "23 Agustus 1981",
    education: "S1 PKN",
    startedAt: "6 Juli 2004",
  },
  {
    id: "pokja-ismuba-3",
    name: "Winarsih, S.Pd.I",
    role: "Pokja Waka ISMUBA",
    section: "ISMUBA",
    photo: "/photos/ismuba/pokja-ismuba3.png",
    birthPlace: "Madiun",
    birthDate: "11 November 1977",
    education: "S1 Pendidikan Agama Islam (PAI)",
    startedAt: "20 Juli 2005",
  },
];
export const POKJA_KESISWAAN: Person[] = [
  {
    id: "pokja-kesiswaan-1",
    name: "Dimas Angga Widjaya, S.Pd",
    role: "Pokja Kesiswaan",
    section: "Kesiswaan",
    photo: "/photos/kesiswaan/pokja-kesiswaan1.png",
    birthPlace: "Madiun",
    birthDate: "07 Maret 1997",
    education: "S1 Pendidikan Teknik Otomotif",
    startedAt: "2020",
  },
];
/* ==============================
   TATA USAHA
================================ */
export const TATA_USAHA: Person[] = [
  {
    id: "tu-1",
    name: "Nama Staf TU 1",
    role: "Staf Tata Usaha",
    photo: "/photos/tu/tu-1.png",
  },
  {
    id: "tu-2",
    name: "Nama Staf TU 2",
    role: "Staf Tata Usaha",
    photo: "/photos/tu/tu-2.png",
  },
];

/* ==============================
   GURU (Grouped by Kompetensi)
================================ */
export const GURU: Record<string, Person[]> = {
  "Teknik Kendaraan Ringan Otomotif": [
    {
      id: "guru-tkro-1",
      name: "Nama Guru TKRO 1",
      role: "Guru TKRO",
      photo: "/photos/guru/tkro-1.png",
    },
    {
      id: "guru-tkro-2",
      name: "Nama Guru TKRO 2",
      role: "Guru TKRO",
      photo: "/photos/guru/tkro-2.png",
    },
  ],
  "Desain Komunikasi Visual": [
    {
      id: "guru-dkv-1",
      name: "Nama Guru DKV 1",
      role: "Guru DKV",
      photo: "/photos/guru/dkv-1.png",
    },
  ],
  "Teknik Sepeda Motor": [
    {
      id: "guru-tsm-1",
      name: "Nama Guru TSM 1",
      role: "Guru TSM",
      photo: "/photos/guru/tsm-1.png",
    },
  ],
  "Tata Busana": [
    {
      id: "guru-tb-1",
      name: "Nama Guru Tata Busana 1",
      role: "Guru Tata Busana",
      photo: "/photos/guru/tb-1.png",
    },
  ],
};

/* ==============================
   EXPORT BUNDLE
================================ */
export const SCHOOL_STAFF = {
  headmaster: HEADMASTER,
  waka: WAKA,
  tataUsaha: TATA_USAHA,
  guru: GURU,
};
