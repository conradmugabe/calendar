import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

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
        className={`${font.className} h-screen overflow-hidden flex flex-col`}
      >
        <header className="p-4 border-b">Calendar</header>
        <main className="flex-1 flex">
          <aside className="w-72 p-2">Create</aside>
          <section className="flex-1">{children}</section>
        </main>
      </body>
    </html>
  );
}
