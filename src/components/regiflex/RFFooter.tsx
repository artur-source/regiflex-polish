import { Mail, Instagram } from 'lucide-react';

export default function RFFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-narrow mx-auto section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-regiflex.png" alt="RegiFlex" className="h-8 w-auto" />
              <span className="font-bold text-lg">RegiFlex</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Transformando o fluxo de atendimento clínico com tecnologia simples e acessível.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/80">Redes Sociais</h4>
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
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/80">Institucional</h4>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              Projeto de Startups — UniPiaget<br />
              Análise e Desenvolvimento de Sistemas<br />
              Suzano – SP
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center space-y-2">
          <p className="text-xs text-primary-foreground/40">
            © {year} RegiFlex — Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Feito por{' '}
            <a
              href="https://core-patch-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-semibold"
            >
              Core & Patch
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
