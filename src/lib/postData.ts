import { UpdateItemCommand, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { client } from './dynamodb';

export async function updateView(id: string) {
  try {
    const new_view = await client.send(
      new UpdateItemCommand({
        TableName: process.env.TABLENAME!,
        Key: { id: { S: id } },
        UpdateExpression: 'ADD #views :increment',
        ExpressionAttributeNames: {
          '#views': 'views',
        },
        ExpressionAttributeValues: {
          ':increment': { N: '1' },
        },
        ReturnValues: 'ALL_NEW',
      })
    );
    return new_view.Attributes;
  } catch (err) {
    console.error(err);
    throw new Error('Error updating views');
  }
}

export async function getPostView(id: string) {
  console.log(id, process.env.TABLENAME);
  try {
    const response = await client.send(
      new GetItemCommand({
        TableName: process.env.TABLENAME!,
        Key: { id: { S: id } },
      })
    );
    if (!response.Item) {
      throw new Error('this post does not exist');
    }
    return response.Item.views.N;
  } catch (err) {
    console.error(err);
    throw new Error(`Error getting a view for post: ${id}`);
  }
}
