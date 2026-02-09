import { TechStack } from "@/src/components/ui/TechStack";
import { SelectedWork } from "@/src/components/ui/SelectedWork";
import { Philosophy } from "@/src/components/ui/Philosophy";
import { Hero } from "@/src/components/ui/Hero";
import { CtaSection } from "@/src/components/ui/CtaSection";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-20 space-y-32">
      {/* Hero Section */}
      <Hero />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Featured Projects Grid */}
      <SelectedWork />

      {/* Philosophy Section */}
      <Philosophy />

      {/* Cta Section */}
      <CtaSection />
    </main>
  );
}
