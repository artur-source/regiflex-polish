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
    <section id="publico-alvo" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Público-alvo</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            RegiFlex atende diferentes modelos de clínicas e consultórios que precisam de organização no primeiro contato com o paciente.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {audienceItems.map((item) => (
            <article key={item.title} className={`rounded-2xl border border-slate-200 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 ${item.featured ? 'bg-slate-950 text-white md:col-span-2 lg:col-span-1' : 'bg-slate-50/70'}`}>
              <item.icon className="h-7 w-7 text-blue-600" />
              <h3 className={`mt-5 text-xl font-extrabold ${item.featured ? 'text-white' : 'text-slate-950'}`}>{item.title}</h3>
              <p className={`mt-2 leading-relaxed ${item.featured ? 'text-slate-300' : 'text-slate-600'}`}>{item.benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
