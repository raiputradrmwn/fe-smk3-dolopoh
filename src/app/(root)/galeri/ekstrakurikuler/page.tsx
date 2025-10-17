import EkstraHero from "./components/EkstraHero";
import EkstraList from "./components/EkstraList";

export default function EkstraPage() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16">
        <EkstraHero />
        <EkstraList />
      </section>
    </main>
  );
}
