import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { buildWhatsAppUrl } from '../../data/sabrinaData';

const NAV_LINKS = [
  { href: '#sobre', roman: 'I.', label: 'Sobre' },
  { href: '#servicos', roman: 'II.', label: 'Especialidades' },
  { href: '#portfolio', roman: 'III.', label: 'Acervo' },
  { href: '#processo', roman: 'IV.', label: 'Método' },
  { href: '#faq', roman: 'V.', label: 'Dúvidas' },
  { href: '#contato', roman: 'VI.', label: 'Contato' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#361F13]/12 bg-[#FAF5EC]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#top"
          className="flex min-h-[44px] items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/images/logo-sa-feitosa.png"
            alt="Sabrina Feitosa — Início"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 text-sm font-medium text-[#5E3C2B] md:flex"
        >
          {NAV_LINKS.slice(0, 5).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[44px] items-center transition-colors hover:text-[#361F13]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="hidden min-h-[44px] items-center gap-1.5 rounded-full border border-[#361F13] bg-[#361F13] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF5EC] transition-all hover:border-[#D49B27] hover:bg-[#D49B27] hover:text-[#24130B] md:inline-flex"
          >
            <span>Agendar</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-editorial-menu"
            aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#361F13]/20 bg-[#FFFDF9] text-[#361F13] transition-colors hover:border-[#361F13] md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-editorial-menu"
            aria-label="Menu mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-[#361F13]/12 bg-[#FAF5EC] md:hidden"
          >
            <div className="mx-auto max-w-6xl px-5 py-5">
              <ul className="divide-y divide-[#361F13]/12">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex min-h-[48px] items-center justify-between py-2.5 text-[#361F13]"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-editorial text-lg italic text-[#8C620E]">
                          {link.roman}
                        </span>
                        <span className="font-editorial text-2xl font-medium">
                          {link.label}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#5E3C2B]" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-2">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#D49B27] px-6 py-3 text-sm font-bold text-[#24130B]"
                >
                  <span>Conversar no WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
