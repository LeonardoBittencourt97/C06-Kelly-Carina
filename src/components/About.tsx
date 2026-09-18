'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT } from '@/lib/constants';
import GeometricBackground from '@/components/GeometricBackground';
import SectionCTA from '@/components/SectionCTA';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        },
      });

      gsap.from(dividerRef.current, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top 85%',
        },
      });

      gsap.from(photoRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: photoRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(bioRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bioRef.current,
          start: 'top 85%',
        },
      });

      const highlightItems = highlightsRef.current?.children;
      if (highlightItems) {
        gsap.from(highlightItems, {
          opacity: 0,
          x: 30,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: 'top 85%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Linhas geométricas douradas no fundo — não sobrepõe conteúdo */}
      <GeometricBackground patternId="about-geom-pattern" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 tracking-tight"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
        >
          {ABOUT.title}
        </h2>

        {/* Gold decorative line */}
        <div
          ref={dividerRef}
          className="mx-auto w-24 h-0.5 mb-16 origin-center"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
          }}
        />

        {/* Content — photo + text */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Photo */}
          <div ref={photoRef} className="flex justify-center lg:justify-start">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[30rem] rounded-2xl overflow-hidden shadow-xl bg-[var(--bg-card)]">
              {/* Gold border */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                style={{ border: '2px solid var(--color-gold)', opacity: 0.4 }}
              />
              <Image
                src="/fotodeperfildaKelly.jpeg"
                alt="Dra. Kelly Carina — Advogada previdenciarista"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 320px, 384px"
              />
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(201, 168, 76, 0.08), transparent 60%)',
                }}
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6">
            {/* Bio */}
            <p
              ref={bioRef}
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              {ABOUT.bio}
            </p>

            {/* Highlights */}
            <div ref={highlightsRef} className="flex flex-col gap-4">
              {ABOUT.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  {/* Gold checkmark */}
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full"
                    style={{ backgroundColor: 'rgba(201, 168, 76, 0.15)' }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-gold)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span
                    className="text-sm sm:text-base font-medium"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Institucional de Alta Conversão */}
            <SectionCTA
              align="left"
              text="Agendar Atendimento com a Dra. Kelly"
              helperText="Atendimento consultivo individualizado e com total sigilo profissional."
              message="Olá, Dra. Kelly! Conheci sua trajetória pelo site e gostaria de agendar um atendimento para avaliar o meu caso."
              className="!pt-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
