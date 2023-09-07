import { Comment } from "@/lib/Type";
import { client } from "./dynamodb";
import { PutItemCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

export const comments: Comment[] = [
    {id:"1", comment: "comment aaaa", authorid: "1", postid: "1", parentid:"0"},
    {id:"2", comment: "comment bbbb", authorid: "2", postid: "1", parentid:"0"},
    {id:"3",comment: "comment cccc", authorid: "3", postid: "1", parentid:"0"},
    {id:"4",comment: "comment dddd", authorid: "4", postid: "1", parentid:"1"},
    {id:"5",comment: "comment eeee", authorid: "5", postid: "1", parentid:"4"},
    {id:"6",comment: "comment ffff", authorid: "6", postid: "1", parentid:"1"},
    {id:"7",comment: "comment gggg", authorid: "7", postid: "1", parentid:"2"},
]
// 

async function postComments(comment: Comment) {
    const params = {
        // also add user info.. email, image, name
        TableName: "comment",
        Item: {
            id: { S: comment.id },
            comment: { S: comment.comment },
            authorid: { S: comment.authorid },
            postid: { S: comment.postid },
            parentid: { S: comment.parentid },
        }
    }
    
    const command = new PutItemCommand(params);
    try {
        await client.send(command);
    }catch (err) {
        console.error(err);
        throw new Error('Error updating views');
    }
}