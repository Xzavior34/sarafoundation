import { BookOpen, Rocket, Zap, Clock, CheckCircle2 } from "lucide-react";

const phases = [
  {
    name: "Learn Phase",
    icon: BookOpen,
    duration: "3 Months",
    description: "Focused on learning the basics, taking certification training and completing relevant courses.",
    outcomes: [
      "Programming fundamentals",
      "Certification training",
      "Online course completion",
      "Tech industry awareness",
    ],
  },
  {
    name: "Build Phase",
    icon: Rocket,
    duration: "3 Months",
    description: "Focused on solving real-life African problems on a project basis. All tracks begin to actively collaborate and operate like a startup.",
    outcomes: [
      "Real-world projects",
      "Cross-track collaboration",
      "Startup operations",
      "Technical documentation",
    ],
  },
  {
    name: "Launch Phase",
    icon: Zap,
    duration: "3 Months",
    description: "Focused on securing internships for Code and No-Code track participants and pre-seed funding for Tech-Preneur track.",
    outcomes: [
      "Internship placement",
      "Pre-seed funding access",
      "Industry connections",
      "Career launch support",
    ],
  },
];

export function CAPPhasesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
          <span className="section-badge mb-4 md:mb-6">Program Structure</span>
          <h2 className="section-title text-foreground mb-4 md:mb-6">
            Three Phases to{" "}
            <span className="gradient-text">Transform Your Career</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Our structured 9-month program takes you from learning fundamentals 
            to launching your tech career or startup.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4 lg:px-0">
          {phases.map((phase, index) => (
            <div key={phase.name} className="card-modern p-5 md:p-8 relative overflow-hidden group">
              {/* Phase number */}
              <div className="absolute top-3 md:top-4 right-3 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {index + 1}
              </div>

              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <phase.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>

              <div className="inline-flex items-center gap-2 text-xs md:text-sm text-primary font-medium mb-2 md:mb-3">
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                {phase.duration}
              </div>

              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2 md:mb-3">
                {phase.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 md:mb-6">
                {phase.description}
              </p>

              <ul className="space-y-2 md:space-y-3">
                {phase.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
