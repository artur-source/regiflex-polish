import { motion } from 'framer-motion';
import { Clock3, QrCode, UsersRound } from 'lucide-react';

const checkInFields = [
  { label: 'Nome completo', value: 'João Silva' },
  { label: 'Data de nascimento', value: 'Preenchimento do paciente' },
  { label: 'Telefone', value: 'Preenchimento do paciente' },
  { label: 'Email', value: 'Preenchimento do paciente' },
  { label: 'Motivo da consulta', value: 'Consulta de rotina' },
];

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
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#07111f] pb-20 pt-28 lg:pb-24 lg:pt-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute left-0 top-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-[64px]">
              Recepções lotadas não são normais.
            </h1>
            <p className="mb-9 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Organize o fluxo de pacientes com check-in digital, fila em tempo real e acompanhamento inteligente para clínicas e consultórios.
            </p>
            <div className="mb-9 grid max-w-xl grid-cols-3 gap-4">
              {[
                ['QR Code', QrCode],
                ['Fila ao vivo', UsersRound],
                ['Menos espera', Clock3],
              ].map(([label, Icon]) => (
                <div key={label as string} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07]">
                  <Icon className="mx-auto mb-2 h-5 w-5 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{label as string}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.location.href = 'mailto:regiflex.contato@gmail.com?subject=Solicitação%20de%20Demonstração%20-%20RegiFlex'}
                className="rounded-full bg-[#00A651] px-8 py-4 text-lg font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#008e45] focus:outline-none focus:ring-4 focus:ring-emerald-400/30 active:scale-95"
              >
                Solicitar Demonstração
              </button>
              <button
                onClick={() => scrollTo('#como-funciona')}
                className="rounded-full bg-white/10 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.16] focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Ver como funciona
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-w-0 lg:translate-y-8"
          >
            <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:mr-10">
              <div className="mb-7 text-center">
                <h3 className="text-2xl font-extrabold text-slate-950">Clínica Alfa</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">Odontologia</p>
                <span className="mt-4 inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-700">
                  Atendimento em andamento
                </span>
              </div>

              <div className="space-y-4">
                {checkInFields.map((field) => (
                  <div key={field.label} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-600">{field.label}</p>
                    <p className="mt-2 text-sm font-medium text-slate-500">{field.value}</p>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-4 text-sm font-extrabold text-white transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Entrar na Fila
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
