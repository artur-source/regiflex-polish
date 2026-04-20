import { motion } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function RFContact() {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Contato</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-5 tracking-tight">
            Fale conosco
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos à disposição para tirar suas dúvidas ou agendar uma demonstração.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-3xl mx-auto">
          {[
            { icon: Mail, title: 'Email', value: 'regiflex.contato@gmail.com', href: 'mailto:regiflex.contato@gmail.com' },
            { icon: Instagram, title: 'Instagram', value: '@regiflex.app', href: 'https://www.instagram.com/regiflex.app' },
          ].map((info, i) => (
            <motion.div 
              key={info.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 1}
              className="flex-1 p-8 rounded-2xl bg-card border border-border/50 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <info.icon className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">{info.title}</h4>
                <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  {info.value}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
