"use client";
import useBoundingBox from "@/hooks/useBoundingBox";
import { useEffect, useId, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

export default function FlowingText({
  children,
  color,
  src,
  qte = 2,
  duration = 20,
}: {
  children: string;
  color: string;
  src: string;
  duration?: number;
  qte?: number;
}) {
  const id = useId();
  const box = useBoundingBox(id);

  return (
    <div className="my-8 flex h-32 w-full flex-col justify-between overflow-hidden">
      <div id="top" className="flex items-center justify-between">
        <div className="h-1 w-2/5 bg-primary-light"></div>
        <div className="relative size-8">
          <Image src={src} alt="icon" className="object-cover" fill />
        </div>
        <div className="h-1 w-2/5 bg-primary-light"></div>
      </div>
      <div className="flex w-screen-2w">
        <div
          className="flex w-screen items-center justify-around"
          style={
            {
              "--move": `-${box?.width}px`,
              "--duration": `${duration}s`,
              "--color": color,
            } as React.CSSProperties
          }
        >
          {new Array(qte).fill(1).map((_, i) => (
            <span
              id={id}
              className="animate-flowing-text whitespace-nowrap text-xl font-bold [animation-duration:--duration]"
              key={i}
            >
              {children}
            </span>
          ))}
        </div>
        <div
          className="flex w-screen items-center justify-around"
          style={
            {
              "--move": `-${box?.width}px`,
              "--duration": `${duration}s`,
              "--color": color,
            } as React.CSSProperties
          }
        >
          {new Array(qte).fill(1).map((_, i) => (
            <span
              id={id}
              className="animate-flowing-text whitespace-nowrap text-xl font-bold [animation-duration:--duration]"
              key={i}
            >
              {children}
            </span>
          ))}
        </div>
      </div>
      <div id="bottom" className="h-1 w-full bg-primary-light"></div>
    </div>
  );
}
