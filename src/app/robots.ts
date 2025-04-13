import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

//? To preview the output robots.txt in the browser, you can use the following URL:
//! http://localhost:3000/robots.txt

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      disallow: "/api/", //? if multiple APIs, you can use disallow: ["/api/", "/api2/"]
      //? "*" for all, "Googlebot" format for a specific one and ["a", "b"] format for multiple user agents
      userAgent: "*",
      allow: "/", //? if multiple APIs, you can use allow: ["/", "/about/"]
      // crawlDelay: 5, // crawl delay in seconds
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
};

export default robots;
