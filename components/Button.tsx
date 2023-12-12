export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className=" bg-[url('/buttonBlob.svg')] bg-contain bg-center bg-no-repeat p-4 font-semibold text-white">
      {children}
    </button>
  );
}
