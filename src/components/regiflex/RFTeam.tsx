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
    <section id="equipe" className="bg-slate-50 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">Equipe e Organograma</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Uma estrutura enxuta, com responsabilidades claras para desenvolver, validar e comunicar o RegiFlex.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:items-start">
          {team.map((member, index) => (
            <article key={member.name} className={`rounded-xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_14px_30px_rgba(15,23,42,0.06)] ${index === 0 ? 'lg:p-8' : index === 1 ? 'lg:mt-8' : 'lg:mt-3'}`}>
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-blue-50 text-blue-600">
                <member.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold leading-tight text-slate-950">{member.name}</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.08em] text-blue-600">{member.role}</p>
              <p className="mt-4 leading-7 text-slate-600">{member.responsibility}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)] lg:p-8">
          <h3 className="mb-7 text-2xl font-extrabold leading-tight text-slate-950">Organograma do projeto</h3>
          <div className="grid gap-3 md:grid-cols-4">
            {org.map((item) => (
              <div key={item.title} className="rounded-xl bg-slate-50 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50">
                <item.icon className="h-6 w-6 text-blue-600" />
                <h4 className="mt-4 font-extrabold leading-tight text-slate-950">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
