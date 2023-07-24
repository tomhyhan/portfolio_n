import { UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "./dynamodb";

export async function updateView(id :string) {
    try{
     await client.send(new UpdateItemCommand({
        TableName: process.env.TABLENAME!,
        Key: { id: {S: id} },
        UpdateExpression: "ADD views :increment",
        ExpressionAttributeValues: {
            ":increment": { N: "1" }, 
          },
          ReturnValues: "ALL_NEW", 
    }))
    } catch (err) {
        console.error(err);
        throw new Error("Error updating views");
    }    
}