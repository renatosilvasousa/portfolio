import { useRef } from "react";
import { useTheme } from "../context/useTheme";
import { IconMoon, IconSun } from "./icons";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={() => toggleTheme(btnRef.current)}
      className={`theme-toggle flex size-10 items-center justify-center rounded-lg border transition-all duration-300 ${className}`}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Modo claro" : "Modo escuro"}
    >
      {isDark ? (
        <IconSun className="size-[1.15rem]" />
      ) : (
        <IconMoon className="size-[1.15rem]" />
      )}
    </button>
  );
}
