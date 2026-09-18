"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Moon, Sun, MessageCircle, ChevronDown } from "lucide-react";
import { NAV, CONTACT } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Theme init + scroll listener
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);

    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const closeMenu = () => setIsOpen(false);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ---------- WhatsApp button (reused) ---------- */
  const WhatsAppBtn = ({ className = "" }: { className?: string }) => (
    <a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#D4B96A] hover:shadow-lg hover:shadow-[#C9A84C]/20 ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </a>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-primary)]/95 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "bg-[var(--bg-primary)]/80 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:py-2.5 lg:px-8">
          {/* ---------- Logo Container (bloco separado, dobro do tamanho) ---------- */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#hero"
              className="group flex items-center transition-transform duration-200 hover:opacity-90"
            >
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-20 md:w-20">
                <Image
                  src={theme === "dark" ? "/Logo_com_fundo_preto.jpeg" : "/Logo_com_fundo_branco.jpeg"}
                  alt="Advocacia Kelly Carina"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </div>

          {/* ---------- Desktop nav ---------- */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const hasChildren = "children" in item && item.children.length > 0;
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-lg px-3 py-2 font-[family-name:var(--font-heading)] text-sm text-[var(--text-primary)] transition-colors duration-200 hover:text-[#C9A84C]"
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          hoveredItem === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Submenu */}
                  {hasChildren && hoveredItem === item.label && (
                    <ul className="absolute top-full left-0 z-50 mt-1 min-w-[220px] rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-2 shadow-xl backdrop-blur-xl">
                      {item.children!.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] transition-colors duration-200 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* ---------- Desktop right actions ---------- */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="rounded-full p-2 text-[var(--text-primary)] transition-colors duration-200 hover:bg-[var(--bg-card)] hover:text-[#C9A84C]"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <WhatsAppBtn />
          </div>

          {/* ---------- Mobile right actions ---------- */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="rounded-full p-2 text-[var(--text-primary)] transition-colors duration-200 hover:bg-[var(--bg-card)] hover:text-[#C9A84C]"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              className="rounded-lg p-2.5 text-[var(--text-primary)] transition-colors duration-200 hover:bg-[var(--bg-card)] focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </nav>
      </header>

      {/* ---------- Mobile slide-in menu drawer (fora da tag header para não herdar restrições) ---------- */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex h-[100dvh] max-h-[100dvh] w-[85vw] max-w-sm flex-col bg-[var(--bg-primary)] border-l border-[var(--border-color)] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        {/* Drawer Header Fixo */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)] flex-shrink-0">
          <div className="flex items-center">
            <div className="relative h-14 w-14">
              <Image
                src={theme === "dark" ? "/Logo_com_fundo_preto.jpeg" : "/Logo_com_fundo_branco.jpeg"}
                alt="Advocacia Kelly Carina"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <button
            onClick={closeMenu}
            aria-label="Fechar menu"
            className="rounded-lg p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links Roláveis */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => {
              const hasChildren = "children" in item && item.children.length > 0;
              const isItemOpen = hoveredItem === item.label;

              return (
                <li key={item.label} className="border-b border-[var(--border-color)]/50 last:border-b-0">
                  {hasChildren ? (
                    <div className="py-1">
                      <button
                        onClick={() =>
                          setHoveredItem(isItemOpen ? null : item.label)
                        }
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:text-[#C9A84C]"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-[var(--text-secondary)] transition-transform duration-200 ${
                            isItemOpen ? "rotate-180 text-[#C9A84C]" : ""
                          }`}
                        />
                      </button>
                      {isItemOpen && (
                        <ul className="mb-2 ml-3 border-l-2 border-[#C9A84C]/50 pl-3 space-y-1">
                          {item.children!.map((child) => (
                            <li key={child.href}>
                              <a
                                href={child.href}
                                onClick={closeMenu}
                                className="block rounded-lg px-3 py-2.5 text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[#C9A84C] hover:bg-[#C9A84C]/5"
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-3 font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:text-[#C9A84C]"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Drawer Footer Fixo */}
        <div className="mt-auto border-t border-[var(--border-color)] px-6 py-5 flex flex-col gap-3 flex-shrink-0 bg-[var(--bg-primary)]">
          <WhatsAppBtn className="w-full justify-center py-3 text-base font-bold shadow-md" />
          <p className="text-center text-xs text-[var(--text-secondary)]">
            {CONTACT.oab} • {CONTACT.city}/{CONTACT.state}
          </p>
        </div>
      </div>

      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
