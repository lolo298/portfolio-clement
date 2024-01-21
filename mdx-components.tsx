import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="my-2 text-4xl font-bold text-black desktop:text-8xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-2xl font-bold text-primary tablet:text-4xl"
        {...props}
      />
    ),
    Tag: (props) => (
      <span className="text-2xl font-bold text-black" {...props} />
    ),
    Header: (props) => <div className="p-16" {...props} />,
    Tags: (props) => <div className="flex flex-wrap gap-2" {...props} />,
    img: (props) => <img className="w-full" {...props} />,
    MainImg: (props) => <div className="w-screen" {...props} />,
    Content: (props) => (
      <div
        className="flex w-full flex-col items-center gap-4 p-16"
        {...props}
      />
    ),
    Wrapper: (props) => (
      <div className="flex flex-col gap-4 p-4 laptop:flex-row" {...props} />
    ),
    p: (props) => (
      <p
        className="group/p text-base font-normal text-black tablet:text-xl"
        {...props}
      />
    ),
    a: (props) => (
      // @ts-ignore
      <Link
        className="text-base font-normal text-primary hover:underline tablet:text-xl"
        {...props}
      />
    ),
    ...components,
  };
}
