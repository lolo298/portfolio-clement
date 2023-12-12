"use client";
import useBoundingBox from "@/hooks/useBoundingBox";
import { useEffect, useId, useState } from "react";

export default function FlowingText({
  children,
  speed,
}: {
  children: string;
  speed?: number;
}) {
  const [pos, setPos] = useState(0);
  const id = useId();
  const box = useBoundingBox(id);
  const speedVal = speed ?? 100;

  useEffect(() => {
    const timeout = setInterval(() => {
      if (!box) return;
      setPos((pos) => {
        //invert the direction
        const newPos = pos + 1 * -1;
        return newPos < box.width * -1 ? 0 : newPos;
      });
    }, 1000 / speedVal);
    return () => clearInterval(timeout);
  }, [speedVal, box]);

  return (
    <div
      className="relative my-14 flex w-full overflow-hidden"
      style={
        {
          "--move": `${pos}px`,
        } as React.CSSProperties
      }
    >
      <span
        id={id}
        className="flowing-text- w-full translate-x-[--move] whitespace-nowrap text-5xl
          font-black uppercase text-bg [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]"
      >
        {children} {children} {children}{" "}
      </span>
    </div>
  );
}
