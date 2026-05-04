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
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Altura do header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2 group">
          <img src="/logo-regiflex.png" alt="RegiFlex" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
          <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}>
            RegiFlex
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative group ${
                scrolled
                  ? 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="ml-4 flex items-center gap-3">
            <a
              href="https://appregiflex.com.br/login"
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                scrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Login
            </a>
            <a
              href="https://appregiflex.com.br/pricing"
              className="px-6 py-2.5 bg-[#00A651] text-white rounded-full text-sm font-bold hover:bg-[#008e45] transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Começar
            </a>
          </div>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top-5 duration-300">
          <nav className="px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all"
              >
                {link.label}
              </button>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100">
              <a
                href="https://appregiflex.com.br/login"
                className="px-4 py-3 text-slate-700 font-bold text-center rounded-xl border border-slate-200"
              >
                Login
              </a>
              <a
                href="https://appregiflex.com.br/pricing"
                className="px-4 py-3 bg-[#00A651] text-white font-bold text-center rounded-xl shadow-sm"
              >
                Começar
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
