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
            Passionate <span className="text-gradient">UI/UX Designer & Frontend Developer</span>
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
                className="w-full h-full object-contain"
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
              Saya adalah seorang Informatics Graduate dari Institut Teknologi Nasional Bandung yang 
              memiliki passion besar dalam menjembatani aspek visual UI/UX Design dengan implementasi 
              teknis Frontend Development. Saya berfokus pada pembangunan aplikasi web dan mobile 
              yang tidak hanya fungsional secara sistem, tetapi juga memberikan pengalaman pengguna yang 
              intuitif dan menarik.
            </p>
            <p>
              Memiliki pengalaman dalam mengerjakan berbagai proyek digital, mulai dari aplikasi kasir 
              berbasis web hingga sistem pemesanan tiket pesawat, saya mampu mentransformasikan visi 
              kreatif menjadi kode yang bersih dan efisien menggunakan teknologi seperti React.js, Vue.js, 
              dan Flutter. Saya adalah pribadi yang disiplin, berorientasi pada detail, dan selalu antusias 
              untuk mengadopsi teknologi terbaru guna memberikan solusi digital yang berkualitas tinggi.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
