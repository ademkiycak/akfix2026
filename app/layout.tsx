import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import { gothamFont } from "./fonts";
import "./globals.css";

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "Akfix",
  description: "Akfix Master Of Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${gothamFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
