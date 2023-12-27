import Image from "next/image";
import projects from "@/app/projects";
import { IProjectCard } from "@/types/projects";

export default function Footer() {
  let projectsLinks: IProjectCard[] = [];

  for (let i = 0; i < 3; i++) {
    projectsLinks.push(projects[i]);
  }

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
        <a
          href="https://www.linkedin.com/in/cl%C3%A9ment-lascar-a268aa252/"
          className="w-max"
        >
          <Image src="/linkedin.png" alt="linkedin" width={25} height={25} />
        </a>
      </div>
      <div className="hidden flex-col justify-center tablet:flex">
        <h2 className="mb-8 text-2xl font-semibold">Projets</h2>
        {projectsLinks.map((project) => (
          <a key={project.title} href="#" className="underline">
            {project.title}
          </a>
        ))}
      </div>
    </footer>
  );
}
