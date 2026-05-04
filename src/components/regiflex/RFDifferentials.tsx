import { motion } from 'framer-motion';
import { Zap, Shield, Heart, Smartphone, Building2 } from 'lucide-react';

const differentials = [
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    title: "Agilidade",
    desc: "Cadastro em segundos."
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Segurança",
    desc: "Dados protegidos e organizados."
  },
  {
    icon: <Heart className="w-6 h-6 text-blue-600" />,
    title: "Experiência",
    desc: "Foco no bem-estar do paciente."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: "Mobilidade",
    desc: "Acesse de qualquer dispositivo."
  },
  {
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
    title: "Multi-clínicas",
    desc: "Gerencie várias unidades."
  }
];

export default function RFDifferentials() {
  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Diferenciais</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                {diff.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{diff.title}</h3>
              <p className="text-slate-500 text-sm">{diff.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
