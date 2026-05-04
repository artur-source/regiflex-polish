import { motion } from 'framer-motion';
import { ClipboardList, Users, LayoutDashboard, MousePointerClick, Globe } from 'lucide-react';

const features = [
  { icon: ClipboardList, title: 'Cadastro digital de pacientes', description: 'Agilize o processo de entrada com o cadastro de pacientes de forma 100% digital.' },
  { icon: Users, title: 'Organização da fila', description: 'Gerencie a fila de atendimento de forma eficiente e intuitiva, evitando atrasos.' },
  { icon: LayoutDashboard, title: 'Painel administrativo', description: 'Tenha controle total sobre os atendimentos e dados da clínica em um único painel.' },
  { icon: MousePointerClick, title: 'Interface intuitiva', description: 'Design pensado para facilitar o uso por recepcionistas e administradores.' },
  { icon: Globe, title: 'Acesso via navegador', description: 'Acesse o sistema de qualquer lugar, a qualquer hora, diretamente pelo seu navegador.' },
];

export default function RFFeatures() {
  return (
    <section id="funcionalidades" className="section-padding bg-background py-20 lg:py-32">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6"
        >
          Funcionalidades que simplificam seu dia a dia.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          Descubra as ferramentas que o RegiFlex oferece para otimizar a gestão da sua clínica.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-8 flex flex-col items-center text-center hover-lift"
            >
              <div className="bg-rf-blue-light p-4 rounded-full inline-flex items-center justify-center mb-6 shadow-lg">
                <feature.icon size={36} className="text-rf-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
