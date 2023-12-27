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
      className="tablet:text-9xl laptop:text-10xl relative my-14 flex w-full overflow-hidden whitespace-nowrap text-7xl font-black uppercase text-bg"
      style={
        {
          "--move": `-${box?.width}px`,
          "--duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      <span
        id={id}
        className="box-border animate-flowing-text 
           [animation-duration:--duration] [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]"
      >
        {children}&nbsp;
      </span>
      <span
        id={id}
        className="box-border animate-flowing-text 
           [animation-duration:--duration] [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]"
      >
        {children}&nbsp;
      </span>
    </div>
  );
}
