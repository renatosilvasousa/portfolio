import { useEffect, useRef, useState } from "react";

export function NeonCursor() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setActive(true);
  }, []);

  useEffect(() => {
    if (!active) return;

    const svg = svgRef.current;
    if (!svg) return;

    const svgEl: SVGSVGElement = svg;

    let mouseX = -999;
    let mouseY = -999;
    let raf: number;
    let visible = false;

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!visible) {
        visible = true;
        svgEl.style.opacity = "1";
      }
    }

    function onMouseLeave() {
      visible = false;
      svgEl.style.opacity = "0";
    }

    function loop() {
      svgEl.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      raf = requestAnimationFrame(loop);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    raf = requestAnimationFrame(loop);
    document.body.style.cursor = "none";

    const style = document.createElement("style");
    style.id = "neon-cursor-style";
    style.textContent = `
      a, button, [role="button"], [tabindex], input, textarea, select, label {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
      document.getElementById("neon-cursor-style")?.remove();
    };
  }, [active]);

  if (!active) return null;

  return (
    <svg
      ref={svgRef}
      className="neon-cursor-arrow"
      aria-hidden="true"
      viewBox="0 0 14 20"
      width="14"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="1,1 1,17 5,13 8,19.5 10.5,18.5 7.5,12 13,12"
        fill="var(--cursor-outline)"
        strokeLinejoin="round"
      />
      <polygon
        points="2.5,2.5 2.5,15 5.8,11.5 8.8,17.8 10.2,17.2 7.2,10.8 12,10.8"
        fill="var(--cursor-fill)"
        strokeLinejoin="round"
      />
    </svg>
  );
}
