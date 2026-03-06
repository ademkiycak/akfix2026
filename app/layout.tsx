import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import { gothamFont } from "./fonts";
import "./globals.css";
import { SEO } from "@/lib/seo";

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
const faviconVersion = "12";

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: SEO.defaultTitle,
    template: `%s | ${SEO.siteName}`
  },
  description: SEO.description,

  openGraph: {
    type: "website",
    siteName: SEO.siteName,
    url: SEO.siteUrl,
    title: SEO.defaultTitle,
    description: SEO.description
  },

  twitter: {
    card: "summary_large_image",
    creator: SEO.twitter
  },

  robots: {
    index: true,
    follow: true,
  },

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
