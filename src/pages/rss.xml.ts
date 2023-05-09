import rss from "@astrojs/rss"
import {getCollection} from "astro:content"
import sanitizeHtml from "sanitize-html"
import MarkdownIt from "markdown-it"
import type {APIRoute} from "astro"

const parser = new MarkdownIt()

const get: APIRoute = async context => {
    const posts = await getCollection("posts")

    return rss({
        title: "Rhythm Nation",
        description: "A community of music producers and enthusiasts",
        site: context.site?.toString() ?? "",
        items: posts.map(post => ({
            title: post.data.title,
            link: `/blog/${post.slug}`,
            pubDate: new Date(post.data.date),
            content: sanitizeHtml(parser.render(post.body)),
            image: post.data.image,
        })),
    })
}

export {get}
