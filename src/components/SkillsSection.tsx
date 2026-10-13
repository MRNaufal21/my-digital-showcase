import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

const levelConfig: Record<SkillLevel, { color: string; dots: number }> = {
  Beginner: { color: "bg-muted-foreground", dots: 1 },
  Intermediate: { color: "bg-primary/60", dots: 2 },
  Advanced: { color: "bg-primary/80", dots: 3 },
  Expert: { color: "bg-primary", dots: 4 },
};

// Data awal keahlian yang disesuaikan dengan profil Anda
const initialSkillCategories = [
  {
    title: "Hard Skill",
    skills: [
      { name: "Flutter & Dart", level: "Advanced" as SkillLevel },
      { name: "Vue.js & React.js", level: "Advanced" as SkillLevel },
      { name: "Laravel & PHP", level: "Advanced" as SkillLevel },
      { name: "Python & MySQL", level: "Intermediate" as SkillLevel },
    ],
  },
  {
    title: "Soft Skill",
    skills: [
      { name: "Komunikasi", level: "Advanced" as SkillLevel },
      { name: "Team Work", level: "Expert" as SkillLevel },
      { name: "Problem Solving", level: "Advanced" as SkillLevel },
      { name: "Analisis Data (Excel)", level: "Expert" as SkillLevel },
    ],
  },
  {
    title: "Software Skill",
    skills: [
      { name: "Visual Studio Code", level: "Expert" as SkillLevel },
      { name: "Microsoft Excel", level: "Expert" as SkillLevel },
      { name: "Figma & Adobe XD", level: "Expert" as SkillLevel },
      { name: "Git & GitHub", level: "Advanced" as SkillLevel },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // State untuk kategori keahlian dengan localStorage
  const [skillCategories, setSkillCategories] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_skills");
      return saved ? JSON.parse(saved) : initialSkillCategories;
    } catch {
      return initialSkillCategories;
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillLevel, setNewSkillLevel] = useState<SkillLevel>("Advanced");

  useEffect(() => {
    try {
      localStorage.setItem("portfolio_skills", JSON.stringify(skillCategories));
    } catch (e) {
      alert("Penyimpanan lokal penuh!");
    }
  }, [skillCategories]);

  // Fungsi Tambah Keahlian
  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    const updated = [...skillCategories];
    updated[selectedCategoryIdx].skills.push({
      name: newSkillName.trim(),
      level: newSkillLevel,
    });

    setSkillCategories(updated);
    setNewSkillName("");
    setShowForm(false);
  };

  // Fungsi Hapus Keahlian
  const handleDeleteSkill = (catIdx: number, skillIdx: number) => {
    if (confirm("Yakin ingin menghapus keahlian ini?")) {
      const updated = [...skillCategories];
      updated[catIdx].skills.splice(skillIdx, 1);
      setSkillCategories(updated);
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Skills & Tools</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mb-6">
            Keahlian <span className="text-gradient">Teknis</span>
          </h2>

          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-95 transition-opacity shadow-lg"
          >
            <Plus size={16} />
            {showForm ? "Tutup Form" : "Tambah Keahlian Baru"}
          </button>
        </motion.div>

        {/* Form Tambah Keahlian */}
        {showForm && (
          <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleAddSkill}
            className="mb-16 p-6 rounded-2xl bg-card border border-primary/35 shadow-xl space-y-4 max-w-xl mx-auto"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">Form Tambah Keahlian</h3>
            
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Pilih Kategori</label>
              <select
                value={selectedCategoryIdx}
                onChange={(e) => setSelectedCategoryIdx(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
              >
                {skillCategories.map((cat: any, idx: number) => (
                  <option key={cat.title} value={idx}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Nama Keahlian / Tools</label>
              <input
                type="text"
                placeholder="Cth: Flutter / Tailwind / Figma"
                value={newSkillName}
                onChange={(e) => setNewSkillName(e.target.value)}
                className="w-full p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Tingkat Kemahiran</label>
              <select
                value={newSkillLevel}
                onChange={(e) => setNewSkillLevel(e.target.value as SkillLevel)}
                className="w-full p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Simpan Keahlian
            </button>
          </motion.form>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat: any, catIdx: number) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * catIdx }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-6">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill: any, i: number) => {
                  const config = levelConfig[skill.level as SkillLevel] || levelConfig["Intermediate"];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + 0.1 * i }}
                      className="flex items-center justify-between group/skill"
                    >
                      <span className="text-foreground font-medium text-sm flex items-center gap-2">
                        {skill.name}
                        {/* Tombol Hapus Kecil */}
                        <button
                          type="button"
                          onClick={() => handleDeleteSkill(catIdx, i)}
                          className="opacity-0 group-hover/skill:opacity-100 text-muted-foreground hover:text-red-500 transition-opacity"
                          title="Hapus Keahlian"
                        >
                          <Trash2 size={13} />
                        </button>
                      </span>
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
                        <span className="text-xs text-muted-foreground w-20 text-right">{skill.level}</span>
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