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
    <div
      className={twMerge(
        "relative flex w-2/3 items-center justify-center gap-4",
        className
      )}
    >
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
        className="flex cursor-pointer items-center justify-center"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="h-12 text-black hover:text-primary"
        />
      </div>
      <div
        ref={elem}
        className="flex w-full snap-x flex-row overflow-auto *:w-full *:flex-shrink-0 *:snap-center"
      >
        {children}
      </div>
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
        className="flex cursor-pointer items-center justify-center"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="h-12 text-black hover:text-primary"
        />
      </div>
    </div>
  );
}

export default Carrousel;
