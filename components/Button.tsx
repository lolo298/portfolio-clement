import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={twMerge(
        "bg-[url('/buttonBlob.svg')] bg-contain bg-center bg-no-repeat p-4 font-semibold text-white",
        className
      )}
    >
      {children}
    </button>
  );
}
