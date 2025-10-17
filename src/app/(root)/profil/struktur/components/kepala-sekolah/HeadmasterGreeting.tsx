// src/app/profil/kepala-sekolah/components/HeadmasterGreeting.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HeadmasterGreeting() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sambutan Kepala Sekolah</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-gray-700 leading-relaxed">
        <p><b>Assalamu&apos;alaikum Wr. Wb.</b></p>
        <p>
          SMK Muhammadiyah 3 Dolopo berdiri sejak tahun <b>1993</b> dan terus
          berkomitmen menghadirkan pendidikan vokasi yang unggul, berkarakter Islami,
          serta adaptif terhadap perkembangan teknologi dan kebutuhan industri.
        </p>
        <p>
          Kami percaya kolaborasi antara sekolah, orang tua, dan dunia usaha/industri
          merupakan kunci untuk melahirkan lulusan yang kompeten, berakhlak mulia,
          dan siap kerja maupun melanjutkan studi.
        </p>
        <p><b>Wassalamu&apos;alaikum Wr. Wb.</b></p>
      </CardContent>
    </Card>
  );
}
