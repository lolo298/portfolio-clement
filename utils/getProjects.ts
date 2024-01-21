import { IProjectCard } from "@/types/projects";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

export default function getProjects() {
  const projects: IProjectCard[] = fs
    .readdirSync(path.join(process.cwd(), "app/projets"), {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      console.log(dirent.name);
      const file = fs.readFileSync(
        path.join(process.cwd(), "app/projets", dirent.name, "page.mdx"),
        "utf-8"
      );
      const { data } = matter(file);
      data.slug = dirent.name;
      return JSON.parse(JSON.stringify(data));
    }) as IProjectCard[];
  return projects;
}
