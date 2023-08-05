import {
  PutItemCommand,
  DeleteItemCommand,
  ScanCommand,
  DynamoDBClient,
} from '@aws-sdk/client-dynamodb';
import 'dotenv/config';

const client = new DynamoDBClient({
  region: process.env.AWS_REGION_NEXT,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_ID_NEXT,
    secretAccessKey: process.env.AWS_SECRET_KEY_NEXT,
  },
});
const TABLENAME = process.env.TABLENAME;

export async function putPost(id) {
  try {
    await client.send(
      new PutItemCommand({
        TableName: TABLENAME,
        Item: {
          id: { S: id },
          views: { N: '0' },
        },
        ConditionExpression: 'attribute_not_exists(id)',
      })
    );
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === 'ConditionalCheckFailedException') {
        console.log(`Post with the same id: ${id} already exists. skipping...`);
      } else {
        console.error('Error inserting Post:', err);
        throw new Error(err.message);
      }
    } else {
      throw new Error('Unexpect Error occured!');
    }
  }
}

export async function scanPost() {
  try {
    const data = await client.send(
      new ScanCommand({
        TableName: TABLENAME,
      })
    );
    return data.Items;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteAllPost() {
  const items = await scanPost();
  console.log(items);
  for (const item of items) {
    const deleteParams = {
      TableName: TABLENAME,
      Key: {
        id: {
          S: item.id.S,
        },
      },
    };
    const deleteCommand = new DeleteItemCommand(deleteParams);
    try {
      await client.send(deleteCommand);
    } catch (err) {
      console.error(err);
    }
  }
}
