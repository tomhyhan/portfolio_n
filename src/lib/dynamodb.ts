import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export const client = new DynamoDBClient({
  region: process.env.AWS_REGION_NEXT,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_ID_NEXT!,
    secretAccessKey: process.env.AWS_SECRET_KEY_NEXT!,
  },
});
