import { ArrowRight } from 'lucide-react';

export default function RFCTA() {
  return (
    <section className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-blue-700 p-9 text-center shadow-xl shadow-black/20 lg:p-16">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Pronto para modernizar sua recepção?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-50">
          Conheça como o RegiFlex pode simplificar o atendimento da sua clínica.
        </p>
        <a
          href="mailto:regiflex.contato@gmail.com?subject=Solicitação%20de%20Demonstração%20-%20RegiFlex"
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-extrabold text-blue-700 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
        >
          Solicitar Demonstração
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
