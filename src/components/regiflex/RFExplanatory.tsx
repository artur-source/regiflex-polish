import { motion } from 'framer-motion';
import { UserPlus, QrCode, Users } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-8 h-8 text-blue-600" />,
    title: "Clínica cria conta",
    description: "Cadastro rápido da clínica em poucos minutos."
  },
  {
    icon: <QrCode className="w-8 h-8 text-blue-600" />,
    title: "Sistema gera QR Code",
    description: "Check-in digital imediato para seus pacientes."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Paciente entra na fila",
    description: "Fila organizada automaticamente e sem estresse."
  }
];

export default function RFExplanatory() {
  return (
    <section id="como-funciona" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Como funciona</h2>
          <p className="text-lg text-slate-600 font-medium">Fluxo direto em 3 etapas</p>
        </div>

        <div className="relative">
          {/* Mascote Flux Apontando */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -left-12 -top-20 hidden lg:block w-48"
          >
            <img 
              src="/flux-mascot.jpg" 
              alt="Flux Mascot" 
              className="w-full h-auto rounded-full border-4 border-white shadow-xl"
            />
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-blue-600"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Linha conectora decorativa para desktop */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 hidden md:block -z-0" />
        </div>
      </div>
    </section>
  );
}
