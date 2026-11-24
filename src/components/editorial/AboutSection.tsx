import { motion } from 'motion/react';
import { ABOUT_PILLARS, SABRINA_PROFILE } from '../../data/sabrinaData';

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="border-t border-[#361F13]/12 bg-[#FAF5EC] py-14 md:py-22"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-[#361F13]/15 bg-[#F1E7D6] p-3">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#361F13]">
                <img
                  src="/images/sabrina-editorial-2.jpg"
                  alt="Sabrina Feitosa em estúdio segurando câmera Nikon com equipamento de iluminação ao fundo"
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="order-1 lg:order-2 lg:col-span-7"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8C620E]">
              Sobre a Publicitária
            </span>
            <h2 className="font-editorial mt-2 text-3xl font-medium leading-tight text-[#361F13] sm:text-5xl">
              Direção criativa com sensibilidade estética e foco comercial.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#5E3C2B] sm:text-lg">
              {SABRINA_PROFILE.editorialBio}
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#5E3C2B]">
              {SABRINA_PROFILE.editorialBioExtended}
            </p>

            <blockquote className="my-7 border-l-2 border-[#D49B27] pl-5">
              <p className="font-editorial text-2xl italic leading-snug text-[#361F13] sm:text-[1.75rem]">
                “{SABRINA_PROFILE.manifestoQuote}”
              </p>
            </blockquote>

            <div className="grid grid-cols-1 gap-4 border-t border-[#361F13]/15 pt-6 sm:grid-cols-3">
              {ABOUT_PILLARS.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="text-sm font-bold text-[#361F13]">{pillar.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#5E3C2B]">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
