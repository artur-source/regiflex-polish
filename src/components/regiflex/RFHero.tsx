import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function RFHero() {
  useEffect(() => {
    // Preload mascot image for smoother animation
    const img = new Image();
    img.src = '/flux-mascot.jpg';
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-rf-blue to-rf-blue-dark text-white py-20 lg:py-32 min-h-screen flex items-center">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
          >
            RegiFlex — Cadastro inteligente e gestão de atendimento para clínicas.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8"
          >
            Reduza filas, organize o atendimento e modernize a recepção da sua clínica com uma plataforma digital simples e eficiente.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://appregiflex.com.br/pricing"
              className="px-8 py-3 bg-rf-accent text-white rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Começar Agora
            </a>
            <button
              onClick={() => document.querySelector("#como-funciona")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 border border-white/30 text-white rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Saiba mais
            </button>
          </motion.div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
          <motion.img
            src="/flux-mascot.jpg"
            alt="Mascote Flux - Raposa tecnológica"
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
            className="w-full max-w-md lg:max-w-lg rounded-lg shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
          />
          {/* Optional: Add a subtle pulse animation to the mascot */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-3/4 h-3/4 bg-white/10 rounded-full animate-pulse-light" style={{ filter: 'blur(30px)' }}></div>
          </motion.div>
        </div>
      </div>
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 transform skew-x-12 -translate-x-1/4"></div>
    </section>
  );
}
