import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target, Building2 } from "lucide-react";

export default function VisionMissionTabs() {
  return (
    <Tabs defaultValue="visi-misi" className="mt-10">
      <TabsList className="flex w-full flex-wrap justify-start gap-2 bg-transparent p-0">
        <TabsTrigger
          value="visi-misi"
          className="rounded-full border px-4 py-2 data-[state=active]:bg-teal-600 data-[state=active]:text-white"
        >
          Visi & Misi
        </TabsTrigger>
      </TabsList>

      <TabsContent value="visi-misi" className="mt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-teal-600" />
                Visi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <b>HEBAT</b> (Humanis, Excellent, Beriman, Adaptif, Teknologi)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-teal-600" />
                Misi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>Meningkatkan ketaqwaan peserta didik melalui pendidikan agama Islam yang komprehensif.</li>
                <li>Menumbuhkan akhlak mulia dan karakter Islami.</li>
                <li>Membentuk peserta didik yang kompeten dan berwawasan luas.</li>
                <li>Menciptakan lingkungan belajar yang nyaman, kondusif, dan inspiratif.</li>
                <li>Mengembangkan kreativitas dan inovasi peserta didik.</li>
                <li>Menyelenggarakan pendidikan yang relevan dan berkualitas.</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}
