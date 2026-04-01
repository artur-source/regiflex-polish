import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function RFAbout() {
  return (
    <section id="sobre" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        {/* Quem somos */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} custom={0}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Sobre nós</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-6 tracking-tight">
            Quem somos
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O RegiFlex é um projeto desenvolvido com o objetivo de aplicar tecnologia na melhoria do atendimento em clínicas. A iniciativa busca modernizar processos administrativos e tornar o cadastro de pacientes mais eficiente.
          </p>
        </motion.div>

        {/* Missão, Visão, Valores */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={1}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Missão, Visão e Valores
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: 'Missão',
              text: 'Simplificar e modernizar o processo de atendimento em clínicas por meio da tecnologia.',
            },
            {
              icon: Eye,
              title: 'Visão',
              text: 'Ser uma plataforma reconhecida por melhorar a organização e eficiência no atendimento de clínicas.',
            },
            {
              icon: Heart,
              title: 'Valores',
              text: 'Inovação, Eficiência, Simplicidade, Tecnologia acessível, Experiência do usuário.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 2}
              className="p-8 rounded-2xl bg-card border border-border/50 hover-lift"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
