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
          className={`laptop:grid-rows-projects laptop:grid-areas-projects tablet:flex tablet:flex-col tablet:items-center laptop:grid laptop:w-11/12 laptop:grid-cols-masonry desktop:w-8/12 ${
            i !== 0 ? "laptop:-translate-y-52" : ""
          }`}
        >
          {projects.map((project, i) => (
            <ProjectCard {...project} key={i} pjId={`pj-${i + 1}`} />
          ))}
        </section>
      ))}
    </div>
  );
}

export default ProjectsPage;
