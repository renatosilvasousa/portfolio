import { forwardRef } from "react";
import type { ForwardedRef, ReactNode } from "react";

type NavLinkProps = {
  href: string;
  active: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export const NavLink = forwardRef(function NavLink(
  { href, active, onClick, children, className = "" }: NavLinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      className={`nav-link ${active ? "nav-link-active" : ""} ${className}`}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </a>
  );
});
