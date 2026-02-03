import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FLIPHeroSection } from "@/components/programs/flip/FLIPHeroSection";
import { FLIPMissionVisionSection } from "@/components/programs/flip/FLIPMissionVisionSection";
import { FLIPWPTASection } from "@/components/programs/flip/FLIPWPTASection";
import { FLIPWFTASection } from "@/components/programs/flip/FLIPWFTASection";
import { FLIPBenefitsSection } from "@/components/programs/flip/FLIPBenefitsSection";
import { FLIPGenderGapSection } from "@/components/programs/flip/FLIPGenderGapSection";
import { FLIPMembershipSection } from "@/components/programs/flip/FLIPMembershipSection";
import { FLIPCTASection } from "@/components/programs/flip/FLIPCTASection";

export default function ProgramFLIP() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FLIPHeroSection />
      <FLIPMissionVisionSection />
      <FLIPWPTASection />
      <FLIPWFTASection />
      <FLIPBenefitsSection />
      <FLIPGenderGapSection />
      <FLIPMembershipSection />
      <FLIPCTASection />
      <Footer />
    </div>
  );
}
