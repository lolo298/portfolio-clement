"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { use, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons/faChevronCircleRight";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const mainElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const main = document.querySelector("main");
    if (main) mainElement.current = main as HTMLElement;
  }, []);

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <div onClick={toggle}>
      {isOpen ? (
        <>
          <FontAwesomeIcon icon={faXmark} size="2xl" />
          {createPortal(
            <div className="absolute inset-0 flex h-screen w-screen flex-col items-center justify-center bg-bg/90">
              <div className="flex h-3/4 flex-col items-center gap-8 rounded-lg p-4 text-2xl text-primary">
                <h2 className="text-center text-6xl font-black text-black">
                  Discutons.
                </h2>
                <a
                  href="https://www.linkedin.com/in/cl%C3%A9ment-lascar-a268aa252/"
                  className="group relative z-10 flex w-48 items-center"
                >
                  <span className="absolute left-0 -z-10 block h-12 w-12 rounded-full bg-black transition-all group-hover:w-full">
                    <span className="absolute inset-y-0 left-4 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className=" text-white"
                      />
                    </span>
                  </span>
                  <span className="ml-14 group-hover:text-white">Linkedin</span>
                </a>
                <a
                  href="mailto:clementlascar35@gmail.com"
                  className="group relative z-10 flex w-48 items-center"
                >
                  <span className="absolute left-0 -z-10 block h-12 w-12 rounded-full bg-black group-hover:w-full motion-safe:transition-all">
                    <span className="absolute inset-y-0 left-4 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className=" text-white"
                      />
                    </span>
                  </span>
                  <span className="ml-14 group-hover:text-white">Mail</span>
                </a>
              </div>
            </div>,
            mainElement.current as HTMLElement
          )}
        </>
      ) : (
        <FontAwesomeIcon icon={faBars} size="2xl" />
      )}
    </div>
  );
}

export default Menu;
