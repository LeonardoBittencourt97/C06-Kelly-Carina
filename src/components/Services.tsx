'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Scale,
  HeartPulse,
  Shield,
  Users,
  Baby,
  Wrench,
  FileCheck,
  Calculator,
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import GeometricBackground from '@/components/GeometricBackground';
import SectionCTA from '@/components/SectionCTA';

gsap.registerPlugin(ScrollTrigger);

const ICONS = [Scale, HeartPulse, Shield, Users, Baby, Wrench, FileCheck, Calculator];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    gsap.set(cards, { opacity: 0, y: 40 });

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cards, {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          }),
        start: 'top 85%',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative overflow-hidden py-20 px-4"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Linhas geométricas douradas no fundo — não sobrepõe cards */}
      <GeometricBackground patternId="services-geom-pattern" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
        >
          ÁREAS DE ATUAÇÃO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={service.id}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="card-hover rounded-lg p-6 relative z-10 shadow-sm"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderLeft: '4px solid var(--color-gold)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: 'var(--color-gold)',
                      color: 'var(--bg-primary)',
                    }}
                  >
                    {service.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        size={18}
                        style={{ color: 'var(--color-gold)' }}
                      />
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Institucional de Alta Conversão */}
        <SectionCTA
          text="Solicitar Análise de Benefício"
          helperText="Dúvidas sobre regras de transição, cálculo ou documentação necessária? Consulte nossa especialista."
          message="Olá, Dra. Kelly! Gostaria de consultar a viabilidade do meu benefício previdenciário."
          className="mt-6"
        />
      </div>
    </section>
  );
}
