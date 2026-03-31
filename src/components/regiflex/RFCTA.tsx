import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function RFCTA() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-rf-green/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-rf-yellow/10 rounded-full blur-3xl" />
      </div>
      <div className="container-narrow mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 tracking-tight">
            Pronto para modernizar{' '}
            <span className="text-rf-yellow">sua clínica?</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Solicite uma demonstração gratuita e descubra como o RegiFlex pode transformar seu atendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo('#contato')}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-rf-yellow text-rf-dark font-bold rounded-xl hover:shadow-2xl hover:shadow-rf-yellow/20 hover:scale-[1.02] transition-all duration-300"
            >
              Solicitar demonstração
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#contato')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Entrar em contato
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
