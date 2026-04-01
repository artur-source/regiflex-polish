import { motion } from 'framer-motion';
import { Zap, BarChart3, Smartphone, HandMetal, Building2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const differentials = [
  { icon: Zap, title: 'Redução do tempo de cadastro' },
  { icon: BarChart3, title: 'Organização do fluxo de pacientes' },
  { icon: Smartphone, title: 'Experiência digital para o paciente' },
  { icon: HandMetal, title: 'Facilidade de uso para a recepção' },
  { icon: Building2, title: 'Sistema preparado para múltiplas clínicas' },
];

export default function RFDifferentials() {
  return (
    <section id="diferenciais" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Diferenciais</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-5 tracking-tight">
            Por que escolher o <span className="text-gradient-blue">RegiFlex</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {differentials.map((d, i) => (
            <motion.div
              key={d.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 1}
              className="p-6 rounded-2xl bg-card border border-border/50 hover-lift text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <d.icon size={22} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{d.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
