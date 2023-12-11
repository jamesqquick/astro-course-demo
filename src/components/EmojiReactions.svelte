<script lang="ts">
    import {Emoji, emojiList, type ReactionsDetails} from "../types/Emoji"
    import EmojiReaction from "./EmojiReaction.svelte"

    export let post: string
    export let reactionsDetails: ReactionsDetails
</script>

<div class="flex gap-x-2 justify-center items-center h-8">
    {#each emojiList as emoji}
        <EmojiReaction
            {emoji}
            reacted={reactionsDetails[emoji].reacted}
            count={reactionsDetails[emoji].count}
            {post}
        />
    {/each}
</div>
