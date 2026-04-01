import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code2, Palette, TrendingUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const team = [
  { name: 'Artur Alves Santos', role: 'Liderança Técnica', icon: Code2, desc: 'Arquitetura e desenvolvimento', rgm: '2417606' },
  { name: 'Guilherme Almeida', role: 'Design & Produto', icon: Palette, desc: 'UX/UI e experiência do usuário', rgm: '2417704' },
  { name: 'Nicollas Andrey', role: 'Estratégia & Mercado', icon: TrendingUp, desc: 'Análise de mercado e negócios', rgm: '2417423' },
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
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Equipe</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-5 tracking-tight">
            Organograma da <span className="text-gradient-blue">Equipe</span>
          </h2>
        </motion.div>

        {/* Institution badge */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={1}
          className="glass-card p-6 flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-rf-blue" />
            <span>UniPiaget — Análise e Desenvolvimento de Sistemas</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <span>Projeto de Startups</span>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-rf-green" />
            <span>Suzano – SP</span>
          </div>
        </motion.div>

        {/* Team cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 2}
              className="p-8 rounded-2xl bg-card border border-border/50 text-center hover-lift"
            >
              <div className="w-14 h-14 rounded-2xl bg-rf-blue/10 flex items-center justify-center mx-auto mb-5">
                <m.icon className="text-rf-blue" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{m.name}</h3>
              <p className="text-sm font-semibold text-rf-blue mb-2">{m.role}</p>
              <p className="text-sm text-muted-foreground mb-3">{m.desc}</p>
              <span className="text-xs text-muted-foreground/60">RGM: {m.rgm}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
