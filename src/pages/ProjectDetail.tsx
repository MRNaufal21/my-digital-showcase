import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Figma } from "lucide-react"; // Ditambahkan Figma
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Proyek Tidak Ditemukan</h1>
          <Link to="/" className="text-primary hover:underline">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium mb-6"
          >
            <ArrowLeft size={16} />
            Kembali ke Portofolio
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs uppercase text-primary">{project.category}</span>
            <h1 className="text-3xl sm:text-5xl font-bold mt-2 mb-4">{project.title}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">{project.fullDesc}</p>

            <div className="flex gap-3 mt-6">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-400 text-black font-medium text-sm hover:opacity-90 transition"
              >
                <ExternalLink size={16} /> Live Demo
              </a>

              {/* LOGIKA DINAMIS ICON FIGMA / GITHUB */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground font-medium text-sm hover:opacity-90 transition"
              >
                {project.category === "UI/UX" ? (
                  <>
                    <Figma size={16} /> Figma Design
                  </>
                ) : (
                  <>
                    <Github size={16} /> Source Code
                  </>
                )}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Screenshots */}
        <motion.div className="grid sm:grid-cols-2 gap-4">
          {project.screenshots.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border">
              <img
                src={src}
                alt=""
                className="w-full h-full object-contain bg-black"
              />
            </div>
          ))}
        </motion.div>

        {/* Tech & Features */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Teknologi</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Fitur Utama</h2>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🔥 UX RESEARCH SECTION */}
        {project.uxResearch && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 border rounded-2xl bg-card"
          >
            <h2 className="text-2xl font-bold mb-6">UX Research</h2>

            <p className="mb-3">
              <strong>Problem:</strong> {project.uxResearch.problem}
            </p>

            <p className="mb-6">
              <strong>Target User:</strong> {project.uxResearch.targetUser}
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Goals</h3>
                <ul className="list-disc ml-5 text-sm">
                  {project.uxResearch.goals.map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Pain Points</h3>
                <ul className="list-disc ml-5 text-sm">
                  {project.uxResearch.painPoints.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Solutions</h3>
                <ul className="list-disc ml-5 text-sm">
                  {project.uxResearch.solutions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;