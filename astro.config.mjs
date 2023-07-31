import {defineConfig} from "astro/config"
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image"
import vercel from "@astrojs/vercel/static"
import sitemap from "@astrojs/sitemap"
import {remarkReadingTime} from "./src/remarkReadingTime"

// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    integrations: [tailwind(), image(), sitemap()],
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
    output: "static",
    site: "https://rhythm.nation",
})
