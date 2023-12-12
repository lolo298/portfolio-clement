import Arrows from "@/components/Arrows";
import HomeBlob from "@/components/homeBlob";
import Button from "@/components/Button";
import { useId } from "react";
import FlowingText from "@/components/FlowingText";
import { IProjectCard } from "@/types/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Home() {
  const titleId = useId();

  const projects: IProjectCard[] = [
    {
      title: "Projet 1",
      tags: ["Design sprint", "UX/UI"],
      date: "2021",
      image: "/mockups/1.png",
    },
    {
      title: "Projet 2",
      tags: ["Design sprint", "UX/UI"],
      date: "2021",
      image: "/mockups/1.png",
    },
    {
      title: "Projet 3",
      tags: ["Design sprint", "UX/UI"],
      date: "2021",
      image: "/mockups/1.png",
    },
  ];

  return (
    <>
      <section className="relative">
        <h2 className="relative w-full p-10 text-center text-3xl font-black uppercase">
          Bonjour, je suis Clément lascar Ux/ui designer
        </h2>
        <h2
          id={titleId}
          className="absolute left-0 top-0 w-full bg-black p-10 text-center text-3xl font-black uppercase  text-white [clip-path:url(#clip0)] "
        >
          Bonjour, je suis Clément lascar Ux/ui designer
        </h2>
        <HomeBlob id="clip0" targetId={titleId} />
      </section>
      <section className="p-8">
        <h3 className="text-2xl font-black uppercase">A propos</h3>
        <p className="leading-8 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nec blandit massa, sit amet rutrum enim. Phasellus ullamcorper
          pellentesque elit facilisis scelerisque. Phasellus ullamcorper
          pellentesque elit .
        </p>
      </section>
      <section className="flex w-3/4 flex-col justify-center">
        <Arrows />
        <Button>Test</Button>
      </section>
      <FlowingText>Lorem ipsum Dolor Sit Amet</FlowingText>

      <section>
        {projects.map((project, i) => (
          <ProjectCard {...project} key={i} />
        ))}
      </section>
      <section className="p-8">
        <h3 className="text-2xl font-semibold uppercase text-black">
          Alors ces projets vous plaisent?
        </h3>
        <a className="font-semibold uppercase underline">On échange !</a>
      </section>
    </>
  );
}
