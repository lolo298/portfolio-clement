"use client";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Contact = ({ body, close }: { body: HTMLElement; close: () => void }) => {
  useEffect(() => {
    body.classList.add("overflow-hidden");
  });

  return (
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
              <FontAwesomeIcon icon={faChevronRight} className=" text-white" />
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
              <FontAwesomeIcon icon={faChevronRight} className=" text-white" />
            </span>
          </span>
          <span className="ml-14 group-hover:text-white">Mail</span>
        </a>
      </div>
    </div>
  );
};

function ContactPage() {
  const [body, setBody] = useState<HTMLElement | null>();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setBody(document.querySelector("body"));
  }, []);

  if (!body || hidden) {
    body?.classList.remove("overflow-hidden");
    return (
      <a onClick={() => setHidden(false)} href="/#ContactId">
        Contact
      </a>
    );
  }
  return (
    <>
      <a onClick={() => setHidden(false)} href="/#ContactId">
        Contact
      </a>
      {createPortal(
        <Contact body={body} close={() => setHidden(true)} />,
        body
      )}
    </>
  );
}

export default ContactPage;
