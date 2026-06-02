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
    <section id="sobre" className="bg-slate-950 py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Sobre o RegiFlex</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              O RegiFlex é uma startup em desenvolvimento criada para resolver um problema recorrente em clínicas: a falta de organização no início da jornada do paciente.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {blocks.map((block) => (
              <article key={block.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                <block.icon className="h-6 w-6 text-emerald-300" />
                <h3 className="mt-4 font-extrabold">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{block.content}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.05] p-7 shadow-xl shadow-black/20 lg:p-9">
          <h3 className="mb-8 text-2xl font-extrabold">Linha do tempo</h3>
          <div className="grid gap-5 md:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.year} className="rounded-2xl bg-white p-6 text-slate-950 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1">
                <p className="text-3xl font-extrabold text-blue-600">{item.year}</p>
                <h4 className="mt-2 text-lg font-extrabold">{item.label}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
