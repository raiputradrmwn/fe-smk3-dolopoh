import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import KompetensiSection from "@/components/home/KompetensiSection";
import NewsSection from "@/components/home/NewsSection";
import VideoSection from "@/components/home/VideoSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <NewsSection />
      <VideoSection />
      <KompetensiSection />
      <ContactSection />
    </main>
  );
}