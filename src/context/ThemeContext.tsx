import { useEffect, useState, type ReactNode } from "react";
import { THEME_STORAGE_KEY } from "../constants/theme";
import { ThemeContext } from "./ThemeContextInternal";
import type { Theme } from "./ThemeContextInternal";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return null;
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return getStoredTheme() ?? getSystemTheme();
}

/** Dispara um ripple circular a partir do ponto de origem (botão toggle) */
function triggerThemeRipple(originEl: HTMLElement | null) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ripple = document.createElement("div");
  ripple.className = "theme-ripple";

  if (originEl) {
    const rect = originEl.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
  } else {
    ripple.style.left = "50%";
    ripple.style.top = "50%";
  }

  document.body.appendChild(ripple);
  // Remove após a animação terminar
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const favicon = document.querySelector<HTMLLinkElement>(
      'link[rel="icon"]#theme-favicon',
    );
    if (favicon) {
      // Derive paths from the element's current href so Vite's base path is respected.
      const base = favicon.href.replace(/favicon(?:-light)?\.svg$/, "");
      favicon.href = theme === "dark" ? `${base}favicon.svg` : `${base}favicon-light.svg`;
    }
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const onSystemChange = (event: MediaQueryListEvent) => {
      if (getStoredTheme() !== null) return;
      setTheme(event.matches ? "dark" : "light");
    };

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const toggleTheme = (originEl?: HTMLElement | null) => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_STORAGE_KEY, next);
      triggerThemeRipple(originEl ?? null);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
