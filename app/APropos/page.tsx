import Arrows from "@/components/Arrows";
import Button from "@/components/Button";
import FlowingBar from "@/components/FlowingBar";
import Tag from "@/components/projects/Tag";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col items-start">
        <div className="flex w-full flex-col gap-4 px-4 py-8 text-2xl font-normal tablet:flex-row  tablet:items-center tablet:px-16">
          <div className="flex w-full flex-col gap-4">
            <h1 className="my-2 text-4xl font-bold text-black">Title</h1>
            <p className="group/p text-base font-normal text-black tablet:text-xl">
              lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <aside
            className="flex flex-col gap-4 tablet:w-1/3"
            style={{ height: "fit-content" }}
          >
            <h2 className="whitespace-nowrap font-semibold text-black">
              Title
            </h2>
            <p className="group/p text-base font-normal text-black tablet:text-xl">
              My content
            </p>

            <h2 className="whitespace-nowrap font-semibold text-black">
              Title
            </h2>
            <p className="group/p text-base font-normal text-black tablet:text-xl">
              My content
            </p>
          </aside>
        </div>
        <FlowingBar color="#000" qte={2} src="/logo.png">
          Designer UX/UI
        </FlowingBar>
        <Categories>
          <Categorie title="Lorem">
            <Card title="card title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card>
            <Card title="card title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card>
            <Card title="card title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card>
          </Categorie>
          <Categorie title="Lorem">
            <Card
              title="card title"
              name="Name"
              img="https://placehold.co/400"
              center
            >
              Lorem ipsum
            </Card>
            <Card
              title="card title"
              name="Name"
              img="https://placehold.co/400"
              center
            >
              Lorem ipsum
            </Card>
            <Card
              title="card title"
              name="Name"
              img="https://placehold.co/400"
              center
            >
              Lorem ipsum
            </Card>
            <Card
              title="card title"
              name="Name"
              img="https://placehold.co/400"
              center
            >
              Lorem ipsum
            </Card>
            <Card
              title="card title"
              name="Name"
              img="https://placehold.co/400"
              center
            >
              Lorem ipsum
            </Card>
          </Categorie>
          <Categorie title="Lorem">
            <Card title="card title" img="https://placehold.co/400" center />
            <Card title="card title" img="https://placehold.co/400" center />
            <Card title="card title" img="https://placehold.co/400" center />
            <Card title="card title" img="https://placehold.co/400" center />
            <Card title="card title" img="https://placehold.co/400" center />
          </Categorie>
        </Categories>
        <div className="flex w-full flex-col gap-4 px-4 py-8 text-2xl font-normal tablet:px-16">
          <h3 className="whitespace-nowrap text-xl font-black text-primary">
            Title
          </h3>
          <Line date="2023-2024" sub="subtitle">
            Title
          </Line>
          <Line date="2023-2024" sub="subtitle">
            Title
          </Line>
          <Line date="2023-2024" sub="subtitle">
            Title
          </Line>
          <br />
          <br />
          <h3 className="whitespace-nowrap text-xl font-black text-primary">
            Title
          </h3>
          <Line date="2023-2024" sub="subtitle">
            Title
          </Line>
          <Line date="2023-2024" sub="subtitle">
            Title
          </Line>
          <Line date="2023-2024" sub="subtitle">
            Title
          </Line>
        </div>
      </div>
    </>
  );
}

function Categories({ children, ...rest }: { children: any }) {
  return (
    <div
      className="flex w-full flex-col items-center gap-4 p-8 text-2xl font-normal tablet:p-16"
      {...rest}
    >
      {children}
    </div>
  );
}

function Categorie({
  title,
  children,
  ...rest
}: {
  title: string;
  children: any;
}) {
  return (
    <div className="w-full" {...rest}>
      <h4 className="mb-4 text-2xl font-normal text-black">{title}</h4>
      <div className="mb-8 flex flex-wrap gap-4 tablet:flex-nowrap">
        {children}
      </div>
    </div>
  );
}

type CardProps = {
  title: string;
  name?: string;
  img?: string;
  children?: any;
  center?: boolean;
};

function Card({
  title,
  name,
  img,
  children = null,
  center = false,
  ...rest
}: CardProps) {
  return (
    <div
      className={`flex flex-grow flex-col rounded-lg border-2 border-slate-300 p-4 text-xs text-black ${
        center && "items-center text-center"
      }`}
      {...rest}
    >
      {img && (
        <div className="relative size-24">
          <Image alt={title || ""} src={img} fill />
        </div>
      )}
      {name && <h5 className="font-semibold text-primary">{name}</h5>}
      <h6 className="font-semibold">{title}</h6>
      <p className="font-normal">{children}</p>
    </div>
  );
}

function Line({
  date,
  sub,
  children,
  ...rest
}: {
  date: string;
  sub: string;
  children: any;
}) {
  return (
    <div className="flex w-full justify-between text-black" {...rest}>
      <div className="flex flex-col">
        <span className="text-4xl font-normal">{children}</span>
        <span className="text-2xl font-medium">{sub}</span>
      </div>
      <div className="text-2xl font-normal">{date}</div>
    </div>
  );
}
