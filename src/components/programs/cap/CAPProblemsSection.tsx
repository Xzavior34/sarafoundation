import { AlertTriangle } from "lucide-react";

const problems = [
  {
    stat: "47%",
    title: "Limited ICT Programs",
    description: "of African Universities do not offer ICT-related programs.",
  },
  {
    stat: "4%",
    title: "Low Tech Skills",
    description: "In Sub-Saharan Africa, only 4% of university graduates have tech-related skills.",
  },
  {
    stat: "70%",
    title: "Outdated Curriculums",
    description: "of African universities offer IT programs based on outdated curriculums.",
  },
];

export function CAPProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
          <span className="section-badge mb-4 md:mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Challenge
          </span>
          <h2 className="section-title text-foreground mb-4 md:mb-6">
            We See a <span className="gradient-text">Gap</span> in African Education
          </h2>
          <p className="section-subtitle mx-auto">
            Career Advancement Program was created to address critical gaps in the African 
            Education Sector and Tech Ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4 lg:px-0">
          {problems.map((problem) => (
            <div key={problem.title} className="card-modern p-6 md:p-8 text-center group">
              <div className="text-4xl md:text-5xl font-bold font-display text-destructive mb-3 md:mb-4">
                {problem.stat}
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-2 md:mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
