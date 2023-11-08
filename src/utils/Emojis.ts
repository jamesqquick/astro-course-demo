import {XataClient, getXataClient} from "../xata"

export enum Emoji {
    thumbsup = "thumbsup",
    star = "star",
    heart = "heart",
    rocket = "rocket",
}
export interface ReactionDetails {
    ["thumbsup"]: {
        count: number
        reacted: boolean
    }
    ["heart"]: {
        count: number
        reacted: boolean
    }
    ["star"]: {
        count: number
        reacted: boolean
    }
    ["rocket"]: {
        count: number
        reacted: boolean
    }
}

export const emojiList = Object.values(Emoji)

export const getReactionCountsByPost = async (post: string) => {
    const xata = getXataClient()

    const aggregateConfig = emojiList.reduce((acc: any, emoji) => {
        acc[emoji] = {
            count: {
                filter: {
                    emoji,
                    post,
                },
            },
        }
        return acc
    }, {})

    const {aggs} = await xata.db.reactions.aggregate(aggregateConfig)
    return aggs
}

export const getReactionDetailsByPost = async (
    post: string,
    userId?: string,
): Promise<ReactionDetails> => {
    const xata = getXataClient()
    const reactionCounts = await getReactionCountsByPost(post)
    const reactionsByUser = await xata.db.reactions
        .filter({"user.id": userId || "", post})
        .getMany()

    const reactionDetails = emojiList.reduce((acc: any, emoji: string) => {
        acc[emoji] = {
            count: reactionCounts[emoji],
            reacted: reactionsByUser.some(reaction => reaction.emoji === emoji),
        }
        return acc
    }, {})
    return reactionDetails
}
