import { LambdaClient } from '@aws-sdk/client-lambda';

export function create_lambda_client () {
    const region = process.env.AWS_LAMBDA_REGION ?? 'us-east-1';
    const accessKeyId = process.env.AWS_LAMBDA_KEY;
    const secretAccessKey = process.env.AWS_LAMBDA_SECRET;
    
    if (!accessKeyId || !secretAccessKey) {
        throw new Error('AWS credentials are missing');
      }
  
    const lambdaClient = new LambdaClient({
      region, 
      credentials: {
        accessKeyId,
        secretAccessKey,
      }
    });
    return lambdaClient;
}