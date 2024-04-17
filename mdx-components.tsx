import Carrousel from "./components/Carrousel";
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
        className="whitespace-nowrap text-base font-bold text-primary tablet:text-base"
        {...props}
      />
    ),
    Tag: (props) => (
      <span className="text-2xl font-bold text-black" {...props} />
    ),
    Header: (props) => <div className="m-auto p-16" {...props} />,
    Tags: (props) => <div className="flex flex-wrap gap-2" {...props} />,
    img: (props) => <img className="w-full" {...props} />,
    MainImg: (props) => <div className="w-screen py-16" {...props} />,
    Content: (props) => (
      <div
        className="flex w-full flex-col items-center gap-4 p-16"
        {...props}
      />
    ),
    Wrapper: (props) => (
      <div
        className="flex w-2/3 flex-col gap-4 py-4 laptop:flex-col"
        {...props}
      />
    ),
    Grille: ({ children, ...rest }) => (
      <div
        className="grid w-2/3 w-2/3 grid-flow-row grid-cols-2 gap-12 pb-20 tablet:grid-cols-4"
        {...rest}
      >
        {children.map((child: any, index: number) => {
          const i = index + 1;
          return (
            <div key={index} className="">
              <h2 className="text-regular tablet:text-regular font-bold text-primary">
                {i.toString().padStart(2, "0")}.
              </h2>
              {child}
            </div>
          );
        })}
      </div>
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
    Carrousel: (props) => <Carrousel {...props} />,
    ...components,
  };
}
