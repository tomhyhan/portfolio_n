import { Comment } from "@/lib/Type";
import { client } from "./dynamodb";
import { PutItemCommand, QueryCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

export const comments: any[] = [
    {id:"1", comment: "comment aaaa", authorid: "1", postid: "1", parentid:"0"},
    {id:"2", comment: "comment bbbb", authorid: "2", postid: "1", parentid:"0"},
    {id:"3",comment: "comment cccc", authorid: "3", postid: "1", parentid:"0"},
    {id:"4",comment: "comment dddd", authorid: "4", postid: "1", parentid:"1"},
    {id:"5",comment: "comment eeee", authorid: "5", postid: "1", parentid:"4"},
    {id:"6",comment: "comment ffff", authorid: "6", postid: "1", parentid:"1"},
    {id:"7",comment: "comment gggg", authorid: "7", postid: "1", parentid:"2"},
]
// 

export async function postComments(comment: Comment) {
    const params = {
        // also add user info.. email, image, name
        TableName: "comment",
        Item: {
            pk: { S: comment.id },
            comment: { S: comment.comment },
            authorid: { S: comment.authorId },
            GSI1PK: { S: comment.postId },
            parentid: { S: comment.parentId },
            userEmail: { S: comment.userEmail },
            userImage: { S: comment.userImage },
            date: { S: comment.date }
        }
    }
    const command = new PutItemCommand(params);
    try {
        await client.send(command);
    }catch (err) {
        console.error(err);
        throw new Error('Error Posting Comment');
    }
}

export async function getComments(postid: string) {
    try {
        const params = {
          TableName: "comment",
          IndexName: "GSI1",
          KeyConditionExpression: "GSI1PK = :pk",
          ExpressionAttributeValues: {
            ":pk": { S: "POST#" + postid },
          },
        };
    
        const command = new QueryCommand(params);
        const response = await client.send(command);
    
        return response.Items;
      } catch (error) {
        console.error("Error fetching comments by postId:", error);
        return [];
      }
}

async function updateComment(id: string) {
    const params = {
        TableName: "comment",
        Key: {
            id: { S: id },
        },
        UpdateExpression: "SET #comment = :comment",
        ExpressionAttributeNames: {
            "#comment": "comment",
        },
        ExpressionAttributeValues: {
            ":comment": { S: "Comment Deleted..." },
        },
    };
    
    const command = new UpdateItemCommand(params);
    try {
        await client.send(command);
    } catch (err) {
        console.error(err);
        throw new Error('Error updating views');
    }
}