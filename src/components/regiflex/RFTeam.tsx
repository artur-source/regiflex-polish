import { motion } from 'framer-motion';
import { Code2, Lightbulb, Palette, Settings } from 'lucide-react';

const teamSections = [
  {
    icon: Code2,
    title: 'Desenvolvimento',
    description: 'Nossa equipe de engenharia é responsável por construir e manter a plataforma RegiFlex, garantindo robustez e escalabilidade.',
  },
  {
    icon: Lightbulb,
    title: 'Produto',
    description: 'O time de produto idealiza e refina as funcionalidades, assegurando que o RegiFlex atenda às necessidades reais das clínicas.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Nossos designers criam interfaces intuitivas e uma experiência de usuário fluida, tornando o RegiFlex agradável e fácil de usar.',
  },
  {
    icon: Settings,
    title: 'Operações',
    description: 'A equipe de operações garante que o sistema esteja sempre disponível e funcionando perfeitamente, oferecendo suporte contínuo.',
  },
];

export default function RFTeam() {
  return (
    <section id="equipe" className="section-padding bg-background py-20 lg:py-32">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6"
        >
          Conheça a equipe por trás do RegiFlex.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          Profissionais dedicados que trabalham para transformar a gestão de clínicas no Brasil.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-8 flex flex-col items-center text-center hover-lift"
            >
              <div className="bg-rf-blue-light p-4 rounded-full inline-flex items-center justify-center mb-6 shadow-lg">
                <section.icon size={36} className="text-rf-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{section.title}</h3>
              <p className="text-muted-foreground">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
