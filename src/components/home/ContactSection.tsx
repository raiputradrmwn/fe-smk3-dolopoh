"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success(data.message || "Pesan berhasil dikirim!");
      form.reset();
    } catch (err: any) {
      toast.error(err.message || "Terjadi kesalahan saat mengirim pesan.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Kirim Pertanyaan <span className="text-teal-600">Melalui Email</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            Sampaikan pertanyaan seputar profil sekolah, kompetensi keahlian,
            pendaftaran (PPDB), atau informasi lainnya. Tim kami akan membalas melalui email Anda.
          </p>
        </div>

        <Card className="mx-auto mt-10 max-w-5xl rounded-2xl shadow-sm">
          <CardContent className="p-6 md:p-10">
            <form onSubmit={onSubmit} className="space-y-6" aria-label="Form kontak sekolah">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Nama*</label>
                  <Input required name="name" placeholder="Nama lengkap Anda" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Email*</label>
                  <Input required type="email" name="email" placeholder="nama@email.com" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Asal/Instansi*</label>
                <Input required name="origin" placeholder="Orang tua/wali, siswa, sekolah asal, dsb." />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Topik*</label>
                  <Input required name="topic" placeholder="PPDB, Kompetensi Keahlian, Beasiswa, dll." />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Subjek*</label>
                  <Input required name="subject" placeholder="Judul singkat pertanyaan Anda" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Pesan*</label>
                <Textarea
                  required
                  name="message"
                  placeholder="Tulis pertanyaan atau keperluan Anda di sini…"
                  className="min-h-[140px] resize-y"
                />
              </div>

              <div className="flex items-center justify-center">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-teal-600 px-8 py-6 text-white hover:bg-teal-700"
                >
                  {loading ? "Mengirim…" : "Kirim"}
                </Button>
              </div>

              <p className="text-center text-sm text-gray-600">
                Kami siap membantu. Jika mendesak, silakan hubungi kontak resmi sekolah pada bagian footer.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
