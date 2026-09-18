'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Calculator, Clock, HardHat } from 'lucide-react';
import { EDUCATION } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

const ICONS = [AlertTriangle, Calculator, Clock, HardHat];

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    gsap.set(cards, { opacity: 0, y: 30 });

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cards, {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
          }),
        start: 'top 85%',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="entenda-seus-direitos"
      ref={sectionRef}
      className="py-20 px-4 relative scroll-mt-20"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg-primary) 95%, var(--color-gold) 5%)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 uppercase tracking-wide"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
        >
          {EDUCATION.title}
        </h2>
        <p
          className="text-center mb-12 max-w-2xl mx-auto text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {EDUCATION.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="card-hover rounded-lg p-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--color-gold)',
                      color: 'var(--bg-primary)',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
