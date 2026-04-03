import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:email@contoh.com?subject=Pesan dari ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0ADari: ${formData.name} (${formData.email})`;
    window.open(mailtoLink, "_blank");
    toast({
      title: "Membuka email client...",
      description: "Silakan kirim pesan melalui email client Anda.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Kontak</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold">
            Mari <span className="text-gradient">Berkolaborasi</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya.
              Saya selalu terbuka untuk diskusi proyek baru, ide kreatif, atau
              kesempatan untuk menjadi bagian dari visi Anda.
            </p>

            <div className="space-y-5">
              <a href="mailto:email@contoh.com" className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <Mail className="text-primary" size={20} />
                </div>
                <span className="text-foreground group-hover:text-primary transition-colors">email@contoh.com</span>
              </a>
              <a href="tel:+6281234567890" className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <Phone className="text-primary" size={20} />
                </div>
                <span className="text-foreground group-hover:text-primary transition-colors">+62 812 3456 7890</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <MapPin className="text-primary" size={20} />
                </div>
                <span className="text-foreground">Jakarta, Indonesia</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Nama Anda"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Email Anda"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Pesan Anda"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity glow-gold flex items-center gap-2"
            >
              <Send size={18} />
              Kirim Pesan
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
