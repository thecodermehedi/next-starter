import type { Metadata } from "next";

import { Geist_Mono, Geist } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | NextStarter",
    default: "NextStarter",
  },
  twitter: {
    card: "summary_large_image",
  },
  appleWebApp: {
    title: "NextStarter",
  },
  description: "A Next.js Starter Template",
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
