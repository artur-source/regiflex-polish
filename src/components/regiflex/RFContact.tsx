import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';

const contacts = [
  { icon: Mail, label: 'Email', value: 'regiflex.contato@gmail.com', href: 'mailto:regiflex.contato@gmail.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Solicitar contato', href: 'https://wa.me/5500000000000' },
  { icon: Instagram, label: 'Instagram', value: '@regiflex.app', href: 'https://instagram.com/regiflex.app' },
  { icon: Linkedin, label: 'LinkedIn', value: 'RegiFlex', href: 'https://www.linkedin.com/' },
];

export default function RFContact() {
  return (
    <section id="contato" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Contato</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Vamos conversar sobre a transformação digital da sua clínica.
          </p>
          <div className="mt-8 grid gap-3">
            {contacts.map((contact) => (
              <a key={contact.label} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-white">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white">
                  <contact.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">{contact.label}</p>
                  <p className="font-extrabold text-slate-950">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm lg:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-bold text-slate-700">Nome</span>
              <input className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="Seu nome" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-bold text-slate-700">Clínica</span>
              <input className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="Nome da clínica" />
            </label>
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-bold text-slate-700">Email</span>
              <input type="email" className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="contato@clinica.com" />
            </label>
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-bold text-slate-700">Mensagem</span>
              <textarea className="min-h-32 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="Conte como sua recepção funciona hoje." />
            </label>
          </div>
          <a href="mailto:regiflex.contato@gmail.com?subject=Solicitação%20de%20Demonstração%20-%20RegiFlex" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-4 text-base font-extrabold text-white transition hover:bg-emerald-700">
            Solicitar Demonstração
          </a>
        </form>
      </div>
    </section>
  );
}
