"use client";

import * as React from "react";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, Phone, School, User } from "lucide-react";
import { createStudent } from "@/app/api/students/api";
import { StudentPayload } from "@/app/api/students/types";

export default function RegistrationPage() {
  const [dob, setDob] = React.useState<Date>();
  const [submitting, setSubmitting] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);

    const payload: StudentPayload = {
      name: String(f.get("name") || ""),
      gender: (f.get("gender") as StudentPayload["gender"]) || "Laki-laki",
      place_of_birth: String(f.get("place_of_birth") || ""),
      date_of_birth: dob ? dob.toISOString() : "",
      address: String(f.get("address") || ""),
      phone_number: String(f.get("phone_number") || "") || null,
      from_school: String(f.get("from_school") || ""),
      graduation_year: Number(f.get("graduation_year") || 0),
      biological_father: String(f.get("biological_father") || ""),
      biological_mother: String(f.get("biological_mother") || ""),
      father_condition: (f.get("father_condition") as "Hidup" | "Wafat") || "Hidup",
      mother_condition: (f.get("mother_condition") as "Hidup" | "Wafat") || "Hidup",
      father_job: String(f.get("father_job") || "") || null,
      mother_job: String(f.get("mother_job") || "") || null,
      parent_guardian_phone_number: String(f.get("parent_guardian_phone_number") || ""),
      major: (f.get("major") as StudentPayload["major"]) || "Teknik Kendaraan Ringan",
      recommendation_from: (f.get("recommendation_from") as StudentPayload["recommendation_from"]) || "Sekolah",
    };

    if (!payload.date_of_birth) {
      alert("Tanggal lahir belum dipilih.");
      return;
    }

    try {
      setSubmitting(true);
      await createStudent(payload);
      alert("✅ Pendaftaran berhasil dikirim!");
      (e.target as HTMLFormElement).reset();
      setDob(undefined);
    } catch (err) {  
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  function handleReset() {
    setDob(undefined);
  }

  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="text-center">
          <Badge className="rounded-full bg-teal-600 hover:bg-teal-700">Formulir Pendaftaran</Badge>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">Pendaftaran Peserta Didik Baru</h1>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            Mohon lengkapi data berikut secara benar. Data yang Anda isi akan membantu proses administrasi sekolah.
          </p>
        </div>

        {/* Satu form yang memuat seluruh section */}
        <form onSubmit={handleSubmit} onReset={handleReset} className="mt-10 grid gap-6">
          {/* Data Siswa */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <User className="h-5 w-5 text-teal-600" />
                Data Siswa
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label>Jenis Kelamin</Label>
                  <Select name="gender" required>
                    <SelectTrigger><SelectValue placeholder="Pilih jenis kelamin" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Laki-laki">Laki-laki</SelectItem>
                      <SelectItem value="Perempuan">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="place_of_birth">Tempat Lahir</Label>
                  <Input id="place_of_birth" name="place_of_birth" placeholder="Kota/Kabupaten" required />
                </div>
                <div className="space-y-2">
                  <Label>Tanggal Lahir</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "inline-flex w-full items-center justify-start rounded-md border bg-transparent px-3 py-2 text-left text-sm",
                          "hover:bg-accent focus:outline-none",
                          !dob && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dob ? format(dob, "dd MMMM yyyy", { locale: localeID }) : "Pilih tanggal"}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        captionLayout="dropdown"
                        selected={dob}
                        onSelect={setDob}
                        disabled={(date) => date > new Date()}
                        required
                      />
                    </PopoverContent>
                  </Popover>
                  <input type="hidden" name="date_of_birth" value={dob ? dob.toISOString() : ""} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Alamat Lengkap</Label>
                <Textarea id="address" name="address" placeholder="Jl. Sudirman No. 1, Kel/Desa..., Kec..., Kab/Kota..." required />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="phone_number">No. HP Siswa</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input id="phone_number" name="phone_number" placeholder="08xxxxxxxxxx" className="pl-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="from_school">Asal Sekolah</Label>
                  <Input id="from_school" name="from_school" placeholder="SMP/MTs/Sederajat" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="graduation_year">Tahun Lulus</Label>
                  <Input id="graduation_year" name="graduation_year" type="number" placeholder="2025" min={2000} max={2099} required />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Orang Tua/Wali */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Phone className="h-5 w-5 text-teal-600" />
                Data Orang Tua / Wali
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="biological_father">Nama Ayah Kandung</Label>
                  <Input id="biological_father" name="biological_father" placeholder="Budi Santoso" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="biological_mother">Nama Ibu Kandung</Label>
                  <Input id="biological_mother" name="biological_mother" placeholder="Siti Aminah" required />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Kondisi Ayah</Label>
                  <Select name="father_condition" required>
                    <SelectTrigger><SelectValue placeholder="Pilih kondisi" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Hidup">Hidup</SelectItem>
                      <SelectItem value="Wafat">Wafat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Kondisi Ibu</Label>
                  <Select name="mother_condition" required>
                    <SelectTrigger><SelectValue placeholder="Pilih kondisi" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Hidup">Hidup</SelectItem>
                      <SelectItem value="Wafat">Wafat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="father_job">Pekerjaan Ayah</Label>
                  <Input id="father_job" name="father_job" placeholder="Pegawai Negeri / Wiraswasta / ..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mother_job">Pekerjaan Ibu</Label>
                  <Input id="mother_job" name="mother_job" placeholder="Ibu Rumah Tangga / Karyawan / ..." />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="parent_guardian_phone_number">No. HP Orang Tua / Wali</Label>
                <Input
                  id="parent_guardian_phone_number"
                  name="parent_guardian_phone_number"
                  placeholder="08xxxxxxxxxx"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Program & Rekomendasi */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <School className="h-5 w-5 text-teal-600" />
                Pilihan Program & Rekomendasi
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Kompetensi Keahlian (Jurusan)</Label>
                  <Select name="major" required>
                    <SelectTrigger><SelectValue placeholder="Pilih jurusan" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Teknik Kendaraan Ringan">TKR — Teknik Kendaraan Ringan</SelectItem>
                      <SelectItem value="Teknik & Bisnis Sepeda Motor">TSM — Teknik & Bisnis Sepeda Motor</SelectItem>
                      <SelectItem value="Desain Komunikasi Visual">DKV — Desain Komunikasi Visual</SelectItem>
                      <SelectItem value="Desain & Produksi Busana">DPB — Desain & Produksi Busana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Rekomendasi dari</Label>
                  <Select name="recommendation_from">
                    <SelectTrigger><SelectValue placeholder="Pilih sumber rekomendasi" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Sekolah">Sekolah</SelectItem>
                      <SelectItem value="Orang Tua">Orang Tua</SelectItem>
                      <SelectItem value="Alumni">Alumni</SelectItem>
                      <SelectItem value="Media Sosial">Media Sosial</SelectItem>
                      <SelectItem value="Lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
              <p className="text-sm text-gray-600">Pastikan data yang diinput sudah benar sebelum dikirim.</p>
              <div className="flex items-center gap-3">
                <Button type="reset" variant="outline" disabled={submitting}>Reset</Button>
                <Button type="submit" disabled={submitting} className="bg-teal-600 hover:bg-teal-700">
                  {submitting ? "Mengirim..." : "Kirim Pendaftaran"}
                </Button>
              </div>
            </div>
            <Separator className="mt-4" />
            <p className="mt-3 text-center text-xs text-gray-500">
              Dengan menekan “Kirim Pendaftaran”, Anda menyetujui penggunaan data sesuai kebijakan sekolah.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
