import GoogleProvider from "next-auth/providers/google"
import { config } from "./config"

import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import { DynamoDBAdapter } from "@auth/dynamodb-adapter"
import type { Adapter } from "next-auth/adapters";

const dynamoConfig: DynamoDBClientConfig = {
    credentials: {
      accessKeyId: config.AWS_ACCESS_ID_NEXT,
      secretAccessKey: config.AWS_SECRET_KEY_NEXT,
    },
    region: config.AWS_REGION_NEXT,
};
  
const client = DynamoDBDocument.from(new DynamoDB(dynamoConfig), {
marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
},
})

export const authOptions = {
    providers: [
        GoogleProvider({
        clientId: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_SECRET,
      }),
    ],
    adapter: DynamoDBAdapter(
        client
      ) as Adapter,
  }
