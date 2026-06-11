import { createContext } from "react";

export type Theme = "dark" | "light";

export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: (originEl?: HTMLElement | null) => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);
