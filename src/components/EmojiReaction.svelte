<script lang="ts">
    import {
        faThumbsUp,
        faStar,
        faRocket,
        faHeart,
    } from "@fortawesome/free-solid-svg-icons"
    import Fa from "svelte-fa"
    import type {Emoji} from "../utils/Emojis"

    export let count: number = 0
    export let reacted: boolean = false
    export let name: Emoji
    export let handleEmojiClick: (emoji: Emoji) => void

    const nameToIcon = {
        thumbsup: faThumbsUp,
        star: faStar,
        rocket: faRocket,
        heart: faHeart,
    }
</script>

<button
    on:click={() => handleEmojiClick(name)}
    class={`w-16 flex gap-x-1 justify-center items-center text-gray-500 cusor-pointer hover:scale-110 transition-transform ${
        reacted
            ? "text-teal-700 border-2 border-teal-900 bg-teal-50 py-3 rounded-full"
            : ""
    }`}
>
    <Fa icon={nameToIcon[name]} class={`text-inherit`} />
    <span class=" text-sm">
        {#if count > 0}
            {count}
        {/if}
    </span>
</button>
