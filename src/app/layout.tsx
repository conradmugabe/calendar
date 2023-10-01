import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Header, SideNav } from "@/components/layout";
import { calendarSettingsService } from "@/calendar";
import { initMock } from "../../mocks";

if (process.env.NODE_ENV === "development") {
  initMock();
}

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calendar",
  description: "Calendar is an online calendar service.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await calendarSettingsService.get();

  return (
    <html lang="en">
      <body
        className={`${font.className} h-screen w-screen overflow-hidden flex flex-col`}
      >
        <Header settings={settings} />
        <main className="flex-1 flex">
          <SideNav />
          <section className="flex-1">{children}</section>
        </main>
      </body>
    </html>
  );
}
