import { motion } from 'framer-motion';

export default function RFDemo() {
  return (
    <section id="demonstracao" className="section-padding bg-rf-blue-light py-20 lg:py-32">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6"
        >
          Visualize o fluxo de atendimento em tempo real.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          Acompanhe a jornada do paciente, gerencie filas e otimize cada etapa do atendimento com nosso dashboard intuitivo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="relative w-full max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden border-4 border-white/20"
        >
          {/* Placeholder for dashboard mockup/simulation */}
          <img
            src="/placeholder.svg" // Replace with actual dashboard mockup image
            alt="Mockup do Dashboard RegiFlex"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-8">
            <p className="text-white text-xl font-semibold">Simulação de fila em tempo real</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
