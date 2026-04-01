import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function RFAbout() {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Sobre nós</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-5 tracking-tight">
            Quem é a <span className="text-gradient-blue">RegiFlex</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O RegiFlex é uma iniciativa desenvolvida para modernizar o processo de cadastro e atendimento em clínicas, utilizando tecnologia para reduzir filas, melhorar a organização da recepção e proporcionar uma experiência mais eficiente para pacientes e profissionais da saúde.
          </p>
        </motion.div>

        {/* Brand identity */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">O Nome RegiFlex</h3>
            <p className="text-muted-foreground leading-relaxed">
              Combina os conceitos de <strong className="text-foreground">registro</strong> e{' '}
              <strong className="text-foreground">flexibilidade</strong> — um sistema ágil e
              adaptável às necessidades das clínicas.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { color: 'bg-rf-blue', label: 'Azul Tecnológico' },
                { color: 'bg-rf-green', label: 'Verde Saúde' },
                { color: 'bg-rf-yellow', label: 'Amarelo Energia' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${c.color}`} />
                  <span className="text-xs text-muted-foreground">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="glass-card p-8 flex items-center gap-6"
          >
            <img src="/logo-regiflex.png" alt="Logo RegiFlex" className="w-20 h-20 object-contain" />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">Logo RegiFlex</h3>
              <p className="text-muted-foreground text-sm">
                Símbolo de eficiência e tecnologia. A cruz médica e o check representam saúde e confiabilidade.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: 'Missão',
              text: 'Simplificar e modernizar o atendimento em clínicas por meio de soluções tecnológicas eficientes.',
              gradient: 'from-rf-blue/10 to-rf-blue/5',
              iconColor: 'text-rf-blue',
            },
            {
              icon: Eye,
              title: 'Visão',
              text: 'Tornar-se uma plataforma reconhecida por melhorar a organização e eficiência no atendimento de clínicas e consultórios.',
              gradient: 'from-rf-green/10 to-rf-green/5',
              iconColor: 'text-rf-green',
            },
            {
              icon: Heart,
              title: 'Valores',
              text: 'Inovação, eficiência, simplicidade, tecnologia acessível e foco no usuário.',
              gradient: 'from-rf-yellow/10 to-rf-yellow/5',
              iconColor: 'text-rf-yellow',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 3}
              className={`p-8 rounded-2xl bg-gradient-to-br ${item.gradient} hover-lift`}
            >
              <item.icon className={`${item.iconColor} mb-4`} size={28} />
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
