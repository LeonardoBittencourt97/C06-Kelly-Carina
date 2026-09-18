import type { Metadata } from 'next';
import { MessageCircle, Globe, MapPin } from 'lucide-react';
import { LINKS_PAGE, SITE } from '@/lib/constants';

/* ── Instagram SVG (not in Lucide) ────────────────── */

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* ── SEO ──────────────────────────────────────────── */

export const metadata: Metadata = {
  title: `${LINKS_PAGE.title} — Links`,
  description: LINKS_PAGE.description,
  openGraph: {
    title: LINKS_PAGE.title,
    description: LINKS_PAGE.description,
    url: `${SITE.url}/links`,
    siteName: SITE.name,
    type: 'profile',
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: LINKS_PAGE.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: LINKS_PAGE.title,
    description: LINKS_PAGE.description,
    images: [SITE.ogImage],
  },
};

/* ── Icon map ─────────────────────────────────────── */

const iconMap: Record<string, React.ReactNode> = {
  instagram: <InstagramIcon />,
  whatsapp: <MessageCircle size={20} />,
  globe: <Globe size={20} />,
  'map-pin': <MapPin size={20} />,
};

/* ── Page ─────────────────────────────────────────── */

export default function LinksPage() {
  return (
    <div
      className="relative flex min-h-dvh flex-col items-center justify-center px-4 py-8 lg:py-16 selection:bg-[#C9A84C] selection:text-black overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Background KC watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-[28vw] font-bold opacity-[0.03]"
        style={{ color: 'var(--color-gold)' }}
      >
        KC
      </span>

      {/* Main container: 1 col on mobile, 50% / 50% split on desktop */}
      <main className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center">
        {/* LEFT COLUMN (Desktop 50%) / TOP (Mobile) */}
        <div className="flex flex-col items-center justify-center w-full p-4 lg:p-8">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px] xl:w-[460px] xl:h-[460px] flex items-center justify-center">
            <img
              src="/Logo_com_fundo_branco.png"
              alt="Advocacia Kelly Carina"
              className="w-full h-full object-contain filter drop-shadow-xl"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* RIGHT COLUMN (Desktop 50%) / BOTTOM (Mobile) */}
        <div className="flex flex-col items-center lg:items-start justify-center w-full max-w-md mx-auto p-4 lg:p-8 gap-6">
          {/* Header text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 w-full">
            <h1
              className="text-3xl lg:text-4xl font-semibold tracking-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {LINKS_PAGE.title}
            </h1>
            <p className="text-base font-medium tracking-wide text-[#C9A84C]">
              {LINKS_PAGE.subtitle}
            </p>
            <p className="text-sm tracking-wide" style={{ color: 'var(--text-secondary)' }}>
              {LINKS_PAGE.description}
            </p>
          </div>

          {/* Links list */}
          <div className="flex w-full flex-col gap-4">
            {LINKS_PAGE.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative flex items-center justify-center gap-3 rounded-xl px-6 py-4 text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg bg-[#0A0A0A] text-[#C9A84C] border border-[#C9A84C] hover:bg-[#161616] hover:text-[#D4B96A] hover:border-[#D4B96A] hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]"
              >
                <span className="text-[#C9A84C] transition-colors group-hover:text-[#D4B96A]">
                  {iconMap[link.icon] ?? null}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Footer */}
          <p className="mt-2 text-xs tracking-wide text-center lg:text-left w-full" style={{ color: 'var(--text-secondary)' }}>
            Advocacia Kelly Carina © 2025 • Todos os direitos reservados
          </p>
        </div>
      </main>
    </div>
  );
}
