import { useEffect, useRef } from "react";

/**
 * Aplica fade+slide ao elemento quando entra no viewport.
 * O elemento precisa ter a classe `reveal` no CSS para funcionar.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = {},
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respeita prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("revealed");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px", ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
