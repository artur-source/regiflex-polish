import { motion } from 'framer-motion';
import { Clock, LayoutList, Smile, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Redução do tempo de espera',
    description: 'Otimize o fluxo de pacientes e minimize o tempo de espera na recepção, melhorando a satisfação.',
  },
  {
    icon: LayoutList,
    title: 'Organização do fluxo de pacientes',
    description: 'Gerencie a fila de forma inteligente, evitando aglomerações e garantindo um atendimento sequencial.',
  },
  {
    icon: Smile,
    title: 'Melhoria da experiência de atendimento',
    description: 'Proporcione uma experiência moderna e eficiente, desde o check-in até o atendimento final.',
  },
  {
    icon: TrendingUp,
    title: 'Modernização da recepção',
    description: 'Transforme a recepção da sua clínica em um ambiente tecnológico e inovador, refletindo profissionalismo.',
  },
];

export default function RFBenefits() {
  return (
    <section id="beneficios" className="section-padding bg-background py-20 lg:py-32">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6"
        >
          Benefícios que transformam sua clínica.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          Descubra como o RegiFlex pode otimizar a gestão e a experiência dos seus pacientes.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-8 flex flex-col items-center text-center hover-lift"
            >
              <div className="bg-rf-blue-light p-4 rounded-full inline-flex items-center justify-center mb-6 shadow-lg">
                <benefit.icon size={36} className="text-rf-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
