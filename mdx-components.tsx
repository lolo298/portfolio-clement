import Carrousel from "./components/Carrousel";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="my-2 text-4xl font-bold text-black" {...props} />
    ),
    h2: (props) => (
      <h2 className="whitespace-nowrap font-semibold text-black" {...props} />
    ),
    h3: (props) => (
      <h3
        className="whitespace-nowrap text-xl font-black text-primary"
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
    MainContent: (props) => (
      <div
        className="flex w-full flex-col gap-4 px-4 py-8 text-2xl font-normal tablet:flex-row  tablet:items-center tablet:px-16"
        {...props}
      />
    ),
    Content: (props) => (
      <div className="flex w-full flex-col gap-4" {...props} />
    ),
    Aside: (props) => (
      <aside
        className="flex flex-col gap-4 tablet:w-1/3"
        style={{ height: "fit-content" }}
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
    Line: ({ date, sub, children, ...rest }) => (
      <div className="flex justify-between text-black" {...rest}>
        <div className="flex flex-col">
          <span className="text-4xl font-normal">{children}</span>
          <span className="text-2xl font-medium">{sub}</span>
        </div>
        <div className="text-2xl font-normal">{date}</div>
      </div>
    ),
    Bar: ({ content, ...props }) => (
      <div
        className="my-8 flex h-32 w-full flex-col justify-between"
        {...props}
      >
        <div id="top" className="flex items-center justify-between">
          <div className="h-1 w-2/5 bg-primary-light"></div>
          <div className="h-8 w-8 bg-primary-light"></div>
          <div className="h-1 w-2/5 bg-primary-light"></div>
        </div>
        <div className="flex items-center justify-around">
          {content.map((val: string) => (
            <span className="text-xl font-bold">{val}</span>
          ))}
        </div>
        <div id="bottom" className="h-1 w-full bg-primary-light"></div>
      </div>
    ),
    Categories: ({ children, ...rest }) => (
      <div
        className="flex w-full flex-col items-center gap-4 p-8 text-2xl font-normal tablet:p-16"
        {...rest}
      >
        {children}
      </div>
    ),

    Categorie: ({ title, children, ...rest }) => (
      <div className="w-full" {...rest}>
        <h4 className="mb-4 text-2xl font-normal text-black">{title}</h4>
        <div className="mb-8 flex flex-wrap gap-4 tablet:flex-nowrap">
          {children}
        </div>
      </div>
    ),
    Card: ({ title, name, img, children, center, ...rest }) => (
      <div
        className={`flex flex-grow flex-col rounded-lg border-2 border-slate-300 p-4 text-xs text-black ${
          center && "items-center text-center"
        }`}
        {...rest}
      >
        {img && <img src={img} className="size-24 object-cover" />}
        {name && <h5 className="font-semibold text-primary">{name}</h5>}
        <h6 className="font-semibold ">{title}</h6>
        <p className="font-normal"></p>
        {children}
      </div>
    ),

    ...components,
  };
}
