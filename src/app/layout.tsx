import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Header, SideNav } from "@/components/layout";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calendar",
  description: "Calendar is an online calendar service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} h-screen w-screen overflow-hidden flex flex-col`}
      >
        <Header />
        <main className="flex-1 flex">
          <SideNav />
          <section className="flex-1">{children}</section>
        </main>
      </body>
    </html>
  );
}
