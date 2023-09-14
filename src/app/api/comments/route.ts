import { Comment, CommentList } from '@/lib/Type';
import { deleteComment, getComments, postComments } from '@/lib/commentData';
import { NextRequest, NextResponse } from 'next/server';
import { ulid } from 'ulid';
import { generateCommentBlocks } from './../../../lib/comment/utils';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authoption';

export async function GET(request: NextRequest) {
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
  const res = await request.json();
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json('Not Authenticated', { status: 401 });
  }

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
    deleted: false,
  };
  try {
    const commentData = await postComments(comment);
    return NextResponse.json(commentData, { status: 200 });
  } catch {
    return NextResponse.json('Error posting comment', { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const commentId = searchParams.get('commentId');
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json('Not Authenticated', { status: 401 });
  }

  if (!commentId) {
    return NextResponse.json('Error deleting comment', { status: 404 });
  }
  console.log('COMMENT#' + commentId);
  try {
    deleteComment('COMMENT#' + commentId);
    return NextResponse.json('Not Implemented', { status: 200 });
  } catch {
    console.error('Error deleting comment');
    return NextResponse.json('Error deleting comment', { status: 500 });
  }
}
