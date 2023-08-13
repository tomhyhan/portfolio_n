import { NextRequest, NextResponse } from 'next/server'
import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
import { create_lambda_client } from '@/lib/lambda';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const response = searchParams.get('commands')
    if (response == null) {
        return NextResponse.json({ error: 'invalid Command' });
    }
    const commands = JSON.parse(response).commands;

    try {
        const lambdaClient = create_lambda_client();
        const functionName = process.env.AWS_LAMBDA_FUNCTION;

        const invokeParams = {
          FunctionName: functionName || 'test', 
          InvocationType: 'RequestResponse', 
          Payload: JSON.stringify({ command:commands }),
        };
    
        const invokeCommand = new InvokeCommand(invokeParams);
        const response = await lambdaClient.send(invokeCommand);
    
        if (response.FunctionError) {
          console.error('Lambda function error:', response.FunctionError);
          return NextResponse.json({ error: 'Lambda function error' });
        } else {
          const payload = JSON.parse(new TextDecoder().decode(response.Payload));
          return NextResponse.json(payload.msg);
        }
      } catch (error) {
        console.error('Error invoking Lambda function:', error);
        return NextResponse.json({ error: 'Internal server error' });
      }
}