import { IProjectCard } from "@/types/projects";
import matter from "gray-matter";
import path from "path";
import { readFileSync, readdirSync } from "fs";

export default function getProjects() {
  const projects: IProjectCard[] = readdirSync(
    path.join(process.cwd(), "app/projets"),
    {
      withFileTypes: true,
    }
  )
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      const file = readFileSync(
        path.join(process.cwd(), "app/projets", dirent.name, "page.mdx"),
        "utf-8"
      );
      const { data } = matter(file);
      data.slug = dirent.name;
      return JSON.parse(JSON.stringify(data));
    }) as IProjectCard[];
  return projects;
}
