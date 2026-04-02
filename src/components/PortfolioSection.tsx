import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const categories = ["Semua", "Web App", "Mobile", "UI/UX"];

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Platform e-commerce modern dengan fitur real-time inventory dan payment gateway terintegrasi.",
    category: "Web App",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Dashboard Analytics",
    desc: "Dashboard interaktif untuk monitoring KPI bisnis dengan visualisasi data real-time.",
    category: "Web App",
    tech: ["Next.js", "D3.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Travel App",
    desc: "Aplikasi mobile untuk perencanaan perjalanan dengan AI-powered recommendations.",
    category: "Mobile",
    tech: ["React Native", "Firebase", "AI/ML"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
  },
  {
    title: "Brand Identity",
    desc: "Redesign identitas visual untuk startup fintech termasuk logo, typography, dan guidelines.",
    category: "UI/UX",
    tech: ["Figma", "Illustrator", "After Effects"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    title: "Task Management",
    desc: "Aplikasi manajemen tugas kolaboratif dengan real-time sync dan kanban board.",
    category: "Web App",
    tech: ["Vue.js", "Supabase", "TypeScript"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  },
  {
    title: "Fitness Tracker",
    desc: "Aplikasi tracking fitness dengan integrasi wearable devices dan personalized plans.",
    category: "Mobile",
    tech: ["Flutter", "Go", "MongoDB"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("Semua");

  const filtered = active === "Semua" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-card/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Portofolio</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold">
            Proyek <span className="text-gradient">Terbaik</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-heading font-medium transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-3 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity">
                    <ExternalLink size={18} />
                  </button>
                  <button className="p-3 rounded-full bg-secondary text-secondary-foreground hover:opacity-80 transition-opacity">
                    <Github size={18} />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
