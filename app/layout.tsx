import type { Metadata } from "next";
import { Syne } from "next/font/google";
import DirectionalCursor from "./components/DirectionalCursor";

import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bagora-Web & App Development Agency",
  description: "We design and build high-performance websites and custom applications that scale with your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} h-full`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col antialiased cursor-none">
      <DirectionalCursor />

        {children}
      </body>
    </html>
  );
}