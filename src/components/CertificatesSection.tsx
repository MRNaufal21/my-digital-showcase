import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, X, Plus, Trash2, Upload, Loader2 } from "lucide-react";
import { db } from "@/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from "firebase/firestore";

import certAlibaba from "@/assets/cert-alibaba.png";
import certDicoding from "@/assets/cert-dicoding.png";
import certMaribelajar from "@/assets/cert-maribelajar.png";
import certCodepolitanBootstrap from "@/assets/cert-codepolitan-bootstrap.png";
import certCodepolitanPhp from "@/assets/cert-codepolitan-php.png";

// Data default sebagai cadangan jika database kosong
const defaultCertificates = [
  {
    title: "Sistem Manajemen Keselamatan dan Kesehatan Kerja Berbasis SNI ISO 45001:2018",
    issuer: "Badan Standardisasi Nasional",
    date: "24 April 2026",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&fit=crop",
  },
  {
    title: "Alibaba Cloud Certified Developer",
    issuer: "Alibaba Cloud",
    date: "Valid until Mar 2026",
    image: certAlibaba,
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Oktober 2025",
    image: certDicoding,
  },
  {
    title: "Ahli Excel dengan AI",
    issuer: "MariBelajar",
    date: "Desember 2025",
    image: certMaribelajar,
  },
  {
    title: "Belajar Bootstrap CSS Framework",
    issuer: "Codepolitan",
    date: "November 2024",
    image: certCodepolitanBootstrap,
  },
  {
    title: "Belajar Pemrograman PHP",
    issuer: "Codepolitan",
    date: "November 2024",
    image: certCodepolitanPhp,
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newIssuer, setNewIssuer] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newImageBase64, setNewImageBase64] = useState("");

  // Ambil data dari Firebase Firestore saat komponen dimuat
  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "certificates"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const fetchedData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Jika database di Firebase masih kosong, kita isi otomatis dengan defaultCertificates
      if (fetchedData.length === 0) {
        setCertificates(defaultCertificates);
      } else {
        setCertificates(fetchedData);
      }
    } catch (error) {
      console.error("Gagal mengambil data dari Firebase:", error);
      setCertificates(defaultCertificates);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  // Kompresi Gambar Sangat Ringan agar muat di Firestore Document (< 1MB)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf") {
        alert("File PDF tidak bisa ditampilkan sebagai gambar. Tolong ubah/screenshot ke format PNG/JPG terlebih dahulu.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 500;
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
          
          const compressedBase64 = canvas.toDataURL("image/jpeg", 0.4);
          setNewImageBase64(compressedBase64);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  // Tambah sertifikat baru ke Firebase Firestore
  const handleAddCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newIssuer || !newDate) return;

    try {
      setIsSubmitting(true);
      const imageSource = newImageBase64 || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&fit=crop";

      const newCertData = {
        title: newTitle,
        issuer: newIssuer,
        date: newDate,
        image: imageSource,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "certificates"), newCertData);

      // Bersihkan form & refresh data
      setNewTitle("");
      setNewIssuer("");
      setNewDate("");
      setNewImageBase64("");
      setShowForm(false);
      await fetchCertificates();
      alert("Sertifikat berhasil ditambahkan ke Cloud Firebase!");
    } catch (error) {
      console.error("Gagal menyimpan sertifikat:", error);
      alert("Terjadi kesalahan saat menyimpan ke database.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Hapus sertifikat dari Firebase Firestore
  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!id) {
      alert("Sertifikat bawaan default tidak dapat dihapus melalui web.");
      return;
    }

    if (confirm("Yakin ingin menghapus sertifikat ini secara permanen dari Cloud?")) {
      try {
        await deleteDoc(doc(db, "certificates", id));
        await fetchCertificates();
      } catch (error) {
        console.error("Gagal menghapus sertifikat:", error);
        alert("Gagal menghapus data.");
      }
    }
  };

  return (
    <section id="certificates" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Sertifikat</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mb-6">
            Sertifikasi & <span className="text-gradient">Pencapaian</span>
          </h2>

          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-95 transition-opacity shadow-lg"
          >
            <Plus size={16} />
            {showForm ? "Tutup Form" : "Tambah Sertifikat Baru"}
          </button>
        </motion.div>

        {showForm && (
          <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleAddCertificate}
            className="mb-16 p-6 rounded-2xl bg-card border border-primary/30 shadow-xl space-y-4 max-w-2xl mx-auto"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">Form Tambah Sertifikat Baru (Cloud Database)</h3>
            <input
              type="text"
              placeholder="Judul Sertifikat"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Penerbit"
                value={newIssuer}
                onChange={(e) => setNewIssuer(e.target.value)}
                className="p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                required
              />
              <input
                type="text"
                placeholder="Tanggal / Periode"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="p-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-medium text-muted-foreground">
                Pilih File Gambar Sertifikat (.PNG / .JPG / .JPEG)
              </label>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                <Upload size={18} className="text-primary shrink-0" />
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/webp"
                  onChange={handleImageChange}
                  className="w-full text-sm text-muted-foreground file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90 cursor-pointer"
                />
              </div>
            </div>

            {newImageBase64 && (
              <div className="mt-2">
                <p className="text-xs text-muted-foreground mb-1">Preview Gambar Terkompresi:</p>
                <img
                  src={newImageBase64}
                  alt="Preview"
                  className="max-h-40 rounded-lg border border-border object-contain bg-white p-2"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {isSubmitting && <Loader2 className="animate-spin" size={16} />}
              {isSubmitting ? "Menyimpan ke Cloud..." : "Simpan ke Cloud Firebase"}
            </button>
          </motion.form>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-primary" size={36} />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert: any, i: number) => (
              <motion.div
                key={cert.id || i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors cursor-pointer relative"
                onClick={() => setSelected(i)}
              >
                {cert.id && (
                  <button
                    onClick={(e) => handleDelete(cert.id, e)}
                    className="absolute top-3 right-3 z-20 bg-background/80 backdrop-blur-sm p-1.5 rounded-full text-muted-foreground hover:text-red-500 transition-colors shadow-md"
                    title="Hapus Sertifikat"
                  >
                    <Trash2 size={16} />
                  </button>
                )}

                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain bg-white p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2">
                    <Award className="text-primary mt-0.5 shrink-0" size={16} />
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">{cert.title}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {selected !== null && certificates[selected] && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={() => setSelected(null)}
          >
            <X size={32} />
          </button>
          <img
            src={certificates[selected].image}
            alt={certificates[selected].title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;