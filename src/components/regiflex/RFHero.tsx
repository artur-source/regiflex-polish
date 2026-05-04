import { motion } from 'framer-motion';

export default function RFHero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Sua clínica com <span className="text-[#00A651]">check-in digital</span> imediato.
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
              Elimine filas e organize sua recepção automaticamente com o RegiFlex.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.location.href = 'https://appregiflex.com.br/pricing'}
                className="px-8 py-4 bg-[#00A651] text-white rounded-full text-lg font-bold hover:bg-[#008e45] transition-all shadow-lg hover:shadow-green-500/20 active:scale-95"
              >
                Começar agora
              </button>
              <button
                onClick={() => scrollTo('#como-funciona')}
                className="px-8 py-4 bg-white/10 text-white rounded-full text-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Ver como funciona
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-b from-blue-500/10 to-transparent p-4 rounded-[3rem] border border-white/10 backdrop-blur-sm">
              <img
                src="/flux-mascot.jpg"
                alt="Flux Mascot"
                className="w-full h-auto rounded-[2.5rem] shadow-2xl"
              />
            </div>
            
            {/* Elemento flutuante indicando ação */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                <span className="text-slate-900 font-bold text-sm">Fluxo Ativo</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
