export type Post = {
    id: string,
    view: number
}

export type Comment = {
    id: string,
    comment: string,
    authorid: string,
    postid: string,
    parentid: string
}

export type CommentList = {
    [key: string]: Comment[];
}

export type CommentWithReplies = {
    comment: Comment;
    replies: CommentWithReplies[];
}