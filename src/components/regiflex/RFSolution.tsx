import { ArrowDown, CheckCircle2, MonitorCheck, Stethoscope, UserRound } from 'lucide-react';

const flow = [
  { label: 'Paciente', icon: UserRound },
  { label: 'Recepção', icon: MonitorCheck },
  { label: 'Profissional', icon: Stethoscope },
  { label: 'Atendimento concluído', icon: CheckCircle2 },
];

export default function RFSolution() {
  return (
    <section id="solucao" className="bg-slate-950 py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Conheça o RegiFlex
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            O RegiFlex é uma plataforma web para clínicas, consultórios e recepções que precisam digitalizar o cadastro de pacientes, controlar filas e acompanhar o atendimento em tempo real.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Ele substitui processos manuais por um fluxo simples: o paciente faz check-in via QR Code, a recepção acompanha o painel e a equipe chama cada atendimento com mais organização.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-blue-950/30">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950">
            <div className="grid gap-4 md:grid-cols-4">
              {flow.map((item, index) => (
                <div key={item.label} className="relative">
                  <div className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="mt-4 text-sm font-extrabold">{item.label}</span>
                  </div>
                  {index < flow.length - 1 && (
                    <ArrowDown className="mx-auto my-2 h-5 w-5 text-blue-500 md:absolute md:-right-3 md:top-1/2 md:my-0 md:-translate-y-1/2 md:-rotate-90" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-emerald-50 p-5">
              <p className="font-bold text-emerald-800">
                Resultado: menos improviso na recepção, mais clareza para o paciente e mais controle para a gestão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
