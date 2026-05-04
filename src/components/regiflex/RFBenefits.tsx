import { motion } from 'framer-motion';
import { Clock, ListChecks, Smile, Monitor } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Menos tempo de espera"
  },
  {
    icon: <ListChecks className="w-8 h-8 text-blue-600" />,
    title: "Fila organizada"
  },
  {
    icon: <Smile className="w-8 h-8 text-blue-600" />,
    title: "Melhor experiência"
  },
  {
    icon: <Monitor className="w-8 h-8 text-blue-600" />,
    title: "Recepção digital"
  }
];

export default function RFBenefits() {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Benefícios</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-blue-50 transition-colors"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
