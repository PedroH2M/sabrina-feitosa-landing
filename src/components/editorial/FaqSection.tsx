import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/sabrinaData';

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string>(FAQ_ITEMS[0].id);

  return (
    <section
      id="faq"
      className="border-t border-[#361F13]/12 bg-[#F1E7D6]/55 py-14 md:py-20"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="mb-8 text-center sm:text-left">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8C620E]">
            Dúvidas Frequentes
          </span>
          <h2 className="font-editorial mt-1 text-3xl font-medium text-[#361F13] sm:text-4xl">
            Antes de começarmos.
          </h2>
        </div>

        <div className="divide-y divide-[#361F13]/15 border-y border-[#361F13]/15">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openFaq === item.id;
            const panelId = `faq-panel-${item.id}`;
            return (
              <div key={item.id} className="py-1.5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? '' : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 py-3 text-left"
                >
                  <span className="font-editorial text-xl font-medium text-[#361F13] sm:text-2xl">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#361F13] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#8C620E]' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-[#5E3C2B] sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
