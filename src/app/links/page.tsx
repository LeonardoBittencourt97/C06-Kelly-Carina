import type { Metadata } from 'next';
import Image from 'next/image';
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
  instagram: <InstagramIcon size={20} />,
  whatsapp: <MessageCircle size={20} />,
  globe: <Globe size={20} />,
  'map-pin': <MapPin size={20} />,
};

/* ── WhatsApp URL com mensagem pré-definida ───────── */

const WHATSAPP_PREFILLED_TEXT =
  'Olá, Dra. Kelly! Vi o seu perfil e gostaria de conversar sobre o meu caso para entender os meus direitos previdenciários.';
const WHATSAPP_PREFILLED_URL = `https://wa.me/5541998702590?text=${encodeURIComponent(
  WHATSAPP_PREFILLED_TEXT
)}`;

/* ── Page ─────────────────────────────────────────── */

export default function LinksPage() {
  const links = LINKS_PAGE.links.map((link) => {
    if (link.icon === 'whatsapp') {
      return { ...link, url: WHATSAPP_PREFILLED_URL };
    }
    return link;
  });

  return (
    <div
      className="relative h-dvh max-h-dvh w-full overflow-hidden flex flex-col justify-center items-center select-none"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* ── Background: Linhas Geométricas Douradas ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Glow dourado radial suave */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(circle at 50% 30%, rgba(201, 168, 76, 0.12) 0%, transparent 65%)',
          }}
        />

        {/* Linhas geométricas vetoriais de luxo */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradDiag1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
              <stop offset="40%" stopColor="#C9A84C" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#D4B96A" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B6914" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="goldGradDiag2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4B96A" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="goldGradBorder" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#D4B96A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Diagonais principais */}
          <line x1="-5%" y1="20%" x2="65%" y2="110%" stroke="url(#goldGradDiag1)" strokeWidth="1.2" />
          <line x1="35%" y1="-10%" x2="110%" y2="85%" stroke="url(#goldGradDiag1)" strokeWidth="1" />
          <line x1="105%" y1="15%" x2="25%" y2="115%" stroke="url(#goldGradDiag2)" strokeWidth="1.2" strokeDasharray="6 6" />

          {/* Molduras geométricas nos cantos */}
          <polygon
            points="0,0 160,0 0,160"
            fill="none"
            stroke="url(#goldGradDiag1)"
            strokeWidth="1.2"
          />
          <polygon
            points="0,0 80,0 0,80"
            fill="#C9A84C"
            fillOpacity="0.03"
          />

          <polygon
            points="100%,100% calc(100% - 160px),100% 100%,calc(100% - 160px)"
            fill="none"
            stroke="url(#goldGradDiag2)"
            strokeWidth="1.2"
          />
          <polygon
            points="100%,100% calc(100% - 80px),100% 100%,calc(100% - 80px)"
            fill="#C9A84C"
            fillOpacity="0.03"
          />

          {/* Formas geométricas angulares e losangos delicados */}
          <rect
            x="6%"
            y="12%"
            width="120"
            height="120"
            rx="12"
            transform="rotate(45 100 120)"
            fill="none"
            stroke="url(#goldGradDiag1)"
            strokeWidth="1"
          />
          <rect
            x="88%"
            y="70%"
            width="140"
            height="140"
            rx="16"
            transform="rotate(45 1100 700)"
            fill="none"
            stroke="url(#goldGradDiag2)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Linhas de acento horizontais e verticais */}
          <line x1="10%" y1="88%" x2="90%" y2="88%" stroke="url(#goldGradBorder)" strokeWidth="0.8" />
          <line x1="10%" y1="12%" x2="90%" y2="12%" stroke="url(#goldGradBorder)" strokeWidth="0.8" />
        </svg>

        {/* Marca d'água sutil KC */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-[26vw] font-bold opacity-[0.025]"
          style={{ color: 'var(--color-gold)' }}
        >
          KC
        </span>
      </div>

      {/* ── Conteúdo Principal: Sem scroll (100dvh garantido) ── */}
      <main className="relative z-10 w-full h-full max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
        {/* ── DESKTOP APENAS: Lado Esquerdo com a foto da Dra. Kelly ── */}
        <div className="hidden lg:flex h-full w-full items-center justify-center p-4 xl:p-8">
          <div className="relative h-[78vh] max-h-[620px] w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9A84C]/40 bg-[var(--bg-card)]">
            <Image
              src="/fotodeperfildaKelly.jpeg"
              alt="Dra. Kelly Carina — Advogada Previdenciária"
              fill
              className="object-cover object-top"
              priority
              sizes="(min-width: 1024px) 420px, 100vw"
            />
            {/* Gradiente dourado sutil na base da foto */}
            <div
              className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, rgba(10, 10, 10, 0.7) 0%, transparent 100%)',
              }}
            />
            {/* OAB Badge sutil na base da foto */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0A0A0A]/85 text-[#C9A84C] border border-[#C9A84C]/60 shadow-lg backdrop-blur-sm">
                OAB/PR 76.720 • Direito Previdenciário
              </span>
            </div>
          </div>
        </div>

        {/* ── LADO DIREITO (Desktop) / CONTEÚDO COMPLETO (Mobile) ── */}
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto h-full max-h-[100dvh] py-2">
          {/* Logo no topo dos cards (sem escrita textual 'Kelly Carina') */}
          <div className="flex flex-col items-center flex-shrink-0 mb-3 sm:mb-4">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36 flex items-center justify-center">
              <Image
                src="/Logo_com_fundo_branco.png"
                alt="Advocacia Kelly Carina"
                fill
                className="object-contain filter drop-shadow-md"
                priority
              />
            </div>
            {/* Subtítulo elegante sem a escrita 'Kelly Carina' */}
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A84C] mt-2 text-center">
              Direito Previdenciário • Curitiba/PR
            </p>
          </div>

          {/* Lista de Cards / Botões de Links */}
          <div className="flex w-full flex-col gap-2.5 sm:gap-3 flex-shrink-0">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative flex items-center justify-center gap-3 rounded-xl px-5 py-3 sm:py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg bg-[#0A0A0A] text-[#C9A84C] border border-[#C9A84C]/80 hover:bg-[#161616] hover:text-[#D4B96A] hover:border-[#D4B96A] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
              >
                <span className="text-[#C9A84C] transition-colors group-hover:text-[#D4B96A]">
                  {iconMap[link.icon] ?? null}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Rodapé discreto dentro da mesma tela sem scroll */}
          <p
            className="mt-4 sm:mt-5 text-[11px] sm:text-xs tracking-wider text-center flex-shrink-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            Advocacia Kelly Carina © 2025 • Todos os direitos reservados
          </p>
        </div>
      </main>
    </div>
  );
}
