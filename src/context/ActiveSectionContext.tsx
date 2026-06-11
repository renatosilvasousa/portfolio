import { type ReactNode } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { ActiveSectionContext } from "./ActiveSectionContextInternal";

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const activeId = useActiveSection();

  return (
    <ActiveSectionContext.Provider value={activeId}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
