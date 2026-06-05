import { ClipboardList, ClockAlert, FileText, HelpCircle, ListX, UsersRound } from 'lucide-react';

const pains = [
  { icon: UsersRound, title: 'Recepção sobrecarregada', desc: 'Equipe dividida entre cadastro, dúvidas, chamadas e organização da fila.', featured: true },
  { icon: ListX, title: 'Filas desorganizadas', desc: 'Pacientes sem previsibilidade e recepção sem visão clara do próximo atendimento.' },
  { icon: FileText, title: 'Cadastro manual repetitivo', desc: 'Dados coletados em papel, planilhas ou conversas soltas geram retrabalho.' },
  { icon: HelpCircle, title: 'Pacientes sem informação', desc: 'A espera parece maior quando ninguém sabe status, ordem ou próxima etapa.' },
  { icon: ClockAlert, title: 'Tempo operacional perdido', desc: 'Minutos da equipe somem em tarefas que poderiam estar automatizadas.' },
  { icon: ClipboardList, title: 'Falta de visibilidade da fila', desc: 'Gestores não acompanham gargalos de atendimento enquanto eles acontecem.', wide: true },
];

export default function RFProblem() {
  return (
    <section id="problema" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
            Sua clínica enfrenta algum destes problemas?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            O RegiFlex foi pensado para transformar a rotina da recepção em um fluxo previsível, digital e fácil de acompanhar.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {pains.map((pain) => (
            <div key={pain.title} className={`rounded-xl border p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_30px_rgba(15,23,42,0.06)] ${pain.featured ? 'border-blue-200 bg-blue-50 md:col-span-2 lg:col-span-1 lg:row-span-2 lg:p-8' : pain.wide ? 'border-slate-200 bg-white lg:col-span-2 lg:p-8' : 'border-slate-200 bg-slate-50/70'}`}>
              <pain.icon className={`${pain.featured ? 'mb-7 h-8 w-8' : 'mb-5 h-7 w-7'} text-blue-600`} />
              <h3 className={`${pain.featured ? 'text-2xl leading-tight' : 'text-lg leading-snug'} font-extrabold text-slate-950`}>{pain.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
