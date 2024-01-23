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

function Contact({ close }: { close: () => void }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    window.scrollTo(0, 0);

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <>
      {createPortal(
        <div className="absolute inset-0 z-50 flex h-screen w-screen flex-col items-center bg-bg/90">
          <div className="relative flex h-4/5 flex-col items-center justify-center gap-20 rounded-lg p-4 text-2xl text-black">
            <div className="relative">
              <h2 className="text-center text-4xl font-black text-black tablet:text-6xl">
                Discutons.
              </h2>
              <div className="absolute inset-y-0 -right-4 flex translate-x-full items-center justify-center">
                <FontAwesomeIcon
                  icon={faXmark}
                  size="xl"
                  onClick={close}
                  className="cursor-pointer"
                />
              </div>
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
        document.body
      )}
    </>
  );
}

export default Contact;
