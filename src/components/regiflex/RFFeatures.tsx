import { BarChart3, ClipboardList, LayoutDashboard, MonitorPlay, QrCode, UsersRound } from 'lucide-react';

const features = [
  { icon: LayoutDashboard, title: 'Dashboard Operacional', desc: 'Painel para acompanhar recepção em tempo real.', benefit: 'Decisão rápida durante o pico.', featured: true },
  { icon: QrCode, title: 'Check-in Digital', desc: 'Paciente acessa o cadastro por QR Code.', benefit: 'Menos fila no balcão.' },
  { icon: ClipboardList, title: 'Gestão de Filas', desc: 'Organização automática por status de atendimento.', benefit: 'Mais previsibilidade para a equipe.' },
  { icon: MonitorPlay, title: 'TV Display', desc: 'Tela de chamada e acompanhamento para pacientes.', benefit: 'Menos dúvidas na sala de espera.' },
  { icon: BarChart3, title: 'Relatórios', desc: 'Indicadores para entender volume e gargalos.', benefit: 'Gestão baseada em dados.' },
  { icon: UsersRound, title: 'Controle de Pacientes', desc: 'Histórico organizado do fluxo de entrada.', benefit: 'Menos informação perdida.' },
];

export default function RFFeatures() {
  return (
    <section id="funcionalidades" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Funcionalidades</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Recursos práticos para simplificar a operação da recepção e melhorar a experiência do paciente.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className={`rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 ${feature.featured ? 'lg:col-span-2' : ''}`}>
              <feature.icon className="h-7 w-7 text-blue-600" />
              <h3 className="mt-5 text-xl font-extrabold text-slate-950">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{feature.desc}</p>
              <div className="mt-5 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">
                {feature.benefit}
              </div>
              {feature.featured && (
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {['Pacientes Hoje', 'Aguardando', 'Finalizados'].map((label, index) => (
                    <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-2xl font-extrabold text-slate-950">{index === 0 ? '18' : index === 1 ? '02' : '16'}</p>
                      <p className="text-xs font-bold text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
