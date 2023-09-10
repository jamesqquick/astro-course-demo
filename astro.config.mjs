import {defineConfig} from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import {remarkReadingTime} from "./src/remarkReadingTime"
import netlify from "@astrojs/netlify/functions"

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), sitemap()],
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
    output: "server",
    adapter: netlify(),
    site: "https://rhythm.nation",
    server: {
        port: 3000,
    },
})
