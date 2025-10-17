// src/app/profil/page.tsx
import { redirect } from "next/navigation";

export default function ProfilPage() {
  // Saat user buka /profil langsung arahkan ke /profil/sekolah
  redirect("/profil/sekolah");
}
