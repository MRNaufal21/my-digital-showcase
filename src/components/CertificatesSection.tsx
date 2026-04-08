import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, X } from "lucide-react";

import certAlibaba from "@/assets/cert-alibaba.png";
import certDicoding from "@/assets/cert-dicoding.png";
import certMaribelajar from "@/assets/cert-maribelajar.png";
import certCodepolitanBootstrap from "@/assets/cert-codepolitan-bootstrap.png";
import certCodepolitanPhp from "@/assets/cert-codepolitan-php.png";

const certificates = [
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

  return (
    <section id="certificates" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Sertifikat</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold">
            Sertifikasi & <span className="text-gradient">Pencapaian</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors cursor-pointer"
              onClick={() => setSelected(i)}
            >
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
      </div>

      {/* Lightbox */}
      {selected !== null && (
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
