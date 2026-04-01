import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RFSolution() {
  return (
    <section id="solucao" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="text-primary" size={28} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            A solução <span className="text-gradient-blue">RegiFlex</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            RegiFlex é uma plataforma digital criada para otimizar o cadastro de pacientes e organizar o fluxo de atendimento em clínicas. A solução permite que pacientes realizem seu cadastro de forma rápida e que a clínica gerencie a fila de atendimento de maneira eficiente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
