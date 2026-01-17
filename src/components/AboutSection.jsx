import { Code2, Palette, Zap } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code is my passion",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating intuitive and beautiful user experiences",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate developer who loves turning ideas into reality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div
              className={`space-y-6 ${
                isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
              }`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Full Stack Developer with a passion for building
                web applications that make a difference. With expertise in
                both frontend and backend technologies, I bring ideas to life
                through clean, efficient code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity and has evolved into
                a career focused on creating seamless user experiences. I
                believe in continuous learning and staying updated with the
                latest technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source, or sharing knowledge with the
                developer community.
              </p>
            </div>

            {/* Highlights Cards */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`glass-card flex items-start gap-4 hover:scale-[1.02] transition-all duration-300 ${
                    isVisible
                      ? `animate-slide-in-right animation-delay-${
                          (index + 2) * 200
                        }`
                      : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isVisible ? `${(index + 2) * 200}ms` : "0ms",
                  }}
                >
                  <div className="p-3 rounded-xl bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
