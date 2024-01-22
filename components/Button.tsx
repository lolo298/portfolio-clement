import { twMerge } from "tailwind-merge";
import { Component, createElement } from "react";
import Link from "next/link";

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
  let type: any = "button";
  if (href) {
    type = Link;
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
