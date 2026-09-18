'use client';

import Link from 'next/link';

interface SectionCTAProps {
  text: string;
  helperText?: string;
  message?: string;
  className?: string;
  align?: 'center' | 'left';
  variant?: 'gold' | 'white';
}

export default function SectionCTA({
  text,
  helperText,
  message = 'Olá, Dra. Kelly! Gostaria de conversar com você sobre o meu caso previdenciário.',
  className = '',
  align = 'center',
  variant = 'gold',
}: SectionCTAProps) {
  const whatsappUrl = `https://wa.me/5541998702590?text=${encodeURIComponent(message)}`;

  const isWhite = variant === 'white';

  return (
    <div
      className={`relative z-10 flex flex-col ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      } gap-3 pt-8 sm:pt-10 ${className}`}
    >
      {helperText && (
        <p className="text-xs sm:text-sm font-medium tracking-wide text-[var(--text-secondary)] max-w-md">
          {helperText}
        </p>
      )}

      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 ${
          isWhite
            ? 'bg-white text-[#0A0A0A] border-2 border-[#C9A84C] hover:border-[#8B6914] hover:bg-[#FFFDF7] shadow-[0_4px_20px_rgba(201,168,76,0.35)] hover:shadow-[0_8px_28px_rgba(201,168,76,0.55)]'
            : 'text-[#0A0A0A] hover:shadow-2xl shadow-lg hover:brightness-105'
        }`}
        style={
          isWhite
            ? { boxShadow: '0 4px 20px rgba(201, 168, 76, 0.35)' }
            : {
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))',
                color: '#0A0A0A',
                boxShadow: '0 4px 20px rgba(201, 168, 76, 0.32)',
              }
        }
      >
        {/* WhatsApp Icon */}
        <svg
          className={`w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110 ${
            isWhite ? 'text-[#25D366]' : 'fill-current'
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        <span>{text}</span>

        {/* Subtle arrow */}
        <svg
          className={`w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${
            isWhite ? 'text-[#8B6914]' : 'stroke-current'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </Link>
    </div>
  );
}
