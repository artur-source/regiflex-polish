import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Solução', href: '#solucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
];

export default function RFHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-narrow mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2 group">
          <img src="/logo-regiflex.png" alt="RegiFlex" className="h-8 lg:h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
          <span className={`font-extrabold text-lg lg:text-xl tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}>
            RegiFlex
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 relative group ${
                scrolled
                  ? 'text-muted-foreground hover:text-primary hover:bg-muted'
                  : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
              }`}
            >
              {link.label}
              <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                scrolled ? 'bg-primary' : 'bg-primary-foreground'
              }`} />
            </button>
          ))}
          <a
            href="https://appregiflex.com.br/login"
            className={`ml-3 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 border ${
              scrolled
                ? 'border-input text-foreground hover:bg-muted'
                : 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10'
            }`}
          >
            Login
          </a>
          <a
            href="https://appregiflex.com.br/pricing"
            className="ml-2 px-5 py-2.5 bg-rf-accent text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
          >
            Começar
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <nav className="container-narrow mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://appregiflex.com.br/login"
              className="mt-2 px-4 py-3 text-foreground hover:bg-muted rounded-lg text-sm font-semibold text-center transition-colors border border-input"
            >
              Login
            </a>
            <a
              href="https://appregiflex.com.br/pricing"
              className="mt-2 px-4 py-3 bg-rf-accent text-white rounded-lg text-sm font-semibold text-center shadow-md"
            >
              Começar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
