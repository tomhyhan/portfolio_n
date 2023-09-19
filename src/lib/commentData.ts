import { Comment, DenamoComment } from '@/lib/Type';
import { client } from './dynamodb';
import {
  PutItemCommand,
  QueryCommand,
  UpdateItemCommand,
} from '@aws-sdk/client-dynamodb';
import { config } from './config';

//

export async function postComments(comment: Comment) {
  const params = {
    // also add user info.. email, image, name
    TableName: config.COMMENT_TABLENAME,
    Item: {
      pk: { S: comment.id },
      comment: { S: comment.comment },
      authorid: { S: comment.authorId },
      GSI1PK: { S: comment.postId },
      parentid: { S: comment.parentId },
      userEmail: { S: comment.userEmail },
      userImage: { S: comment.userImage },
      GSI1SK: { S: comment.date },
      deleted: { BOOL: comment.deleted },
    },
  };
  const command = new PutItemCommand(params);
  try {
    await client.send(command);
    return params.Item;
  } catch (err) {
    console.error(err);
    throw new Error('Error Posting Comment');
  }
}

export async function getComments(postid: string) {
  try {
    const params = {
      TableName: config.COMMENT_TABLENAME,
      IndexName: 'GSI1',
      KeyConditionExpression: 'GSI1PK = :pk',
      ExpressionAttributeValues: {
        ':pk': { S: 'POST#' + postid },
      },
    };

    const command = new QueryCommand(params);
    const response = await client.send(command);

    return response.Items;
  } catch (error) {
    console.error('Error fetching comments by postId:', error);
    return [];
  }
}

export async function putComments(commentId: string, comment: string) {
    const params = {
        TableName: config.COMMENT_TABLENAME,
        Key: {
          pk: { S: commentId },
        },
        UpdateExpression: 'SET #comment = :comment',
        ExpressionAttributeNames: {
          '#comment': 'comment',
        },
        ExpressionAttributeValues: {
          ':comment': { S: comment },
        },
      };

    const command = new UpdateItemCommand(params);
    try {
        await client.send(command);
    } catch (err) {
      console.error(err);
      throw new Error('Error Posting Comment');
    }
}

export async function deleteComment(id: string) {
  const params = {
    TableName: config.COMMENT_TABLENAME,
    Key: {
      pk: { S: id },
    },
    UpdateExpression: 'SET #deleted = :deleted',
    ExpressionAttributeNames: {
      '#deleted': 'deleted',
    },
    ExpressionAttributeValues: {
      ':deleted': { BOOL: true },
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
