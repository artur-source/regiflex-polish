import { motion } from 'framer-motion';
import { Clock, Users, Zap, ShieldCheck, Building2 } from 'lucide-react';

const differentials = [
  {
    icon: Clock,
    title: 'Redução do tempo de cadastro',
    description: 'Agilize o processo de entrada de pacientes, eliminando burocracias e filas na recepção.',
  },
  {
    icon: Users,
    title: 'Organização do fluxo',
    description: 'Gerencie a fila de atendimento de forma inteligente, proporcionando uma experiência mais fluida.',
  },
  {
    icon: Zap,
    title: 'Experiência digital',
    description: 'Ofereça uma jornada moderna e sem atritos para seus pacientes, desde o primeiro contato.',
  },
  {
    icon: ShieldCheck,
    title: 'Facilidade para recepção',
    description: 'Simplifique as tarefas da equipe de recepção, permitindo foco no atendimento humanizado.',
  },
  {
    icon: Building2,
    title: 'Multi-clínicas',
    description: 'Ideal para grupos de clínicas, permitindo a gestão centralizada de diversas unidades.',
  },
];

export default function RFDifferentials() {
  return (
    <section id="diferenciais" className="section-padding bg-rf-gray-light py-20 lg:py-32">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6"
        >
          Nossos diferenciais que impulsionam sua clínica.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          O RegiFlex se destaca por oferecer soluções inovadoras e eficientes para a gestão de clínicas.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-8 flex flex-col items-center text-center hover-lift"
            >
              <div className="bg-rf-blue-light p-4 rounded-full inline-flex items-center justify-center mb-6 shadow-lg">
                <differential.icon size={36} className="text-rf-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{differential.title}</h3>
              <p className="text-muted-foreground">{differential.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
