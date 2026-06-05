import { CheckCircle2, Lightbulb, Rocket, Target } from 'lucide-react';

const blocks = [
  { icon: Target, title: 'Problema', content: 'Recepções clínicas ainda dependem de processos manuais, filas pouco visíveis e comunicação fragmentada.' },
  { icon: CheckCircle2, title: 'Solução', content: 'O RegiFlex digitaliza check-in, cadastro e acompanhamento da fila em uma plataforma web simples.' },
  { icon: Rocket, title: 'Objetivo', content: 'Aumentar eficiência operacional e entregar uma experiência de chegada mais moderna para pacientes.' },
];

const timeline = [
  { year: '2024', label: 'Ideia', desc: 'Mapeamento das dores de recepção e primeiras validações do conceito.' },
  { year: '2025', label: 'Desenvolvimento', desc: 'Construção da plataforma, identidade visual e fluxo digital de atendimento.' },
  { year: '2026', label: 'Evolução', desc: 'Aprimoramento do produto para uso em clínicas e consultórios reais.' },
];

export default function RFAbout() {
  return (
    <section id="sobre" className="bg-slate-950 py-28 text-white lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/12 text-emerald-300">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[44px]">Sobre o RegiFlex</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              O RegiFlex é uma startup em desenvolvimento criada para resolver um problema recorrente em clínicas: a falta de organização no início da jornada do paciente.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:pt-3">
            {blocks.map((block, index) => (
              <article key={block.title} className={`rounded-xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07] ${index === 1 ? 'md:-translate-y-3 md:bg-white/[0.065]' : ''}`}>
                <block.icon className="h-6 w-6 text-emerald-300" />
                <h3 className="mt-4 font-extrabold leading-tight">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{block.content}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.20)] lg:p-8">
          <h3 className="mb-7 text-2xl font-extrabold leading-tight">Linha do tempo</h3>
          <div className="grid gap-4 md:grid-cols-[0.95fr_1.1fr_0.95fr]">
            {timeline.map((item) => (
              <div key={item.year} className="rounded-xl bg-white p-6 text-slate-950 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-0.5">
                <p className="text-3xl font-extrabold text-blue-600">{item.year}</p>
                <h4 className="mt-2 text-lg font-extrabold leading-tight">{item.label}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
