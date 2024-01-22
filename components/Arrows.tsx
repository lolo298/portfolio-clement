"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const speed = parseInt(process.env.NEXT_PUBLIC_ARROW_SPEED ?? "500");

export default function Arrows({ className }: { className?: string }) {
  const [arrows, setArrows] = useState<string[]>([]);
  const len = 3;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (arrows.length === 0) {
        setArrows(Array(len).fill("/arrows/default.svg"));
        return;
      }
      const current = arrows.findIndex((src) => /\/arrows\/\d\.png/.test(src));
      const next = current === len - 1 ? 0 : current + 1;

      const newArrows = [...arrows];
      newArrows[current] = "/arrows/default.svg";
      newArrows[next] = `/arrows/${next + 1}.png`;
      setArrows(newArrows);
    }, speed);
    return () => clearTimeout(timeout);
  }, [arrows]);

  return (
    <div
      className={twMerge(
        "flex justify-around tablet:flex-[2] tablet:justify-between",
        className
      )}
    >
      {arrows.map((src, i) => (
        <div
          key={i}
          className={`relative aspect-square w-13 rotate-[--rotate-val] tablet:rotate-0`}
          style={
            { "--rotate-val": `${(i + 1) * 45}deg` } as React.CSSProperties
          }
        >
          <Image src={src} alt="arrow" fill />
        </div>
      ))}
    </div>
  );
}
