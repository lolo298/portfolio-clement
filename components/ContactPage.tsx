"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Contact = ({ body, close }: { body: HTMLElement; close: () => void }) => {
  useEffect(() => {
    body.classList.add("overflow-hidden");
  });

  return (
    <div id="ContactId" className="absolute inset-0 bg-white opacity-90 ">
      <p onClick={close}>Close</p>
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
