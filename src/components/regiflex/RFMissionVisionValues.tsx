import { Eye, Handshake, Target } from 'lucide-react';

const mvvItems = [
  { icon: Target, title: 'Missão', description: 'Simplificar o atendimento em clínicas com tecnologia acessível, segura e fácil de operar.' },
  { icon: Eye, title: 'Visão', description: 'Ser referência em soluções digitais para recepções clínicas mais ágeis e humanas.' },
  { icon: Handshake, title: 'Valores', description: 'Eficiência, simplicidade, confiabilidade, inovação e respeito aos dados dos pacientes.' },
];

export default function RFMissionVisionValues() {
  return (
    <section id="missao-visao-valores" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Missão, Visão e Valores
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Princípios que guiam o desenvolvimento do RegiFlex como produto e como projeto de startup.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {mvvItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
