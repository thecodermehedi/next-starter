import { env } from "@/env";

export type TSiteConfig = typeof siteConfig;

export const siteConfig = {
  description:
    "A Modern Next.js v15 starter template with TypeScript, TailwindCSS v4, and tools like ESLint, Prettier, and Zod for type-safe env vars. Zero config overhead!",
  author: {
    url: "https://github.com/thecodermehedi",
    name: "Mehedi Hasan",
  },
  url: env.NEXT_PUBLIC_BASE_URL,
  name: "NextStarter",
  shortName: "NS",
};
