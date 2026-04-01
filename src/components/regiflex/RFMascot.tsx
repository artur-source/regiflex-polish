import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RFMascot() {
  return (
    <section id="mascote" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="flex justify-center"
          >
            <img
              src="/flux-mascot.jpg"
              alt="Mascote Flux - RegiFlex"
              className="w-64 sm:w-72 lg:w-80 rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Mascote</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-6 tracking-tight">
              Conheça o <span className="text-gradient-blue">Flux</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Flux é o mascote oficial do RegiFlex. Ele representa o fluxo organizado de atendimento que a plataforma proporciona às clínicas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Seu nome deriva da palavra "fluxo", simbolizando eficiência, movimento contínuo e organização no processo de cadastro e atendimento de pacientes.
            </p>
            <p className="text-foreground text-lg font-semibold">
              O Flux representa a missão do RegiFlex: transformar um processo burocrático em uma experiência simples e rápida.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
