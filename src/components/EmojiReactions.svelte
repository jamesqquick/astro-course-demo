<script lang="ts">
    import EmojiReaction from "./EmojiReaction.svelte"
    import {Emoji, type ReactionDetails} from "../utils/Emojis"
    export let post: string
    export let reactionDetails: ReactionDetails

    const handleEmojiClick = async (emoji: Emoji) => {
        try {
            const res = await fetch("/api/react", {
                method: "POST",
                body: JSON.stringify({
                    emoji,
                    post,
                }),
            })
            if (res.ok) {
                if (reactionDetails[emoji].reacted) {
                    reactionDetails[emoji].count -= 1
                } else {
                    reactionDetails[emoji].count += 1
                }
                reactionDetails[emoji].reacted = !reactionDetails[emoji].reacted
            } else if (res.status === 401) {
                window.location.href = "/login"
            }
        } catch (error) {
            console.error(error)
        }
    }
</script>

<div class="flex gap-x-2 justify-center items-center h-8">
    <EmojiReaction
        reacted={reactionDetails["thumbsup"].reacted}
        count={reactionDetails["thumbsup"].count}
        {handleEmojiClick}
        name={Emoji.thumbsup}
    />

    <EmojiReaction
        reacted={reactionDetails["heart"].reacted}
        count={reactionDetails["heart"].count}
        {handleEmojiClick}
        name={Emoji.heart}
    />
    <EmojiReaction
        reacted={reactionDetails["rocket"].reacted}
        count={reactionDetails["rocket"].count}
        {handleEmojiClick}
        name={Emoji.rocket}
    />
    <EmojiReaction
        reacted={reactionDetails["star"].reacted}
        count={reactionDetails["star"].count}
        {handleEmojiClick}
        name={Emoji.star}
    />
</div>
