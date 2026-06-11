export function Logo() {
  return (
    <a
      href="#inicio"
      className="logo-link group flex items-center gap-2.5 sm:gap-3"
    >
      <span className="logo-mark relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-logo-mark text-[1.15rem] font-black leading-none tracking-[-0.08em] ring-1 ring-neon/25 sm:h-12 sm:w-12 sm:text-[1.35rem]">
        <span className="logo-mark-r mr-0">R</span>
        <span className="logo-mark-s">s</span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="logo-title text-sm font-semibold uppercase tracking-wide sm:text-base">
          Portfólio
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted sm:text-[11px]">
          estudante · ads
        </span>
      </span>
    </a>
  );
}
