import {getCollection, type CollectionEntry} from "astro:content"

export const getAllCategories = (
    posts: CollectionEntry<"posts">[],
): string[] => {
    const categories = posts.flatMap(post => [...post.data.categories])
    return [...new Set(categories)]
}
