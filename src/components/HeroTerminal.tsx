import { heroTerminal, site } from "../data/content";
import { useTypedEffect } from "../hooks/useTypedEffect";

export function HeroTerminal() {
  const typedStack = useTypedEffect(heroTerminal.stack, {
    typeSpeed: 60,
    deleteSpeed: 30,
    pauseAfterType: 1600,
    pauseBeforeType: 250,
  });

  return (
    <div className="hero-terminal w-full max-w-md min-w-0" aria-hidden>
      <div className="hero-terminal-header">
        <div className="flex gap-1.5" aria-hidden>
          <span className="hero-terminal-dot hero-terminal-dot-1" />
          <span className="hero-terminal-dot hero-terminal-dot-2" />
          <span className="hero-terminal-dot hero-terminal-dot-3" />
        </div>
        <span className="font-mono text-[10px] text-subtle sm:text-xs">
          {heroTerminal.filename}
        </span>
      </div>
      <pre className="hero-terminal-body overflow-x-auto whitespace-pre-wrap break-words">
        <code>
          <span className="text-subtle">{heroTerminal.comment}</span>
          {"\n"}
          <span className="text-neon">const</span> dev = {"{"}
          {"\n"}
          {"  "}
          <span className="text-body">nome</span>:{" "}
          <span className="text-neon">'{site.author}'</span>,{"\n"}
          {"  "}
          <span className="text-body">cargo</span>:{" "}
          <span className="text-neon">'{heroTerminal.cargo}'</span>,{"\n"}
          {"  "}
          <span className="text-body">curso</span>:{" "}
          <span className="text-neon">'ADS'</span>,{"\n"}
          {"  "}
          <span className="text-body">stack</span>:{" "}
          <span className="text-neon">
            '{typedStack}
            <span className="hero-terminal-cursor" aria-hidden>|</span>'
          </span>,{"\n"}
          {"  "}
          <span className="text-body">status</span>:{" "}
          <span className="text-neon">'{heroTerminal.status}'</span>,{"\n"}
          {"};"}
          {"\n"}
          <span className="text-neon">export default</span> dev;
        </code>
      </pre>
    </div>
  );
}
