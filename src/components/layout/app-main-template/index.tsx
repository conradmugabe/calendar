import { Header, SideNav } from "..";

export function AppMainTemplate({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <Header />
      <main className="flex flex-1">
        <SideNav />
        <section className="flex-1">{children}</section>
      </main>
    </div>
  );
}
