"use client";

import useBoundingBox from "@/hooks/useBoundingBox";
import React from "react";
// import { init } from "next/dist/compiled/webpack/webpack";

export default function HomeBlob({
  targetId,
  duration = 20,
  id,
}: {
  targetId: string;
  id: string;
  duration?: number;
}) {
  const boundingBox = useBoundingBox(targetId);

  if (!boundingBox) return null;

  const initialTranslateX = 240;
  // const initialScale = 0.8;
  const initialSize = 380;
  const translateX = (boundingBox.width * initialTranslateX) / initialSize;
  const translateY =
    boundingBox.width > 500 ? (boundingBox.width > 960 ? 90 : 70) : 100;

  return (
    <div className="absolute">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1 1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id={id} clipPathUnits="userSpaceOnUse">
          <path
            fill="black"
            // d="M19.908,50.474C-19.89,101.274 11.701,171.64 32.471,200.474C63.023,236.874 108.851,236.64 127.946,231.974C185.03,222.774 214.041,189.807 221.411,174.474C249.953,116.874 193.438,43.14 161.613,13.474C94.479,-22.926 39.171,22.974 19.908,50.474Z"
            className="translate-x-[--moveX] translate-y-[--moveY] scale-[.35] md:scale-[.25] lg:scale-50"
            style={
              {
                "--moveX": `${translateX}px`,
                "--moveY": `${translateY}px`,
              } as React.CSSProperties
            }
          >
            {/* @ts-ignore */}
            <animate
              attributeName="d"
              values="
              M97.1 -97.1C122.1 -72.1 136.1 -36.1 153.4 17.3C170.7 70.7 191.4 141.4 166.4 179.3C141.4 217.1 70.7 222 4.1 217.9C-62.5 213.8 -124.9 200.6 -156.1 162.8C-187.3 124.9 -187.1 62.5 -182.3 4.8C-177.5 -52.8 -167.9 -105.6 -136.8 -130.6C-105.6 -155.6 -52.8 -152.8 -8.4 -144.4C36.1 -136.1 72.1 -122.1 97.1 -97.1;
              M116.7 -111C161.7 -71.7 215.8 -35.8 233.3 17.4C250.7 70.7 231.4 141.4 186.4 183.9C141.4 226.4 70.7 240.7 11.8 228.9C-47.1 217.1 -94.3 179.3 -125.9 136.8C-157.6 94.3 -173.8 47.1 -167.9 5.9C-162 -35.4 -134 -70.7 -102.4 -110C-70.7 -149.4 -35.4 -192.7 0.2 -192.9C35.8 -193.2 71.7 -150.3 116.7 -111;
              M137.7 -134.9C172.2 -103.2 189.6 -51.6 186.7 -2.9C183.7 45.7 160.5 91.5 126 116.5C91.5 141.5 45.7 145.7 -12.5 158.2C-70.7 170.7 -141.4 191.4 -189.3 166.4C-237.1 141.4 -262 70.7 -259.5 2.6C-256.9 -65.5 -226.7 -131.1 -178.9 -162.7C-131.1 -194.4 -65.5 -192.2 -7 -185.2C51.6 -178.3 103.2 -166.6 137.7 -134.9;
              
              M97.1 -97.1C122.1 -72.1 136.1 -36.1 153.4 17.3C170.7 70.7 191.4 141.4 166.4 179.3C141.4 217.1 70.7 222 4.1 217.9C-62.5 213.8 -124.9 200.6 -156.1 162.8C-187.3 124.9 -187.1 62.5 -182.3 4.8C-177.5 -52.8 -167.9 -105.6 -136.8 -130.6C-105.6 -155.6 -52.8 -152.8 -8.4 -144.4C36.1 -136.1 72.1 -122.1 97.1 -97.1;
              "
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </path>
        </clipPath>
      </svg>
    </div>
  );
}
