import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export default function CompetencyList() {
  const skills = [
    "Teknik Kendaraan Ringan Otomotif",
    "Desain Komunikasi Visual/Komputer",
    "Teknik Bisnis Sepeda Motor",
    "Desain & Produksi Busana",
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-teal-600" />
          Kompetensi Keahlian
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <Badge
            key={s}
            variant="secondary"
            className="rounded-full bg-teal-50 text-teal-700"
          >
            {s}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
