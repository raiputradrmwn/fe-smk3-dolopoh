import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { School } from "lucide-react";

export default function SchoolOverview() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <School className="h-5 w-5 text-teal-600" />
          Sekilas Sekolah
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-gray-700">
        <div className="flex items-center justify-between">
          <span>Tahun Berdiri</span>
          <span className="font-semibold">1993</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span>Akreditasi</span>
          <span className="font-semibold">A (2018)</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span>Status</span>
          <span className="font-semibold">SMK Vokasi Muhammadiyah</span>
        </div>
      </CardContent>
    </Card>
  );
}
