'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERO, ABOUT, CONTACT } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const photoWrapperRef = useRef<HTMLDivElement>(null);
  const oabBadgeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, { opacity: 0, y: 20, duration: 0.6 })
        .from(titleRef.current, { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
        .from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from(ctaRef.current, { opacity: 0, y: 20, scale: 0.9, duration: 0.6 }, '-=0.3')
        .from(photoWrapperRef.current, { opacity: 0, x: 60, duration: 1 }, '-=0.8')
        .from(oabBadgeRef.current, { opacity: 0, scale: 0, duration: 0.5 }, '-=0.3');

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Subtle gold gradient overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center min-h-screen pt-28 pb-16 lg:py-24">
          {/* Left side — Text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <span
              ref={badgeRef}
              className="inline-block self-start px-4 py-2 text-xs sm:text-sm tracking-widest uppercase rounded-full border"
              style={{
                borderColor: 'var(--color-gold)',
                color: 'var(--color-gold)',
                backgroundColor: 'rgba(201, 168, 76, 0.08)',
              }}
            >
              Especialista em Direito Previdenciário
            </span>

            {/* Title */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
            >
              {HERO.tagline}
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl max-w-xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {HERO.subtitle}
            </p>

            {/* CTA Button */}
            <Link
              ref={ctaRef}
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 self-start px-8 py-4 rounded-lg text-base sm:text-lg font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))',
                color: '#0A0A0A',
                boxShadow: '0 4px 20px rgba(201, 168, 76, 0.3)',
              }}
            >
              {/* WhatsApp icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {HERO.cta}
            </Link>
          </div>

          {/* Right side — Photo */}
          <div ref={photoWrapperRef} className="relative flex justify-center lg:justify-end">
            {/* Decorative gold border frame */}
            <div className="relative">
              {/* Outer frame */}
              <div
                className="absolute -inset-4 rounded-2xl"
                style={{
                  border: '2px solid var(--color-gold)',
                  opacity: 0.3,
                }}
              />
              {/* Inner frame */}
              <div
                className="absolute -inset-2 rounded-xl"
                style={{
                  border: '1px solid var(--color-gold)',
                  opacity: 0.15,
                }}
              />

              {/* Photo */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-xl overflow-hidden">
                <Image
                  src="/fotodeperfildaKelly.jpeg"
                  alt="Dra. Kelly Carina — Advogada especializada em Direito Previdenciário"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 320px, 384px"
                />
                {/* Gold gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32"
                  style={{
                    background: 'linear-gradient(to top, rgba(201, 168, 76, 0.15), transparent)',
                  }}
                />
              </div>

              {/* OAB Badge — circular, floating */}
              <span
                ref={oabBadgeRef}
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full text-center text-xs sm:text-sm font-bold leading-tight animate-float"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  color: '#0A0A0A',
                  boxShadow: '0 4px 20px rgba(201, 168, 76, 0.4)',
                }}
              >
                {CONTACT.oab}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
