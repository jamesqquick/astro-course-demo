import {defineConfig} from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import {remarkReadingTime} from "./src/remarkReadingTime"
// import vercel from "@astrojs/vercel/serverless"
import netlify from "@astrojs/netlify/functions"
import svelte from "@astrojs/svelte"

import sentry from "@sentry/astro"

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        sitemap(),
        svelte(),
        sentry({
            dsn: "https://ab69a01d3403b79bf1b71fdce18be5a7@o4506232146034688.ingest.sentry.io/4506384553869312",
            sourceMapsUploadOptions: {
                project: "javascript-astro",
                authToken: process.env.SENTRY_AUTH_TOKEN,
            },
        }),
    ],
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
    output: "server",
    // adapter: vercel(),
    adapter: netlify(),
    site: "https://rhythm.nation",
    server: {
        port: 3000,
    },
})
