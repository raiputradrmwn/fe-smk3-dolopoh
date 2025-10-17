import { Badge } from "@/components/ui/badge";

export default function ProfileHeader() {
  return (
    <div className="text-center">
      <Badge className="rounded-full bg-teal-600 hover:bg-teal-700">
        Profil Sekolah
      </Badge>
      <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
        SMK Muhammadiyah 3 Dolopo
      </h1>
      <p className="mx-auto mt-3 max-w-3xl text-gray-600">
        SMK Muhammadiyah 3 Dolopo adalah sekolah menengah kejuruan berbasis
        nilai-nilai Islam yang berdiri sejak <b>1993</b> dan sejak <b>2018</b> terakreditasi <b>A</b>.
        Kami berkomitmen mencetak lulusan berkarakter, kompeten, dan adaptif
        terhadap perkembangan industri serta teknologi.
      </p>
    </div>
  );
}
