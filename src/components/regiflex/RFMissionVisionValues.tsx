import { Eye, Handshake, Target } from 'lucide-react';

const mvvItems = [
  { icon: Target, title: 'Missão', description: 'Simplificar o atendimento em clínicas com tecnologia acessível, segura e fácil de operar.' },
  { icon: Eye, title: 'Visão', description: 'Ser referência em soluções digitais para recepções clínicas mais ágeis e humanas.' },
  { icon: Handshake, title: 'Valores', description: 'Eficiência, simplicidade, confiabilidade, inovação e respeito aos dados dos pacientes.' },
];

export default function RFMissionVisionValues() {
  return (
    <section id="missao-visao-valores" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-[720px] text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
            Missão, Visão e Valores
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Princípios que guiam o desenvolvimento do RegiFlex como produto e como projeto de startup.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_1.08fr_1fr]">
          {mvvItems.map((item, index) => (
            <article key={item.title} className={`rounded-xl border border-slate-200 bg-slate-50 p-7 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_30px_rgba(15,23,42,0.06)] ${index === 1 ? 'md:bg-white md:p-8' : ''}`}>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold leading-tight text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
