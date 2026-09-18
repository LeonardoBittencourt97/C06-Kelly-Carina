'use client';

import { useState } from 'react';
import { FAQ } from '@/lib/constants';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 px-4 bg-bg-primary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary uppercase">
          {FAQ.title}
        </h2>

        <div className="space-y-4">
          {FAQ.items.map((item, i) => (
            <div
              key={i}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left bg-bg-secondary hover:bg-bg-secondary/80 transition-colors"
              >
                <span className="font-medium text-text-primary pr-4">
                  {item.question}
                </span>
                <span className="text-accent-gold text-2xl flex-shrink-0">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>

              <div
                className={`faq-answer${openIndex === i ? ' open' : ''}`}
              >
                <div className="px-5 pb-5 text-text-secondary leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
