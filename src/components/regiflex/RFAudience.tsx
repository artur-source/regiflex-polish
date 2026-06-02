import { Activity, Brain, Dumbbell, Hospital, SmilePlus, Stethoscope } from 'lucide-react';

const audienceItems = [
  { icon: Stethoscope, title: 'Clínicas Médicas', benefit: 'Organize alto volume de pacientes sem sobrecarregar a recepção.' },
  { icon: SmilePlus, title: 'Odontologia', benefit: 'Reduza atrasos entre avaliação, consulta e procedimentos.' },
  { icon: Brain, title: 'Psicologia', benefit: 'Mantenha uma experiência de chegada discreta, simples e organizada.' },
  { icon: Dumbbell, title: 'Fisioterapia', benefit: 'Controle sessões recorrentes e fluxo de pacientes por horário.' },
  { icon: Activity, title: 'Estética', benefit: 'Ofereça uma recepção mais moderna para tratamentos e avaliações.' },
  { icon: Hospital, title: 'Consultórios Especializados', benefit: 'Padronize o atendimento mesmo com equipes pequenas.' },
];

export default function RFAudience() {
  return (
    <section id="publico-alvo" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Público-alvo</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            RegiFlex atende diferentes modelos de clínicas e consultórios que precisam de organização no primeiro contato com o paciente.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {audienceItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
              <item.icon className="h-7 w-7 text-blue-600" />
              <h3 className="mt-5 text-xl font-extrabold text-slate-950">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{item.benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
