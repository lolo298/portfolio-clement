"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Arrows() {
  const [arrows, setArrows] = useState<string[]>([]);
  const len = 3;

  useEffect(() => {
    console.log("useEffect");
    const timeout = setTimeout(() => {
      if (arrows.length === 0) {
        setArrows(Array(len).fill("/arrows/default.svg"));
        return;
      }
      const val = arrows.findIndex((src) => /\/arrows\/\d\.svg/.test(src));
      console.log({ val });
      const current = val === -1 ? 0 : val;
      const next = current === len - 1 ? 0 : current + 1;

      console.log({ current, next });
      const newArrows = [...arrows];
      newArrows[current] = "/arrows/default.svg";
      console.log({ newArrows });
      newArrows[next] = `/arrows/${next + 1}.svg`;
      setArrows(newArrows);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [arrows]);

  return (
    <div className="flex justify-around">
      {arrows.map((src, i) => (
        <div
          key={i}
          className={`w-13 relative aspect-square rotate-[--rotate-val]`}
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
