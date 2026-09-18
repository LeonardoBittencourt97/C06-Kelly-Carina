'use client';

import { CONTACT, HOURS } from '@/lib/constants';

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-4 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary uppercase">
          ENTRE EM CONTATO
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-80 md:h-full min-h-[320px]">
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
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-accent-gold mb-2 uppercase">
                Endereço
              </h3>
              <p className="text-text-secondary">
                {CONTACT.address}
                <br />
                {CONTACT.city}/{CONTACT.state} — CEP {CONTACT.zip}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent-gold mb-2 uppercase">
                Telefone
              </h3>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="text-text-secondary hover:text-accent-gold transition-colors"
              >
                {CONTACT.phone}
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent-gold mb-2 uppercase">
                Horário de Atendimento
              </h3>
              <p className="text-text-secondary">
                {HOURS.display}
                <br />
                Fim de semana: {HOURS.weekend}
              </p>
            </div>

            <div className="pt-4">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-gold text-bg-primary font-bold py-3 px-8 rounded-lg hover:brightness-110 transition-all uppercase tracking-wide"
              >
                Agende Sua Consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
