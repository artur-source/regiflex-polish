import { motion } from 'framer-motion';
import { QrCode, UserPlus, ListChecks } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Clínica cria conta',
    description: 'Comece em minutos. Cadastre sua clínica e configure seu perfil de atendimento de forma rápida e intuitiva.',
  },
  {
    icon: QrCode,
    title: 'Sistema gera QR Code',
    description: 'Seu paciente escaneia um QR Code único na recepção e entra automaticamente na fila de atendimento.',
  },
  {
    icon: ListChecks,
    title: 'Paciente entra automaticamente na fila',
    description: 'Gerencie a fila de forma eficiente, visualize o status dos pacientes e otimize o tempo de espera.',
  },
];

export default function RFExplanatory() {
  return (
    <section id="como-funciona" className="section-padding bg-rf-gray-light py-20 lg:py-32">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6"
        >
          Um fluxo simples e eficiente em três etapas.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          Veja como o RegiFlex transforma a gestão de atendimento da sua clínica em um processo ágil e moderno.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-8 flex flex-col items-center text-center relative"
            >
              <div className="relative mb-6">
                <div className="bg-rf-blue-light p-4 rounded-full inline-flex items-center justify-center shadow-lg">
                  <step.icon size={36} className="text-rf-blue" />
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 right-0 w-full h-0.5 bg-border transform translate-x-full -translate-y-1/2 hidden md:block"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
          {/* Flux mascot integration */}
          <motion.img
            src="/flux-mascot.jpg"
            alt="Mascote Flux interagindo com o fluxo de trabalho"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
            className="absolute hidden lg:block w-24 h-auto -bottom-16 left-1/2 transform -translate-x-1/2 rotate-6"
            style={{ zIndex: 2 }}
          />
        </div>
      </div>
    </section>
  );
}
