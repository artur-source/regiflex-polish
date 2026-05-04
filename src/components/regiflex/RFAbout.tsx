import { motion } from 'framer-motion';

const aboutSections = [
  {
    title: 'Quem somos',
    content: 'A RegiFlex nasceu da observação de um problema real: a ineficiência nos processos de cadastro e atendimento em clínicas. Nossa equipe, composta por profissionais de tecnologia e saúde, uniu forças para criar uma solução que realmente fizesse a diferença no dia a dia de clínicas e pacientes.',
  },
  {
    title: 'Propósito',
    content: 'Nosso propósito é transformar o fluxo clínico através de tecnologia simples e acessível. Acreditamos que a inovação deve servir para descomplicar, otimizar e humanizar a experiência de todos os envolvidos no processo de atendimento à saúde.',
  },
  {
    title: 'Contexto',
    content: 'Filas longas, retrabalho administrativo e atrasos no atendimento são desafios comuns que afetam a qualidade do serviço e a satisfação do paciente. O RegiFlex surge como a resposta a esses problemas, oferecendo uma plataforma que organiza, agiliza e moderniza a recepção e o cadastro.',
  },
];

export default function RFAbout() {
  return (
    <section id="sobre" className="section-padding bg-background py-20 lg:py-32">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6"
        >
          Sobre o RegiFlex
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          Conheça a história, o propósito e o impacto que buscamos gerar no setor da saúde.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-8 text-left hover-lift"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">{section.title}</h3>
              <p className="text-muted-foreground">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
