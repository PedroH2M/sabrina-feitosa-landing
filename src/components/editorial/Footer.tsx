import { SABRINA_PROFILE } from '../../data/sabrinaData';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-[#24130B] px-5 py-12 text-[#FAF5EC] sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <img
            src="/images/logo-sa-feitosa-cream.png"
            alt="Sabrina Feitosa"
            className="h-14 w-auto object-contain sm:h-16"
          />
          <p className="mt-2.5 text-xs uppercase tracking-[0.2em] text-[#E4AF3C]">
            {SABRINA_PROFILE.studioName} • {SABRINA_PROFILE.role}
          </p>
        </div>

        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#FAF5EC]/80"
        >
          <a href="#sobre" className="inline-flex min-h-[44px] items-center hover:text-[#E4AF3C]">
            Sobre
          </a>
          <a href="#servicos" className="inline-flex min-h-[44px] items-center hover:text-[#E4AF3C]">
            Especialidades
          </a>
          <a href="#portfolio" className="inline-flex min-h-[44px] items-center hover:text-[#E4AF3C]">
            Acervo
          </a>
          <a href="#processo" className="inline-flex min-h-[44px] items-center hover:text-[#E4AF3C]">
            Método
          </a>
          <a href="#faq" className="inline-flex min-h-[44px] items-center hover:text-[#E4AF3C]">
            Dúvidas
          </a>
          <a href="#contato" className="inline-flex min-h-[44px] items-center hover:text-[#E4AF3C]">
            Contato
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-[#FAF5EC]/12 pt-6 text-xs text-[#FAF5EC]/65 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {CURRENT_YEAR} {SABRINA_PROFILE.name}. Todos os direitos reservados.
        </p>
        <p>{SABRINA_PROFILE.location}</p>
      </div>
    </footer>
  );
}
