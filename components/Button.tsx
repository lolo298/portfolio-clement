import { twMerge } from "tailwind-merge";
import { createElement } from "react";

type mixed = a | React.HTMLProps<HTMLButtonElement>;

type a = { href: string } & React.HTMLProps<HTMLAnchorElement>;

export default function Button({
  children,
  className,
  href,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
} & (a | React.HTMLProps<HTMLButtonElement>)) {
  let type = "button";
  if (href) {
    type = "a";
  }

  return createElement(
    type,
    {
      ...rest,
      href,
      className: twMerge(
        "bg-[url('/buttonBlob.svg')] h-full bg-[size:400%_100%] bg-center bg-no-repeat p-4 font-semibold text-white text-center",
        className
      ),
    },
    children
  );
}
