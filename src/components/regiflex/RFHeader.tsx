import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Problema', href: '#problema' },
  { label: 'Solução', href: '#solucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Público-alvo', href: '#publico-alvo' },
  { label: 'Sobre', href: '#sobre' },
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
          ? 'border-b border-slate-200/70 bg-white/[0.88] shadow-[0_1px_18px_rgba(15,23,42,0.06)] backdrop-blur-xl'
          : 'border-b border-white/[0.08] bg-[#07111f]/[0.86] backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2 group">
          <img src="/logo-regiflex.png" alt="RegiFlex" className="h-9 w-auto group-hover:scale-105 transition-transform duration-300" />
          <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}>
            RegiFlex
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-0.5 rounded-full">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`relative whitespace-nowrap rounded-xl px-2.5 py-2 text-sm font-semibold transition-all duration-300 xl:px-3.5 ${
                scrolled
                  ? 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="ml-2 flex items-center gap-2 xl:ml-4 xl:gap-3">
            <a
              href="https://appregiflex.com.br/login"
              className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 xl:px-5 ${
                scrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Login
            </a>
            <a
              href="mailto:regiflex.contato@gmail.com?subject=Solicitação%20de%20Demonstração%20-%20RegiFlex"
              className="whitespace-nowrap rounded-xl bg-[#00A651] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(0,166,81,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#008e45] focus:outline-none focus:ring-4 focus:ring-emerald-300/40 active:scale-95 xl:px-6"
            >
              Demonstração
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
                href="mailto:regiflex.contato@gmail.com?subject=Solicitação%20de%20Demonstração%20-%20RegiFlex"
                className="px-4 py-3 bg-[#00A651] text-white font-bold text-center rounded-xl shadow-sm"
              >
                Demonstração
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
