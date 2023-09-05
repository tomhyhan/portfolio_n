import { Comment, CommentList } from "@/lib/Type";
import { NextRequest } from "next/server";

const comments: Comment[] = [
    {id:"1", comment: "comment aaaa", authorid: "1", postid: "1", parentid:"0"},
    {id:"2", comment: "comment bbbb", authorid: "2", postid: "1", parentid:"0"},
    {id:"3",comment: "comment cccc", authorid: "3", postid: "1", parentid:"0"},
    {id:"4",comment: "comment dddd", authorid: "4", postid: "1", parentid:"1"},
    {id:"5",comment: "comment eeee", authorid: "5", postid: "1", parentid:"4"},
    {id:"6",comment: "comment ffff", authorid: "6", postid: "1", parentid:"1"},
    {id:"7",comment: "comment gggg", authorid: "7", postid: "1", parentid:"2"},
]



export async function GET(request: NextRequest) {

    //  get comments from database
    // build comment block
    generateCommentBlocks(comments);
    const x = {}
}


function generateCommentBlocks(comments: Comment[]) {
    let commentList: CommentList = {}
    for (const comment of comments) {
        if (comment.parentid in commentList) {
            commentList[comment.parentid] = []
        }
        commentList[comment.parentid].push(comment) 
    }
}