import ProfileHeader from "./components/ProfileHeader";
import SchoolOverview from "./components/SchoolOverview";
import CompetencyList from "./components/CompetencyList";
import VisionMissionTabs from "./components/VisionMissionTabs";
import CooperationSection from "./components/CooperationSection";

import ProfileCTA from "./components/ProfileCTA";


export default function ProfileSekolahPage() {
  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 space-y-10">
        <ProfileHeader />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SchoolOverview />
          <CompetencyList />
        </div>
        <VisionMissionTabs />
        <CooperationSection />
        <ProfileCTA />
      </section>
    </main>
  );
}
