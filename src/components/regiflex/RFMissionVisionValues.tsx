import { motion } from 'framer-motion';
import { Target, Eye, Handshake } from 'lucide-react';

const mvvItems = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Melhorar o fluxo de atendimento em clínicas através de tecnologia simples e acessível, otimizando a experiência de pacientes e profissionais da saúde.',
  },
  {
    icon: Eye,
    title: 'Visão',
    description: 'Ser a principal referência em soluções digitais inovadoras para a gestão de atendimento em saúde, reconhecida pela eficiência e impacto positivo.',
  },
  {
    icon: Handshake,
    title: 'Valores',
    description: 'Eficiência, Simplicidade, Confiabilidade e Inovação. Guiamos nossas ações por esses pilares para construir um futuro mais ágil e humano na saúde.',
  },
];

export default function RFMissionVisionValues() {
  return (
    <section id="missao-visao-valores" className="section-padding bg-rf-gray-light py-20 lg:py-32">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6"
        >
          Nossa Missão, Visão e Valores
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          Pautamos nosso trabalho em princípios que visam a excelência e a transformação no setor da saúde.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {mvvItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-8 flex flex-col items-center text-center hover-lift"
            >
              <div className="bg-rf-blue-light p-4 rounded-full inline-flex items-center justify-center mb-6 shadow-lg">
                <item.icon size={36} className="text-rf-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
