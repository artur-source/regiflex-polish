import { Mail, Instagram, MapPin } from 'lucide-react';

export default function RFFooter() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-rf-dark text-primary-foreground">
      <div className="container-narrow mx-auto section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-regiflex.png" alt="RegiFlex" className="h-8 w-auto" />
              <span className="font-bold text-lg">RegiFlex</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Transformando o fluxo de atendimento clínico com tecnologia simples e acessível.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/80">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: 'Sobre', href: '#sobre' },
                { label: 'Produto', href: '#produto' },
                { label: 'Funcionalidades', href: '#funcionalidades' },
                { label: 'Diferenciais', href: '#diferenciais' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/80">Empresa</h4>
            <ul className="space-y-2">
              {[
                { label: 'Equipe', href: '#equipe' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/80">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <Mail size={14} />
                <a href="mailto:regiflex.contato@gmail.com" className="hover:text-primary-foreground transition-colors">
                  regiflex.contato@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <Instagram size={14} />
                <a href="https://www.instagram.com/regiflex.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  @regiflex.app
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <MapPin size={14} />
                Suzano – SP, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {year} RegiFlex. Projeto de Startups — UniPiaget.
          </p>
          <div className="flex gap-4 text-xs text-primary-foreground/40">
            <span>LGPD Compliant</span>
            <span>WCAG 2.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
