import Arrows from "@/components/Arrows";
import Button from "@/components/Button";
import FlowingText from "@/components/FlowingText";
import Tag from "@/components/projects/Tag";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-6 p-8 text-black laptop:p-16 desktop:w-3/4">
        <p className=" font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nec blandit massa.
        </p>
        <p className="text-3xl font-bold laptop:text-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nec blandit massa, sit amet.
        </p>
      </section>
      <FlowingText style="full" color="#011ECB">
        Lorem ipsum Dolor Sit Amet
      </FlowingText>
      <section className="flex flex-col gap-4 p-8 tablet:w-2/3 laptop:w-11/12 laptop:flex-row desktop:w-2/3">
        <h2 className="text-2xl font-black tablet:text-4xl laptop:flex-[3]">
          Biographie
        </h2>
        <div className="laptop:flex-[4]">
          <p className="mb-4 font-normal text-black tablet:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nec blandit massa, sit amet rutrum enim. Phasellus ullamcorper
            pellentesque elit facilisis scelerisque. Phasellus ullamcorper
            pellentesque elit .
          </p>
          <div className="flex flex-col tablet:flex-row tablet:gap-12">
            <Arrows />
            <Button className="m-auto w-3/5 tablet:flex-1" href="/CV.pdf">
              Mon CV
            </Button>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col gap-4 p-16 tablet:w-2/3 laptop:w-11/12 laptop:flex-row desktop:w-2/3">
        <h2 className="text-4xl font-black laptop:flex-[3]">Expérience</h2>
        <div className="flex flex-col gap-8 font-normal text-black laptop:flex-[4]">
          <div>
            <h3 className="text-2xl tablet:text-4xl">MMB</h3>
            <p className="tablet:text-xl">
              UX/UI designer en alternance - <br className="tablet:hidden" />
              2022-2023
            </p>
          </div>
          <div>
            <h3 className="text-2xl tablet:text-4xl">MMB</h3>
            <p className="tablet:text-xl">
              UX/UI designer en alternance - <br className="tablet:hidden" />
              2022-2023
            </p>
          </div>
          <div>
            <h3 className="text-2xl tablet:text-4xl">MMB</h3>
            <p className="tablet:text-xl">
              UX/UI designer en alternance - <br className="tablet:hidden" />
              2022-2023
            </p>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col gap-4 p-16 tablet:w-2/3 laptop:w-11/12 laptop:flex-row desktop:w-2/3">
        <h2 className="text-4xl font-black laptop:flex-[3]">Compétences</h2>
        <div className="flex flex-col gap-4 laptop:flex-[4]">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-normal text-black">Général</h3>
            <div className="flex gap-2">
              <Tag style="rounded">UX/UI</Tag>
              <Tag style="rounded">UX/UI</Tag>
              <Tag style="rounded">UX/UI</Tag>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-normal text-black">Design</h3>
            <div className="flex gap-2">
              <Tag style="rounded">UX/UI</Tag>
              <Tag style="rounded">UX/UI</Tag>
              <Tag style="rounded">UX/UI</Tag>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-normal text-black">Technique</h3>
            <div className="flex gap-2">
              <Tag style="rounded">UX/UI</Tag>
              <Tag style="rounded">UX/UI</Tag>
              <Tag style="rounded">UX/UI</Tag>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
