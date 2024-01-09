export default function Tag({
  children,
  style,
}: {
  children: string;
  style: "rounded" | "squared";
}) {
  return (
    <div
      className={`w-max ${
        style === "squared" ? "rounded-md" : "rounded-full"
      } bg-primary px-4 py-1 text-xs font-bold uppercase text-white tablet:p-6 tablet:py-2 laptop:px-3 laptop:text-xs`}
    >
      {children}
    </div>
  );
}
