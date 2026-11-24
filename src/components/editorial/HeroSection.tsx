import { motion } from 'motion/react';
import { ArrowUpRight, Camera } from 'lucide-react';
import { SABRINA_PROFILE } from '../../data/sabrinaData';

export function HeroSection() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-5 pt-8 pb-14 sm:px-8 md:pt-16 md:pb-24"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <div className="mb-5 inline-flex items-center gap-2 border-b border-[#D49B27] pb-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D49B27]" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8C620E]">
              {SABRINA_PROFILE.role}
            </span>
          </div>

          <h1 className="font-editorial text-[2.65rem] leading-[1.03] font-medium tracking-tight text-[#361F13] sm:text-6xl lg:text-[4.35rem]">
            Estética que{' '}
            <em className="font-normal italic text-[#8C620E]">posiciona</em>.{' '}
            Captação que{' '}
            <em className="font-normal italic underline decoration-[#D49B27]/80 decoration-1 underline-offset-8">
              permanece
            </em>
            .
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5E3C2B] sm:text-lg">
            {SABRINA_PROFILE.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#361F13] px-7 py-3.5 text-sm font-semibold text-[#FAF5EC] transition-all hover:bg-[#D49B27] hover:text-[#24130B] sm:w-auto"
            >
              <span>Solicitar proposta</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#361F13]/25 bg-[#FFFDF9]/70 px-7 py-3.5 text-sm font-semibold text-[#361F13] transition-colors hover:border-[#361F13] hover:bg-[#F1E7D6] sm:w-auto"
            >
              <span>Explorar acervo</span>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#361F13]/15 pt-6">
            <div>
              <p className="font-editorial text-2xl font-semibold text-[#361F13] sm:text-3xl">
                +45
              </p>
              <p className="mt-0.5 text-xs text-[#5E3C2B]">Marcas direcionadas</p>
            </div>
            <div>
              <p className="font-editorial text-2xl font-semibold text-[#361F13] sm:text-3xl">
                4K
              </p>
              <p className="mt-0.5 text-xs text-[#5E3C2B]">Captação &amp; Color</p>
            </div>
            <div>
              <p className="font-editorial text-2xl font-semibold text-[#8C620E] sm:text-3xl">
                360°
              </p>
              <p className="mt-0.5 text-xs text-[#5E3C2B]">Do conceito ao feed</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="lg:col-span-5"
        >
          <figure className="relative mx-auto max-w-sm overflow-hidden rounded-t-[10rem] rounded-b-2xl border border-[#361F13]/15 bg-[#F1E7D6] p-4 shadow-sm sm:p-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[8.75rem] rounded-b-xl bg-[#361F13]">
              <img
                src="/images/sabrina-editorial-1.jpg"
                alt="Retrato editorial de Sabrina Feitosa sob iluminação quente em tons âmbar e marrom"
                className="h-full w-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#24130B]/85 via-[#24130B]/35 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-[#FAF5EC]">
                <span>N° 01 • Direção Criativa &amp; Captação</span>
                <span className="inline-flex items-center gap-1 text-[#E4AF3C]">
                  <Camera className="h-3.5 w-3.5" aria-hidden="true" />
                  2026
                </span>
              </figcaption>
            </div>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
