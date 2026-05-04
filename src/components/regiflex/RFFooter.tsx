import { Mail, Instagram } from 'lucide-react';

const navLinks = [
  { label: 'Solução', href: '#solucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
];

export default function RFFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="col-span-full lg:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img src="/logo-regiflex.png" alt="RegiFlex" className="h-9 w-auto" />
              <span className="font-extrabold text-xl">RegiFlex</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Transformando o fluxo de atendimento clínico com tecnologia simples e acessível.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-base mb-5 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-base mb-5 text-white">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-400">
                <Mail size={16} className="text-blue-500" />
                <a href="mailto:regiflex.contato@gmail.com" className="hover:text-white transition-colors">
                  regiflex.contato@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-400">
                <Instagram size={16} className="text-blue-500" />
                <a href="https://www.instagram.com/regiflex.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @regiflex.app
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-base mb-5 text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-slate-500">
            © {year} RegiFlex — Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-500">
            Feito por <a href="https://core-patch-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">Core & Patch</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
