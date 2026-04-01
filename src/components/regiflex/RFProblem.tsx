import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RFProblem() {
  return (
    <section id="problema" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="text-destructive" size={28} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            O desafio do atendimento em clínicas
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Muitas clínicas ainda utilizam processos manuais para cadastrar pacientes e organizar atendimentos. Isso gera filas, retrabalho para a recepção e atrasos no fluxo de consultas.
          </p>
          <p className="text-foreground text-lg font-semibold">
            O RegiFlex foi desenvolvido para transformar esse processo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
