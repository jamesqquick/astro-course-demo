<script lang="ts">
    import type {Emoji} from "../types/Emoji"
    import {
        faThumbsUp,
        faStar,
        faRocket,
        faHeart,
    } from "@fortawesome/free-solid-svg-icons"
    import Fa from "svelte-fa"

    const nameToIcon = {
        thumbsup: faThumbsUp,
        star: faStar,
        rocket: faRocket,
        heart: faHeart,
    }
    export let emoji: Emoji
    export let reacted: boolean
    export let count: number
    export let post: string

    const handleEmojiReaction = async () => {
        try {
            const res = await fetch("/api/react", {
                method: "POST",
                body: JSON.stringify({
                    emoji,
                    post,
                }),
            })
            if (res.ok) {
                if (reacted) {
                    count--
                    reacted = false
                } else {
                    count++
                    reacted = true
                }
            } else if (res.status === 401) {
                window.location.href = "/login"
            }
        } catch (error) {}
    }
</script>

<button
    on:click={handleEmojiReaction}
    aria-label={`React with ${emoji}`}
    class={`w-16 flex gap-x-1 justify-center items-center text-gray-500 cursor-pointer hover:scale-110 transition-transform ${
        reacted
            ? "text-teal-700 border-2 border-teal-900 bg-teal-50 py-3 rounded-full"
            : ""
    }`}
>
    <Fa icon={nameToIcon[emoji]} />
    <span class="text-sm">
        {#if count > 0}
            {count}
        {/if}
    </span>
</button>
