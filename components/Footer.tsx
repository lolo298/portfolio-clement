import Image from "next/image";
import { IProjectCard } from "@/types/projects";
import getProjects from "@/utils/getProjects";
import Link from "next/link";

export default function Footer() {
  const projects = getProjects().reduce((acc, cur) => {
    if (acc.length >= 3) return acc;
    acc.push(cur);
    return acc;
  }, [] as IProjectCard[]);

  return (
    <footer className="m-auto flex justify-between px-8 py-4 text-black laptop:w-10/12 desktop:w-8/12">
      <div className="flex flex-col justify-center">
        <h2 className="mb-8 text-2xl font-semibold">Clément Lascar</h2>
        <a href="mailto:clementlascar35@gmail.com" className="">
          Clementlascar35@gmail.com
        </a>
        <a href="tel:+336 95 54 40 10" className="mb-8">
          06 95 54 40 10
        </a>
        <Link
          href="https://www.linkedin.com/in/cl%C3%A9ment-lascar-a268aa252/"
          className="w-max"
        >
          <Image src="/linkedin.png" alt="linkedin" width={25} height={25} />
        </Link>
      </div>
      <div className="hidden flex-col justify-center tablet:flex">
        <h2 className="mb-8 text-2xl font-semibold">Projets</h2>
        {projects.map((project) => (
          <Link
            key={project.title}
            href={`/projets/${project.slug}`}
            className="underline"
          >
            {project.title}
          </Link>
        ))}
      </div>
    </footer>
  );
}
