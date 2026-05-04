import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Target } from 'lucide-react';

const blocks = [
  {
    icon: <AlertCircle className="w-6 h-6 text-red-500" />,
    title: "Problema",
    content: "Filas desorganizadas e processos manuais que geram estresse e perda de tempo."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
    title: "Solução",
    content: "Digitalização completa do fluxo de atendimento com check-in via QR Code."
  },
  {
    icon: <Target className="w-6 h-6 text-blue-500" />,
    title: "Objetivo",
    content: "Trazer mais eficiência na recepção clínica e uma experiência moderna para o paciente."
  }
];

export default function RFAbout() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sobre o RegiFlex</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                {block.icon}
                <h3 className="text-xl font-bold text-slate-900">{block.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                {block.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
