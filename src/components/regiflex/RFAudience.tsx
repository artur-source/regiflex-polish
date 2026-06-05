import { Activity, Brain, Dumbbell, Hospital, SmilePlus, Stethoscope } from 'lucide-react';

const audienceItems = [
  { icon: Stethoscope, title: 'Clínicas Médicas', benefit: 'Organize alto volume de pacientes sem sobrecarregar a recepção.', featured: true },
  { icon: SmilePlus, title: 'Odontologia', benefit: 'Reduza atrasos entre avaliação, consulta e procedimentos.' },
  { icon: Brain, title: 'Psicologia', benefit: 'Mantenha uma experiência de chegada discreta, simples e organizada.' },
  { icon: Dumbbell, title: 'Fisioterapia', benefit: 'Controle sessões recorrentes e fluxo de pacientes por horário.' },
  { icon: Activity, title: 'Estética', benefit: 'Ofereça uma recepção mais moderna para tratamentos e avaliações.' },
  { icon: Hospital, title: 'Consultórios Especializados', benefit: 'Padronize o atendimento mesmo com equipes pequenas.' },
];

export default function RFAudience() {
  return (
    <section id="publico-alvo" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Público-alvo</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            RegiFlex atende diferentes modelos de clínicas e consultórios que precisam de organização no primeiro contato com o paciente.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {audienceItems.map((item, index) => (
            <article key={item.title} className={`rounded-xl border border-slate-200 p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_30px_rgba(15,23,42,0.06)] ${item.featured ? 'bg-slate-950 text-white md:col-span-2 lg:col-span-1 lg:p-8' : index === 4 ? 'bg-white lg:translate-y-5' : 'bg-slate-50/70'}`}>
              <item.icon className="h-7 w-7 text-blue-600" />
              <h3 className={`mt-5 text-xl font-extrabold leading-tight ${item.featured ? 'text-white' : 'text-slate-950'}`}>{item.title}</h3>
              <p className={`mt-2 leading-7 ${item.featured ? 'text-slate-300' : 'text-slate-600'}`}>{item.benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
