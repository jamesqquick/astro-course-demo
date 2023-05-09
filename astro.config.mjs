import {defineConfig} from "astro/config"
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image"
import vercel from "@astrojs/vercel/serverless"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    integrations: [tailwind(), image(), sitemap()],
    output: "server",
    site: "https://rhythm.nation",
})
