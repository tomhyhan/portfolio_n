import { CommentList, DenamoComment } from '../Type';

export function generateCommentBlocks(comments: DenamoComment[]) {
  const commentList: CommentList = {};
  for (const comment of comments) {
    if (!(comment.parentid.S in commentList)) {
      commentList[comment.parentid.S] = [];
    }
    commentList[comment.parentid.S].push(comment);
  }
  return commentList;
}
