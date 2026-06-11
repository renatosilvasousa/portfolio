import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "../data/content";
import { IconArrowDown } from "./icons";
import { ProjectCard } from "./ProjectCard";

type ProjectItem = (typeof projects.items)[number];

type ProjectCarouselProps = {
  items: readonly ProjectItem[];
};

const LG_BREAKPOINT = "(min-width: 1024px)";
const SWIPE_THRESHOLD = 48;

function getSlidesPerView() {
  // Sempre exibir 1 slide por vez
  return 1;
}

export function ProjectCarousel({ items }: ProjectCarouselProps) {
  const total = items.length;
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const [index, setIndex] = useState(0);
  const [layout, setLayout] = useState({ slideStep: 0, slidesPerView: 1 });

  const maxIndex = Math.max(0, total - layout.slidesPerView);
  const safeIndex = Math.min(index, maxIndex);
  const pageCount = maxIndex + 1;

  const goToPage = useCallback(
    (pageIndex: number) => {
      setIndex(Math.min(Math.max(pageIndex, 0), maxIndex));
    },
    [maxIndex],
  );

  const goPrev = useCallback(() => {
    if (pageCount <= 1) return;
    setIndex(safeIndex === 0 ? maxIndex : safeIndex - 1);
  }, [maxIndex, pageCount, safeIndex]);

  const goNext = useCallback(() => {
    if (pageCount <= 1) return;
    setIndex(safeIndex >= maxIndex ? 0 : safeIndex + 1);
  }, [maxIndex, pageCount, safeIndex]);

  useEffect(() => {
    setIndex((current) =>
      Math.min(current, Math.max(0, total - getSlidesPerView())),
    );
  }, [total]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const updateLayout = () => {
      const slidesPerView = getSlidesPerView();
      const gap =
        Number.parseFloat(
          getComputedStyle(track).columnGap || getComputedStyle(track).gap,
        ) || 0;
      const slideWidth =
        (viewport.offsetWidth - gap * (slidesPerView - 1)) / slidesPerView;
      setLayout({ slideStep: slideWidth + gap, slidesPerView });
    };

    updateLayout();

    const mediaQuery = window.matchMedia(LG_BREAKPOINT);
    mediaQuery.addEventListener("change", updateLayout);
    window.addEventListener("resize", updateLayout);

    const resizeObserver = new ResizeObserver(updateLayout);
    resizeObserver.observe(viewport);

    return () => {
      mediaQuery.removeEventListener("change", updateLayout);
      window.removeEventListener("resize", updateLayout);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  function onTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? 0;
    touchDeltaX.current = 0;
  }

  function onTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    touchDeltaX.current =
      (event.touches[0]?.clientX ?? 0) - touchStartX.current;
  }

  function onTouchEnd() {
    if (touchDeltaX.current <= -SWIPE_THRESHOLD) goNext();
    else if (touchDeltaX.current >= SWIPE_THRESHOLD) goPrev();

    touchStartX.current = 0;
    touchDeltaX.current = 0;
  }

  const visibleFrom = safeIndex + 1;
  const visibleTo = Math.min(safeIndex + layout.slidesPerView, total);

  return (
    <div className="project-carousel" aria-roledescription="carousel">
      <div
        ref={viewportRef}
        className="project-carousel-viewport"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="project-carousel-track"
          style={{
            transform: `translate3d(-${safeIndex * layout.slideStep}px, 0, 0)`,
          }}
        >
          {items.map((project) => (
            <div key={project.title} className="project-carousel-slide">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {pageCount > 1 ? (
        <div className="project-carousel-controls">
          <button
            type="button"
            className="project-carousel-nav"
            onClick={goPrev}
            aria-label="Projeto anterior"
          >
            <IconArrowDown className="size-5 rotate-90" />
          </button>

          <div
            className="project-carousel-dots"
            role="tablist"
            aria-label="Páginas de projetos"
          >
            {Array.from({ length: pageCount }, (_, pageIndex) => (
              <button
                key={pageIndex}
                type="button"
                role="tab"
                className={
                  pageIndex === safeIndex
                    ? "project-carousel-dot project-carousel-dot-active"
                    : "project-carousel-dot"
                }
                aria-label={`Ir para a página ${pageIndex + 1}`}
                aria-selected={pageIndex === safeIndex}
                onClick={() => goToPage(pageIndex)}
              />
            ))}
          </div>

          <span className="project-carousel-counter" aria-live="polite">
            {layout.slidesPerView > 1
              ? `${visibleFrom}-${visibleTo} / ${total}`
              : `${safeIndex + 1} / ${total}`}
          </span>

          <button
            type="button"
            className="project-carousel-nav"
            onClick={goNext}
            aria-label="Próximo projeto"
          >
            <IconArrowDown className="size-5 -rotate-90" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
