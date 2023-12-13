"use client";
import useBoundingBox from "@/hooks/useBoundingBox";
import { useEffect, useId, useState } from "react";

export default function FlowingText({
  children,
  duration = 20,
}: {
  children: string;
  duration?: number;
}) {
  const id = useId();
  const box = useBoundingBox(id);

  return (
    <div
      className="relative my-14 flex w-full overflow-hidden"
      style={
        {
          "--move": `-${box?.width}px`,
          "--duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      <span
        id={id}
        className="animate-flowing-text box-border whitespace-nowrap text-7xl font-black uppercase
          text-bg [animation-duration:--duration] [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] lg:text-9xl"
      >
        {children}&nbsp;
      </span>
      <span
        id={id}
        className="animate-flowing-text box-border whitespace-nowrap text-7xl font-black uppercase
          text-bg [animation-duration:--duration] [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] lg:text-9xl"
      >
        {children}&nbsp;
      </span>
    </div>
  );
}
