import { useState, useEffect, RefObject } from "react";

export default function useBoundingBox(targetId: string) {
  const [boundingBox, setBoundingBox] = useState<DOMRect | null>(null);

  useEffect(() => {
    function handleResize() {
      const target = document.getElementById(targetId);
      if (target) {
        setBoundingBox(target.getBoundingClientRect());
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [targetId]);

  return boundingBox;
}
