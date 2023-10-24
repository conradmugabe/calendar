import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

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
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
