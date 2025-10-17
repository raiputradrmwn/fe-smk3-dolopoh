import DkvHero from "./components/DkvHero";
import DkvDescription from "./components/DkvDescription";
import DkvSubjects from "./components/DkvSubjects";
import DkvCareer from "./components/DkvCareer";

export default function DkvPage() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16">
        <DkvHero />
        <DkvDescription />
        <DkvSubjects />
        <DkvCareer />
      </section>
    </main>
  );
}
