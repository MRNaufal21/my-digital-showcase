import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2, Upload } from "lucide-react";
import { categories, Project, getStoredProjects, saveProjects } from "@/data/projects";

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("Semua");
  const navigate = useNavigate();

  // State Daftar Proyek
  const [projectList, setProjectList] = useState<Project[]>(getStoredProjects);

  // State Form Tambah Proyek
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [category, setCategory] = useState("Web App");
  const [techInput, setTechInput] = useState("");
  const [demo, setDemo] = useState("");
  const [github, setGithub] = useState("");
  const [featuresInput, setFeaturesInput] = useState("");
  const [imageBase64, setImageBase64] = useState("");

  // Simpan ke LocalStorage setiap kali daftar proyek diperbarui
  useEffect(() => {
    saveProjects(projectList);
  }, [projectList]);

  // Handler Kompresi Gambar dari File Explorer
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 800;
          const scaleSize = MAX_WIDTH / img.width;

          if (scaleSize < 1) {
            canvas.width = MAX_WIDTH;
            canvas.height = img.height * scaleSize;
          } else {
            canvas.width = img.width;
            canvas.height = img.height;
          }

          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

          const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
          setImageBase64(compressedBase64);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler Tambah Proyek Baru
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !desc) return;

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    const techArray = techInput.split(",").map((t) => t.trim()).filter((t) => t !== "");
    const featuresArray = featuresInput.split("\n").map((f) => f.trim()).filter((f) => f !== "");
    const imageSrc = imageBase64 || "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop";

    const newProject: Project = {
      slug,
      title,
      desc,
      fullDesc: fullDesc || desc,
      category,
      tech: techArray.length > 0 ? techArray : ["React", "Tailwind CSS"],
      image: imageSrc,
      screenshots: [imageSrc],
      demo: demo || "#",
      github: github || "#",
      features: featuresArray.length > 0 ? featuresArray : ["Fitur Utama"],
    };

    setProjectList([newProject, ...projectList]);

    // Reset Form
    setTitle("");
    setDesc("");
    setFullDesc("");
    setCategory("Web App");
    setTechInput("");
    setDemo("");
    setGithub("");
    setFeaturesInput("");
    setImageBase64("");
    setShowForm(false);
  };

  // Handler Hapus Proyek
  const handleDelete = (slug: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Yakin ingin menghapus proyek ini?")) {
      const updated = projectList.filter((p) => p.slug !== slug);
      setProjectList(updated);
    }
  };

  const filtered = active === "Semua" ? projectList : projectList.filter((p) => p.category === active);

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
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mb-6">
            Proyek <span className="text-gradient">Terbaik</span>
          </h2>

          {/* Tombol Tambah Proyek */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-95 transition-opacity shadow-lg"
          >
            <Plus size={16} />
            {showForm ? "Tutup Form" : "Tambah Proyek Baru"}
          </button>
        </motion.div>

        {/* Form Tambah Proyek */}
        {showForm && (
          <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleAddProject}
            className="mb-16 p-6 rounded-2xl bg-card border border-primary/30 shadow-xl space-y-4 max-w-3xl mx-auto"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">Form Tambah Proyek Portofolio</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Judul Proyek (Cth: E-Commerce Mobile App)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                required
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
              >
                {categories.filter((c) => c !== "Semua").map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="text"
              placeholder="Deskripsi Singkat"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
              required
            />

            <textarea
              placeholder="Deskripsi Lengkap (Detail proyek...)"
              value={fullDesc}
              onChange={(e) => setFullDesc(e.target.value)}
              rows={3}
              className="w-full p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
            />

            <input
              type="text"
              placeholder="Teknologi Digunakan (Pisahkan dengan koma: React, Tailwind CSS, Firebase)"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              className="w-full p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Link Demo / Preview (Cth: https://demo.com)"
                value={demo}
                onChange={(e) => setDemo(e.target.value)}
                className="p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="Link Github / Figma"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                className="p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
              />
            </div>

            <textarea
              placeholder="Fitur Utama (Gunakan Enter untuk membuat baris fitur baru)"
              value={featuresInput}
              onChange={(e) => setFeaturesInput(e.target.value)}
              rows={3}
              className="w-full p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
            />

            {/* Input Foto Proyek */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-muted-foreground">
                Pilih Gambar Sampul Proyek (.PNG / .JPG / .WEBP)
              </label>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                <Upload size={18} className="text-primary shrink-0" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full text-sm text-muted-foreground file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90 cursor-pointer"
                />
              </div>
            </div>

            {imageBase64 && (
              <div className="mt-2">
                <p className="text-xs text-muted-foreground mb-1">Preview Gambar:</p>
                <img
                  src={imageBase64}
                  alt="Preview"
                  className="max-h-40 rounded-lg border border-border object-contain bg-background p-2"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Simpan Proyek Baru
            </button>
          </motion.form>
        )}

        {/* Filter Kategori */}
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

        {/* Grid Proyek */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              onClick={() => navigate(`/project/${project.slug}`)}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all cursor-pointer relative"
            >
              {/* Tombol Hapus Proyek */}
              <button
                onClick={(e) => handleDelete(project.slug, e)}
                className="absolute top-3 right-3 z-20 bg-background/80 backdrop-blur-sm p-1.5 rounded-full text-muted-foreground hover:text-red-500 transition-colors shadow-md"
                title="Hapus Proyek"
              >
                <Trash2 size={16} />
              </button>

              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    Lihat Detail →
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
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