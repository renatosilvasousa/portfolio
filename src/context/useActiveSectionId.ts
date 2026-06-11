import { useContext } from "react";
import { ActiveSectionContext } from "./ActiveSectionContextInternal";

export function useActiveSectionId() {
  return useContext(ActiveSectionContext);
}
