import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Header } from "@/components/layout/header";

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
          <aside className="w-72 p-2">Create</aside>
          <section className="flex-1">{children}</section>
        </main>
      </body>
    </html>
  );
}
