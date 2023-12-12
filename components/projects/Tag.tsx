export default function Tag({ children }: { children: string }) {
  return (
    <div className="w-max rounded-md bg-primary px-4 py-1 text-xs font-bold uppercase text-white">
      {children}
    </div>
  );
}
