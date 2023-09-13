import { CommentList, CommentWithReplies, DenamoComment } from '../Type';

export function generateCommentBlocks(comments: DenamoComment[]) {
  const commentList: CommentList = {};
  for (const comment of comments) {
    if (!(comment.parentid.S in commentList)) {
      commentList[comment.parentid.S] = [];
    }
    commentList[comment.parentid.S].push(comment);
  }
  // const commentBlock = createComment(commentList, 'COMMENT#root');
  return commentList;
}

function createComment(commentList: CommentList, parentid: string) {
  const comments: CommentWithReplies[] = [];
  if (!(parentid in commentList)) {
    return comments;
  }
  for (const comment of commentList[parentid]) {
    comments.push({
      comment,
      replies: createComment(commentList, comment.pk.S),
    });
  }
  return comments;
}

export function generateData(current: any, comment: DenamoComment): any {
  for (const child of current) {
    if (child.comment.pk.S === comment.parentid.S) {
      current.replies = [...current.replies, { comment, replies: [] }];
      return true;
    }
    const newData = generateData(child.replies, comment);
    if (newData) {
      return newData;
    }
  }

  return false;
}
