import { useActiveSectionContext } from "../../context/active-section-context";
import { useEffect, useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;
  const { ref, inView } = useInView({
    threshold: isMobile ? 0.3 : threshold,
    rootMargin: "-100px 0px -100px 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
}
