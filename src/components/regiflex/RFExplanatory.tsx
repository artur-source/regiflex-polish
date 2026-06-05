import { CheckCircle2, ClipboardCheck, Monitor, QrCode, UserCheck, Volume2 } from 'lucide-react';

const steps = [
  { icon: QrCode, title: 'Paciente escaneia o QR Code', desc: 'O acesso ao check-in fica disponível na recepção, balcão ou comunicação da clínica.' },
  { icon: ClipboardCheck, title: 'Preenche o cadastro', desc: 'Dados essenciais são coletados de forma digital, reduzindo papel e retrabalho.' },
  { icon: UserCheck, title: 'Entra automaticamente na fila', desc: 'O sistema organiza a chegada e mantém a recepção atualizada.' },
  { icon: Monitor, title: 'Recepção acompanha em tempo real', desc: 'O painel mostra status, ordem e movimentação dos pacientes.' },
  { icon: Volume2, title: 'Paciente é chamado', desc: 'A equipe direciona cada pessoa com mais clareza e menos interrupções.' },
  { icon: CheckCircle2, title: 'Atendimento finalizado', desc: 'O fluxo fica registrado para acompanhamento e melhoria operacional.' },
];

export default function RFExplanatory() {
  return (
    <section id="como-funciona" className="bg-slate-50 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">Como funciona</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Uma timeline simples para o paciente e operacionalmente clara para quem gerencia a recepção.
          </p>
        </div>

        <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-6">
          {steps.map((step, index) => (
            <div key={step.title} className={`group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_14px_30px_rgba(15,23,42,0.06)] ${index === 0 || index === 3 ? 'lg:p-8' : ''}`}>
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-extrabold text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-extrabold leading-snug text-slate-950">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
