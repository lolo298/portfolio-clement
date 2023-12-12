// "use client";

// import useBoundingBox from "@/hooks/useBoundingBox";
// import { init } from "next/dist/compiled/webpack/webpack";

export default function HomeBlob({
  targetId,
  id,
}: {
  targetId: string;
  id: string;
}) {
  // const boundingBox = useBoundingBox(targetId);

  // if (!boundingBox) return null;

  // const initialTranslateX = 500;
  // const initialScale = 0.8;
  // const initialSize = 875;
  // const translateX = (boundingBox.width * initialTranslateX) / initialSize;
  // const scale = (boundingBox.width * initialScale) / initialSize;

  return (
    <div className="absolute">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1 1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id={id} clipPathUnits="userSpaceOnUse">
          <path
            fill="black"
            d="M19.908,50.474C-19.89,101.274 11.701,171.64 32.471,200.474C63.023,236.874 108.851,236.64 127.946,231.974C185.03,222.774 214.041,189.807 221.411,174.474C249.953,116.874 193.438,43.14 161.613,13.474C94.479,-22.926 39.171,22.974 19.908,50.474Z"
            style={{
              transform: "scale(0.5) translate(380px, 100px)",
            }}
          />
        </clipPath>
      </svg>
    </div>
  );
}
