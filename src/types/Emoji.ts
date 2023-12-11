export enum Emoji {
    thumbsup = "thumbsup",
    star = "star",
    heart = "heart",
    rocket = "rocket",
}

export interface ReactionDetail {
    count: number
    reacted: boolean
}

export interface ReactionsDetails {
    [Emoji.thumbsup]: ReactionDetail
    [Emoji.heart]: ReactionDetail
    [Emoji.rocket]: ReactionDetail
    [Emoji.star]: ReactionDetail
}

export const emojiList = Object.values(Emoji)
