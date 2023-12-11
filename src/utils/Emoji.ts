import {Emoji, emojiList, type ReactionsDetails} from "../types/Emoji"
import {XataClient} from "../xata"

export const getReactionCountsByPost = async (post: string) => {
    const xata = new XataClient({apiKey: import.meta.env.XATA_API_KEY})

    const aggregateConfig = emojiList.reduce((acc: any, emoji: Emoji) => {
        acc[emoji] = {
            count: {
                filter: {emoji, post},
            },
        }
        return acc
    }, {})
    const {aggs} = await xata.db.reactions.aggregate(aggregateConfig)
    return aggs
}

export const getReactionsDetailsByPost = async (
    post: string,
    userId?: string,
) => {
    const xata = new XataClient({apiKey: import.meta.env.XATA_API_KEY})
    const reactionCounts = await getReactionCountsByPost(post)
    const reactionsByUser = await xata.db.reactions
        .filter({"user.id": userId || "", post})
        .getMany()

    const reactionsDetails = emojiList.reduce(
        (acc: ReactionsDetails, emoji: Emoji) => {
            acc[emoji] = {
                count: reactionCounts[emoji],
                reacted: reactionsByUser.some(
                    reaction => reaction.emoji === emoji,
                ),
            }
            return acc
        },
        {
            [Emoji.heart]: {count: 0, reacted: false},
            [Emoji.rocket]: {count: 0, reacted: false},
            [Emoji.star]: {count: 0, reacted: false},
            [Emoji.thumbsup]: {count: 0, reacted: false},
        },
    )

    return reactionsDetails
}
