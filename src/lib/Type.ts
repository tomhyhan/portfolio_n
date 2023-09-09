export type Post = {
    id: string,
    view: number
}

export type Comment = {
    id: string,
    comment: string,
    authorId: string,
    postId: string,
    parentId: string,
    userEmail: string,
    userImage:string,
    date: string
}

export type CommentList = {
    [key: string]: DenamoComment[];
}

export type CommentWithReplies = {
    comment: DenamoComment;
    replies: CommentWithReplies[];
}

export type CommentBody = {
    comment: string;
    email: string ;
    image: string;
    post: string;
    parentId: string | null;
}

export type DenamoComment = {
    GSI1PK: { S: string },
    userImage: {
      S: string
    },
    userEmail: { S: string },
    parentid: { S: string },
    authorid: { S: string },
    comment: { S: string },
    pk: { S: string },
    date: { S: string }
  }