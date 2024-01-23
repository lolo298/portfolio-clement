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
import Image from "next/image";

function Hamburger({
  close,
  openContact,
}: {
  close: () => void;
  openContact: () => void;
}) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    window.scrollTo(0, 0);

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <>
      {createPortal(
        <div className="bg-bg-dark absolute inset-0 z-50 h-screen w-screen items-center justify-center text-white">
          <header className="sticky inset-x-0 top-0 flex max-w-5xl justify-between px-8 py-4">
            <Link href="/" className="flex w-8 items-center gap-4 tablet:w-10">
              <Image
                src="/logo.png"
                alt="Logo"
                className="invert"
                width={30}
                height={30}
              />
            </Link>
            <div id="ContactToggle" className="" onClick={close}>
              <FontAwesomeIcon icon={faXmark} size="2xl" />
            </div>
          </header>
          <div className="flex h-4/5 flex-col items-center justify-center gap-20 text-4xl font-black">
            <Link href="/APropos" onClick={close}>
              A propos
            </Link>
            <Link href="/projets" onClick={close}>
              Projets
            </Link>
            <button onClick={openContact}>Contact</button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Hamburger;
