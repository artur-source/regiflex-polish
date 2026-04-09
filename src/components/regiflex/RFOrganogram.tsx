import { motion } from 'framer-motion';
import { Code2, Lightbulb, Palette, Settings } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const teamRoles = [
  {
    icon: Code2,
    title: 'Desenvolvimento',
    description: 'Responsável pela arquitetura, implementação e manutenção do código da plataforma RegiFlex.',
  },
  {
    icon: Lightbulb,
    title: 'Produto',
    description: 'Define estratégia, roadmap e prioridades para garantir valor ao cliente.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Cria experiências visuais intuitivas e acessíveis para usuários e clínicas.',
  },
  {
    icon: Settings,
    title: 'Operações',
    description: 'Gerencia processos, infraestrutura e suporte para operação eficiente.',
  },
];

export default function RFOrganogram() {
  return (
    <section id="organograma" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Organograma da Equipe
          </h3>
          <p className="text-muted-foreground text-lg mt-3">
            Conheça os pilares que sustentam o RegiFlex
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRoles.map((role, i) => (
            <motion.div
              key={role.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 1}
              className="p-6 rounded-2xl bg-card border border-border/50 hover-lift text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <role.icon className="text-primary" size={24} />
              </div>
              <h4 className="text-base font-bold text-foreground mb-2">{role.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
