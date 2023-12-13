"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Arrows({ className }: { className?: string }) {
  const [arrows, setArrows] = useState<string[]>([]);
  const len = 3;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (arrows.length === 0) {
        setArrows(Array(len).fill("/arrows/default.svg"));
        return;
      }
      const val = arrows.findIndex((src) => /\/arrows\/\d\.svg/.test(src));
      const current = val === -1 ? 0 : val;
      const next = current === len - 1 ? 0 : current + 1;

      const newArrows = [...arrows];
      newArrows[current] = "/arrows/default.svg";
      newArrows[next] = `/arrows/${next + 1}.svg`;
      setArrows(newArrows);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [arrows]);

  return (
    <div
      className={twMerge(
        "flex justify-around lg:flex-[2] lg:justify-between",
        className
      )}
    >
      {arrows.map((src, i) => (
        <div
          key={i}
          className={`relative aspect-square w-13 rotate-[--rotate-val] lg:rotate-0`}
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
