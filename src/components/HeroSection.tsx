import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Instagram, Facebook } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-heading font-medium tracking-widest uppercase text-sm mb-6"
        >
          Halo, Saya
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-4"
        >
          <span className="text-foreground">Nama</span>{" "}
          <span className="text-gradient">Anda</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <item.icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-body"
        >
          Full-Stack Developer & UI/UX Designer — Membangun pengalaman digital yang bermakna dan berdampak.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-3.5 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity glow-gold"
          >
            Lihat Portofolio
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3.5 border border-border text-foreground font-heading font-medium rounded-lg hover:bg-secondary transition-colors flex items-center gap-2"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
