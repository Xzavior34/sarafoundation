import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CAPCTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-[hsl(240,80%,50%)]">
      <div className="section-container text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
          Ready to Start Your Tech Journey?
        </h2>
        <p className="text-white/70 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
          Applications are open for the next cohort. Take the first step towards your tech career or startup.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button variant="hero" size="lg" className="group" asChild>
            <Link to="/contact">
              Apply for CAP
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="heroSecondary" size="lg" asChild>
            <Link to="/partnership/school-community">Bring CAP to Your University</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
