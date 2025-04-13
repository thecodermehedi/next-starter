import type { MetadataRoute } from "next";
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
    description: "A Next.js Starter Template",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    display: "standalone",
    name: "NextStarter",
    short_name: "NS",
    start_url: "/",
  };
};

export default manifest;
