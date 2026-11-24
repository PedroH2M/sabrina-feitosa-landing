import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../../data/sabrinaData';

export function ProcessAndTestimonialsSection() {
  return (
    <section id="processo" className="bg-[#361F13] py-14 text-[#FAF5EC] md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E4AF3C]">
            Processo Criativo
          </span>
          <h2 className="font-editorial mt-2 text-3xl font-medium sm:text-5xl">
            Da essência da marca ao último frame editado.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((p, index) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
              className="rounded-xl border border-[#FAF5EC]/15 bg-[#24130B]/65 p-5 sm:p-6"
            >
              <span className="font-editorial text-2xl italic text-[#E4AF3C]">
                {p.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-[#FAF5EC]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#FAF5EC]/80">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
