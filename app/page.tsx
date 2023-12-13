import Arrows from "@/components/Arrows";
import HomeBlob from "@/components/homeBlob";
import Button from "@/components/Button";
import { useId } from "react";
import FlowingText from "@/components/FlowingText";
import { IProjectCard } from "@/types/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/app/projects";

export default function Home() {
  const titleId = useId();

  return (
    <>
      <section className="relative">
        <h2 className="relative w-full p-10 text-center text-3xl font-black uppercase lg:text-7xl">
          Bonjour, je suis Clément lascar Ux/ui designer
        </h2>
        <h2
          id={titleId}
          className="absolute left-0 top-0 w-full bg-black p-10 text-center text-3xl font-black uppercase text-white  [clip-path:url(#clip0)] lg:text-7xl "
        >
          Bonjour, je suis Clément lascar Ux/ui designer
        </h2>
        <HomeBlob id="clip0" targetId={titleId} />
      </section>
      <section className="p-8 lg:w-2/3">
        <h3 className="text-2xl font-black uppercase lg:text-4xl">A propos</h3>
        <p className="leading-8 text-black lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nec blandit massa, sit amet rutrum enim. Phasellus ullamcorper
          pellentesque elit facilisis scelerisque. Phasellus ullamcorper
          pellentesque elit .
        </p>
      </section>
      <section className="flex w-3/4 flex-col justify-center p-8 lg:w-2/3 lg:flex-row lg:justify-between lg:gap-12">
        <Arrows />
        <Button className="lg:flex-1">En savoir plus</Button>
      </section>
      <FlowingText>Lorem ipsum Dolor Sit Amet</FlowingText>

      <section className="lg:flex lg:flex-col lg:items-center">
        {projects.map((project, i) => (
          <ProjectCard {...project} key={i} />
        ))}
      </section>
      <section className="p-8 lg:w-3/4">
        <h3 className="text-2xl font-semibold uppercase text-black lg:w-1/2 lg:text-4xl">
          Alors ces projets vous plaisent?
        </h3>
        <a className="font-semibold uppercase underline lg:text-2xl">
          On échange !
        </a>
      </section>
    </>
  );
}
