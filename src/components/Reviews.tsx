'use client';

import { useState } from 'react';
import { REVIEWS } from '@/lib/constants';
import GeometricBackground from '@/components/GeometricBackground';
import SectionCTA from '@/components/SectionCTA';

export default function Reviews() {
  const items = [...REVIEWS.items, ...REVIEWS.items];
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  return (
    <section
      id="depoimentos"
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Linhas geométricas douradas no fundo — não sobrepõe cards */}
      <GeometricBackground patternId="reviews-geom-pattern" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 uppercase tracking-wide"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
        >
          {REVIEWS.title}
        </h2>
        <p
          className="text-center mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          {REVIEWS.subtitle}
        </p>

        {/* Carousel Track */}
        <div className="overflow-hidden rounded-xl">
          <div className="reviews-track">
            {items.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[320px] md:w-[360px] p-6 mx-3 rounded-xl card-hover relative z-10 shadow-sm"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 fill-current"
                      style={{ color: 'var(--color-gold)' }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
                <p
                  className="font-semibold text-sm"
                  style={{ color: 'var(--text-primary)' }}
                >
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.items.map((_, i) => (
            <button
              key={i}
              onMouseEnter={() => setHoveredDot(i)}
              onMouseLeave={() => setHoveredDot(null)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  hoveredDot === i
                    ? 'var(--color-gold)'
                    : 'var(--border-color)',
                transform: hoveredDot === i ? 'scale(1.25)' : 'scale(1)',
              }}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA Institucional de Alta Conversão */}
        <SectionCTA
          text="Conversar com a Equipe Jurídica"
          helperText="Junte-se às centenas de clientes satisfeitos que conquistaram seus direitos previdenciários."
          message="Olá! Gostaria de conversar com a equipe jurídica da Dra. Kelly Carina sobre minha aposentadoria/benefício."
          className="mt-6"
        />
      </div>
    </section>
  );
}
