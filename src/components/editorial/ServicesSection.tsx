import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ChevronDown, Clock, Sparkles } from 'lucide-react';
import { SERVICES } from '../../data/sabrinaData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [openService, setOpenService] = useState<string>('videomaker');

  const handleChooseService = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="servicos"
      className="border-y border-[#361F13]/12 bg-[#F1E7D6]/70 py-14 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8C620E]">
              Especialidades
            </span>
            <h2 className="font-editorial mt-1 text-3xl font-medium text-[#361F13] sm:text-4xl">
              Três pilares, uma assinatura visual.
            </h2>
          </div>
          <p className="text-sm text-[#5E3C2B]">
            Toque para explorar as entregas e prazos de cada frente.
          </p>
        </div>

        <div className="divide-y divide-[#361F13]/15 border-y border-[#361F13]/15">
          {SERVICES.map((service) => {
            const isOpen = openService === service.id;
            const panelId = `service-panel-${service.id}`;
            return (
              <div key={service.id} className="py-2">
                <button
                  type="button"
                  onClick={() => setOpenService(isOpen ? '' : service.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex min-h-[60px] w-full items-center justify-between gap-4 py-3 text-left transition-colors"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-editorial text-xl italic text-[#8C620E] sm:text-2xl">
                      {service.roman}.
                    </span>
                    <div>
                      <h3 className="font-editorial text-2xl font-medium text-[#361F13] sm:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-[#5E3C2B]">{service.subtitle}</p>
                    </div>
                  </div>
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
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-8 sm:pl-12">
                        <p className="max-w-2xl text-base leading-relaxed text-[#5E3C2B]">
                          {service.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.deliverables.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[#361F13]/20 bg-[#FAF5EC] px-3.5 py-1.5 text-xs font-medium text-[#361F13]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 flex flex-col gap-3 border-t border-[#361F13]/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="space-y-1">
                            <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E3C2B]">
                              <Clock className="h-3.5 w-3.5 text-[#8C620E]" aria-hidden="true" />
                              <span>Prazo médio: {service.timeline}</span>
                            </p>
                            <p className="flex items-center gap-1.5 text-xs font-semibold text-[#361F13]">
                              <Sparkles className="h-3.5 w-3.5 text-[#D49B27]" aria-hidden="true" />
                              <span>{service.highlight}</span>
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleChooseService(service.title)}
                            className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-[#361F13] px-5 py-2.5 text-xs font-semibold text-[#FAF5EC] transition-colors hover:bg-[#D49B27] hover:text-[#24130B]"
                          >
                            <span>Quero conversar sobre este serviço</span>
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
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
