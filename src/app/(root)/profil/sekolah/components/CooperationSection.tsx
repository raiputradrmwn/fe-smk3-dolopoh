"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Handshake } from "lucide-react";

const partners = [
  "PT. Kubota Indonesia",
  "PT. AHM",
  "PT. MPM Distributor",
  "PT. MPM Motor",
  "Sakti TV Madiun",
];

export default function CooperationSection() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Handshake className="h-5 w-5 text-teal-600" />
          Kerja Sama DU/DI
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-2 text-gray-700 md:grid-cols-2">
        {partners.map((m) => (
          <div
            key={m}
            className="rounded-lg border bg-white px-4 py-2 transition-colors hover:border-teal-200"
          >
            {m}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
