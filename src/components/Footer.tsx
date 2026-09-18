import Image from "next/image";
import { CONTACT, SOCIALS, SITE } from '@/lib/constants';

const quickLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 relative">
      {/* Gold decorative top border */}
      <div className="h-1 bg-[#C9A84C]" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Logo & Brand */}
          <div>
            <div className="relative h-16 w-32">
              <Image
                src="/Logo_com_fundo_branco.png"
                alt="Advocacia Kelly Carina"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400">{SITE.name}</p>
            <p className="text-sm text-gray-500 mt-1">{CONTACT.oab}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C9A84C] font-bold uppercase mb-4 text-sm tracking-wide">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/links"
                  className="text-sm text-gray-400 hover:text-[#C9A84C] transition-colors"
                >
                  Links
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#C9A84C] font-bold uppercase mb-4 text-sm tracking-wide">
              Redes Sociais
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[#C9A84C] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SOCIALS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[#C9A84C] transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; 2025 {SITE.name}</p>
          <p className="mt-1">{CONTACT.oab}</p>
        </div>
      </div>
    </footer>
  );
}
