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
    const initial = saved ?? "light";
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-primary)]/95 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "bg-[var(--bg-primary)]/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* ---------- Logo ---------- */}
        <a href="#hero" className="flex-shrink-0 relative h-10 w-20">
          <Image
            src={theme === "dark" ? "/Logo_com_fundo_preto.jpeg" : "/Logo_com_fundo_branco.jpeg"}
            alt="Advocacia Kelly Carina"
            fill
            className="object-contain"
            priority
          />
        </a>

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
          <WhatsAppBtn />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="rounded-lg p-2 text-[var(--text-primary)] transition-colors duration-200 hover:bg-[var(--bg-card)]"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* ---------- Mobile slide-in menu ---------- */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-72 transform bg-[var(--bg-primary)] transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pt-20 pb-8">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => {
              const hasChildren = "children" in item && item.children.length > 0;
              return (
                <li key={item.label}>
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() =>
                          setHoveredItem(hoveredItem === item.label ? null : item.label)
                        }
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-[family-name:var(--font-heading)] text-base text-[var(--text-primary)] transition-colors duration-200 hover:text-[#C9A84C]"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            hoveredItem === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {hoveredItem === item.label && (
                        <ul className="ml-3 mt-1 border-l-2 border-[#C9A84C]/30 pl-3">
                          {item.children!.map((child) => (
                            <li key={child.href}>
                              <a
                                href={child.href}
                                onClick={closeMenu}
                                className="block rounded-lg px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[#C9A84C]"
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-3 font-[family-name:var(--font-heading)] text-base text-[var(--text-primary)] transition-colors duration-200 hover:text-[#C9A84C]"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-auto border-t border-[var(--border-color)] pt-6">
            <WhatsAppBtn className="w-full justify-center" />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
