import DpbHero from "./components/DpbHero";
import DpbDescription from "./components/DpbDescription";
import DpbAdvantages from "./components/DpbAdvantages";
import DpbInternship from "./components/DpbInternship";
import DpbGallery from "./components/DpbGallery";

export default function DpbPage() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16">
        <DpbHero />
        <DpbDescription />
        <DpbAdvantages />
        <DpbInternship />
        <DpbGallery />
      </section>
    </main>
  );
}
