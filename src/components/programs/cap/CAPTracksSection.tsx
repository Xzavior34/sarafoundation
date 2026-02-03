import { Code, Layers, Rocket } from "lucide-react";

const tracks = [
  {
    name: "Code Track",
    icon: Code,
    description: "For students passionate about building software and applications.",
    color: "from-primary to-[hsl(240,80%,50%)]",
    specializations: [
      "Full-Stack Development",
      "Front-End Development",
      "Back-End Development",
    ],
  },
  {
    name: "No-Code Track",
    icon: Layers,
    description: "For students interested in tech roles beyond coding.",
    color: "from-accent to-[hsl(350,80%,55%)]",
    specializations: [
      "Product Management",
      "Business Analysis",
      "UI/UX Design",
    ],
  },
  {
    name: "Tech-Preneur Track",
    icon: Rocket,
    description: "For aspiring entrepreneurs ready to build startups.",
    color: "from-[hsl(160,70%,40%)] to-[hsl(160,70%,30%)]",
    specializations: [
      "Founders Program",
      "VC Analyst Program",
    ],
  },
];

export function CAPTracksSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
          <span className="section-badge mb-4 md:mb-6">Choose Your Path</span>
          <h2 className="section-title text-foreground mb-4 md:mb-6">
            Three Tracks to <span className="gradient-text">Success</span>
          </h2>
          <p className="section-subtitle mx-auto">
            All members choose one of three tracks within the club and are given the opportunity 
            to build skills that boost their employability or grow a startup.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4 lg:px-0">
          {tracks.map((track) => (
            <div key={track.name} className="card-modern overflow-hidden group">
              <div className={`p-6 md:p-8 bg-gradient-to-r ${track.color} text-white`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <track.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl">
                      {track.name}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      {track.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  Specializations
                </h4>
                <ul className="space-y-3">
                  {track.specializations.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
