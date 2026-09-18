'use client';

import { useEffect, useRef } from 'react';
import { PROCESS } from '@/lib/constants';
import GeometricBackground from '@/components/GeometricBackground';
import SectionCTA from '@/components/SectionCTA';

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;

      gsap.registerPlugin(ScrollTrigger);

      stepsRef.current.forEach((step, index) => {
        gsap.from(step, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: index * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            once: true,
          },
        });
      });
    };

    loadGSAP();
  }, []);

  return (
    <section
      id="processo"
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Linhas geométricas douradas no fundo — não sobrepõe conteúdo */}
      <GeometricBackground patternId="process-geom-pattern" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wide"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
        >
          {PROCESS.title}
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-between relative">
          {/* Gold connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-gold/0 via-gold to-gold/0" />

          {PROCESS.steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => {
                if (el) stepsRef.current[i] = el;
              }}
              className="relative flex flex-col items-center text-center w-full md:w-1/4 mb-12 md:mb-0"
            >
              {/* Step number circle */}
              <div
                className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full font-bold text-xl mb-4 shadow-lg"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-dark)',
                }}
              >
                {step.number}
              </div>

              {/* Step content */}
              <h3
                className="font-semibold text-lg mb-2 uppercase"
                style={{ color: 'var(--text-primary)' }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed px-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Institucional de Alta Conversão */}
        <SectionCTA
          text="Iniciar Análise do Meu Processo"
          helperText="Dê o primeiro passo para garantir seus direitos com acompanhamento dedicado do início ao fim."
          message="Olá, Dra. Kelly! Gostaria de dar o primeiro passo e enviar minhas dúvidas/documentos para análise."
          className="mt-6"
        />
      </div>
    </section>
  );
}
