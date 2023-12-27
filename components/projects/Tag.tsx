export default function Tag({ children }: { children: string }) {
  return (
    <div className="laptop:text-2xs w-max rounded-md bg-primary px-4 py-1 text-xs font-bold uppercase text-white tablet:p-10 tablet:py-2 laptop:px-3">
      {children}
    </div>
  );
}
