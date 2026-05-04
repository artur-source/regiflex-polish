import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function RFSolution() {
  return (
    <section id="solucao" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-8"
        >
          <Sparkles size={16} />
          <span>A Solução</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight"
        >
          O RegiFlex digitaliza o cadastro e a fila da sua clínica.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl text-slate-600 leading-relaxed"
        >
          Uma plataforma intuitiva que elimina processos manuais, reduz o tempo de espera e moderniza a experiência do paciente desde o primeiro contato.
        </motion.p>
      </div>
    </section>
  );
}
