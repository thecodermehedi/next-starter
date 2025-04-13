import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
//? To preview the output manifest.json file in the browser, you can use the following URL:
//! http://localhost:3000/manifest.webmanifest
const manifest = (): MetadataRoute.Manifest => {
  return {
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        purpose: "maskable",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/web-app-manifest-512x512.png",
        purpose: "maskable",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    description: siteConfig.description,
    short_name: siteConfig.shortName,
    background_color: "#ffffff",
    theme_color: "#ffffff",
    display: "standalone",
    name: siteConfig.name,
    start_url: "/",
  };
};

export default manifest;
