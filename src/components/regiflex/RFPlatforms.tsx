import { motion } from 'framer-motion';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const platforms = [
  { icon: Monitor, label: 'Computadores' },
  { icon: Tablet, label: 'Tablets' },
  { icon: Smartphone, label: 'Smartphones' },
];

export default function RFPlatforms() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Plataformas</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-3 mb-5 tracking-tight">
            Acesse de qualquer dispositivo
          </h2>
          <p className="text-muted-foreground text-lg">
            RegiFlex é uma plataforma web responsiva que pode ser utilizada em:
          </p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          {platforms.map((p) => (
            <div key={p.label} className="flex items-center gap-3 p-6 rounded-2xl bg-card border border-border/50 hover-lift">
              <p.icon size={28} className="text-primary" />
              <span className="text-base font-semibold text-foreground">{p.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
