import { NextRequest, NextResponse } from 'next/server'
import { InvokeCommand } from '@aws-sdk/client-lambda';
import { create_lambda_client } from '@/lib/lambda';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const response = searchParams.get('commands')
    if (response == null) {
        return NextResponse.json({ message: 'invalid Command' }, { status: 404 });
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
          return NextResponse.json({ message: 'Lambda function error' }, { status: 500 });
        } else {
          const payload = JSON.parse(new TextDecoder().decode(response.Payload));
          return NextResponse.json(payload.msg);
        }
      } catch (error) {
        console.error('Error invoking Lambda function:', error);
        return NextResponse.json({ message: 'Internal server error' },{status: 500});
      }
}