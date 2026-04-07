import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Tentang Saya</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mb-8">
            Passionate <span className="text-gradient">Developer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl">
              <img
                src={profileImg}
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              Saya adalah seorang developer dengan pengalaman lebih dari 3 tahun dalam
              membangun aplikasi web modern. Fokus utama saya adalah menciptakan
              solusi digital yang tidak hanya fungsional, tetapi juga memiliki
              pengalaman pengguna yang luar biasa.
            </p>
            <p>
              Dengan latar belakang di bidang desain dan pengembangan, saya mampu
              menjembatani gap antara visi kreatif dan implementasi teknis.
              Setiap proyek yang saya kerjakan selalu mengutamakan kualitas dan
              kepuasan pengguna.
            </p>
            <p>
              Saya selalu bersemangat untuk belajar teknologi baru dan mengikuti
              perkembangan terkini di dunia web development. Kolaborasi dan
              komunikasi yang baik adalah kunci keberhasilan setiap proyek.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
