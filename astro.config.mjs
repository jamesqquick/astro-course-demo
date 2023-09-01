import {defineConfig} from "astro/config"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import netlify from "@astrojs/netlify/functions"
import sitemap from "@astrojs/sitemap"
import {remarkReadingTime} from "./src/remarkReadingTime"

// https://astro.build/config
export default defineConfig({
    //TODO: choose which adapter to use, Vercel or Netlify
    // adapter: vercel(),
    adapter: netlify(),
    integrations: [tailwind(), sitemap()],
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
    output: "server",
    site: "https://rhythm.nation",
    server: {
        port: 3000,
    },
})
