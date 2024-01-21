export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-col items-start">{children}</div>;
}
