import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/remarkReadingTime";
import vercel from "@astrojs/vercel/serverless";
import netlify from "@astrojs/netlify/functions";
import svelte from "@astrojs/svelte";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), svelte(), sentry(), spotlightjs()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  output: "server",
  // adapter: vercel(),
  adapter: netlify(),
  site: "https://rhythm.nation",
  server: {
    port: 3000
  }
});