import { Comment, DenamoComment } from '@/lib/Type';
import { deleteComment, getComments, postComments, putComments } from '@/lib/commentData';
import { NextRequest, NextResponse } from 'next/server';
import { ulid } from 'ulid';
import { generateCommentBlocks } from './../../../lib/comment/utils';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authoption';
 
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');

  if (!postId) {
    return NextResponse.json({message: 'Error getting post id comments'}, { status: 404 });
  }

  try {
    const comments = await getComments(postId);
    const commentList = generateCommentBlocks(comments as any);
    return NextResponse.json(commentList, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({message: 'Error getting comments from server'}, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const res = await request.json();
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({message:'Not Authenticated'}, { status: 401 });
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
    const commentData : DenamoComment = await postComments(comment);
    return NextResponse.json(commentData, { status: 200 });
  } catch {
    return NextResponse.json({message: "Error posting comment"}, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
    const res = await request.json();
    const session = await getServerSession(authOptions);
    const {commentId, comment} = res;
    if (!session) {
      return NextResponse.json({message:'Not Authenticated'}, { status: 401 });
    }
    
    try {
        await putComments(commentId, comment);
        return NextResponse.json({ status: 200 });
      } catch {
        return NextResponse.json({message:'Error updating comment'}, { status: 500 });
      }
}


export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const commentId = searchParams.get('commentId');
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({message:'Not Authenticated'}, { status: 401 });
  }

  if (!commentId) {
    return NextResponse.json({message:'Error deleting comment'}, { status: 404 });
  }

  try {
    deleteComment('COMMENT#' + commentId);
    return NextResponse.json({ status: 200 });
  } catch {
    return NextResponse.json({message:'Error deleting comment'}, { status: 500 });
  }
}
