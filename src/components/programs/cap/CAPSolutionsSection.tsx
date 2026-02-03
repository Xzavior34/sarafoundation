import { Users, Rocket, Heart, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "Tech Talent Development",
    description: "The continent needs 23 million additional tech workers by 2025 to meet its digital economy ambitions. With CAP Tech Hub set up in schools, students will be equipped to bridge the gap.",
    highlights: ["Hands-on training", "Industry-ready skills", "Certified programs"],
  },
  {
    icon: Rocket,
    title: "Support for Early Founders",
    description: "Total VC investment in African tech startups reached $24 billion in 2020. With the right tools and resources, schools can produce the next generation of tech founders and receive needed funding.",
    highlights: ["Founder mentorship", "Pitch preparation", "Funding access"],
  },
  {
    icon: Heart,
    title: "Inclusive Community",
    description: "Our program is gender neutral and fosters an inclusive environment where every student member can learn, grow, and contribute, ensuring diversity, equity, and inclusion.",
    highlights: ["Gender neutral", "Diverse community", "Equal opportunities"],
  },
];

export function CAPSolutionsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
          <span className="section-badge mb-4 md:mb-6">Our Solutions</span>
          <h2 className="section-title text-foreground mb-4 md:mb-6">
            How CAP Tech Hub <span className="gradient-text">Bridges the Gap</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4 lg:px-0">
          {solutions.map((solution) => (
            <div key={solution.title} className="card-modern p-6 md:p-8 group">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-5 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <solution.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 md:mb-5">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {highlight}
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
