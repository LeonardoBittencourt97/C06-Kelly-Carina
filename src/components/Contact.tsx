'use client';

import { CONTACT, HOURS } from '@/lib/constants';
import GeometricBackground from '@/components/GeometricBackground';
import SectionCTA from '@/components/SectionCTA';

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Linhas geométricas douradas no fundo — não sobrepõe conteúdo */}
      <GeometricBackground patternId="contact-geom-pattern" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
        >
          ENTRE EM CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div
            className="rounded-xl overflow-hidden shadow-lg h-80 md:h-full min-h-[320px] relative z-10"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0!2d-49.27!3d-25.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI2JzI0LjAiUyA0OcKwMTYnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Escritório Kelly Carina"
              className="w-full h-full"
            />
          </div>

          {/* Contact Info */}
          <div
            className="p-8 rounded-xl shadow-sm relative z-10 space-y-6"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }}
          >
            <div>
              <h3
                className="text-lg font-bold mb-2 uppercase tracking-wider"
                style={{ color: 'var(--color-gold)' }}
              >
                Endereço
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {CONTACT.address}
                <br />
                {CONTACT.city}/{CONTACT.state} — CEP {CONTACT.zip}
              </p>
            </div>

            <div>
              <h3
                className="text-lg font-bold mb-2 uppercase tracking-wider"
                style={{ color: 'var(--color-gold)' }}
              >
                Telefone
              </h3>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="text-sm sm:text-base font-medium transition-colors hover:text-[#C9A84C]"
                style={{ color: 'var(--text-primary)' }}
              >
                {CONTACT.phone}
              </a>
            </div>

            <div>
              <h3
                className="text-lg font-bold mb-2 uppercase tracking-wider"
                style={{ color: 'var(--color-gold)' }}
              >
                Horário de Atendimento
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {HOURS.display}
                <br />
                Fim de semana: {HOURS.weekend}
              </p>
            </div>

            <SectionCTA
              align="left"
              variant="white"
              text="Agende Sua Consulta"
              helperText="Atendimento presencial ou online com horário marcado."
              message="Olá, Dra. Kelly! Gostaria de agendar uma consulta no seu escritório."
              className="!pt-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

