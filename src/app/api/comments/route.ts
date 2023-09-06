import { Comment, CommentList } from "@/lib/Type";
import { comments } from "@/lib/commentData";
import { generateCommentBlocks } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    // get comments from database
    // build comment block
    
    
    try {
        const commentList = generateCommentBlocks(comments);
    } catch (err) {
        return NextResponse.json("Error getting comments", { status: 500 });
    }
    
    // const x = {}
}




