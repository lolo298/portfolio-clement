import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Contact from "./ContactPage";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="mx-auto my-0 flex w-full max-w-5xl items-center justify-between px-8 py-4 laptop:mx-4 laptop:mb-8 laptop:w-auto laptop:max-w-full laptop:p-4">
      <div className="flex w-8 items-center gap-4 tablet:w-10">
        <Image src="/logo.png" alt="Logo" width={30} height={30} />
      </div>
      <Menu />
    </header>
  );
}
