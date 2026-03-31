import { motion } from 'framer-motion';
import { Zap, BarChart3, Palette, Building2, Code2, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const differentials = [
  { icon: Zap, title: 'Redução do tempo de cadastro', color: 'text-rf-yellow bg-rf-yellow/10' },
  { icon: BarChart3, title: 'Fila de atendimento organizada', color: 'text-rf-blue bg-rf-blue/10' },
  { icon: Palette, title: 'Interface simples e intuitiva', color: 'text-rf-green bg-rf-green/10' },
  { icon: Building2, title: 'Múltiplas clínicas', color: 'text-rf-blue bg-rf-blue/10' },
  { icon: Code2, title: 'Arquitetura web moderna', color: 'text-rf-green bg-rf-green/10' },
];

const advantages = [
  'Implementação rápida e sem complicações',
  'Suporte dedicado e atualizado',
  'Tecnologia escalável e segura',
  'Integração com sistemas existentes',
  'ROI comprovado em 3 meses',
];

const results = [
  'Redução de 70% no tempo de cadastro',
  'Diminuição de filas e esperas',
  'Aumento da satisfação do paciente',
  'Melhor organização administrativa',
  'Dados seguros — LGPD',
];

export default function RFDifferentials() {
  return (
    <section id="diferenciais" className="section-padding bg-secondary/50">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Diferenciais</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-5 tracking-tight">
            Por que <span className="text-gradient-green">RegiFlex</span>?
          </h2>
        </motion.div>

        {/* Differentials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {differentials.map((d, i) => (
            <motion.div
              key={d.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 1}
              className="p-6 rounded-2xl bg-card border border-border/50 hover-lift text-center"
            >
              <div className={`w-12 h-12 rounded-xl ${d.color} flex items-center justify-center mx-auto mb-4`}>
                <d.icon size={22} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{d.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Advantages + Results */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={6}
            className="p-8 rounded-2xl bg-rf-blue text-primary-foreground"
          >
            <h3 className="text-xl font-bold mb-6">Vantagens</h3>
            <ul className="space-y-3">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-rf-yellow mt-0.5 shrink-0" />
                  <span className="text-sm text-primary-foreground/90">{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={7}
            className="p-8 rounded-2xl bg-rf-green text-accent-foreground"
          >
            <h3 className="text-xl font-bold mb-6">Resultados Comprovados</h3>
            <ul className="space-y-3">
              {results.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-rf-yellow mt-0.5 shrink-0" />
                  <span className="text-sm text-accent-foreground/90">{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
