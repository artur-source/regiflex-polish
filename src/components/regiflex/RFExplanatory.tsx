import { motion } from 'framer-motion';
import { Zap, TrendingUp, Eye } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const explanatoryItems = [
  {
    icon: Zap,
    title: 'Como funciona',
    description: 'Clínicas criam conta, o sistema gera QR Code de check-in, e pacientes entram automaticamente na fila digital. Um fluxo simples e eficiente em três etapas.',
  },
  {
    icon: TrendingUp,
    title: 'Benefícios',
    description: 'Redução do tempo de espera, organização do fluxo de pacientes, melhoria da experiência de atendimento e modernização da recepção da clínica.',
  },
  {
    icon: Eye,
    title: 'Demonstração',
    description: 'Visualize o fluxo de atendimento em tempo real. Acompanhe filas, gerencie pacientes e otimize o atendimento da sua clínica com nosso painel intuitivo.',
  },
];

export default function RFExplanatory() {
  return (
    <section id="explicativo" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid sm:grid-cols-3 gap-8">
          {explanatoryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i}
              className="p-8 rounded-2xl bg-card border border-border/50 hover-lift"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
