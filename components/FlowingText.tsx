"use client";
import useBoundingBox from "@/hooks/useBoundingBox";
import { useEffect, useId, useState } from "react";

export default function FlowingText({
  children,
  style,
  color,
  duration = 20,
}: {
  children: string;
  style: "full" | "outline";
  color: string;
  duration?: number;
}) {
  const id = useId();
  const box = useBoundingBox(id);

  return (
    <div
      className={`"bg-white relative my-14 flex w-full overflow-hidden whitespace-nowrap text-7xl font-black uppercase ${
        style === "outline" ? "text-bg" : "text-[--color]"
      }
      tablet:text-9xl laptop:text-10xl`}
      style={
        {
          "--move": `-${box?.width}px`,
          "--duration": `${duration}s`,
          "--color": color,
        } as React.CSSProperties
      }
    >
      <span
        id={id}
        className="box-border animate-flowing-text 
           [animation-duration:--duration] [text-shadow:_1px_1px_0_var(--color),_-1px_-1px_0_var(--color),_1px_-1px_0_var(--color),_-1px_1px_0_var(--color),_1px_1px_0_var(--color)]"
      >
        {children}&nbsp;
      </span>
      <span
        id={id}
        className="box-border animate-flowing-text 
           [animation-duration:--duration] [text-shadow:_1px_1px_0_var(--color),_-1px_-1px_0_var(--color),_1px_-1px_0_var(--color),_-1px_1px_0_var(--color),_1px_1px_0_var(--color)]"
      >
        {children}&nbsp;
      </span>
    </div>
  );
}
