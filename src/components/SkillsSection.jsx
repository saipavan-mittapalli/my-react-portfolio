import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 82 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "AWS", level: 70 },
];

const technologies = [
  "React", "Next.js", "Vue.js", "Node.js", "Express",
  "Python", "Django", "PostgreSQL", "MongoDB", "Redis",
  "Docker", "AWS", "Git", "GraphQL", "REST APIs",
  "Tailwind CSS", "Sass", "Figma", "Jest", "CI/CD"
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Progress Bars */}
            <div
              className={`space-y-6 ${
                isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Core Competencies
              </h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        background: "var(--gradient-primary)",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Tags */}
            <div
              className={`${
                isVisible ? "animate-slide-up animation-delay-400" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 glass rounded-full text-sm font-medium hover:text-primary hover:scale-105 transition-all duration-300 cursor-default"
                    style={{
                      animationDelay: isVisible ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
