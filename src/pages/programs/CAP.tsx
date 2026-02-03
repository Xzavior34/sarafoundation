import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CAPHeroSection } from "@/components/programs/cap/CAPHeroSection";
import { CAPProblemsSection } from "@/components/programs/cap/CAPProblemsSection";
import { CAPSolutionsSection } from "@/components/programs/cap/CAPSolutionsSection";
import { CAPMissionVisionSection } from "@/components/programs/cap/CAPMissionVisionSection";
import { CAPTracksSection } from "@/components/programs/cap/CAPTracksSection";
import { CAPPhasesSection } from "@/components/programs/cap/CAPPhasesSection";
import { CAPImpactSection } from "@/components/programs/cap/CAPImpactSection";
import { CAPCTASection } from "@/components/programs/cap/CAPCTASection";

export default function ProgramCAP() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CAPHeroSection />
      <CAPProblemsSection />
      <CAPSolutionsSection />
      <CAPMissionVisionSection />
      <CAPTracksSection />
      <CAPPhasesSection />
      <CAPImpactSection />
      <CAPCTASection />
      <Footer />
    </div>
  );
}
