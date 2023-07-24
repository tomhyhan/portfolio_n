import { allPosts } from '../.contentlayer/generated/index.mjs';
// import { putPost } from './src/lib/postData.js';
import {
  PutItemCommand,
  GetItemCommand,
  UpdateItemCommand,
  DeleteItemCommand,
  ScanCommand,
  DynamoDBClient,
} from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({
  region: 'us-east-2',
  credentials: {
    accessKeyId: '',
    secretAccessKey: '',
  },
});
const TABLENAME = 'posts';

export async function putPost(id) {
  try {
    await client.send(
      new PutItemCommand({
        TableName: TABLENAME,
        Item: {
          id: { N: '1' },
          views: { N: '0' },
        },
        ConditionExpression: 'attribute_not_exists(id)',
      })
    );
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === 'ConditionalCheckFailedException') {
        console.log('Post with the same id already exists.');
      } else {
        console.error('Error inserting Post:', err);
        throw new Error(err.message);
      }
    } else {
      throw new Error('Unexpect Error occured!');
    }
  }
}
function upload() {
  // console.log(allPosts);
  allPosts.map(async (post) => {
    await putPost(post.slug);
  });
}

upload();
