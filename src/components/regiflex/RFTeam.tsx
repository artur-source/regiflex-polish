import { motion } from 'framer-motion';
import { Code2, Palette, TrendingUp, FileText, Search, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const team = [
  { name: 'Artur Alves Santos', role: 'Líder de projeto', icon: Users, rgm: '2417606' },
  { name: 'Guilherme Almeida', role: 'Designer UX/UI', icon: Palette, rgm: '2417704' },
  { name: 'Nicollas Andrey', role: 'Responsável por pesquisa', icon: Search, rgm: '2417423' },
];

export default function RFTeam() {
  return (
    <section id="equipe" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Equipe</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-5 tracking-tight">
            Nossa equipe
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 1}
              className="p-8 rounded-2xl bg-card border border-border/50 text-center hover-lift"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <m.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{m.name}</h3>
              <p className="text-sm font-semibold text-primary mb-3">{m.role}</p>
              <span className="text-xs text-muted-foreground">RGM: {m.rgm}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
