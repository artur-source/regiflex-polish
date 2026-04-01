import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function RFHero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-rf-green/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-60 -left-40 w-[600px] h-[600px] bg-rf-yellow/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/[0.02] rounded-full" />
      </div>

      <div className="container-narrow mx-auto section-padding relative z-10 pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-rf-green animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Solução inovadora para clínicas
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground mb-6">
              RegiFlex — Tecnologia para{' '}
              <span className="text-rf-yellow">otimizar</span> o atendimento em clínicas.
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Simplifique o cadastro de pacientes e organize o fluxo de
              atendimento com uma plataforma digital moderna e intuitiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo('#contato')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-rf-yellow text-rf-dark font-bold rounded-xl hover:shadow-2xl hover:shadow-rf-yellow/20 hover:scale-[1.02] transition-all duration-300"
              >
                Solicitar demonstração
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#produto')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Play size={16} />
                Saiba mais
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              {[
                { value: '70%', label: 'Redução no tempo' },
                { value: '3x', label: 'Mais eficiência' },
                { value: '100%', label: 'Digital' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-rf-yellow">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-rf-green/20 via-transparent to-rf-yellow/20 rounded-3xl blur-2xl" />
              <img
                src="/flux-mascot.jpg"
                alt="Mascote Flux - RegiFlex"
                className="relative w-72 sm:w-80 lg:w-96 rounded-3xl shadow-2xl animate-float"
              />
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 glass-card px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rf-green/10 flex items-center justify-center text-rf-green font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Cadastro em</div>
                  <div className="text-sm font-bold text-foreground">menos de 2 min</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
