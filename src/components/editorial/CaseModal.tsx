import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import type { CaseStudy } from '../../data/sabrinaData';
import { buildWhatsAppUrl } from '../../data/sabrinaData';

interface CaseModalProps {
  caseItem: CaseStudy | null;
  onClose: () => void;
}

export function CaseModal({ caseItem, onClose }: CaseModalProps) {
  useEffect(() => {
    if (!caseItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [caseItem, onClose]);

  return (
    <AnimatePresence>
      {caseItem && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#24130B]/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-[#361F13]/20 bg-[#FAF5EC] text-[#361F13] shadow-2xl sm:rounded-3xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#361F13]/12 bg-[#FAF5EC]/95 px-5 py-3.5 backdrop-blur-md sm:px-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C620E]">
                {caseItem.category} • {caseItem.year}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar detalhes do projeto"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#361F13]/20 bg-[#FFFDF9] text-[#361F13] transition-colors hover:bg-[#361F13] hover:text-[#FAF5EC]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-5 sm:p-7">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#361F13]/15 bg-[#F1E7D6]">
                <img
                  src={caseItem.image}
                  alt={caseItem.imageAlt}
                  className={`h-full w-full object-cover ${
                    caseItem.imagePosition ?? 'object-center'
                  }`}
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5E3C2B]">
                  {caseItem.client}
                </p>
                <span className="rounded-full bg-[#D49B27] px-3.5 py-1 text-xs font-bold text-[#24130B]">
                  {caseItem.metric}
                </span>
              </div>

              <h3
                id="case-modal-title"
                className="font-editorial mt-2 text-3xl font-medium text-[#361F13] sm:text-4xl"
              >
                {caseItem.title}
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-5 border-t border-[#361F13]/12 pt-5 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C620E]">
                    O Desafio
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5E3C2B]">
                    {caseItem.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C620E]">
                    Direção Aplicada
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5E3C2B]">
                    {caseItem.approach}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#361F13]">
                  Entregas do Projeto ({caseItem.format})
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {caseItem.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#361F13]/20 bg-[#FFFDF9] px-3.5 py-1.5 text-xs font-medium text-[#361F13]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-[#361F13]/12 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[#5E3C2B]">
                  Quer um projeto com essa direção para a sua marca?
                </p>
                <a
                  href={buildWhatsAppUrl(
                    `Olá Sabrina! Vi os detalhes do case "${caseItem.title}" (${caseItem.client}) e quero uma proposta nessa direção.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#361F13] px-6 py-3 text-sm font-semibold text-[#FAF5EC] transition-colors hover:bg-[#D49B27] hover:text-[#24130B]"
                >
                  <span>Solicitar proposta parecida</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
