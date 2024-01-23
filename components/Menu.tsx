"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import Contact from "./Contact";
import Hamburger from "./Hamburger";

function Menu() {
  const [contactOpen, setContactOpen] = useState(false);
  const [hambugerOpen, setHamburgerOpen] = useState(false);
  const contactToggle = () => {
    if (hambugerOpen) setHamburgerOpen(false);
    setContactOpen(!contactOpen);
  };
  const hamburgerToggle = () => {
    if (contactOpen) setContactOpen(false);
    setHamburgerOpen(!hambugerOpen);
  };

  useEffect(() => {
    if (contactOpen || hambugerOpen) {
      document.body.classList.add("overflow-hidden");
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [contactOpen, hambugerOpen]);

  return (
    <>
      <div
        id="ContactToggle"
        className="flex w-8 items-center gap-4 bg-bg tablet:w-10 laptop:hidden"
        onClick={hamburgerToggle}
      >
        <FontAwesomeIcon icon={hambugerOpen ? faXmark : faBars} size="2xl" />
      </div>
      <div className="hidden gap-5 laptop:flex ">
        <Link href="/APropos" className="hover:font-bold">
          A propos
        </Link>
        <Link href="/projets" className="hover:font-bold">
          Projets
        </Link>
        <button onClick={contactToggle} className="hover:font-bold">
          Contact
        </button>
      </div>

      {contactOpen && <Contact close={contactToggle} />}
      {hambugerOpen && (
        <Hamburger close={hamburgerToggle} openContact={contactToggle} />
      )}
    </>
  );
}

export default Menu;
