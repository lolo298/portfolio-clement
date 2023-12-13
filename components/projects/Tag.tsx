export default function Tag({ children }: { children: string }) {
  return (
    <div className="w-max rounded-md bg-primary px-4 py-1 text-xs font-bold uppercase text-white lg:p-10 lg:py-2">
      {children}
    </div>
  );
}
