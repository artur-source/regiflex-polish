import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function RFHero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative gradient-hero min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-60 -left-40 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow mx-auto section-padding relative z-10 pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground mb-6">
              RegiFlex — Cadastro inteligente e gestão de atendimento para clínicas.
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Reduza filas, organize o atendimento e modernize a recepção da sua clínica com uma plataforma digital simples e eficiente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://appregiflex.com.br/register"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary-foreground text-primary font-bold rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                Criar Conta
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => scrollTo('#como-funciona')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Play size={16} />
                Saiba mais
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-foreground/10 rounded-3xl blur-2xl" />
              <img
                src="/logo-regiflex.png"
                alt="RegiFlex Logo"
                className="relative w-48 sm:w-56 lg:w-64 animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
