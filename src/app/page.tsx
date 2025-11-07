import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import KompetensiSection from "@/components/home/KompetensiSection";
import HomeNewsWrapper from "@/components/home/NewsWrapper";
import VideoSection from "@/components/home/VideoSection";



export default function HomePage() {
  return (
    <main>
      <HeroSection/>
      <HomeNewsWrapper/>
      <VideoSection/>
      <KompetensiSection/>
      <ContactSection/>
    </main>
  );
}