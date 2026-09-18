'use client';

import { useEffect, useRef } from 'react';
import { PROCESS } from '@/lib/constants';

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
    <section id="processo" className="py-20 px-4 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-primary uppercase">
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
              <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-gold text-dark font-bold text-xl mb-4 shadow-lg">
                {step.number}
              </div>

              {/* Step content */}
              <h3 className="text-text-primary font-semibold text-lg mb-2 uppercase">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
