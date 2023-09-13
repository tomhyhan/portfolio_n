import { Comment, CommentList } from '@/lib/Type';
import { getComments, postComments } from '@/lib/commentData';
import { NextRequest, NextResponse } from 'next/server';
import { ulid } from 'ulid';
import { generateCommentBlocks } from './../../../lib/comment/utils';

export async function GET(request: NextRequest) {
  console.log('getting comments');
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');

  if (!postId) {
    return NextResponse.json('Error getting comments', { status: 404 });
  }

  try {
    const comments = await getComments(postId);
    const commentList = generateCommentBlocks(comments as any);
    return NextResponse.json(commentList, { status: 200 });
  } catch (err) {
    return NextResponse.json('Error getting comments', { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  // get comments params from request
  const res = await request.json();
  ulid;
  let parentId = res.parentId ? res.parentId : 'COMMENT#root';
  let comment: Comment = {
    id: 'COMMENT#' + ulid(),
    comment: res.comment,
    authorId: 'USER#' + res.email,
    postId: 'POST#' + res.post,
    parentId,
    userEmail: res.email,
    userImage: res.image,
    date: new Date().toISOString(),
  };
  try {
    const commentData = await postComments(comment);
    return NextResponse.json(commentData, { status: 200 });
  } catch {
    return NextResponse.json('Error posting comment', { status: 500 });
  }
}
