'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { REVIEWS } from '@/lib/constants';
import GeometricBackground from '@/components/GeometricBackground';
import SectionCTA from '@/components/SectionCTA';

export default function Reviews() {
  const reviews = REVIEWS.items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Calcula quantos cards cabem na tela dinamicamente
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play ativo e dinâmico a cada 3.5 segundos (pausa quando o usuário passa o mouse)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Suporte a swipe no mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 45) {
      handleNext();
    } else if (diffX < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="depoimentos"
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Linhas geométricas douradas no fundo — não sobrepõe cards */}
      <GeometricBackground patternId="reviews-geom-pattern" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge Google Reviews */}
        <div className="flex justify-center mb-3">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border shadow-sm"
            style={{
              borderColor: 'var(--color-gold)',
              color: 'var(--color-gold)',
              backgroundColor: 'rgba(201, 168, 76, 0.1)',
            }}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            <span>Avaliações Verificadas no Google</span>
          </span>
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-3 uppercase tracking-wide"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
        >
          {REVIEWS.title}
        </h2>
        <p
          className="text-center mb-10 max-w-xl mx-auto text-sm sm:text-base"
          style={{ color: 'var(--text-secondary)' }}
        >
          {REVIEWS.subtitle} — Clientes que tiveram seus direitos assegurados
        </p>

        {/* Carousel Container com Botões Laterais */}
        <div
          className="relative px-0 sm:px-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Botão Anterior (Desktop / Tablet) */}
          <button
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="hidden sm:flex absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full border shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--color-gold)',
              color: 'var(--color-gold)',
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botão Próximo (Desktop / Tablet) */}
          <button
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="hidden sm:flex absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full border shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--color-gold)',
              color: 'var(--color-gold)',
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Janela de Visualização dos Cards */}
          <div className="overflow-hidden rounded-2xl py-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2.5 sm:px-3"
                >
                  <div
                    className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl card-hover relative z-10 shadow-sm min-h-[260px]"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <div>
                      {/* Estrelas + Selo 5.0 */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, j) => (
                            <Star
                              key={j}
                              className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]"
                            />
                          ))}
                        </div>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[var(--color-gold)]/15 text-[#C9A84C]">
                          5.0 ★
                        </span>
                      </div>

                      {/* Texto da Avaliação */}
                      <p
                        className="text-sm leading-relaxed mb-4 italic"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>

                    {/* Nome do Cliente */}
                    <div className="pt-3 border-t border-[var(--border-color)]/60 flex items-center justify-between">
                      <p
                        className="font-semibold text-sm tracking-wide"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {review.name}
                      </p>
                      <span className="text-[10px] uppercase font-semibold text-[var(--color-gold)]">
                        Verificado
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controles Mobile (Botões Anterior e Próximo no celular) */}
        <div className="flex items-center justify-between gap-3 mt-5 sm:hidden px-2">
          <button
            onClick={handlePrev}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl border text-xs font-semibold shadow-sm active:scale-95 transition-all"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            <ChevronLeft className="w-4 h-4 text-[#C9A84C]" />
            <span>Anterior</span>
          </button>

          <span className="text-xs font-medium text-[var(--text-secondary)] px-2">
            {currentIndex + 1} / {reviews.length}
          </span>

          <button
            onClick={handleNext}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all"
            style={{
              background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))',
              color: '#0A0A0A',
            }}
          >
            <span>Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Indicadores / Dots de Navegação */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-8 flex-wrap">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="h-2 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: currentIndex === i ? '24px' : '8px',
                backgroundColor:
                  currentIndex === i
                    ? 'var(--color-gold)'
                    : 'var(--border-color)',
              }}
              aria-label={`Ir para o grupo de depoimentos ${i + 1}`}
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
