import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
//? To preview the output sitemap.xml file in the browser, you can use the following URL:
//! http://localhost:3000/sitemap.xml

const sitemap = (): MetadataRoute.Sitemap => {
  /*
  TODO: This is a placeholder for the actual sitemap generation logic.
  !You can uncomment and modify the code below to generate the sitemap entries dynamically.
  ?For example:we are fetching blog posts from an API to generate the sitemap entries dynamically.

  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  const postEntries: MetadataRoute.Sitemap = posts.map(({ id }) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,
    lastModified: new Date(post.updatedAt).toISOString(),
    changeFrequency:,
    priority:
  }));
  */
  return [
    {
      lastModified: new Date().toISOString(),
      url: siteConfig.url,
    },
    //  ...postEntries,
  ];
};

export default sitemap;
