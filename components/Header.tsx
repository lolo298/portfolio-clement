import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 mx-auto my-0 flex w-full max-w-5xl items-center justify-between bg-bg px-8 py-4 laptop:mx-4 laptop:mb-8 laptop:w-auto laptop:max-w-full laptop:p-4">
      <Link href="/" className="flex w-8 items-center gap-4 tablet:w-10">
        <Image src="/logo.png" alt="Logo" width={30} height={30} />
      </Link>
      <Menu />
    </header>
  );
}
