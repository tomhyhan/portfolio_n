import { CommentBody, CommentWithReplies } from '@/lib/Type'
import React from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';
import { Disclosure } from '@headlessui/react'
import CommentForm from './comment-form';

export default function Comment({comments,slug,postComment}: {
    comments: CommentWithReplies[],
    slug: string,
    postComment: (body: CommentBody) => any,
}) {
    // <div>{c.comment.comment.S}</div>

  return (
    <>
        {comments.map(commentBlock => (
            <article key={uuidv4()} className="text-base bg-white  border-l-2 border-l-slate-200 ml-5 pl-2 mb-5">
            <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                        <Image width={24} height={24}
                            className="mr-2 w-6 h-6 rounded-full"
                            src={commentBlock.comment.userImage.S}
                            alt="user Image" />
                            {commentBlock.comment.userEmail.S}
                    </p>
                    <p className="text-sm text-gray-600 ">
                        <time dateTime={commentBlock.comment.date.S}
                        title={commentBlock.comment.date.S}>{commentBlock.comment.date.S}</time>
                    </p>
                </div>
                
            </footer>
            <p className="text-gray-500 mx-5">
                {commentBlock.comment.comment.S}
            </p>
            <Disclosure>
                <div className="flex items-center mt-4 space-x-4 mx-5">
                    <Disclosure.Button className="flex items-center text-sm text-gray-500 hover:underline font-medium">
                    Reply
                    </Disclosure.Button>
                </div>
                
                <Disclosure.Panel className=" ml-5">
                    <CommentForm slug={slug} postComment={postComment}
                    parentId={commentBlock.comment.pk.S}/>
                </Disclosure.Panel>
            </Disclosure>
           
        </article>
        ))}
    </>
    )
}