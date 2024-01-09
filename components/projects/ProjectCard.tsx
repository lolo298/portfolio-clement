import { IProjectCard } from "@/types/projects";
import Tag from "@/components/projects/Tag";
import Image from "next/image";
import { readFile } from "fs/promises";
import { getPlaiceholder } from "plaiceholder";
import { twMerge } from "tailwind-merge";

export default async function ProjectCard({
  title,
  tags,
  date,
  image,
  pjId,
}: IProjectCard & { pjId?: string }) {
  const imageBuffer = await readFile(`public${image}`);
  const { base64 } = await getPlaiceholder(imageBuffer, {
    size: 32,
  });

  return (
    <>
      <div
        className="group/card relative flex h-full w-full flex-col justify-center gap-6 p-8 tablet:w-3/4 laptop:w-auto laptop:p-0 laptop:grid-in-[--pjId] laptop:hover:brightness-90"
        style={
          {
            "--pjId": pjId,
          } as React.CSSProperties
        }
      >
        <div className="group-hover/card:block laptop:absolute laptop:top-0 laptop:hidden laptop:p-8">
          <h3 className="text-3xl font-black uppercase text-black tablet:text-6xl laptop:text-4xl">
            {title}
          </h3>
          <div className="flex flex-row gap-2">
            {tags.map((tag, i) => (
              <Tag style="squared" key={i}>
                {tag}
              </Tag>
            ))}
            <Tag style="squared">{date}</Tag>
          </div>
        </div>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={base64}
          className="mt-4 tablet:w-full laptop:h-full laptop:w-full laptop:object-cover laptop:object-center"
        />
      </div>
    </>
  );
}
