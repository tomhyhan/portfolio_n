import { CommentController, DenamoComment } from '@/lib/Type'
import Image from 'next/image'
import React from 'react'
import CommentEdit from './comment-edit'

export default function CommentDetail({comment,commentController}:{
    comment: DenamoComment
    commentController: CommentController
}) {
    const date = comment.GSI1SK.S.split("T")[0]
  return (
    <>
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                    <Image width={24} height={24}
                        className="mr-2 w-6 h-6 rounded-full"
                        src={comment.userImage.S}
                        alt="user Image" />
                        {comment.userEmail.S}
                </p>
                <p className="text-sm text-gray-600 ">
                    <time dateTime={date}
                    title={date}>{date}</time>
                </p>
            </div>
        <CommentEdit comment={comment} commentController={commentController}/>
        </footer>
        {commentController.isEditing === comment.pk.S 
        ? <div className="py-2 px-4 mb-4 mx-5 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <textarea ref={commentController.editCommentRef}className='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none outline-none' rows={3} defaultValue={comment.comment.S} required />
        </div>
        : <p className="text-gray-500 mx-5">
            {comment.comment.S}
          </p>
        }
        
    </>
  )
}
