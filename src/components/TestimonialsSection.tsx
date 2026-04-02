import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "CEO, TechStartup",
    text: "Hasil kerjanya luar biasa! Website yang dibangun sangat responsif dan performant. Sangat merekomendasikan untuk proyek digital apapun.",
    avatar: "AP",
  },
  {
    name: "Sari Dewi",
    role: "Product Manager, DigitalCorp",
    text: "Profesional dan sangat detail-oriented. Selalu memberikan solusi kreatif untuk setiap tantangan teknis yang kami hadapi.",
    avatar: "SD",
  },
  {
    name: "Budi Santoso",
    role: "Founder, CreativeHub",
    text: "Kolaborasi yang sangat menyenangkan. Komunikasi yang baik dan selalu on-time dalam delivery. Kualitas kode juga sangat bersih.",
    avatar: "BS",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Testimoni</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold">
            Apa Kata <span className="text-gradient">Mereka</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors relative"
            >
              <Quote className="text-primary/20 absolute top-4 right-4" size={32} />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-heading font-semibold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
