import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function RFCTA() {
  const mailtoLink = "mailto:regiflex.contato@gmail.com?subject=Solicitação%20de%20Demonstração%20—%20RegiFlex&body=Olá%2C%0A%0AGostaria%20de%20solicitar%20uma%20demonstração%20da%20plataforma%20RegiFlex%20para%20conhecer%20melhor%20a%20solução%20de%20gestão%20de%20filas%20para%20clínicas.%0A%0ANome%3A%20%0AClínica%3A%20%0ACidade%3A%20%0A%0AAguardo%20retorno.";

  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>
      <div className="container-narrow mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 tracking-tight">
            Modernize o atendimento da sua clínica
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Descubra como o RegiFlex pode transformar a recepção da sua clínica em um processo rápido, organizado e digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://appregiflex.com.br/pricing"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              Começar Agora
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Fale Conosco
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
