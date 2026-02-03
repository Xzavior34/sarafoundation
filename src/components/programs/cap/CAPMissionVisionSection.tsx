import { Target, Eye } from "lucide-react";

export function CAPMissionVisionSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4 lg:px-0">
          {/* Mission */}
          <div className="card-modern p-6 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
            <div className="relative z-10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-5 md:mb-6 shadow-lg">
                <Target className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-3 md:mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a platform for African students to explore, learn, and apply technology, 
                fostering collaboration, skill development, and leadership in the tech industry.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="card-modern p-6 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />
            <div className="relative z-10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mb-5 md:mb-6 shadow-lg">
                <Eye className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-3 md:mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Empowering African students through technology to drive innovation, entrepreneurship, 
                and socio-economic development across the continent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
