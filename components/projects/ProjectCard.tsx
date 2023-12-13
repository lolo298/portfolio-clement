import { IProjectCard } from "@/types/projects";
import Tag from "@/components/projects/Tag";
import Image from "next/image";
import { readFile } from "fs/promises";
import { getPlaiceholder } from "plaiceholder";

export default async function ProjectCard({
  title,
  tags,
  date,
  image,
}: IProjectCard) {
  const imageBuffer = await readFile(`public${image}`);
  const { base64 } = await getPlaiceholder(imageBuffer, {
    size: 32,
  });

  return (
    <>
      <div className="flex h-full w-full flex-col justify-center gap-6 p-8 lg:w-3/4">
        <h3 className="text-3xl font-black uppercase text-black lg:text-6xl">
          {title}
        </h3>
        <div className="flex flex-row gap-2">
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
          <Tag>{date}</Tag>
        </div>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={base64}
          className="mt-4 lg:w-full"
        />
      </div>
    </>
  );
}
