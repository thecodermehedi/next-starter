import type { Metadata } from "next";

import { Geist_Mono, Geist } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  openGraph: {
    description: siteConfig.description,
    siteName: siteConfig.name,
    title: siteConfig.name,
    url: siteConfig.url,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    description: siteConfig.description,
    creator: siteConfig.author.name,
    card: "summary_large_image",
    title: siteConfig.name,
  },
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],
  title: {
    template: `%s - ${siteConfig.name}`,
    default: siteConfig.name,
  },
  appleWebApp: {
    title: siteConfig.name,
  },
  description: siteConfig.description,
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  //? Uncomment the line below to see error ui of global-error.tsx
  // throw new Error("PREVIEW_GLOBAL_ERROR_LAYOUT_UI");
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
