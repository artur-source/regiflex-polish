import { Database, Gauge, LockKeyhole, MousePointer2, QrCode, RefreshCcw, ShieldCheck, Workflow } from 'lucide-react';

const differentials = [
  { icon: QrCode, title: 'Check-in via QR Code', desc: 'Entrada digital simples para pacientes, sem depender de papel ou filas no balcão.' },
  { icon: Gauge, title: 'Fila em tempo real', desc: 'Status de atendimento visível para recepção, equipe e gestão.' },
  { icon: MousePointer2, title: 'Interface intuitiva', desc: 'Fluxo claro para equipes que não querem sistemas complexos no dia a dia.' },
  { icon: Workflow, title: 'Fluxo simplificado', desc: 'Da chegada ao atendimento finalizado com menos etapas manuais.' },
  { icon: RefreshCcw, title: 'Redução de retrabalho', desc: 'Menos repetição de cadastro, chamadas e conferências operacionais.' },
  { icon: Database, title: 'Gestão centralizada', desc: 'Informações de pacientes e filas em uma única visão operacional.' },
  { icon: LockKeyhole, title: 'Preparado para LGPD', desc: 'Controle de acesso, autenticação segura e armazenamento estruturado para proteção dos dados dos pacientes.' },
];

export default function RFDifferentials() {
  return (
    <section id="diferenciais" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Diferenciais</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            O foco do RegiFlex é transformar o atendimento em um processo mais visível, seguro e fácil de operar.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {differentials.map((diff, index) => (
            <article key={diff.title} className={`rounded-2xl border p-6 shadow-sm ${index === 6 ? 'border-emerald-200 bg-emerald-50 lg:col-span-2' : 'border-slate-200 bg-white'}`}>
              <diff.icon className={`h-7 w-7 ${index === 6 ? 'text-emerald-700' : 'text-blue-600'}`} />
              <h3 className="mt-5 text-lg font-extrabold text-slate-950">{diff.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{diff.desc}</p>
            </article>
          ))}
        </div>

        <div id="flux" className="mt-12 grid gap-8 rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm lg:grid-cols-[0.65fr_1fr] lg:p-8">
          <div>
            <img src="/flux-mascot.jpg" alt="Flux, mascote do RegiFlex" className="mx-auto max-w-xs rounded-3xl border border-slate-200 shadow-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              <ShieldCheck className="h-4 w-4" />
              Flux
            </div>
            <h3 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">O fluxo visível do atendimento</h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              O Flux continua como identidade visual do projeto, mas agora atua como apoio ao produto: ele representa os estados do atendimento e ajuda pacientes a entenderem o fluxo da clínica sem depender de explicações longas.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['Aguardando', 'Chamado', 'Em atendimento'].map((state) => (
                <div key={state} className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">{state}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
