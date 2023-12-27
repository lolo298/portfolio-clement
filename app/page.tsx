import Arrows from "@/components/Arrows";
import HomeBlob from "@/components/homeBlob";
import Button from "@/components/Button";
import { useId } from "react";
import FlowingText from "@/components/FlowingText";
import { IProjectCard } from "@/types/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/app/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative laptop:mb-[20vh] laptop:flex laptop:h-[70vh] laptop:items-center laptop:justify-center">
        <div className="relative">
          <div className="absolute left-28 hidden aspect-[365/478] w-80 -rotate-6 bg-[conic-gradient(from_163deg_at_46.03%_87.39%,var(--tw-gradient-stops))] from-gray-500 to-[#FFF_212deg] desktop:block ">
            <Image
              src="/clement.png"
              alt="bg"
              layout="fill"
              objectFit="contains"
              quality={100}
            />
          </div>
          <h2 className="relative w-full p-10 text-center text-3xl font-black uppercase tablet:text-7xl laptop:text-8xl desktop:-right-[15%] desktop:w-10/12">
            Bonjour, je suis Clément lascar Ux/ui designer
          </h2>
          <HomeBlob>Bonjour, je suis Clément lascar Ux/ui designer</HomeBlob>
          <span className="absolute -bottom-4 right-8 hidden rotate-[18deg] font-black uppercase laptop:inline">
            Scroll
          </span>
        </div>
      </section>
      <section
        id="AProposId"
        className="p-8 tablet:w-2/3 laptop:flex laptop:w-11/12 laptop:gap-6 desktop:w-8/12"
      >
        <h3 className="text-2xl font-black uppercase tablet:text-4xl laptop:flex-[3] laptop:text-3xl">
          A propos
        </h3>
        <div className="laptop:flex-[4] ">
          <p className="leading-8 text-black tablet:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nec blandit massa, sit amet rutrum enim. Phasellus ullamcorper
            pellentesque elit facilisis scelerisque. Phasellus ullamcorper
            pellentesque elit .
          </p>
          <div className="flex w-full flex-col justify-center p-8 tablet:flex-row tablet:justify-between tablet:gap-12">
            <Arrows />
            <Button className="tablet:flex-1">En savoir plus</Button>
          </div>
        </div>
      </section>
      <FlowingText>Lorem ipsum Dolor Sit Amet</FlowingText>

      <section
        id="ProjetcsId"
        className="tablet:flex tablet:flex-col tablet:items-center laptop:grid laptop:w-11/12 laptop:grid-cols-masonry laptop:grid-rows-masonry laptop:grid-areas-masonry desktop:w-8/12 "
      >
        {projects.map((project, i) => (
          <ProjectCard {...project} key={i} pjId={`pj-${i + 1}`} />
        ))}
        <div className=" p-8 grid-in-txt laptop:p-0">
          <h3 className="text-2xl font-semibold uppercase text-black tablet:w-1/2 tablet:text-4xl">
            Alors ces projets vous plaisent?
          </h3>
          <a className="font-semibold uppercase underline tablet:text-2xl">
            On échange !
          </a>
        </div>
      </section>
    </>
  );
}
