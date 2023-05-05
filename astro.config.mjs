import {defineConfig} from "astro/config"
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), image()],
    output: "server",
    adapter: vercel(),
})
