import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Menulis kode yang bersih, efisien, dan mudah di-maintain." },
  { icon: Palette, title: "Design Focused", desc: "Desain yang user-centric dengan perhatian pada detail." },
  { icon: Rocket, title: "Performance", desc: "Optimisasi performa untuk pengalaman pengguna terbaik." },
];

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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
