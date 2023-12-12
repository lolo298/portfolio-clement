import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center px-8 py-4 text-black">
      <h2 className="mb-8 text-2xl font-semibold">Clément Lascar</h2>
      <a href="mailto:clementlascar35@gmail.com" className="">
        Clementlascar35@gmail.com
      </a>
      <a href="tel:+336 95 54 40 10" className="mb-8">
        06 95 54 40 10
      </a>
      <Image src="/linkedin.png" alt="linkedin" width={25} height={25} />
    </footer>
  );
}
