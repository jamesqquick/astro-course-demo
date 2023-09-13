import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/remarkReadingTime";


// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  output: "static",
  site: "https://rhythm.nation",
  server: {
    port:3000
  }
});