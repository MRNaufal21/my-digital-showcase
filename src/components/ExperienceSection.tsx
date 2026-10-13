import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Briefcase, Plus, Trash2 } from "lucide-react";

// Data awal (default) jika localStorage masih kosong
const initialExperiences = [
  {
    role: "UI/UX Design",
    company: "PT Dot System Indonesia",
    period: "April — September 2024",
    descriptions: [
      "Membuat aplikasi mobile Point of Sale (POS) menggunakan flutter dan database firebase.",
      "Merancang wireframe, mockup, dan prototipe interaktif menggunakan Figma serta berkolaborasi dengan tim developer."
    ]
  },
  {
    role: "Staff Admin Planning Production Control",
    company: "PT Java Seafood Indonesia",
    period: "Juni — September 2026",
    descriptions: [
      "Mengelola data absensi tim H&G, meliputi nomor dan nama anggota serta validasi kehadiran.",
      "Menginput data timbangan ikan H&G hingga 350+ ke Excel, meliputi jumlah orang, jenis ikan, dan jam kerja.",
      "Mengolah dan menganalisis data produksi (KPI) untuk membandingkan target dan hasil aktual serta mengidentifikasi selisih data.",
      "Melakukan pengecekan dan rekapitulasi data timbangan dan produksi harian sesuai kondisi aktual."
    ]
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // State untuk menyimpan daftar pengalaman (mengambil dari localStorage jika ada)
  const [experiences, setExperiences] = useState(() => {
    const saved = localStorage.getItem("portfolio_experiences");
    return saved ? JSON.parse(saved) : initialExperiences;
  });

  // State untuk mengontrol form tambah data
  const [showForm, setShowForm] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newPeriod, setNewPeriod] = useState("");
  const [newDesc, setNewDesc] = useState("");

  // Simpan ke localStorage setiap kali data experiences berubah
  useEffect(() => {
    localStorage.setItem("portfolio_experiences", JSON.stringify(experiences));
  }, [experiences]);

  // Fungsi untuk menambah pengalaman baru
  const handleAddExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRole || !newCompany || !newPeriod || !newDesc) return;

    // Memecah deskripsi berdasarkan baris baru (enter) agar bisa jadi banyak poin
    const descArray = newDesc.split("\n").filter((item) => item.trim() !== "");

    const newExp = {
      role: newRole,
      company: newCompany,
      period: newPeriod,
      descriptions: descArray,
    };

    setExperiences([newExp, ...experiences]);

    // Reset form & tutup form
    setNewRole("");
    setNewCompany("");
    setNewPeriod("");
    setNewDesc("");
    setShowForm(false);
  };

  // Fungsi untuk menghapus pengalaman berdasarkan index
  const handleDelete = (index: number) => {
    if (confirm("Yakin ingin menghapus pengalaman ini?")) {
      const updated = experiences.filter((_, i) => i !== index);
      setExperiences(updated);
    }
  };

  return (
    <section id="experience" className="py-24 sm:py-32 bg-card/50" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Pengalaman</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mb-6">
            Pengalaman <span className="text-gradient">Kerja</span>
          </h2>

          {/* Tombol untuk Membuka Form Tambah Data */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            <Plus size={16} />
            {showForm ? "Tutup Form" : "Tambah Pengalaman Baru"}
          </button>
        </motion.div>

        {/* Form Tambah Pengalaman (Muncul jika tombol diklik) */}
        {showForm && (
          <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleAddExperience}
            className="mb-16 p-6 rounded-2xl bg-card border border-primary/30 shadow-xl space-y-4"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">Form Tambah Pengalaman Kerja</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Posisi / Role (Cth: Frontend Developer)"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                required
              />
              <input
                type="text"
                placeholder="Nama Perusahaan (Cth: PT Sukses Bersama)"
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
                className="p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Periode (Cth: Jan 2026 — Sekarang)"
              value={newPeriod}
              onChange={(e) => setNewPeriod(e.target.value)}
              className="w-full p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
              required
            />
            <textarea
              placeholder="Deskripsi / Tugas (Gunakan Enter untuk membuat beberapa baris poin baru)"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              rows={4}
              className="w-full p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Simpan Pengalaman
            </button>
          </motion.form>
        )}

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`relative flex items-start gap-6 mb-12 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div 
                className="absolute left-6 md:left-auto md:right-0 top-1 w-3 h-3 rounded-full bg-primary border-4 border-background z-10 transform -translate-x-1/2 md:translate-x-1/2" 
                style={i % 2 !== 0 ? { left: 0, right: 'auto', transform: 'translateX(-50%)' } : {}}
              />

              <div className="ml-12 md:ml-0 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors w-full relative group">
                {/* Tombol Hapus Kecil di Pojok Kanan Atas Kartu */}
                <button
                  onClick={() => handleDelete(i)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-red-500 transition-colors p-1"
                  title="Hapus Pengalaman"
                >
                  <Trash2 size={16} />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={16} className="text-primary" />
                  <span className="text-xs text-primary font-heading font-medium">{exp.period}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg pr-6">{exp.role}</h3>
                <p className="text-sm text-primary/80 mb-4">{exp.company}</p>
                
                {/* Daftar Deskripsi / Tugas */}
                <div className="space-y-2">
                  {exp.descriptions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </div>
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

export default ExperienceSection;