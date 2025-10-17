import TsmHero from "./components/TsmHero";
import TsmProfile from "./components/TsmProfile";
import TsmObjectives from "./components/TsmObjectives";
import TsmCompetency from "./components/TsmCompetency";
import TsmAchievements from "./components/TsmAchievements";
import TsmPrograms from "./components/TsmPrograms";
import TsmGallery from "./components/TsmGallery";

export default function TsmPage() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16">
        <TsmHero />
        <TsmProfile />
        <TsmObjectives />
        <TsmCompetency />
        <TsmAchievements />
        <TsmPrograms />
        <TsmGallery />
      </section>
    </main>
  );
}
