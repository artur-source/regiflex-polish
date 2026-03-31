import { motion } from 'framer-motion';
import { QrCode, Users, ClipboardList, LayoutDashboard, Timer, Monitor, Tablet, Smartphone } from 'lucide-react';
import heroImage from '@/assets/hero-clinic.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const features = [
  { icon: ClipboardList, title: 'Cadastro Digital', desc: 'Rápido e intuitivo' },
  { icon: QrCode, title: 'QR Code', desc: 'Identificação de pacientes' },
  { icon: Timer, title: 'Leitura Rápida', desc: 'Via QR Code pela clínica' },
  { icon: Users, title: 'Gestão de Fila', desc: 'Organização eficiente' },
  { icon: LayoutDashboard, title: 'Painel Admin', desc: 'Controle total' },
];

const platforms = [
  { icon: Monitor, label: 'Desktop' },
  { icon: Tablet, label: 'Tablet' },
  { icon: Smartphone, label: 'Mobile' },
];

export default function RFProduct() {
  return (
    <section id="produto" className="section-padding bg-secondary/50">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Produto</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-5 tracking-tight">
            A Solução <span className="text-gradient-green">RegiFlex</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Plataforma digital que otimiza o cadastro de pacientes e organiza o fluxo de atendimento, reduzindo filas e melhorando a gestão.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Plataforma RegiFlex em uso" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-rf-dark/30 to-transparent" />
            </div>
          </motion.div>

          <div className="space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i + 2}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-card hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-rf-blue/10 flex items-center justify-center shrink-0">
                  <f.icon className="text-rf-blue" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Platforms */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={7}
          className="glass-card p-8 flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Disponível em</p>
          <div className="flex gap-8">
            {platforms.map((p) => (
              <div key={p.label} className="flex items-center gap-2 text-foreground">
                <p.icon size={20} className="text-rf-blue" />
                <span className="text-sm font-medium">{p.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
