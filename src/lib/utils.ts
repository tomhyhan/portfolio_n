import { comments } from './commentData';
import { projects } from './projectType';
import { CommentList, Comment, CommentWithReplies } from '@/lib/Type';

export function getCount(filter: string | null) {
  const my_projects = projects || null;
  const category = filter || 'All';
  if (my_projects == null) return 0
  if (category == 'All') return my_projects.length;
  return my_projects.reduce((acc, project) => {
    if (project.category == category) {
      return acc + 1;
    }
    return acc + 0;
  }, 0);
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function generateCommentBlocks(comments : Comment[]) {
    const commentList: CommentList = {}
    for (const comment of comments) {
        if (!(comment.parentid in commentList)) {
            commentList[comment.parentid] = []
        }
        commentList[comment.parentid].push(comment) 
    }
    const commentBlock = createComment(commentList, "0")
    return commentBlock
}

function createComment(commentList: CommentList, parentid: string){
    const comments: CommentWithReplies[] = []
    if (!(parentid in commentList)) {
        return comments
    }
    for (const comment of commentList[parentid]) {
        comments.push({comment, replies: createComment(commentList, comment.id)})
    }
    return comments
}

