"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const mainElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const main = document.querySelector("main");
    if (main) mainElement.current = main as HTMLElement;
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <>
          <div
            id="ContactToggle"
            className="flex w-8 items-center gap-4 bg-bg tablet:w-10 laptop:hidden"
            onClick={toggle}
          >
            <FontAwesomeIcon icon={faXmark} size="2xl" />
          </div>
          <div className="hidden gap-5 laptop:flex ">
            <Link href="/APropos" className="hover:font-bold">
              A propos
            </Link>
            <Link href="/projets" className="hover:font-bold">
              Projets
            </Link>
            <button onClick={toggle} className="hover:font-bold">
              Contact
            </button>
          </div>
          {createPortal(
            <div className="absolute inset-0 flex h-screen w-screen flex-col items-center justify-center bg-bg/90">
              <div className="relative flex h-3/4 flex-col items-center gap-8 rounded-lg p-4 text-2xl text-primary">
                <h2 className="text-center text-6xl font-black text-black">
                  Discutons.
                </h2>
                <div className="absolute right-0 top-0 hidden -translate-y-full translate-x-full laptop:block">
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="2xl"
                    onClick={toggle}
                    className="cursor-pointer hover:text-primary"
                  />
                </div>
                <Link
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
                </Link>
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
        <>
          <div
            className="flex w-8 items-center gap-4 bg-bg tablet:w-10 laptop:hidden"
            id="ContactToggle"
            onClick={toggle}
          >
            <FontAwesomeIcon icon={faBars} size="2xl" />
          </div>
          <div className="hidden gap-5 laptop:flex ">
            <Link href="/APropos" className="hover:font-bold">
              A propos
            </Link>
            <Link href="/projets" className="hover:font-bold">
              Projets
            </Link>
            <button onClick={toggle} className="hover:font-bold">
              Contact
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Menu;
