import { useEffect, useState } from "react";

type Props = {
  onDone: () => void;
};

export function LoadingScreen({ onDone }: Props) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Progresso rápido: 0 → 100 em ~900ms
    const start = performance.now();
    const duration = 900;

    let raf: number;
    function tick(now: number) {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));

      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // Pequena pausa antes do fade-out
        setTimeout(() => {
          setLeaving(true);
          setTimeout(onDone, 500); // duração do fade-out
        }, 150);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      className={`loading-screen${leaving ? " loading-screen-leave" : ""}`}
      aria-hidden="true"
    >
      {/* Logo animado */}
      <div className="loading-logo">
        <span className="loading-logo-r">R</span>
        <span className="loading-logo-s">s</span>
      </div>

      {/* Barra de progresso */}
      <div className="loading-bar-track">
        <div
          className="loading-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Dots pulsando */}
      <div className="loading-dots" aria-label="Carregando">
        <span className="loading-dot" style={{ animationDelay: "0ms" }} />
        <span className="loading-dot" style={{ animationDelay: "180ms" }} />
        <span className="loading-dot" style={{ animationDelay: "360ms" }} />
      </div>
    </div>
  );
}
