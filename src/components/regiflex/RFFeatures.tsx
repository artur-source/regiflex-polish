import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const steps = [
  { num: '01', title: 'Cadastro Digital', desc: 'Paciente realiza o cadastro pela plataforma digital de forma rápida.' },
  { num: '02', title: 'QR Code Gerado', desc: 'O sistema gera automaticamente um QR Code com os dados do paciente.' },
  { num: '03', title: 'Leitura pela Clínica', desc: 'A clínica lê o QR Code e registra o paciente instantaneamente.' },
  { num: '04', title: 'Fila Organizada', desc: 'Paciente é adicionado à fila de atendimento automaticamente.' },
  { num: '05', title: 'Atendimento', desc: 'O profissional de saúde realiza o atendimento com todos os dados.' },
];

export default function RFFeatures() {
  return (
    <section id="funcionalidades" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Como funciona</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-5 tracking-tight">
            Fluxo <span className="text-gradient-blue">simplificado</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Do cadastro ao atendimento, em 5 passos simples.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i + 1}
                className={`lg:flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                  <div className={`p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover-lift inline-block text-left ${i % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                    <span className="text-xs font-bold text-rf-blue tracking-wider">PASSO {step.num}</span>
                    <h3 className="text-lg font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex w-0 items-center justify-center relative">
                  <div className="w-4 h-4 rounded-full bg-rf-blue border-4 border-background shadow-md absolute" />
                </div>

                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
