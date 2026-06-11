import { useEffect, useRef, useState } from "react";
import { navLinks } from "../data/content";
import { useActiveSectionId } from "../context/useActiveSectionId";
import { isNavSectionActive } from "../lib/nav";
import { IconClose, IconMenu } from "./icons";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSectionId();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    if (menuOpen) {
      firstMenuLinkRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (menuOpen && window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div
        className={`mobile-menu-backdrop fixed inset-0 transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "header-scrolled" : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between gap-3 py-4">
          <Logo />

          <div className="hidden items-center gap-1 md:flex">
            <nav className="flex items-center gap-1" aria-label="Principal">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  active={isNavSectionActive(activeSection, link.href)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <ThemeToggle className="ml-2" />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              className="theme-toggle flex size-10 items-center justify-center rounded-lg"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? (
                <IconClose className="size-5" />
              ) : (
                <IconMenu className="size-5" />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          aria-hidden={!menuOpen}
          className={`mobile-menu-panel border-t border-theme transition-all duration-300 md:hidden ${
            menuOpen
              ? "visible max-h-[32rem] opacity-100"
              : "invisible max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="mobile-menu-line" aria-hidden />
          <nav
            className="flex flex-col gap-1 px-5 pb-2 pt-4"
            aria-label="Menu mobile"
          >
            {navLinks.map((link, index) => (
              <NavLink
                key={link.href}
                href={link.href}
                active={isNavSectionActive(activeSection, link.href)}
                onClick={closeMenu}
                className="py-3"
                ref={index === 0 ? firstMenuLinkRef : undefined}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mobile-menu-glow" aria-hidden />
          </nav>
        </div>
      </header>
    </>
  );
}
