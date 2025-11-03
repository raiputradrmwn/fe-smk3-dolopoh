export type StudentPayload = {
  name: string;
  gender: "Laki-laki" | "Perempuan";
  place_of_birth: string;
  date_of_birth: string; // ISO string
  address: string;
  phone_number?: string | null;
  from_school: string;
  graduation_year: number;
  biological_father: string;
  biological_mother: string;
  father_condition: "Hidup" | "Wafat";
  mother_condition: "Hidup" | "Wafat";
  father_job?: string | null;
  mother_job?: string | null;
  parent_guardian_phone_number: string;
  major:
    | "Teknik Kendaraan Ringan"
    | "Teknik & Bisnis Sepeda Motor"
    | "Desain Komunikasi Visual"
    | "Desain & Produksi Busana";
  recommendation_from?: "Sekolah" | "Orang Tua" | "Alumni" | "Media Sosial" | "Lainnya" | string;
};

export type StudentResponse = {
  id: string;
  createdAt: string;
  // extend sesuai response backend kamu
};
