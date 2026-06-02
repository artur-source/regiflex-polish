import { motion } from 'framer-motion';
import { CheckCircle2, Clock3, QrCode, UsersRound } from 'lucide-react';

const queueItems = [
  { name: 'Sabrina Malu Cristiane Lima', status: 'Aguardando', time: '21:21', tone: 'bg-amber-50 text-amber-700' },
  { name: 'Tomás Thales Nunes', status: 'Aguardando', time: '21:22', tone: 'bg-amber-50 text-amber-700' },
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
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-blue-900/40 to-transparent" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.04] mb-6">
              Recepções lotadas não são normais.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              Organize o fluxo de pacientes com check-in digital, fila em tempo real e acompanhamento inteligente para clínicas e consultórios.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8 max-w-xl">
              {[
                ['QR Code', QrCode],
                ['Fila ao vivo', UsersRound],
                ['Menos espera', Clock3],
              ].map(([label, Icon]) => (
                <div key={label as string} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center">
                  <Icon className="mx-auto mb-2 h-5 w-5 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{label as string}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.location.href = 'mailto:regiflex.contato@gmail.com?subject=Solicitação%20de%20Demonstração%20-%20RegiFlex'}
                className="px-8 py-4 bg-[#00A651] text-white rounded-full text-lg font-bold hover:bg-[#008e45] transition-all shadow-lg hover:shadow-green-500/20 active:scale-95"
              >
                Solicitar Demonstração
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
            className="relative min-h-[560px]"
          >
            <div className="absolute left-0 top-6 w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl shadow-blue-950/40">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Dashboard Operacional</p>
                  <h2 className="text-lg font-extrabold text-slate-950">Recepção RegiFlex</h2>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Expediente ativo</div>
              </div>
              <div className="grid gap-4 p-5 md:grid-cols-[1fr_0.8fr]">
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      ['18', 'pacientes hoje'],
                      ['02', 'aguardando'],
                      ['09 min', 'tempo médio'],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-extrabold text-slate-950">{value}</p>
                        <p className="text-xs font-semibold text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-bold text-slate-950">Gerenciamento da Fila</h3>
                      <span className="text-xs font-bold text-blue-600">Atualiza a cada 4s</span>
                    </div>
                    <div className="space-y-3">
                      {queueItems.map((item, index) => (
                        <div key={item.name} className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                          <div className="flex items-center gap-3">
                            <div className="grid h-9 w-9 place-items-center rounded-full bg-amber-100 text-sm font-extrabold text-amber-700">{index + 1}</div>
                            <div>
                              <p className="max-w-44 truncate font-bold text-slate-900">{item.name}</p>
                              <span className={`mt-1 inline-block rounded-full px-2 py-1 text-[11px] font-bold ${item.tone}`}>{item.status}</span>
                            </div>
                          </div>
                          <span className="text-sm font-bold text-slate-500">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl bg-slate-950 p-5 text-white">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950">
                      <QrCode className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Check-in do paciente</p>
                      <p className="font-bold">Escaneie e confirme</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-4">
                    <div className="grid aspect-square place-items-center rounded-xl bg-slate-100 text-slate-950">
                      <QrCode className="h-24 w-24" />
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {['Cadastro validado', 'Senha gerada', 'Fila sincronizada'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-8 z-20 hidden w-72 rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl lg:block">
              <div className="mb-4 text-center">
                <h3 className="font-extrabold text-slate-950">Clínica Alfa</h3>
                <p className="text-xs font-semibold text-slate-500">Odontologia</p>
                <span className="mt-2 inline-block rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">Atendimento em andamento</span>
              </div>
              <div className="space-y-3">
                {['Nome completo', 'Data de nascimento', 'Telefone', 'Email', 'Motivo da consulta'].map((field) => (
                  <div key={field} className="rounded-xl border border-slate-200 px-3 py-2">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">{field}</p>
                    <p className="mt-1 text-xs text-slate-400">{field === 'Nome completo' ? 'João Silva' : field === 'Motivo da consulta' ? 'Consulta de rotina' : 'Preenchimento do paciente'}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-blue-600 px-4 py-3 text-center text-xs font-extrabold text-white">Entrar na Fila</div>
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 right-2 z-30 hidden w-32 rounded-3xl border border-white/20 bg-white p-3 shadow-xl md:block"
            >
              <img src="/flux-mascot.jpg" alt="Flux, apoio visual do RegiFlex" className="rounded-2xl" />
              <p className="mt-2 text-center text-xs font-extrabold text-slate-900">Flux acompanha o fluxo</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
