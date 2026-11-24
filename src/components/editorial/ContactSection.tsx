import { useState, type FormEvent } from 'react';
import { ArrowUpRight, AtSign, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { SABRINA_PROFILE, SERVICES, buildWhatsAppUrl } from '../../data/sabrinaData';

interface ContactSectionProps {
  selectedServices: string[];
  onToggleService: (service: string) => void;
}

const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  'Projeto Completo 360°',
];

export function ContactSection({
  selectedServices,
  onToggleService,
}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [notes, setNotes] = useState('');
  const [nameError, setNameError] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handleToggleService = (service: string) => {
    onToggleService(service);
    if (submittedUrl) setSubmittedUrl(null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) {
      setNameError('Por favor, informe seu nome para continuarmos.');
      return;
    }

    setNameError('');
    const servicesText =
      selectedServices.length > 0 ? selectedServices.join(', ') : 'A definir';
    const messageLines = [
      `Olá Sabrina! Meu nome é ${trimmedName}.`,
      brand.trim() ? `Marca / Instagram: ${brand.trim()}` : null,
      `Frente de interesse: ${servicesText}`,
      notes.trim() ? `Sobre o projeto: ${notes.trim()}` : null,
    ].filter(Boolean);

    const whatsappUrl = buildWhatsAppUrl(messageLines.join('\n'));
    setSubmittedUrl(whatsappUrl);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="border-t border-[#361F13]/12 bg-[#FAF5EC] py-14 md:py-22"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8C620E]">
              Agenda aberta
            </span>
            <h2 className="font-editorial mt-2 text-3xl font-medium leading-tight text-[#361F13] sm:text-5xl">
              Pronta para elevar a imagem da sua marca?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5E3C2B]">
              Preencha os detalhes essenciais ao lado para iniciarmos sua proposta no
              WhatsApp, ou fale diretamente pelos canais abaixo.
            </p>

            <div className="mt-8 space-y-4 border-t border-[#361F13]/15 pt-6 text-sm">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[44px] items-center gap-3 text-[#361F13] transition-colors hover:text-[#8C620E]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#D49B27]" aria-hidden="true" />
                <span>{SABRINA_PROFILE.whatsappDisplay}</span>
              </a>

              <a
                href={`https://instagram.com/${SABRINA_PROFILE.instagram.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[44px] items-center gap-3 text-[#361F13] transition-colors hover:text-[#8C620E]"
              >
                <AtSign className="h-4 w-4 shrink-0 text-[#D49B27]" aria-hidden="true" />
                <span>{SABRINA_PROFILE.instagram}</span>
              </a>

              <div className="flex min-h-[44px] items-center gap-3 text-[#5E3C2B]">
                <MapPin className="h-4 w-4 shrink-0 text-[#D49B27]" aria-hidden="true" />
                <span>{SABRINA_PROFILE.location}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-[#361F13]/15 bg-[#FFFDF9] p-6 shadow-sm sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#361F13]"
                  >
                    Seu nome *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (nameError) setNameError('');
                    }}
                    aria-invalid={Boolean(nameError)}
                    aria-describedby={nameError ? 'contact-name-error' : undefined}
                    placeholder="Ex.: Mariana Alves"
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-[#361F13]/20 bg-[#FAF5EC] px-4 py-3 text-base text-[#361F13] placeholder:text-[#7A5745] focus:border-[#D49B27] focus:outline-none"
                  />
                  {nameError && (
                    <p
                      id="contact-name-error"
                      role="alert"
                      className="mt-1.5 text-xs font-medium text-[#9A3412]"
                    >
                      {nameError}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-brand"
                    className="block text-xs font-bold uppercase tracking-wider text-[#361F13]"
                  >
                    Marca ou @instagram
                  </label>
                  <input
                    id="contact-brand"
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Ex.: @atelier.marca"
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-[#361F13]/20 bg-[#FAF5EC] px-4 py-3 text-base text-[#361F13] placeholder:text-[#7A5745] focus:border-[#D49B27] focus:outline-none"
                  />
                </div>
              </div>

              <fieldset className="mt-6">
                <legend className="text-xs font-bold uppercase tracking-wider text-[#361F13]">
                  O que você busca hoje?
                </legend>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((option) => {
                    const isSelected = selectedServices.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleToggleService(option)}
                        aria-pressed={isSelected}
                        className={`min-h-[44px] rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                          isSelected
                            ? 'bg-[#361F13] text-[#FAF5EC]'
                            : 'border border-[#361F13]/20 bg-[#FAF5EC] text-[#5E3C2B] hover:border-[#361F13]'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-6">
                <label
                  htmlFor="contact-notes"
                  className="block text-xs font-bold uppercase tracking-wider text-[#361F13]"
                >
                  Conte brevemente sobre o projeto
                </label>
                <textarea
                  id="contact-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Momento da marca, prazo desejado ou referências..."
                  className="mt-2 w-full rounded-xl border border-[#361F13]/20 bg-[#FAF5EC] px-4 py-3 text-base text-[#361F13] placeholder:text-[#7A5745] focus:border-[#D49B27] focus:outline-none"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#D49B27] px-7 py-3.5 text-sm font-bold text-[#24130B] transition-colors hover:bg-[#E4AF3C] sm:w-auto"
                >
                  <span>Enviar briefing no WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <span className="text-xs text-[#5E3C2B]">
                  Retorno em até 1 dia útil.
                </span>
              </div>

              {submittedUrl && (
                <div
                  role="status"
                  className="mt-5 flex flex-col gap-2 rounded-xl border border-[#D49B27]/50 bg-[#F3DFB0]/45 p-4 text-xs text-[#361F13] sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8C620E]" aria-hidden="true" />
                    <span>Briefing preparado! Se o WhatsApp não abriu automaticamente, toque ao lado.</span>
                  </div>
                  <a
                    href={submittedUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[40px] shrink-0 items-center gap-1 font-bold underline decoration-[#8C620E] underline-offset-4"
                  >
                    <span>Abrir WhatsApp</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
