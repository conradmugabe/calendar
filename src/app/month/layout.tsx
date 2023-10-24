import { AppMainTemplate } from "@/components/layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AppMainTemplate>{children}</AppMainTemplate>;
}
