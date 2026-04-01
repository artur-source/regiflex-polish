import { motion } from 'framer-motion';
import { Stethoscope, Building, HeartPulse, Landmark } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const audiences = [
  { icon: Stethoscope, title: 'Clínicas médicas' },
  { icon: Building, title: 'Consultórios' },
  { icon: HeartPulse, title: 'Centros de saúde' },
  { icon: Landmark, title: 'Instituições que desejam modernizar a recepção' },
];

export default function RFAudience() {
  return (
    <section id="publico" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Público-Alvo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-5 tracking-tight">
            Para quem é o RegiFlex
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 1}
              className="p-8 rounded-2xl bg-card border border-border/50 hover-lift text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <a.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{a.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
