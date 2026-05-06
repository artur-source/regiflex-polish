import { motion } from 'framer-motion';
import { useState } from 'react';

type FluxState = 'waiting' | 'calling' | 'attending';

const fluxStates = [
  {
    id: 'waiting' as FluxState,
    label: 'Aguardando',
    description: 'Flux em estado neutro — fila organizada',
    color: 'from-blue-400 to-blue-600',
    scale: 1,
  },
  {
    id: 'calling' as FluxState,
    label: 'Chamado',
    description: 'Flux em transição — paciente sendo direcionado',
    color: 'from-cyan-400 to-blue-500',
    scale: 1.05,
  },
  {
    id: 'attending' as FluxState,
    label: 'Em atendimento',
    description: 'Flux ativo — fluxo em execução',
    color: 'from-emerald-400 to-cyan-500',
    scale: 1.1,
  },
];

export default function RFFluxSection() {
  const [activeState, setActiveState] = useState<FluxState>('waiting');

  const currentState = fluxStates.find(s => s.id === activeState);

  return (
    <section id="flux" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título e definição conceitual */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Flux — o fluxo visível do atendimento
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              O Flux representa o estado do atendimento em tempo real. Ele não é um personagem decorativo. Ele traduz o fluxo da clínica em algo visual e compreensível.
            </p>
          </motion.div>
        </div>

        {/* Bloco principal: Imagem + Texto */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Imagem do Flux - Limpa e isolada */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Fundo limpo com gradiente sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl blur-2xl opacity-40" />
              
              {/* Container do Flux */}
              <motion.div
                animate={{
                  scale: currentState?.scale || 1,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img
                  src="/flux-mascot.jpg"
                  alt="Flux - Mascote do RegiFlex"
                  className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white"
                />
              </motion.div>

              {/* Indicador de estado */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 right-4 z-20"
              >
                <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${currentState?.color} text-white text-sm font-bold shadow-lg`}>
                  {currentState?.label}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Texto estruturado em 3 camadas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Camada 1: Definição */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Definição</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                O Flux representa o estado do atendimento em tempo real.
              </p>
            </div>

            {/* Camada 2: Função */}
            <div className="space-y-3 pt-6 border-t border-slate-200">
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Função</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Ele não é um personagem decorativo.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Ele traduz o fluxo da clínica em algo visual e compreensível.
              </p>
            </div>

            {/* Camada 3: Consequência */}
            <div className="space-y-3 pt-6 border-t border-slate-200">
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Consequência</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Quando o sistema está organizado, o Flux é estável.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Quando há espera, ele evidencia o fluxo em andamento.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bloco de comportamento: Estados interativos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Estados do Flux
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {fluxStates.map((state, index) => (
              <motion.button
                key={state.id}
                onClick={() => setActiveState(state.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left group ${
                  activeState === state.id
                    ? `border-blue-600 bg-blue-50 shadow-lg`
                    : `border-slate-200 bg-white hover:border-blue-300 hover:shadow-md`
                }`}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 bg-gradient-to-r ${state.color}`}>
                  {state.label}
                </div>
                <p className="text-slate-900 font-semibold mb-2">
                  {state.label}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {state.description}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Integração com produto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 md:p-12 border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Integração com o produto
          </h3>
          
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">O mesmo fluxo que a recepção vê no painel,</span>
              <br />
              <span className="font-semibold text-slate-900">o paciente entende de forma imediata.</span>
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                  📊
                </div>
                <h4 className="font-semibold text-slate-900">Dashboard</h4>
                <p className="text-sm text-slate-600">Recepção monitora o fluxo em tempo real</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                  📺
                </div>
                <h4 className="font-semibold text-slate-900">TV de Espera</h4>
                <p className="text-sm text-slate-600">Pacientes veem o Flux em ação</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                  👥
                </div>
                <h4 className="font-semibold text-slate-900">Experiência</h4>
                <p className="text-sm text-slate-600">Compreensão visual do estado do atendimento</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Função estratégica */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-slate-200"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Por que o Flux importa
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">Diferenciação</h4>
              <p className="text-slate-600 leading-relaxed">
                Sistema deixa de ser só "fila digital". Vira uma experiência visual única.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">Memorização</h4>
              <p className="text-slate-600 leading-relaxed">
                Produto ganha identidade reconhecível e memorável.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">Tradução Cognitiva</h4>
              <p className="text-slate-600 leading-relaxed">
                Usuário entende o estado do sistema sem ler nada.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
