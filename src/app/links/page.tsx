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
      className="relative flex min-h-dvh flex-col items-center justify-center px-4 py-12"
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

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-8">
        {/* Photo */}
        <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-full border-[3px] border-[var(--color-gold)] bg-[var(--bg-card)]">
          {/* Placeholder / fallback — replace src with actual photo path */}
          <img
            src="/kelly.jpg"
            alt={LINKS_PAGE.title}
            className="h-full w-full object-cover"
            width={112}
            height={112}
          />
        </div>

        {/* Name */}
        <div className="flex flex-col items-center gap-2">
          <h1
            className="text-2xl font-semibold tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {LINKS_PAGE.title}
          </h1>
          <p className="text-sm tracking-wide" style={{ color: 'var(--text-secondary)' }}>
            {LINKS_PAGE.subtitle}
          </p>
        </div>

        {/* Links */}
        <div className="flex w-full flex-col gap-4">
          {LINKS_PAGE.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-center gap-3 rounded-xl px-6 py-4 text-base font-medium transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
              style={{
                backgroundColor: 'var(--color-gold)',
                color: '#1A1A1A',
              }}
            >
              {iconMap[link.icon] ?? null}
              {link.label}
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-4 text-xs tracking-wide" style={{ color: 'var(--text-secondary)' }}>
          Advocacia Kelly Carina © 2025
        </p>
      </div>
    </div>
  );
}
