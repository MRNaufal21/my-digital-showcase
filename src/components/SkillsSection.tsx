import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

const levelConfig: Record<SkillLevel, { color: string; dots: number }> = {
  Beginner: { color: "bg-muted-foreground", dots: 1 },
  Intermediate: { color: "bg-primary/60", dots: 2 },
  Advanced: { color: "bg-primary/80", dots: 3 },
  Expert: { color: "bg-primary", dots: 4 },
};

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: "Expert" as SkillLevel },
      { name: "TypeScript", level: "Expert" as SkillLevel },
      { name: "Tailwind CSS", level: "Expert" as SkillLevel },
      { name: "Vue.js", level: "Advanced" as SkillLevel },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced" as SkillLevel },
      { name: "Python", level: "Advanced" as SkillLevel },
      { name: "PostgreSQL", level: "Advanced" as SkillLevel },
      { name: "REST / GraphQL", level: "Expert" as SkillLevel },
    ],
  },
  {
    title: "Tools & Lainnya",
    skills: [
      { name: "Git / GitHub", level: "Expert" as SkillLevel },
      { name: "Docker", level: "Intermediate" as SkillLevel },
      { name: "Figma", level: "Advanced" as SkillLevel },
      { name: "AWS / GCP", level: "Intermediate" as SkillLevel },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Skills & Tools</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold">
            Keahlian <span className="text-gradient">Teknis</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * catIdx }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-6">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill, i) => {
                  const config = levelConfig[skill.level];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + 0.1 * i }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-foreground font-medium text-sm">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {Array.from({ length: 4 }).map((_, dotIdx) => (
                            <div
                              key={dotIdx}
                              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                dotIdx < config.dots ? config.color : "bg-secondary"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground w-24 text-right">{skill.level}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
