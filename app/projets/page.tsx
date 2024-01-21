import OnEchange from "@/components/OnEchange";
import ProjectCard from "@/components/projects/ProjectCard";
import chunk from "@/utils/chunk";
import getProjects from "@/utils/getProjects";

function ProjectsPage() {
  const projectsChunk = chunk(getProjects(), 5);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      {projectsChunk.map((projects, i) => (
        <section
          key={i}
          id="ProjetcsId"
          className="tablet:flex tablet:flex-col tablet:items-center laptop:grid laptop:w-11/12 laptop:grid-cols-masonry laptop:grid-rows-masonry laptop:grid-areas-masonry desktop:w-8/12 "
        >
          {projects.map((project, i) => (
            <ProjectCard {...project} key={i} pjId={`pj-${i + 1}`} />
          ))}
          {projects.length < 5 && (
            <div className=" p-8 grid-in-txt laptop:p-0">
              <h3 className="text-2xl font-semibold uppercase text-black tablet:w-1/2 tablet:text-4xl">
                Alors ces projets vous plaisent?
              </h3>
              <OnEchange />
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

export default ProjectsPage;
