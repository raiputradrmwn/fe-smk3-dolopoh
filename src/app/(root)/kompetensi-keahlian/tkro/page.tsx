import TkrHero from "./components/TkrHero";
import TkrDescription from "./components/TkrDescription";
import TkrFacilities from "./components/TkrFacilities";
import TkrAdvantages from "./components/TkrAdvantages";
import TkrCareer from "./components/TkrCareer";
import TkrGallery from "./components/TkrGallery";

export default function TkrPage() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16">
        <TkrHero />
        <TkrDescription />
        <TkrFacilities />
        <TkrAdvantages />
        <TkrCareer />
        <TkrGallery />
      </section>
    </main>
  );
}
