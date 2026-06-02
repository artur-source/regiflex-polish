import { Code2, Layers3, Megaphone, Search, ShieldCheck, Sparkles, UserRound } from 'lucide-react';

const team = [
  { name: 'Artur Alves Santos', role: 'Gestão e liderança técnica', responsibility: 'Arquitetura do sistema, produto e decisões técnicas.', icon: ShieldCheck },
  { name: 'Guilherme Almeida', role: 'Desenvolvimento e UX/UI', responsibility: 'Interface, experiência do usuário e implementação front-end.', icon: Layers3 },
  { name: 'Nicollas Andrey', role: 'Pesquisa e mercado', responsibility: 'Estratégia, posicionamento e comunicação da startup.', icon: Megaphone },
];

const org = [
  { title: 'Gestão', desc: 'Prioridades do produto, decisões técnicas e visão de evolução.', icon: UserRound },
  { title: 'Desenvolvimento', desc: 'Construção da plataforma, manutenção e qualidade do software.', icon: Code2 },
  { title: 'Pesquisa', desc: 'Levantamento de necessidades do mercado e validação com usuários.', icon: Search },
  { title: 'UX/UI', desc: 'Experiência da recepção, jornada do paciente e consistência visual.', icon: Sparkles },
];

export default function RFTeam() {
  return (
    <section id="equipe" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Equipe e Organograma</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Uma estrutura enxuta, com responsabilidades claras para desenvolver, validar e comunicar o RegiFlex.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                <member.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-slate-950">{member.name}</h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-blue-600">{member.role}</p>
              <p className="mt-4 leading-relaxed text-slate-600">{member.responsibility}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 lg:p-8">
          <h3 className="mb-6 text-2xl font-extrabold text-slate-950">Organograma do projeto</h3>
          <div className="grid gap-4 md:grid-cols-4">
            {org.map((item) => (
              <div key={item.title} className="rounded-2xl bg-slate-50 p-5">
                <item.icon className="h-6 w-6 text-blue-600" />
                <h4 className="mt-4 font-extrabold text-slate-950">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
