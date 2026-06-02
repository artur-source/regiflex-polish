import { ClipboardList, ClockAlert, FileText, HelpCircle, ListX, UsersRound } from 'lucide-react';

const pains = [
  { icon: UsersRound, title: 'Recepção sobrecarregada', desc: 'Equipe dividida entre cadastro, dúvidas, chamadas e organização da fila.' },
  { icon: ListX, title: 'Filas desorganizadas', desc: 'Pacientes sem previsibilidade e recepção sem visão clara do próximo atendimento.' },
  { icon: FileText, title: 'Cadastro manual repetitivo', desc: 'Dados coletados em papel, planilhas ou conversas soltas geram retrabalho.' },
  { icon: HelpCircle, title: 'Pacientes sem informação', desc: 'A espera parece maior quando ninguém sabe status, ordem ou próxima etapa.' },
  { icon: ClockAlert, title: 'Tempo operacional perdido', desc: 'Minutos da equipe somem em tarefas que poderiam estar automatizadas.' },
  { icon: ClipboardList, title: 'Falta de visibilidade da fila', desc: 'Gestores não acompanham gargalos de atendimento enquanto eles acontecem.' },
];

export default function RFProblem() {
  return (
    <section id="problema" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Sua clínica enfrenta algum destes problemas?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            O RegiFlex foi pensado para transformar a rotina da recepção em um fluxo previsível, digital e fácil de acompanhar.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain) => (
            <div key={pain.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg">
              <pain.icon className="mb-5 h-7 w-7 text-blue-600" />
              <h3 className="text-lg font-extrabold text-slate-950">{pain.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
