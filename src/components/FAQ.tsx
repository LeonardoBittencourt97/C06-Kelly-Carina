'use client';

import { useState } from 'react';
import { FAQ } from '@/lib/constants';
import GeometricBackground from '@/components/GeometricBackground';
import SectionCTA from '@/components/SectionCTA';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Linhas geométricas douradas no fundo — não sobrepõe cards */}
      <GeometricBackground patternId="faq-geom-pattern" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
        >
          {FAQ.title}
        </h2>

        <div className="space-y-4">
          {FAQ.items.map((item, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden relative z-10 shadow-sm transition-colors duration-200"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
              }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: 'var(--bg-card)' }}
              >
                <span
                  className="font-medium pr-4 text-base"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.question}
                </span>
                <span
                  className="text-2xl flex-shrink-0 font-light transition-transform duration-200"
                  style={{ color: 'var(--color-gold)' }}
                >
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>

              <div
                className={`faq-answer${openIndex === i ? ' open' : ''}`}
              >
                <div
                  className="px-5 pb-5 text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Institucional de Alta Conversão */}
        <SectionCTA
          text="Esclarecer Dúvidas pelo WhatsApp"
          helperText="Sua dúvida não foi respondida acima? Fale diretamente com nossa assessoria jurídica."
          message="Olá, Dra. Kelly! Tenho uma dúvida específica sobre meu caso e gostaria de esclarecê-la."
          className="mt-6"
        />
      </div>
    </section>
  );
}
