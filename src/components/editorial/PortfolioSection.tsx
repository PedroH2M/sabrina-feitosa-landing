import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES, type CaseStudy } from '../../data/sabrinaData';

interface PortfolioSectionProps {
  onSelectCase: (item: CaseStudy) => void;
}

const CATEGORIES = ['Todos', 'Videomaker & Captação', 'Social Media', 'Branding'] as const;

export function PortfolioSection({ onSelectCase }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const filteredCases =
    activeCategory === 'Todos'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-22">
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8C620E]">
            Acervo Selecionado
          </span>
          <h2 className="font-editorial mt-1 text-3xl font-medium text-[#361F13] sm:text-5xl">
            Projetos que unem desejo e resultado.
          </h2>
        </div>

        <div
          role="group"
          aria-label="Filtrar projetos por especialidade"
          className="flex flex-wrap gap-2"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`min-h-[44px] rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#361F13] text-[#FAF5EC]'
                    : 'border border-[#361F13]/20 bg-[#FFFDF9] text-[#5E3C2B] hover:border-[#361F13] hover:text-[#361F13]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredCases.map((item, idx) => (
          <motion.article
            layout
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="group flex flex-col justify-between rounded-2xl border border-[#361F13]/15 bg-[#FFFDF9] p-5 transition-all duration-300 hover:border-[#D49B27] sm:p-6"
          >
            <div>
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#5E3C2B]">
                <span>
                  0{idx + 1} / {item.category}
                </span>
                <span>{item.year}</span>
              </div>

              <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F1E7D6]">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                    item.imagePosition ?? 'object-center'
                  }`}
                />
                <span className="absolute top-3.5 left-3.5 rounded-full bg-[#D49B27] px-3 py-1 text-[11px] font-bold text-[#24130B] shadow-sm">
                  {item.metric}
                </span>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8C620E]">
                {item.client}
              </p>
              <h3 className="font-editorial mt-1 text-2xl font-medium text-[#361F13] sm:text-3xl">
                {item.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-[#5E3C2B]">
                {item.summary}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-[#361F13]/10 pt-3 text-xs font-medium text-[#361F13]">
              <span className="text-[#5E3C2B]">{item.format}</span>
              <button
                type="button"
                onClick={() => onSelectCase(item)}
                className="inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-[#361F13] underline decoration-[#D49B27] underline-offset-4 transition-colors hover:text-[#8C620E]"
              >
                <span>Ver detalhes do case</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
