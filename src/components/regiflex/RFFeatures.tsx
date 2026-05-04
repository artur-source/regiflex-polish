import { motion } from 'framer-motion';
import { QrCode, ListChecks, Layout, MousePointer2, Globe } from 'lucide-react';

const features = [
  {
    icon: <QrCode className="w-6 h-6 text-blue-600" />,
    title: "Cadastro digital",
    desc: "Check-in via QR Code sem papelada."
  },
  {
    icon: <ListChecks className="w-6 h-6 text-blue-600" />,
    title: "Gestão de fila",
    desc: "Organização automática por ordem de chegada."
  },
  {
    icon: <Layout className="w-6 h-6 text-blue-600" />,
    title: "Painel ADM",
    desc: "Controle total da recepção em tempo real."
  },
  {
    icon: <MousePointer2 className="w-6 h-6 text-blue-600" />,
    title: "Interface intuitiva",
    desc: "Fácil de usar para equipe e pacientes."
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "Acesso Web",
    desc: "Funciona em qualquer navegador."
  }
];

export default function RFFeatures() {
  return (
    <section id="funcionalidades" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Funcionalidades</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
