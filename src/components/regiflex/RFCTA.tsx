import { ArrowRight } from 'lucide-react';

export default function RFCTA() {
  return (
    <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600 to-slate-900 p-8 text-center shadow-2xl shadow-blue-950/30 lg:p-14">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Pronto para modernizar sua recepção?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-50">
          Conheça como o RegiFlex pode simplificar o atendimento da sua clínica.
        </p>
        <a
          href="mailto:regiflex.contato@gmail.com?subject=Solicitação%20de%20Demonstração%20-%20RegiFlex"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-extrabold text-blue-700 transition hover:-translate-y-1 hover:shadow-xl"
        >
          Solicitar Demonstração
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
