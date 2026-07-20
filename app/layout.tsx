import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
   display: "swap",
});

const newsreader = Newsreader({
   subsets: ["latin"],
   variable: "--font-newsreader",
   display: "swap",
});

export const metadata: Metadata = {
   title: "Kin",
   description: "Kin is an independent lifestyle software studio creating thoughtful digital environments for how people work, explore, and connect.",
};

type RootLayoutProps = {
   children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
   return (
      <html lang="en">
         <body className={`${inter.variable} ${newsreader.variable}`}>{children}</body>
      </html>
   );
}
