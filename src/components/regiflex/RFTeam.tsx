import { motion } from 'framer-motion';
import { User, Code, Megaphone, ShieldCheck, Layout, TrendingUp } from 'lucide-react';

const team = [
  {
    name: "Artur Alves",
    role: "Líder técnico",
    icon: <User className="w-10 h-10 text-blue-600" />
  },
  {
    name: "Guilherme Almeida",
    role: "Front-End, UX e UI",
    icon: <Layout className="w-10 h-10 text-blue-600" />
  },
  {
    name: "Nicollas Andrey",
    role: "Marketing",
    icon: <Megaphone className="w-10 h-10 text-blue-600" />
  }
];

const structure = [
  {
    title: "Liderança Técnica",
    name: "Artur Alves Santos",
    desc: "Arquitetura e desenvolvimento do sistema",
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Desenvolvimento do Produto",
    name: "Guilherme Almeida",
    desc: "Experiência do usuário e interfaces",
    icon: <Code className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Estratégia e Mercado",
    name: "Nicollas Andrey",
    desc: "Negócio e posicionamento",
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />
  }
];

export default function RFTeam() {
  return (
    <section id="equipe" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Equipe Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Organograma Section */}
        <div className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">Estrutura do projeto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {structure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-6 bg-white rounded-2xl border-l-4 border-blue-600 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                </div>
                <p className="text-slate-900 font-bold text-lg mb-1">{item.name}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
