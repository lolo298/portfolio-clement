"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

function Carrousel({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay: number;
}) {
  const elem = useRef<HTMLDivElement | null>(null);
  const currentImg = useRef(1);

  useEffect(() => {
    if (delay == 0) return;
    const interval = setInterval(() => {
      if (elem.current) {
        if (currentImg.current >= elem.current.children.length) {
          elem.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          currentImg.current = 1;
        } else {
          elem.current.scrollBy({
            left: elem.current.clientWidth,
            behavior: "smooth",
          });
        }
        currentImg.current++;
      }
    }, delay);
    return () => clearInterval(interval);
  }, [delay, elem]);

  return (
    <div className={twMerge("relative w-2/3", className)}>
      <div className="group absolute inset-y-0 left-0 right-3/4">
        <div
          onClick={() => {
            if (elem.current) {
              if (currentImg.current <= 1) {
                elem.current.scrollTo({
                  left: elem.current.scrollWidth,
                  behavior: "smooth",
                });
                currentImg.current = elem.current.children.length;
              } else {
                elem.current.scrollBy({
                  left: -elem.current.clientWidth,
                  behavior: "smooth",
                });
              }
              currentImg.current--;
            }
          }}
          className="hidden h-full cursor-pointer items-center justify-center bg-gradient-to-r from-black/50 to-black/0 group-hover:flex"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="h-12 text-white" />
        </div>
      </div>
      <div className="group absolute inset-y-0 left-3/4 right-0">
        <div
          onClick={() => {
            if (elem.current) {
              if (currentImg.current >= elem.current.children.length) {
                elem.current.scrollTo({
                  left: 0,
                  behavior: "smooth",
                });
                currentImg.current = 1;
              } else {
                elem.current.scrollBy({
                  left: elem.current.clientWidth,
                  behavior: "smooth",
                });
              }
              currentImg.current++;
            }
          }}
          className="hidden h-full cursor-pointer items-center justify-center bg-gradient-to-l from-black/50 to-black/0 group-hover:flex"
        >
          <FontAwesomeIcon icon={faChevronRight} className="h-12 text-white" />
        </div>
      </div>
      <div
        ref={elem}
        className="flex w-full snap-x flex-row overflow-auto *:w-full *:flex-shrink-0 *:snap-center"
      >
        {children}
      </div>
    </div>
  );
}

export default Carrousel;
