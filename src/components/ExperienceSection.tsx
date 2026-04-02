import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Startup Indonesia",
    period: "2023 — Sekarang",
    desc: "Memimpin tim frontend dalam mengembangkan platform SaaS. Meningkatkan performance sebesar 40% dan menerapkan design system yang konsisten.",
  },
  {
    role: "Full-Stack Developer",
    company: "Digital Agency Jakarta",
    period: "2021 — 2023",
    desc: "Mengembangkan 15+ web application untuk berbagai klien. Mengimplementasikan CI/CD pipeline dan mentoring junior developer.",
  },
  {
    role: "Junior Developer",
    company: "Software House Bandung",
    period: "2020 — 2021",
    desc: "Memulai karir sebagai developer, fokus pada frontend development dengan React dan backend dengan Node.js.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 sm:py-32 bg-card/50" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Pengalaman</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold">
            Perjalanan <span className="text-gradient">Karir</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              className={`relative flex items-start gap-6 mb-12 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-auto md:right-0 top-1 w-3 h-3 rounded-full bg-primary border-4 border-background z-10 transform -translate-x-1/2 md:translate-x-1/2" 
                style={i % 2 !== 0 ? { left: 0, right: 'auto', transform: 'translateX(-50%)' } : {}}
              />

              <div className="ml-12 md:ml-0 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors w-full">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={16} className="text-primary" />
                  <span className="text-xs text-primary font-heading font-medium">{exp.period}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg">{exp.role}</h3>
                <p className="text-sm text-primary/80 mb-3">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
