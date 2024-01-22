import OnEchange from "@/components/OnEchange";
import ProjectCard from "@/components/projects/ProjectCard";
import chunk from "@/utils/chunk";
import getProjects from "@/utils/getProjects";

function ProjectsPage() {
  const projectsChunk = chunk(getProjects(), 4);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      {projectsChunk.map((projects, i) => (
        <section
          key={i}
          id="ProjetcsId"
          className={`laptop:grid-areas-test laptop:grid-rows-test tablet:flex tablet:flex-col tablet:items-center laptop:grid laptop:w-11/12 laptop:grid-cols-masonry desktop:w-8/12 ${
            i !== 0 ? "-translate-y-52" : ""
          }`}
        >
          {projects.map((project, i) => (
            <ProjectCard {...project} key={i} pjId={`pj-${i + 1}`} />
          ))}
        </section>
      ))}
      <div className=" -translate-y-52 p-8 grid-in-txt laptop:p-0">
        <h3 className="text-2xl font-semibold uppercase text-black tablet:w-1/2 tablet:text-4xl">
          Alors ces projets vous plaisent?
        </h3>
        <OnEchange />
      </div>
    </div>
  );
}

export default ProjectsPage;
